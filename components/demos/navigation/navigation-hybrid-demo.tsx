"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState, type MouseEvent } from "react";
import {
  ArrowUpRight,
  Briefcase,
  FolderKanban,
  GraduationCap,
  Home,
  Layers3,
  Mail,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavBar, type NavItem } from "@/components/ui/tubelight-navbar";
import { cn } from "@/lib/utils";

type BrandMode = "wordmark" | "svg" | "png" | "monogram";
type NavPattern = "single-header" | "header-plus-pill";

type DemoSection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  accent: string;
};

const NAV_ITEMS: NavItem[] = [
  { name: "Home", url: "/navigation-demo#home", icon: Home },
  { name: "Skills", url: "/navigation-demo#skills", icon: Sparkles },
  { name: "Projects", url: "/navigation-demo#projects", icon: Briefcase },
  {
    name: "Coursework",
    url: "/navigation-demo#additional-projects",
    icon: Layers3,
  },
  {
    name: "Experience",
    url: "/navigation-demo#experience",
    icon: FolderKanban,
  },
  {
    name: "Education",
    url: "/navigation-demo#education",
    icon: GraduationCap,
  },
  { name: "Contact", url: "/navigation-demo#contact", icon: Mail },
];

const SECTIONS: DemoSection[] = [
  {
    id: "home",
    eyebrow: "Decision",
    title: "Two navigation systems that solve the orientation problem differently.",
    description:
      "This route compares the two patterns that actually make sense: a single branded top navigation, and a branded header plus a homepage-only floating section pill.",
    accent: "from-cyan-400/20 via-sky-400/12 to-transparent",
  },
  {
    id: "skills",
    eyebrow: "Skills",
    title: "The active state tracks the section nearest a stable viewport anchor.",
    description:
      "That makes the movement feel deliberate instead of flickering between sections as soon as edges cross the viewport.",
    accent: "from-emerald-400/16 via-teal-400/10 to-transparent",
  },
  {
    id: "projects",
    eyebrow: "Projects",
    title: "Projects remains in homepage navigation. Archive projects remains a secondary route.",
    description:
      "That keeps the main information architecture tight while preserving a strong path into deeper case studies through a dedicated call to action.",
    accent: "from-violet-400/16 via-indigo-400/10 to-transparent",
  },
  {
    id: "additional-projects",
    eyebrow: "Coursework",
    title: "Secondary material stays accessible without crowding the primary path.",
    description:
      "The label is explicit, the spacing is calmer, and the navigation reads as intentional instead of overloaded.",
    accent: "from-amber-300/16 via-orange-400/8 to-transparent",
  },
  {
    id: "experience",
    eyebrow: "Experience",
    title: "Wordmark wins on recognition. Monogram wins only on editorial feel.",
    description:
      "For recruiters and hiring managers, clearer name recognition is usually worth more than the extra stylization of a monogram.",
    accent: "from-fuchsia-400/14 via-pink-400/8 to-transparent",
  },
  {
    id: "education",
    eyebrow: "Education",
    title: "The single-header variant is the safer default across the full portfolio.",
    description:
      "The dual-layer variant can work, but only when the floating pill is conditional and stays homepage-only.",
    accent: "from-blue-300/18 via-cyan-400/10 to-transparent",
  },
  {
    id: "contact",
    eyebrow: "Contact",
    title: "Archive pages need standard page navigation, not the floating section pill.",
    description:
      "A branded top header with clear page-level links is a better fit there because the archive is not a section-scrolling surface.",
    accent: "from-rose-300/16 via-pink-300/10 to-transparent",
  },
];

const BRAND_OPTIONS: Array<{
  id: BrandMode;
  label: string;
  description: string;
}> = [
  {
    id: "wordmark",
    label: "Wordmark",
    description: "Best default for recognition and trust.",
  },
  {
    id: "monogram",
    label: "Monogram",
    description: "More editorial, but weaker for instant identity.",
  },
  {
    id: "svg",
    label: "SVG Logo",
    description: "Useful if the logo stays legible at small sizes.",
  },
  {
    id: "png",
    label: "PNG Logo",
    description: "Fallback if the raster mark reads better in practice.",
  },
];

const PATTERN_OPTIONS: Array<{
  id: NavPattern;
  label: string;
  description: string;
}> = [
  {
    id: "single-header",
    label: "Single Header Nav",
    description: "One navigation system. Best default across the whole site.",
  },
  {
    id: "header-plus-pill",
    label: "Header + Pill",
    description: "Branded header plus a homepage-only floating section pill.",
  },
];

