import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { AdditionalProjects } from "@/components/additional-projects"
import { Experience } from "@/components/experience"
import { ReadingList } from "@/components/reading-list"
import { Skills } from "@/components/skills"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Projects />
      <AdditionalProjects />
      <Experience />
      <ReadingList />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
