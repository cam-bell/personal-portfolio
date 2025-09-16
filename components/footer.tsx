"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/cameronsobell/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary"
              asChild
            >
              <a
                href="https://github.com/cam-bell"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Button>
          </div>

          {/* Copyright and Credits */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Cameron Bell. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
              Built with <Heart className="h-3 w-3 text-red-500" /> using{" "}
              <a
                href="https://v0.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                V0.dev
              </a>
            </p>
          </div>

          {/* Back to Top */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-4"
          >
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
}
