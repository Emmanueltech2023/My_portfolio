import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import SkillsCloud from "./components/SkillsCloud";
import Services from "./components/Services";
import ProjectStack from "./components/ProjectStack";
import Contact from "./components/Contact";
import About from "./components/About";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <SkillsCloud />
      <Services />
      <ProjectStack />
      <Contact />
      <TechStack />

      <footer className="py-10 text-center border-t border-white/5">
        <p className="text-white/10 text-xs font-mono">
          DESIGNED &amp; BUILT BY PAMMY&apos;S DEV — 2026
        </p>
      </footer>
    </main>
  );
}