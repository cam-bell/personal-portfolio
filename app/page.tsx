import { Hero } from "@/components/hero";
import { SkillsMockupA } from "@/components/skills-mockup-a";
import { SkillsMockupB } from "@/components/skills-mockup-b";
import { SkillsMockupC } from "@/components/skills-mockup-c";
import { Projects } from "@/components/projects";
import { AdditionalProjects } from "@/components/additional-projects";
import { Experience } from "@/components/experience";
// import { ReadingList } from "@/components/reading-list";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <SkillsMockupA />
      <SkillsMockupB />
      <SkillsMockupC />
      <Projects />
      <AdditionalProjects />
      <Experience />
      {/* <ReadingList /> */}
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
