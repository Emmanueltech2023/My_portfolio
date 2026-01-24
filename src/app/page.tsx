import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid"; 
import Cursor from "./components/Cursor";
import TechStack from "./components/TechStack";
import TerminalContact from "./components/TerminalContact";
import SkillsCloud from "./components/SkillsCloud";
import Services from "./components/Services";
import ProjectStack from "./components/ProjectStack";
import Contact from "./components/Contact";
import About from "./components/About";
import Preloader from "./components/Preloader";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
       <About /> 
      {/* <BentoGrid /> */}
      {/* <Cursor /> */}
      {/* <TerminalContact /> */}
      <SkillsCloud />
      <Services />
      <ProjectStack />
      <Contact />
      <TechStack />
      <Preloader />
      
     <footer className="py-10 text-center border-t border-white/5">
        <p className="text-white/10 text-xs font-mono">
          DESIGNED & BUILT BY PAMMY'S DEV — 2026
        </p>
      </footer>
    </main>
  );
}