"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function TerminalContact() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Welcome to HAFTECH-OS v4.0.0",
    "Type 'help' to see available commands...",
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    let response = "";

    if (cmd === "help") {
      response = "Available: about, contact, projects, clear, mail";
    } else if (cmd === "about") {
      response = "Full-stack dev based in the matrix.";
    } else if (cmd === "mail") {
      response = "Redirecting to email client... [Success]";
      window.location.href = "mailto:emmanuelellu1714@gmail.com";
    } else if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    } else {
      response = `Command not found: ${cmd}. Type 'help' for assistance.`;
    }

    setHistory([...history, `> ${input}`, response]);
    setInput("");
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-20 font-mono">
      <div className="rounded-xl border border-white/10 bg-black/50 backdrop-blur-md overflow-hidden shadow-2xl shadow-neon/10">
        {/* Terminal Header */}
        <div className="bg-white/5 px-4 py-2 flex items-center gap-2 border-b border-white/10">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <span className="text-xs text-white/30 ml-2">bash — contact — 80x24</span>
        </div>

        {/* Terminal Body */}
        <div 
          className="p-6 h-[400px] overflow-y-auto text-sm md:text-base"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((line, i) => (
            <div key={i} className={line.startsWith(">") ? "text-neon" : "text-gray-400 mb-2"}>
              {line}
            </div>
          ))}
          
          <form onSubmit={handleCommand} className="flex items-center gap-2">
            <span className="text-neon">visitor@haftech:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-white caret-neon"
              autoFocus
            />
          </form>
        </div>
      </div>
      <p className="text-center text-white/20 text-xs mt-4 uppercase tracking-widest">
        Click inside the terminal to start typing
      </p>
    </section>
  );
}