"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, Copy, Check } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailClick = async () => {
    const email = "cameronsobell@gmail.com";

    try {
      // Try to open email client
      window.location.href = `mailto:${email}`;

      // Fallback: copy to clipboard after a short delay
      setTimeout(async () => {
        try {
          await navigator.clipboard.writeText(email);
          setEmailCopied(true);
          setTimeout(() => setEmailCopied(false), 2000);
        } catch (err) {
          console.log("Clipboard copy failed:", err);
        }
      }, 1000);
    } catch (err) {
      console.log("Email client failed to open:", err);
    }
  };

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
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary relative"
              onClick={handleEmailClick}
              title={emailCopied ? "Email copied!" : "Send email"}
            >
              {emailCopied ? (
                <Check className="h-5 w-5 text-green-500" />
              ) : (
                <Mail className="h-5 w-5" />
              )}
              <span className="sr-only">
                {emailCopied ? "Email copied to clipboard" : "Email"}
              </span>
            </Button>
          </div>

          {/* Copyright and Credits */}
          <div className="text-center space-y-2">
            <p className="text-sm text-slate-300">
              © {currentYear} Cameron Bell. All rights reserved.
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
