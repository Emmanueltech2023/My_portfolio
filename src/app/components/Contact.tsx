"use client";
import { useState } from "react"; // Added this
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter } from "lucide-react";
import Magnetic from "./Magnetic";
import { BsWhatsapp } from "react-icons/bs";

export default function Contact() {
  // 1. Create states for the form
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // 2. Handle the "Send" action
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSending(true);

  // Grab the data from the form
  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_KEY!, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setIsSent(true);
      (e.target as HTMLFormElement).reset(); // Clear the form
    }
  } catch (error) {
    console.error("Form error:", error);
    alert("Something went wrong. Please try again!");
  } finally {
    setIsSending(false);
    // Hide the success message after 5 seconds
    setTimeout(() => setIsSent(false), 5000);
  }
};

  return (
    <section className="py-2 max-w-7xl mx-auto px-4" style={{ marginTop: "3rem" }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Side: The "Vibe" and Quick Links */}
        <div>
          <h2 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tighter">
            LET'S <br /> <span className="text-neon neon-glow">CONNECT</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-md mb-12">
            Ready to bring your vision to life? Whether you have a specific project in mind 
            or just want to say hi, my terminal is always open.
          </p>

          <div className="flex flex-col gap-4">
            {[
              { icon: <Mail />, label: "Email", value: "emmanuelellu1714@gmail.com", color: "hover:text-cyan-400" },
              { icon: <BsWhatsapp />, label: "WhatsApp", value: "+234 906 4144 383", color: "hover:text-green-400" },
            ].map((link, i) => (
              <Magnetic key={i}>
                <div className={`group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 transition-all ${link.color} cursor-none`}>
                  <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform">
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500">{link.label}</p>
                    <p className="font-mono">{link.value}</p>
                  </div>
                </div>
              </Magnetic>
            ))}
          </div>
        </div>

        {/* Right Side: The "Glass" Message Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative p-8 rounded-3xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
  <div className="grid grid-cols-2 gap-4">
    <div className="space-y-2">
      <label className="text-xs font-mono text-gray-500 uppercase">Name</label>
      {/* ADDED name="name" */}
      <input 
        name="name" 
        required 
        type="text" 
        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-neon/50 transition-colors" 
        placeholder="John Doe" 
      />
    </div>
    <div className="space-y-2">
      <label className="text-xs font-mono text-gray-500 uppercase">Email</label>
      {/* ADDED name="email" */}
      <input 
        name="email" 
        required 
        type="email" 
        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-neon/50 transition-colors" 
        placeholder="john@example.com" 
      />
    </div>
  </div>
  
  <div className="space-y-2">
    <label className="text-xs font-mono text-gray-500 uppercase">Message</label>
    {/* ADDED name="message" */}
    <textarea 
      name="message" 
      required 
      rows={4} 
      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-neon/50 transition-colors resize-none" 
      placeholder="Tell me about your project..." 
    />
  </div>

  {/* Button logic stays the same */}
  <button 
    disabled={isSending}
    type="submit"
    className={`w-full group flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all ${
      isSent ? "bg-green-500 text-white" : "bg-white text-black hover:bg-neon hover:text-black"
    }`}
  >
    {isSending ? "SENDING..." : isSent ? "MESSAGE SENT! ✓" : (
      <>SEND MESSAGE <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
    )}
  </button>
</form>
        </motion.div>
      </div>

      {/* Social Footer Bar */}
      <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-gray-500 font-mono text-sm">© 2026 PAMMY'S DEV — ALL RIGHTS RESERVED</p>
        <div className="flex gap-6">
          {[
            { icon: <Github />, url: "https://github.com/Emmanueltech2023" },
            { icon: <Linkedin />, url: "https://linkedin.com/in/your-username" },
            { icon: <Twitter />, url: "https://twitter.com/your-username" }
          ].map((social, i) => (
            <Magnetic key={i}>
              <a href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                {social.icon}
              </a>
            </Magnetic>
          ))}
        </div>
      </div>
    </section>
  );
}
