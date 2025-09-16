"use client";

import { useState } from "react";
import { SkillsMockupA } from "@/components/skills-mockup-a";
import { SkillsMockupB } from "@/components/skills-mockup-b";
import { SkillsMockupC } from "@/components/skills-mockup-c";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const mockups = [
  {
    id: "a",
    name: "Category Cards + Logo Chips",
    description: "Safe, Recruiter-Friendly",
    component: SkillsMockupA,
    features: [
      "Clean card layout",
      "Category organization",
      "Hover effects",
      "Professional appearance",
    ],
    bestFor: "Traditional portfolios, corporate environments",
  },
  {
    id: "b",
    name: "Logo Mosaic + Category Filter",
    description: "Modern/Playful",
    component: SkillsMockupB,
    features: [
      "Interactive filtering",
      "Logo-focused design",
      "Smooth animations",
      "Engaging UX",
    ],
    bestFor: "Creative portfolios, tech startups",
  },
  {
    id: "c",
    name: "Core vs Broader",
    description: "Storytelling / Consultant-Friendly",
    component: SkillsMockupC,
    features: [
      "Strategic organization",
      "Expertise levels",
      "Clear hierarchy",
      "Consultant appeal",
    ],
    bestFor: "Consulting, strategic roles, leadership positions",
  },
];

export default function SkillsDemo() {
  const [activeMockup, setActiveMockup] = useState("a");

  const ActiveComponent =
    mockups.find((m) => m.id === activeMockup)?.component || SkillsMockupA;

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-neutral-900 to-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Skills Section Mockups
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Three different approaches to showcase your AI/ML skills. Switch
              between them to find your preferred style.
            </p>

            {/* Mockup Selector */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {mockups.map((mockup) => (
                <Button
                  key={mockup.id}
                  onClick={() => setActiveMockup(mockup.id)}
                  variant={activeMockup === mockup.id ? "default" : "outline"}
                  className={`min-w-[200px] ${
                    activeMockup === mockup.id
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "border-neutral-600 text-gray-300 hover:bg-neutral-700"
                  }`}
                >
                  <div className="text-left">
                    <div className="font-semibold">{mockup.name}</div>
                    <div className="text-xs opacity-80">
                      {mockup.description}
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Mockup Info */}
      <section className="py-8 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {mockups.map(
              (mockup) =>
                activeMockup === mockup.id && (
                  <Card
                    key={mockup.id}
                    className="border-neutral-200 dark:border-neutral-700"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        Mockup {mockup.id.toUpperCase()}: {mockup.name}
                        <Badge variant="secondary">{mockup.description}</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Key Features:</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {mockup.features.map((feature, index) => (
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
                            {mockup.bestFor}
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

      {/* Active Mockup Display */}
      <div className="min-h-screen">
        <ActiveComponent />
      </div>

      {/* Footer Note */}
      <section className="py-8 bg-neutral-100 dark:bg-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            💡 <strong>Tip:</strong> All mockups use your AI/ML-focused skill
            categories and are optimized for your target roles: AI Engineer, ML
            Engineer, Data Scientist, Software Developer, and Tech Consultant.
          </p>
        </div>
      </section>
    </main>
  );
}
