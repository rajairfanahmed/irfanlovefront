import { NextRequest } from 'next/server';
import { jobManager } from '@/server/jobManager';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url, viewports = ['desktop', 'tablet', 'mobile'], options = {} } = body;

    const result = await jobManager.createJob({
      url,
      viewports,
      options: {
        animatedSite: options.animatedSite !== false,
        hideOverlays: options.hideOverlays !== false,
        flattenSticky: options.flattenSticky !== false,
      },
    });

    if ('error' in result) {
      return new Response(
        JSON.stringify({
          error: result.error,
          message: result.message,
        }),
        {
          status: result.status,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(JSON.stringify({ jobId: result.jobId }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return new Response(
      JSON.stringify({
        error: 'INVALID_URL',
        message: message || 'Enter a full website address, for example https://example.com',
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
