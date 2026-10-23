import { NextRequest } from 'next/server';
import fs from 'fs';
import { jobManager } from '@/server/jobManager';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ jobId: string }> }
) {
  const { jobId } = await params;
  const job = jobManager.getJob(jobId);

  if (!job) {
    return new Response(JSON.stringify({ error: 'JOB_NOT_FOUND', message: 'Job not found or expired' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const zipPath = jobManager.getZipFilePath(jobId);
  if (!zipPath || !fs.existsSync(zipPath)) {
    return new Response(JSON.stringify({ error: 'FILE_NOT_FOUND', message: 'ZIP archive not ready or expired' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const fileStat = fs.statSync(zipPath);
  const fileStream = fs.createReadStream(zipPath);

  // Convert Node ReadStream to Web ReadableStream
  const webStream = new ReadableStream({
    start(controller) {
      fileStream.on('data', (chunk) => controller.enqueue(chunk));
      fileStream.on('end', () => controller.close());
      fileStream.on('error', (err) => controller.error(err));
    },
    cancel() {
      fileStream.destroy();
    },
  });

  return new Response(webStream, {
    headers: {
      'Content-Type': 'application/zip',
      'Content-Disposition': `attachment; filename="${job.domain}.zip"`,
      'Content-Length': fileStat.size.toString(),
      'Cache-Control': 'no-cache',
    },
  });
}
