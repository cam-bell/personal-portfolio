"use client";

import Link from "next/link";
import { ExperienceSplitNarrative } from "@/components/demos/experience/experience-split-narrative";

export default function ExperienceDemoPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <div className="sticky top-0 z-50 border-b border-slate-200/80 bg-stone-50/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-slate-400">
              Experience Demo
            </p>
            <h1 className="mt-1 text-lg font-semibold text-slate-950">
              Option 2: Split Narrative Cards
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/#experience"
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
            >
              Back to Experience
            </Link>
            <Link
              href="/"
              className="rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Home
            </Link>
          </div>
        </div>
      </div>

      <ExperienceSplitNarrative />
    </main>
  );
}
