"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();
  const router = useRouter();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Active section tracking with Intersection Observer
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects", route: "/projects" },
    { href: "#additional-projects", label: "Coursework" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string, route?: string) => {
    if (route && pathname === "/projects") {
      setIsOpen(false);
      return;
    }

    if (pathname !== "/") {
      router.push(`/${href}`);
      setIsOpen(false);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 w-full bg-background/70 backdrop-blur-xl border-b border-white/10 z-50 shadow-aurora">
      {/* Scroll Progress Indicator */}
      <motion.div className="h-1 bg-primary origin-left" style={{ scaleX }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link
            href="/"
            className="text-xl font-bold text-aurora hover:text-white transition-colors"
          >
            Cameron Bell
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive =
                pathname === "/projects"
                  ? item.label === "Projects"
                  : activeSection === item.href;
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href, item.route)}
                  className={`
                    relative text-sm font-medium transition-colors duration-200
                    ${
                      isActive
                        ? "text-primary"
                        : "text-slate-300 hover:text-primary"
                    }
                  `}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      layoutId="activeSection"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <motion.div
                animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </motion.div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 border-t">
                {navItems.map((item, index) => {
                  const isActive =
                    pathname === "/projects"
                      ? item.label === "Projects"
                      : activeSection === item.href;
                  return (
                    <motion.button
                      key={item.href}
                      onClick={() => scrollToSection(item.href, item.route)}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.2,
                      }}
                      className={`
                        block w-full text-left py-2.5 px-1 text-sm font-medium
                        transition-colors duration-200 rounded-md
                        ${
                          isActive
                            ? "text-primary bg-primary/10"
                            : "text-slate-300 hover:text-primary hover:bg-primary/5"
                        }
                      `}
                    >
                      {item.label}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
