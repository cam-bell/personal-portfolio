"use client";

import { useState } from "react";
import { Hero } from "@/components/hero";
import { Hero3D } from "@/components/hero-3d";
import { HeroMinimal } from "@/components/hero-minimal";
import { HeroCyber } from "@/components/hero-cyber";
import { HeroSpotlight } from "@/components/hero-spotlight";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const heroVariations = [
  {
    id: "current",
    name: "Current Enhanced",
    description: "Modern AI Engineer",
    component: Hero,
    features: [
      "Interactive animations",
      "Floating tech icons",
      "Gradient typography",
      "Mouse tracking effects",
      "Parallax scrolling",
    ],
    bestFor: "Professional portfolios, tech companies",
  },
  {
    id: "3d",
    name: "3D Interactive",
    description: "Immersive Experience",
    component: Hero3D,
    features: [
      "3D Spline integration",
      "Spotlight effects",
      "Immersive layout",
      "Modern card design",
      "Interactive 3D scenes",
    ],
    bestFor: "Creative portfolios, design agencies",
  },
  {
    id: "minimal",
    name: "Minimalist Clean",
    description: "Elegant Simplicity",
    component: HeroMinimal,
    features: [
      "Clean typography",
      "Minimal design",
      "Subtle animations",
      "Professional aesthetic",
      "Light/dark mode ready",
    ],
    bestFor: "Corporate environments, consulting",
  },
  {
    id: "cyber",
    name: "Cyberpunk Futuristic",
    description: "Tech-Forward",
    component: HeroCyber,
    features: [
      "Terminal-style animations",
      "Cyber grid background",
      "Typewriter effects",
      "Neon color scheme",
      "Futuristic aesthetic",
    ],
    bestFor: "Gaming, tech startups, innovation",
  },
  {
    id: "spotlight",
    name: "Interactive Spotlight",
    description: "Mouse-Following Effects",
    component: HeroSpotlight,
    features: [
      "Interactive mouse tracking",
      "3D Spline integration",
      "Floating tech icons",
      "Smooth spring animations",
      "Immersive card design",
    ],
    bestFor: "Interactive portfolios, creative agencies",
  },
];

export default function HeroDemo() {
  const [activeHero, setActiveHero] = useState("current");

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              Hero Section Variations
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Five different approaches to showcase your AI/ML expertise. Each
              variation targets different audiences and use cases.
            </p>

            {/* Hero Selector */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {heroVariations.map((hero) => (
                <Button
                  key={hero.id}
                  onClick={() => setActiveHero(hero.id)}
                  variant={activeHero === hero.id ? "default" : "outline"}
                  className={`min-w-[200px] ${
                    activeHero === hero.id
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "border-neutral-600 text-gray-300 hover:bg-neutral-700"
                  }`}
                >
                  <div className="text-left">
                    <div className="font-semibold">{hero.name}</div>
                    <div className="text-xs opacity-80">{hero.description}</div>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Hero Info */}
      <section className="py-8 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {heroVariations.map(
              (hero) =>
                activeHero === hero.id && (
                  <Card
                    key={hero.id}
                    className="border-neutral-200 dark:border-neutral-700"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        {hero.name}
                        <Badge variant="secondary">{hero.description}</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Key Features:</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {hero.features.map((feature, index) => (
                              <li
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Best For:</h4>
                          <p className="text-sm text-muted-foreground">
                            {hero.bestFor}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
            )}
          </div>
        </div>
      </section>

      {/* Active Hero Display */}
      <div className="min-h-screen">
        {activeHero === "current" && <Hero key="current" />}
        {activeHero === "3d" && <Hero3D key="3d" />}
        {activeHero === "minimal" && <HeroMinimal key="minimal" />}
        {activeHero === "cyber" && <HeroCyber key="cyber" />}
        {activeHero === "spotlight" && <HeroSpotlight key="spotlight" />}
      </div>

      {/* Footer Note */}
      <section className="py-8 bg-neutral-100 dark:bg-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            💡 <strong>Tip:</strong> All variations use your modern typography
            system (Space Grotesk, Inter, JetBrains Mono) and are optimized for
            your AI Engineer brand. Choose the one that best matches your target
            audience and personal style.
          </p>
        </div>
      </section>
    </main>
  );
}
