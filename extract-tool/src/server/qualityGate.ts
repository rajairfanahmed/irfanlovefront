export interface ImageQualityResult {
  valid: boolean;
  rejected: boolean;
  flagged: boolean;
  reason?: string;
  isChallenge: boolean;
}

// Inspect image buffer for flat color, zero variance, and minimal size
export function inspectImageQuality(
  buffer: Buffer,
  width: number,
  height: number,
  isSpacer: boolean = false
): ImageQualityResult {
  // Check minimum dimensions
  if (width < 40 || height < 40) {
    return {
      valid: false,
      rejected: true,
      flagged: true,
      reason: `Dimension too small (${width}x${height} < 40px)`,
      isChallenge: false,
    };
  }

  // Check file size (a 1920x900 PNG that is only ~100 bytes is completely blank/corrupt)
  if (buffer.length < 200) {
    return {
      valid: false,
      rejected: true,
      flagged: true,
      reason: 'Image buffer suspiciously small (< 200 bytes)',
      isChallenge: false,
    };
  }

  // Sample PNG data chunks to detect single flat color
  // In a valid PNG, IDAT chunks contain compressed scanlines. If the total uncompressed-to-compressed
  // ratio for a large image results in an IDAT of minimal size (< 800 bytes for > 500x500), it is a flat solid color.
  if (!isSpacer && height > 120 && buffer.length < 900) {
    return {
      valid: false,
      rejected: true,
      flagged: true,
      reason: 'Single flat color detected on full section',
      isChallenge: false,
    };
  }

  return {
    valid: true,
    rejected: false,
    flagged: false,
    isChallenge: false,
  };
}
