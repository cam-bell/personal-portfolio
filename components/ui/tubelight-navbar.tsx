"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import type { MouseEvent } from "react";
import { cn } from "@/lib/utils";

export interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  activeTab?: string;
  onItemClick?: (item: NavItem, event: MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
}

export function NavBar({
  items,
  activeTab,
  onItemClick,
  className,
}: NavBarProps) {
  return (
    <div
      className={cn(
        "fixed bottom-0 left-1/2 z-50 mb-6 -translate-x-1/2 sm:top-0 sm:bottom-auto sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/75 px-1 py-1 shadow-[0_18px_60px_rgba(2,6,23,0.45)] backdrop-blur-xl">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={(event) => onItemClick?.(item, event)}
              className={cn(
                "relative flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold transition-colors sm:px-5",
                "text-slate-300 hover:text-cyan-200",
                isActive && "text-white",
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.25} />
              </span>

              {isActive && (
                <motion.div
                  layoutId="tubelight-navbar-active"
                  className="absolute inset-0 -z-10 rounded-full bg-cyan-400/10 ring-1 ring-cyan-300/20"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute left-1/2 top-0 h-1 w-8 -translate-x-1/2 rounded-b-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]">
                    <div className="absolute -left-2 -top-2 h-6 w-12 rounded-full bg-cyan-300/25 blur-md" />
                    <div className="absolute top-0 h-5 w-8 rounded-full bg-cyan-200/20 blur-md" />
                    <div className="absolute left-2 top-0 h-4 w-4 rounded-full bg-cyan-100/25 blur-sm" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
