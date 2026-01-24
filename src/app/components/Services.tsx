"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Layout, Server, Database, Smartphone } from "lucide-react";

const services = [
  { title: "Frontend Dev", desc: "Crafting insane user interfaces with React and Next.js.", icon: <Layout />, color: "from-blue-500" },
  { title: "Backend Systems", desc: "Building scalable, high-velocity server architectures.", icon: <Server />, color: "from-purple-600" },
  { title: "Database Design", desc: "Optimizing data flow and structural integrity.", icon: <Database />, color: "from-cyan-500" },
  { title: "Mobile Apps", desc: "Native-feel experiences for iOS and Android.", icon: <Smartphone />, color: "from-pink-500" },
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative h-96 w-full rounded-2xl bg-gradient-to-br from-white/10 to-transparent p-[1px]"
    >
      <div 
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
        className="absolute inset-0 rounded-2xl bg-obsidian/90 p-8 flex flex-col justify-between border border-white/5"
      >
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} to-transparent flex items-center justify-center text-white`}>
          {service.icon}
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4">
      <h2 className="text-4xl md:text-6xl font-black mb-16 text-center italic tracking-tighter">SERVICES</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <ServiceCard key={i} service={s} />
        ))}
      </div>
    </section>
  );
}