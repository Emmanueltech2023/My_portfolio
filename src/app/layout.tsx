import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import Cursor from "./components/Cursor";
import Preloader from "./components/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PAMMY'S DEV | Ellu Emmanuel — Full-Stack Engineer",
  description:
    "Portfolio of Ellu Emmanuel (PAMMY'S DEV) — a full-stack software engineer specializing in high-performance web applications, scalable architectures, and cinematic digital experiences. Built with Next.js, React, TypeScript, and Tailwind CSS.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Tailwind CSS",
    "Ellu Emmanuel",
    "PAMMY'S DEV",
    "Web Developer Nigeria",
    "Portfolio",
  ],
  authors: [{ name: "Ellu Emmanuel", url: "https://github.com/Emmanueltech2023" }],
  creator: "Ellu Emmanuel",
  openGraph: {
    type: "website",
    title: "PAMMY'S DEV | Ellu Emmanuel — Full-Stack Engineer",
    description:
      "Full-stack software engineer building high-performance digital experiences. Explore projects like Leapforce Media, The Magic Store, Ivest, ELSINAL, and more.",
    siteName: "PAMMY'S DEV Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PAMMY'S DEV | Ellu Emmanuel — Full-Stack Engineer",
    description:
      "Full-stack software engineer building high-performance digital experiences.",
    creator: "@CodeWithPammy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-obsidian text-white selection:bg-neon selection:text-black`}
      >
        <SmoothScroll>
          <Preloader />
          {children}
          <Cursor />
        </SmoothScroll>
      </body>
    </html>
  );
}