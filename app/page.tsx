import { HeroSection } from "@/components/hero-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactForm } from "@/components/contact-form";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ThemeToggle />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactForm />
    </main>
  );
}