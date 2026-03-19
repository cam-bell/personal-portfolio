"use client";

import Link from "next/link";
import { ExperienceGlassStoryRail } from "@/components/demos/experience/experience-glass-story-rail";

export default function ExperienceGlassDemoPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-slate-500">
              Experience Demo
            </p>
            <h1 className="mt-1 text-lg font-semibold text-white">
              Option 3: Glass Story Rail
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/experience-editorial-demo"
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5"
            >
              View Option 1
            </Link>
            <Link
              href="/experience-demo"
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5"
            >
              View Option 2
            </Link>
            <Link
              href="/#experience"
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950 transition-opacity hover:opacity-90"
            >
              Back to Experience
            </Link>
          </div>
        </div>
      </div>

      <ExperienceGlassStoryRail />
    </main>
  );
}
