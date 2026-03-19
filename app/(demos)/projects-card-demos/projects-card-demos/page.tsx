import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const demos = [
  {
    href: "/projects-card-demos/minimal",
    title: "Minimal",
    description:
      "Shortest archive card. Removes the outcomes block and focuses on title, role, summary, stack, and actions.",
  },
  {
    href: "/projects-card-demos/balanced",
    title: "Balanced",
    description:
      "Keeps one compact impact signal while preserving a cleaner, more uniform card rhythm.",
  },
  {
    href: "/projects-card-demos/signal-first",
    title: "Recruiter Signal",
    description:
      "Prioritizes one strong hiring signal before the tech stack to improve scanability for recruiters and hiring managers.",
  },
  {
    href: "/projects-card-demos/minimal-tight",
    title: "Minimal Tight",
    description:
      "Same minimal information model, but with tighter clamps and stricter section heights to reduce card length.",
  },
  {
    href: "/projects-card-demos/minimal-icons",
    title: "Minimal Icons",
    description:
      "Swaps full tech pills for a compact icon rail to cut vertical space and make the card feel lighter.",
  },
  {
    href: "/projects-card-demos/minimal-short-titles",
    title: "Short Titles",
    description:
      "Tests shorter display titles for the longest projects while keeping the rest of the minimal card structure intact.",
  },
];

export default function ProjectsCardDemosPage() {
  return (
    <main className="min-h-screen bg-slate-950 pb-16">
      <section className="relative overflow-hidden pt-16 sm:pt-20">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-aurora opacity-70 pointer-events-none" />
        <div className="absolute inset-0 noise-overlay opacity-60 pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.35em] text-slate-300">
              <Layers className="h-4 w-4" />
              Archive Card Demos
            </div>
            <h1 className="mt-6 font-serif text-4xl leading-[0.98] text-white sm:text-5xl lg:text-6xl">
              Test Card Variants Without Touching Live Archive
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              These routes let you compare different archive-card information
              models and action layouts in isolation before changing the working
              `/projects` page.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {demos.map((demo) => (
              <div
                key={demo.href}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-glass backdrop-blur-xl"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  Variant
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  {demo.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {demo.description}
                </p>
                <Button className="mt-6 w-full justify-center" asChild>
                  <Link href={demo.href}>
                    Open demo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
