"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Heart, Leaf, Sparkles, Coffee } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-950 via-slate-900/95 to-slate-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Beyond the code and data, here's what drives my passion for
            technology.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden mx-auto max-w-sm">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Cameron Bell"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-7">
                  I'm a software developer and AI engineer with a deep passion
                  for creating technology that makes a positive impact. My
                  journey began with curiosity about how things work, which led
                  me to explore the fascinating intersection of code, data, and
                  human behavior.
                </p>

                <p className="text-lg leading-7">
                  When I'm not coding, you'll find me exploring the latest
                  developments in artificial intelligence, contributing to
                  open-source projects, or experimenting with creative coding
                  projects that blend art and technology. I believe that the
                  best solutions come from understanding both the technical
                  possibilities and the human needs they serve.
                </p>
              </div>

              {/* Interests Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <Card className="border-l-4 border-l-blue-500">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-5 w-5 text-blue-500" />
                      <h3 className="font-semibold">AI & Machine Learning</h3>
                    </div>
                    <p className="text-sm text-slate-300">
                      Fascinated by the potential of AI to solve complex
                      problems and augment human capabilities.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Leaf className="h-5 w-5 text-green-500" />
                      <h3 className="font-semibold">Sustainability Tech</h3>
                    </div>
                    <p className="text-sm text-slate-300">
                      Passionate about using technology to address climate
                      change and environmental challenges.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Heart className="h-5 w-5 text-purple-500" />
                      <h3 className="font-semibold">Creative Coding</h3>
                    </div>
                    <p className="text-sm text-slate-300">
                      Exploring the artistic side of programming through
                      generative art and interactive experiences.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-500">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Coffee className="h-5 w-5 text-orange-500" />
                      <h3 className="font-semibold">Community Building</h3>
                    </div>
                    <p className="text-sm text-slate-300">
                      Active in tech communities, mentoring newcomers and
                      organizing local meetups.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
