import dns from 'dns/promises';
import net from 'net';

export interface UrlValidationResult {
  valid: boolean;
  error?: 'INVALID_URL' | 'BLOCKED_TARGET';
  message?: string;
  normalizedUrl?: string;
  domain?: string;
}

// Private IPv4 ranges and link-local ranges
const BLOCKED_IP_PATTERNS = [
  /^127\./,                         // 127.0.0.0/8 Loopback
  /^10\./,                          // 10.0.0.0/8 Private
  /^192\.168\./,                    // 192.168.0.0/16 Private
  /^172\.(1[6-9]|2[0-9]|3[0-1])\./, // 172.16.0.0/12 Private
  /^169\.254\./,                    // 169.254.0.0/16 Link-Local / Cloud metadata (169.254.169.254)
  /^0\./,                           // 0.0.0.0/8 Current network
  /^224\./,                         // Multicast
  /^240\./,                         // Reserved
];

function isBlockedIp(ip: string): boolean {
  if (ip === '::1' || ip === '0:0:0:0:0:0:0:1') return true;
  if (ip.startsWith('fe80:') || ip.startsWith('fe90:') || ip.startsWith('fea0:') || ip.startsWith('feb0:')) {
    return true; // IPv6 Link-Local
  }
  if (ip.startsWith('fc') || ip.startsWith('fd')) {
    return true; // IPv6 Unique Local
  }

  // IPv4 or IPv4-mapped IPv6
  const cleanIp = ip.replace(/^::ffff:/, '');
  if (net.isIPv4(cleanIp)) {
    return BLOCKED_IP_PATTERNS.some((pattern) => pattern.test(cleanIp));
  }

  return false;
}

export async function validateTargetUrl(rawUrl: string): Promise<UrlValidationResult> {
  if (!rawUrl || typeof rawUrl !== 'string' || !rawUrl.trim()) {
    return {
      valid: false,
      error: 'INVALID_URL',
      message: 'Enter a full website address, for example https://example.com',
    };
  }

  let trimmed = rawUrl.trim();

  // If no scheme, add https:// silently as specified in frontend spec Step 2
  if (!/^https?:\/\//i.test(trimmed)) {
    trimmed = 'https://' + trimmed;
  }

  let parsed: URL;
  try {
    parsed = new URL(trimmed);
  } catch {
    return {
      valid: false,
      error: 'INVALID_URL',
      message: 'Enter a full website address, for example https://example.com',
    };
  }

  // Only http and https allowed
  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    return {
      valid: false,
      error: 'INVALID_URL',
      message: 'Enter a full website address, for example https://example.com',
    };
  }

  const hostname = parsed.hostname.toLowerCase();

  // Direct check for obvious loopback / private names
  if (
    hostname === 'localhost' ||
    hostname.endsWith('.localhost') ||
    hostname.endsWith('.local') ||
    hostname.endsWith('.internal') ||
    hostname === '127.0.0.1' ||
    hostname === '::1' ||
    hostname === '0.0.0.0'
  ) {
    return {
      valid: false,
      error: 'BLOCKED_TARGET',
      message: "This address can't be captured. Use a public website.",
    };
  }

  // Resolve hostname and check IP addresses
  try {
    const addresses = await dns.lookup(hostname, { all: true });
    if (!addresses || addresses.length === 0) {
      return {
        valid: false,
        error: 'INVALID_URL',
        message: "We couldn't open this website. Check the address and try again.",
      };
    }

    for (const record of addresses) {
      if (isBlockedIp(record.address)) {
        return {
          valid: false,
          error: 'BLOCKED_TARGET',
          message: "This address can't be captured. Use a public website.",
        };
      }
    }
  } catch {
    // If DNS resolution fails outright, mark as unreachable / invalid
    return {
      valid: false,
      error: 'INVALID_URL',
      message: "We couldn't open this website. Check the address and try again.",
    };
  }

  const cleanDomain = hostname.replace(/^www\./, '');

  return {
    valid: true,
    normalizedUrl: parsed.toString(),
    domain: cleanDomain,
  };
}
