"use client";

import { motion } from "framer-motion";
import { ArrowDown, Code2, FileText } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { PERSONAL_INFO } from "@/data/constants";
import SectionWrapper from "./SectionWrapper";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <SectionWrapper
      id="home"
      className="flex flex-col items-center justify-center relative min-h-screen"
    >
      {/* Ambient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-red-600/8 rounded-full blur-[120px] pointer-events-none will-change-transform transform-gpu"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] bg-orange-600/8 rounded-full blur-[100px] pointer-events-none will-change-transform transform-gpu"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 4.5 }}
      />

      {/* Two-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center w-full max-w-6xl mx-auto relative z-10 px-4 sm:px-6">

        {/* ── Left: Text ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
        >
          {/* Availability badge */}
          <motion.div variants={itemVariants} className="mb-7">
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/35 bg-emerald-500/10 text-emerald-400 text-sm font-semibold tracking-wide backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Open to Opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-bold tracking-tight mb-5 leading-[1.05]"
            itemProp="name"
          >
            <span className="block text-gray-400 text-xl sm:text-2xl font-medium mb-2 tracking-normal">
              Hi, I&apos;m
            </span>
            <span className="text-gradient text-5xl sm:text-6xl md:text-7xl">Shardul Rahman Turjo</span>
          </motion.h1>

          {/* Role badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-300 text-sm font-semibold tracking-wide">
              {PERSONAL_INFO.role}
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-400 max-w-lg leading-relaxed mb-9"
          >
            {PERSONAL_INFO.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            <motion.button
              onClick={() => scrollToSection("#projects")}
              className="h-12 px-7 glass bg-red-600/10 hover:bg-red-500/20 border border-red-500/30 hover:border-red-400/60 text-white rounded-xl font-semibold transition-all duration-300 flex items-center gap-2.5 shadow-lg shadow-red-600/20 ring-glow-primary"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Code2 size={18} />
              View Projects
            </motion.button>

            <motion.a
              href="https://drive.google.com/file/d/1M5tzVTADjcDlLVF9phgJqJ1yyQPmgFgB/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-7 glass border border-red-500/30 hover:border-red-400/60 text-red-300 hover:text-red-200 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2.5 hover:bg-red-500/10"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <FileText size={18} />
              Resume
            </motion.a>

            <motion.button
              onClick={() => scrollToSection("#contact")}
              className="h-12 px-7 glass border border-white/12 hover:border-white/25 text-gray-400 hover:text-gray-200 rounded-xl font-semibold transition-all duration-300 hover:bg-white/5"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        {/* ── Right: Photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1], delay: 0.25 }}
          className="flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="relative">
            {/* Background halo */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/25 to-orange-600/25 blur-[60px] scale-130 pointer-events-none will-change-transform transform-gpu"
              animate={{ scale: [1.3, 1.5, 1.3], opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Spinning conic ring */}
            <motion.div
              className="absolute -inset-[3px] rounded-full"
              style={{
                background: "conic-gradient(from 0deg, #f87171, #ef4444, #dc2626, #f87171)",
                borderRadius: "9999px",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            />

            {/* Photo container */}
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-[320px] lg:h-[320px] rounded-full p-[3px] bg-gradient-to-br from-red-500 via-rose-500 to-orange-600">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#07090f] border-[3px] border-[#07090f]">
                {!imageError ? (
                  <Image
                    src="/profile.jpg"
                    alt="MD. Shardul Rahman Turjo — Full-Stack Developer"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover object-top"
                    priority
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-600/30 to-orange-600/30">
                    <span className="text-6xl font-bold text-gradient">ST</span>
                  </div>
                )}
              </div>
            </div>

            {/* Badge — CGPA */}
            <motion.div
              className="absolute -bottom-4 -right-8 glass border border-white/15 rounded-2xl px-4 py-3 shadow-2xl shadow-black/40"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, type: "spring", stiffness: 220 }}
              whileHover={{ scale: 1.07, y: -2 }}
            >
              <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-widest mb-0.5">CGPA</p>
              <p className="text-emerald-400 font-bold text-xl leading-none">
                3.87 <span className="text-gray-500 text-xs font-normal">/ 4.0</span>
              </p>
            </motion.div>

            {/* Badge — Problems */}
            <motion.div
              className="absolute -top-4 -left-10 glass border border-white/15 rounded-2xl px-4 py-3 shadow-2xl shadow-black/40"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, type: "spring", stiffness: 220 }}
              whileHover={{ scale: 1.07, y: -2 }}
            >
              <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-widest mb-0.5">Problems Solved</p>
              <p className="text-red-400 font-bold text-xl leading-none">500+ 🏆</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="w-full flex justify-center mt-16 md:absolute md:bottom-10 md:left-0 md:right-0 md:mt-0 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="cursor-pointer p-3 rounded-full glass border border-white/10 hover:border-white/20 hover:bg-white/8 transition-all duration-300"
          onClick={() => scrollToSection("#about")}
        >
          <ArrowDown size={20} className="text-gray-500" />
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
