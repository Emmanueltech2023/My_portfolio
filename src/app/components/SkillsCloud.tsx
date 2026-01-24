"use client";
import { color, motion } from "framer-motion";
import { 
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, 
  SiNodedotjs, SiPostgresql, SiFigma, SiDocker, 
  SiGit, SiJavascript, SiPython, SiDjango, SiGraphql,
  SiPhp
} from "react-icons/si";

const skills = [
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
  { name: "React", icon: <SiReact />, color: "text-cyan-400" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-300" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-indigo-400" },
  { name: "PHP", icon: <SiPhp />, color: "text-pink-500" },
  { name: "Docker", icon: <SiDocker />, color: "text-blue-600" },
  { name: "Javascript", icon: <SiJavascript />, color: "text-blue-600" },
  { name: "Python", icon: <SiPython />, color: "text-yellow-400" },
  { name: "Django", icon: <SiDjango />, color: "text-green-700" },
  { name: "GraphQL", icon: <SiGraphql />, color: "text-pink-400" },
  { name: "Git", icon: <SiGit />, color: "text-red-500" },
];
 
export default function SkillsCloud() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Tech Stack</h2>
          <p className="text-gray-500">The tools I use to bring ideas to life</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
              className="group relative flex flex-col items-center"
            >
              {/* The "Glow" behind the icon */}
              <div className={`absolute inset-0 bg-white/5 blur-2xl rounded-full group-hover:bg-neon/20 transition-colors`} />
              
              <div className={`text-5xl md:text-7xl ${skill.color} relative z-10 mb-4 transition-transform group-hover:scale-110`}>
                {skill.icon}
              </div>
              
              <span className="text-xs font-mono tracking-widest text-gray-500 group-hover:text-white uppercase transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}