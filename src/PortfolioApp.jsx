import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Sun } from "lucide-react";

export default function PortfolioApp() {
  const [subtitle, setSubtitle] = useState("");
  const subtitles = [
    "Database Architect • SQL Server / Oracle / Open Source",
    "SSRS / SSIS / SSAS — BI & Data Warehousing",
    "Performance Tuning • High Availability • Security",
  ];
  const typingIndex = useRef(0);
  const charIndex = useRef(0);
  const typingForward = useRef(true);

  useEffect(() => {
    const tick = () => {
      const current = subtitles[typingIndex.current];
      if (typingForward.current) {
        charIndex.current += 1;
        setSubtitle(current.slice(0, charIndex.current));
        if (charIndex.current === current.length) {
          typingForward.current = false;
          setTimeout(tick, 1200);
          return;
        }
      } else {
        charIndex.current -= 1;
        setSubtitle(current.slice(0, Math.max(0, charIndex.current)));
        if (charIndex.current === 0) {
          typingForward.current = true;
          typingIndex.current = (typingIndex.current + 1) % subtitles.length;
        }
      }
      setTimeout(tick, typingForward.current ? 80 : 36);
    };
    tick();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-slate-900 text-slate-100 font-sans">
      <header className="fixed w-full z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between backdrop-blur-sm bg-white/6 rounded-b-2xl">
          <a href="#hero" className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/6 shadow-sm">
              <Sun size={20} />
            </div>
            <span className="font-semibold">Ajay Agrawal</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#certifications" className="hover:underline">Certifications</a>
            <a href="#awards" className="hover:underline">Awards</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <section id="hero" className="h-screen flex flex-col items-center justify-center relative text-center">
        <motion.h1 className="text-5xl md:text-7xl font-bold z-10">Ajay Agrawal</motion.h1>
        <motion.h2 className="mt-4 text-xl md:text-2xl text-slate-300 z-10">{subtitle}</motion.h2>
      </section>

      <section id="about" className="py-20 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">About</h2>
        <p className="text-slate-300 leading-relaxed">A highly accomplished and results-oriented Senior Technical Architect with over 20 years of extensive IT experience, specializing in technical project management, large-scale data solutions, and complex system integrations.</p>
      </section>
    </div>
  );
}