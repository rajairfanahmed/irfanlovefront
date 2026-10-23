import { NextRequest } from 'next/server';
import { jobManager, JobSnapshot } from '@/server/jobManager';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ jobId: string }> }
) {
  const { jobId } = await params;
  const initialJob = jobManager.getJob(jobId);

  if (!initialJob) {
    return new Response(JSON.stringify({ error: 'JOB_NOT_FOUND', message: 'Job not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      const sendEvent = (job: JobSnapshot) => {
        const payload: Record<string, unknown> = {
          state: job.state,
          percent: job.percent,
          stage: job.stage,
          pagesDone: job.pagesDone,
          pagesTotal: job.pagesTotal,
          imagesDone: job.imagesDone,
          failedPages: job.failedPages,
        };

        if (job.state === 'done' && job.download) {
          payload.download = job.download;
        }

        if (job.state === 'failed' && job.error) {
          payload.error = job.error;
        }

        try {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(payload)}\n\n`));
        } catch {
          // stream might be closed by client
        }

        if (job.state === 'done' || job.state === 'failed' || job.state === 'cancelled') {
          setTimeout(() => {
            try {
              controller.close();
            } catch {
              // ignore
            }
          }, 500);
        }
      };

      // Subscribe to live job updates
      const unsubscribe = jobManager.subscribe(jobId, sendEvent);

      req.signal.addEventListener('abort', () => {
        unsubscribe();
      });
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
    },
  });
}
