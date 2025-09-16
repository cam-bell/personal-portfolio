"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Moon,
  Sun,
  Home,
  Code,
  Briefcase,
  GraduationCap,
  User,
  FileText,
} from "lucide-react";
import { useTheme } from "next-themes";
import { NavBar } from "@/components/ui/tubelight-navbar";

export function Navigation() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: "Home", url: "#home", icon: Home },
    { name: "Skills", url: "#skills", icon: Code },
    { name: "Projects", url: "#projects", icon: Briefcase },
    { name: "Coursework", url: "#additional-projects", icon: GraduationCap },
    { name: "Experience", url: "#experience", icon: User },
    { name: "Contact", url: "#contact", icon: FileText },
  ];

  // Scroll-based active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .map((item) => ({
          name: item.name,
          element: document.querySelector(item.url),
        }))
        .filter((section) => section.element);

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;

          if (scrollPosition >= elementTop) {
            setActiveSection(section.name);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) return null;

  return (
    <>
      {/* Theme Toggle - Fixed position */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="bg-background/80 backdrop-blur-md border border-border"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Tubelight Navigation */}
      <NavBar items={navItems} activeSection={activeSection} />
    </>
  );
}
