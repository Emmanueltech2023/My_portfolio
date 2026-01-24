"use client"; // We need this for the Scroll Effect (Lenis)
import { useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Lenis from "lenis";
import "./globals.css";
import Cursor from "./components/Cursor";
import Preloader from "./components/Preloader"; // <--- ADD THIS IMPORT!

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <html lang="en" className="dark">
      <head>
        <title>PAMMY'S DEV | Full Stack Engineer</title>
        <meta name="description" content="Portfolio of a Full Stack Engineer specializing in high-end digital experiences." />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-obsidian text-white selection:bg-neon selection:text-black`}
      >
        {/* Wrap inside a fragment to keep React happy */}
        <>
          <Preloader />
          {children}
          <Cursor />
        </>
      </body>
    </html>
  );
}