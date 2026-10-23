import { NextRequest } from 'next/server';
import { jobManager } from '@/server/jobManager';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ jobId: string }> }
) {
  const { jobId } = await params;
  const job = jobManager.getJob(jobId);

  if (!job) {
    return new Response(JSON.stringify({ error: 'JOB_NOT_FOUND', message: 'Job not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify(job), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ jobId: string }> }
) {
  const { jobId } = await params;
  const success = jobManager.cancelJob(jobId);

  return new Response(JSON.stringify({ cancelled: success }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
