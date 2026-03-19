"use client";

import Link from "next/link";
import { ExperienceEditorialTimeline } from "@/components/demos/experience/experience-editorial-timeline";

export default function ExperienceEditorialDemoPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ee]">
      <div className="sticky top-0 z-50 border-b border-slate-300/80 bg-[#f7f4ee]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-slate-400">
              Experience Demo
            </p>
            <h1 className="mt-1 text-lg font-semibold text-slate-950">
              Option 1: Editorial Timeline
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/experience-demo"
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-white"
            >
              View Option 2
            </Link>
            <Link
              href="/#experience"
              className="rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Back to Experience
            </Link>
          </div>
        </div>
      </div>

      <ExperienceEditorialTimeline />
    </main>
  );
}
