import { NextRequest } from 'next/server';
import { runWebsiteExtraction } from '../../../server/extractorEngine';
import { ExtractionRequest } from '../../../types/extractor';



export async function POST(req: NextRequest) {
  try {
    const body: ExtractionRequest = await req.json();
    const {
      url,
      viewports = ['1440px'],
      animatedSite = true,
      hideOverlays = true,
      flattenStickyNav = true,
    } = body;

    if (!url || !url.trim()) {
      return new Response(JSON.stringify({ error: 'Target URL is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const encoder = new TextEncoder();

    // Create a streaming response
    const stream = new ReadableStream({
      async start(controller) {
        const sendEvent = (event: Record<string, unknown>) => {
          controller.enqueue(encoder.encode(JSON.stringify(event) + '\n'));
        };

        try {
          sendEvent({
            type: 'progress',
            percent: 15,
            statusText: `Starting extraction for ${url}...`,
          });

          const result = await runWebsiteExtraction({
            url,
            viewports,
            animatedSite,
            hideOverlays,
            flattenStickyNav,
            onProgress: (data) => {
              sendEvent({
                type: data.section ? 'section' : 'progress',
                percent: data.percent,
                statusText: data.statusText,
                section: data.section,
              });
            },
          });

          sendEvent({
            type: 'complete',
            percent: 100,
            statusText: 'Extraction completed successfully!',
            result: {
              domain: result.domain,
              totalSections: result.totalSections,
              totalSize: result.totalSize,
              pages: result.pages,
              zipBase64: result.zipBase64,
            },
          });

          controller.close();
        } catch (err: unknown) {
          const errorMessage = err instanceof Error ? err.message : String(err);
          console.error('Extraction error:', errorMessage);

          sendEvent({
            type: 'error',
            error: errorMessage,
            statusText: 'Extraction failed: ' + errorMessage,
          });

          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache, no-transform',
        Connection: 'keep-alive',
      },
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