function BrandSignature({ mode }: { mode: BrandMode }) {
  if (mode === "svg") {
    return (
      <Link
        href="/navigation-demo#home"
        className="flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 backdrop-blur-md transition-colors hover:bg-white/[0.06]"
      >
        <Image
          src="/images/cameron-logo.svg"
          alt="Cameron Bell logo"
          width={144}
          height={32}
          className="h-8 w-auto"
          priority
        />
      </Link>
    );
  }

  if (mode === "png") {
    return (
      <Link
        href="/navigation-demo#home"
        className="flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 backdrop-blur-md transition-colors hover:bg-white/[0.06]"
      >
        <Image
          src="/images/cameron-logo.png"
          alt="Cameron Bell logo"
          width={144}
          height={32}
          className="h-8 w-auto"
          priority
        />
      </Link>
    );
  }

  if (mode === "monogram") {
    return (
      <Link href="/navigation-demo#home" className="group flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-sm font-semibold tracking-[0.22em] text-cyan-100 transition-colors group-hover:bg-cyan-300/16">
          CB
        </div>
        <div className="hidden sm:block">
          <p className="text-sm font-medium text-slate-100">Cameron Bell</p>
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-slate-400">
            AI Engineer
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link href="/navigation-demo#home" className="group block">
      <p className="text-base font-semibold tracking-[0.02em] text-white transition-colors group-hover:text-cyan-100">
        Cameron Bell
      </p>
      <p className="mt-0.5 text-[0.68rem] uppercase tracking-[0.3em] text-slate-400">
        AI Engineer
      </p>
    </Link>
  );
}

function HeaderNav({
  items,
  activeTab,
  onClick,
}: {
  items: NavItem[];
  activeTab: string;
  onClick: (item: NavItem, event: MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <nav className="hidden items-center gap-1 lg:flex">
      {items.map((item) => {
        const isActive = item.name === activeTab;

        return (
          <Link
            key={item.name}
            href={item.url}
            onClick={(event) => onClick(item, event)}
            className={cn(
              "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
              isActive
                ? "text-white"
                : "text-slate-300 hover:text-cyan-100",
            )}
          >
            <span className="relative z-10">{item.name}</span>
            {isActive && (
              <motion.span
                layoutId="header-nav-active"
                className="absolute inset-0 rounded-full bg-cyan-300/12 ring-1 ring-cyan-300/20"
                transition={{ type: "spring", stiffness: 320, damping: 30 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

function ArchivePageCard({ brandMode }: { brandMode: BrandMode }) {
  return (
    <Card className="border-white/10 bg-slate-950/60 text-white shadow-[0_20px_80px_rgba(2,6,23,0.35)] backdrop-blur-xl">
      <CardContent className="p-6">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
          Archive Page Behavior
        </p>
        <div className="mt-5 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <BrandSignature mode={brandMode} />
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="rounded-full border border-white/10 px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/[0.06] hover:text-white"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="rounded-full bg-white px-3 py-2 text-sm font-medium text-slate-950"
              >
                Archive
              </Link>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            <p className="text-sm font-medium text-white">
              No floating section pill on archive pages.
            </p>
            <p className="text-sm leading-6 text-slate-300">
              The archive is a route-level destination with filters and browsing
              controls, so it needs a normal page header, not homepage section
              navigation.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function NavigationHybridDemo() {
  const [activeTab, setActiveTab] = useState("Home");
  const [brandMode, setBrandMode] = useState<BrandMode>("wordmark");
  const [pattern, setPattern] = useState<NavPattern>("single-header");
  const [showFloatingPill, setShowFloatingPill] = useState(false);

  useEffect(() => {
    const sectionElements = NAV_ITEMS.map((item) => {
      const id = item.url.split("#")[1];
      const element = document.getElementById(id);
      return element ? { ...item, element } : null;
    }).filter(
      (item): item is NavItem & { element: HTMLElement } => item !== null,
    );

    if (sectionElements.length === 0) return;

    const updateActiveTab = () => {
      const viewportAnchor = window.innerHeight * 0.34;
      let bestMatch = sectionElements[0];
      let bestDistance = Number.POSITIVE_INFINITY;

      for (const section of sectionElements) {
        const rect = section.element.getBoundingClientRect();
        const containsAnchor =
          rect.top <= viewportAnchor && rect.bottom >= viewportAnchor;

        if (containsAnchor) {
          bestMatch = section;
          break;
        }

        const distance = Math.min(
          Math.abs(rect.top - viewportAnchor),
          Math.abs(rect.bottom - viewportAnchor),
        );

        if (distance < bestDistance) {
          bestDistance = distance;
          bestMatch = section;
        }
      }

      setActiveTab((current) =>
        current === bestMatch.name ? current : bestMatch.name,
      );
    };

    const updateFloatingPill = () => {
      const hero = document.getElementById("home");
      const contact = document.getElementById("contact");
      if (!hero || !contact) return;

      const heroBottom = hero.getBoundingClientRect().bottom;
      const contactTop = contact.getBoundingClientRect().top;
      const passedHero = heroBottom < window.innerHeight * 0.55;
      const beforeFooterZone = contactTop > window.innerHeight * 0.75;

      setShowFloatingPill(passedHero && beforeFooterZone);
    };

    let frameId = 0;
    const onScroll = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        updateActiveTab();
        updateFloatingPill();
      });
    };

    updateActiveTab();
    updateFloatingPill();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const handleNavClick = (
    item: NavItem,
    event: MouseEvent<HTMLAnchorElement>,
  ) => {
    event.preventDefault();
    setActiveTab(item.name);

    const hash = item.url.split("#")[1];
    const element = document.getElementById(hash);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", `#${hash}`);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_26%),radial-gradient(circle_at_82%_14%,rgba(96,165,250,0.16),transparent_22%),linear-gradient(180deg,#020617_0%,#081120_44%,#020617_100%)]" />
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/72 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <BrandSignature mode={brandMode} />
            <Badge
              variant="outline"
              className="hidden border-cyan-300/20 bg-cyan-300/10 text-cyan-100 sm:inline-flex"
            >
              Navigation Demo
            </Badge>
          </div>

          {pattern === "single-header" ? (
            <HeaderNav
              items={NAV_ITEMS}
              activeTab={activeTab}
              onClick={handleNavClick}
            />
          ) : (
            <div className="hidden lg:flex">
              <Link
                href="/projects"
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition-colors hover:bg-white/[0.06] hover:text-white"
              >
                Archive Projects
              </Link>
            </div>
          )}
        </div>
      </header>

      {pattern === "header-plus-pill" && showFloatingPill && (
        <NavBar
          items={NAV_ITEMS}
          activeTab={activeTab}
          onItemClick={handleNavClick}
          className="w-[calc(100%-1.5rem)] max-w-max"
        />
      )}

      <section id="home" className="scroll-mt-36 border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-12">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-cyan-200/80">
              Separate Demo Route
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              Compare the two navigation patterns that actually hold up.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              This demo removes the always-on double-navigation problem. You can
              switch between a single branded top navigation and a branded
              header with a conditional homepage-only floating pill.
            </p>
          </div>

          <Card className="border-white/10 bg-white/[0.04] text-white shadow-[0_20px_80px_rgba(2,6,23,0.35)] backdrop-blur-xl">
            <CardContent className="space-y-6 p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Pattern Choice
                </p>
                <div className="mt-3 grid gap-2">
                  {PATTERN_OPTIONS.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setPattern(option.id)}
                      className={cn(
                        "rounded-2xl border px-4 py-3 text-left transition-colors",
                        pattern === option.id
                          ? "border-cyan-300/40 bg-cyan-300/12"
                          : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]",
                      )}
                    >
                      <p className="text-sm font-medium text-white">
                        {option.label}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        {option.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Brand Treatments
                </p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {BRAND_OPTIONS.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setBrandMode(option.id)}
                      className={cn(
                        "rounded-2xl border px-4 py-3 text-left transition-colors",
                        brandMode === option.id
                          ? "border-cyan-300/40 bg-cyan-300/12"
                          : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]",
                      )}
                    >
                      <p className="text-sm font-medium text-white">
                        {option.label}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        {option.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {SECTIONS.slice(1).map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className="relative scroll-mt-36 border-b border-white/8"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${section.accent}`}
          />
          <div className="relative mx-auto grid min-h-[72vh] max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-cyan-200/70">
                {section.eyebrow}
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                {section.title}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                {section.description}
              </p>

              {section.id === "projects" && (
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    asChild
                    className="bg-white text-slate-950 hover:bg-cyan-100"
                  >
                    <Link href="/projects">
                      View All Projects
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white/15 bg-white/5 text-white hover:bg-white/10"
                  >
                    <Link href="/">Back to Live Homepage</Link>
                  </Button>
                </div>
              )}
            </motion.div>

            {section.id === "contact" ? (
              <ArchivePageCard brandMode={brandMode} />
            ) : (
              <Card className="border-white/10 bg-slate-950/55 text-white shadow-[0_18px_70px_rgba(2,6,23,0.45)] backdrop-blur-xl">
                <CardContent className="p-7">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                    Section {index + 2}
                  </p>
                  <div className="mt-4 space-y-4">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-sm font-medium text-white">
                        Active state behavior
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        The highlighted item follows the section nearest a fixed
                        viewport anchor, which feels more stable than threshold
                        based intersection alone.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-sm font-medium text-white">
                        Current recommendation
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        Use the wordmark with the single-header nav as the
                        default. Keep the conditional pill only if you want a
                        stronger homepage-specific motion layer.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      ))}
    </main>
  );
}
