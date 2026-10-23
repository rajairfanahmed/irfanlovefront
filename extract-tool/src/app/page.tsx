import { DesignCaptureCard } from '../components/workstation/DesignCaptureCard';

export default function HomePage() {
  return (
    <div className="w-full max-w-[720px] flex flex-col items-center justify-center space-y-6 select-none my-auto">
      {/* Header above card matching Section 2 */}
      <header className="text-center space-y-1.5 px-4">
        <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#111827]">
          Website Design Capture
        </h1>
        <p className="font-sans text-xs sm:text-sm text-gray-500 max-w-md mx-auto">
          Enter a URL and download every page as section by section images.
        </p>
      </header>

      {/* Main Single Card Workstation */}
      <main className="w-full flex justify-center">
        <DesignCaptureCard />
      </main>
    </div>
  );
}
