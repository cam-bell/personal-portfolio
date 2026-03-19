"use client";

import Link from "next/link";
import {
  useEffect,
  useState,
  type MouseEvent,
} from "react";
import {
  Briefcase,
  FolderKanban,
  GraduationCap,
  Home,
  Layers3,
  Mail,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { NavBar, type NavItem } from "@/components/ui/tubelight-navbar";
import { cn } from "@/lib/utils";

const HOME_NAV_ITEMS: NavItem[] = [
  { name: "Home", url: "/#home", icon: Home },
  { name: "Skills", url: "/#skills", icon: Sparkles },
  { name: "Projects", url: "/#projects", icon: Briefcase },
  { name: "Coursework", url: "/#additional-projects", icon: Layers3 },
  { name: "Experience", url: "/#experience", icon: FolderKanban },
  { name: "Education", url: "/#education", icon: GraduationCap },
  { name: "Contact", url: "/#contact", icon: Mail },
];

const HOME_SECTION_ITEMS = HOME_NAV_ITEMS.map((item) => ({
  ...item,
  sectionId: item.url.replace("/#", ""),
}));

function BrandWordmark() {
  return (
    <Link href="/" className="group block">
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
                layoutId="live-header-nav-active"
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

export function Navigation() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("Home");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (pathname === "/projects") {
      setActiveTab("Archive");
      return;
    }

    if (pathname !== "/") {
      setActiveTab("");
      return;
    }

    const sections = HOME_SECTION_ITEMS.map((item) => {
      const element = document.getElementById(item.sectionId);
      return element ? { ...item, element } : null;
    }).filter(
      (
        item,
      ): item is (typeof HOME_SECTION_ITEMS)[number] & { element: HTMLElement } =>
        item !== null,
    );

    if (sections.length === 0) {
      setActiveTab("Home");
      return;
    }

    const updateActiveTab = () => {
      const viewportAnchor = window.innerHeight * 0.35;
      let bestMatch = sections[0];
      let bestDistance = Number.POSITIVE_INFINITY;

      for (const section of sections) {
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

      setActiveTab((currentTab) =>
        currentTab === bestMatch.name ? currentTab : bestMatch.name,
      );
    };

    let frameId = 0;
    const requestUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        updateActiveTab();
      });
    };

    updateActiveTab();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [pathname]);

  const handleNavClick = (
    item: NavItem,
    event: MouseEvent<HTMLAnchorElement>,
  ) => {
    event.preventDefault();
    setActiveTab(item.name);

    if (item.url === "/projects") {
      router.push("/projects");
      return;
    }

    const hash = item.url.replace("/#", "#");
    if (pathname !== "/") {
      router.push(`/${hash}`);
      return;
    }

    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.replaceState(null, "", hash);
    }
  };

  if (!mounted || pathname === "/navigation-demo") return null;

  if (pathname === "/projects") {
    return (
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-slate-950/72 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <BrandWordmark />
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/"
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950"
            >
              Archive Projects
            </Link>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-slate-950/72 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <BrandWordmark />
        <HeaderNav
          items={HOME_NAV_ITEMS}
          activeTab={activeTab}
          onClick={handleNavClick}
        />
      </div>
    </header>
  );
}
