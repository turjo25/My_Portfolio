"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Code2, FileText, Sparkles, Send } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { PERSONAL_INFO } from "@/data/constants";
import SectionWrapper from "./SectionWrapper";

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const reduceMotion = useReducedMotion();

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: reduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <SectionWrapper
      id="home"
      className="flex flex-col items-center justify-center relative py-12 md:py-24 mt-4 md:mt-8 min-h-[calc(100vh-80px)]"
    >
      {/* Subtle Aurora Ambient Glow (Transform/Opacity only) */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-red-600/10 blur-[130px] pointer-events-none transform-gpu"
        aria-hidden="true"
      />

      {/* Two-column Hero Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full max-w-7xl mx-auto relative z-10">
        
        {/* ── Left: Main Hero Headline & Copy (Col 7) ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
        >
          {/* Availability Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Available for New Roles & Projects
            </div>
          </motion.div>

          {/* Heading Scale with Outfit Font */}
          <motion.h1
            variants={itemVariants}
            className="font-heading font-extrabold tracking-tight mb-6 text-white leading-[1.04]"
          >
            <span className="block text-gray-400 text-lg sm:text-2xl font-medium tracking-normal mb-2">
              Hello, I&apos;m
            </span>
            <span className="text-4xl sm:text-6xl lg:text-7xl block text-gradient-primary font-black">
              Shardul Rahman Turjo
            </span>
          </motion.h1>

          {/* Subheading Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-red-500/30 bg-red-500/10 text-red-300 text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <Sparkles size={14} className="text-red-400" />
              {PERSONAL_INFO.role}
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed mb-8 font-normal"
          >
            {PERSONAL_INFO.tagline}
          </motion.p>

          {/* Micro-interactive CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center lg:justify-start w-full sm:w-auto"
          >
            {/* View Projects */}
            <motion.button
              onClick={() => scrollToSection("#projects")}
              className="h-12 px-7 bg-red-600 hover:bg-red-500 text-white rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg shadow-red-600/30 hover:shadow-red-500/50 hover:scale-[1.02] active:scale-[0.98] border border-red-400/40"
              whileHover={reduceMotion ? {} : { scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Code2 size={18} />
              <span>Explore Projects</span>
            </motion.button>

            {/* Resume */}
            <motion.a
              href="https://drive.google.com/file/d/1ttc3FSHssoxe0Uv2GvpuiYpDLNjng7rH/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-7 glass border border-red-500/30 hover:border-red-400/60 text-red-300 hover:text-white rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2.5 hover:bg-red-500/10"
              whileHover={reduceMotion ? {} : { scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <FileText size={18} />
              <span>Resume</span>
            </motion.a>

            {/* Contact */}
            <motion.button
              onClick={() => scrollToSection("#contact")}
              className="h-12 px-7 glass border border-white/12 hover:border-white/25 text-gray-300 hover:text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-white/5 flex items-center justify-center gap-2.5"
              whileHover={reduceMotion ? {} : { scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Send size={16} />
              <span>Get in Touch</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* ── Right: Photo & Stat Badges (Col 5) ── */}
        <motion.div
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="relative">
            {/* Background Halo */}
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-red-600/30 via-red-500/20 to-orange-500/20 blur-[50px] scale-125 pointer-events-none transform-gpu"
              aria-hidden="true"
            />

            {/* Profile Avatar Frame */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-[3px] bg-gradient-to-br from-red-500 via-rose-500 to-orange-500 shadow-2xl shadow-red-600/25">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0d14] border-[4px] border-[#0a0d14] relative">
                {!imageError ? (
                  <Image
                    src="/profile.jpg"
                    alt="Shardul Rahman Turjo - Full-Stack Developer"
                    width={320}
                    height={320}
                    priority
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                    className="w-full h-full object-cover object-top"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-600/20 to-orange-600/20">
                    <span className="text-5xl font-extrabold text-gradient-primary">ST</span>
                  </div>
                )}
              </div>
            </div>

            {/* Micro Badge 1 — Projects */}
            <motion.div
              className="absolute -bottom-2 -right-2 glass-card rounded-2xl px-4 py-2.5 border border-red-500/30 shadow-xl backdrop-blur-xl"
              initial={reduceMotion ? {} : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              whileHover={reduceMotion ? {} : { scale: 1.05 }}
            >
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Built</p>
              <p className="text-emerald-400 font-extrabold text-lg leading-none mt-0.5">7+ Projects</p>
            </motion.div>

            {/* Micro Badge 2 — Problem Solving */}
            <motion.div
              className="absolute -top-2 -left-4 glass-card rounded-2xl px-4 py-2.5 border border-red-500/30 shadow-xl backdrop-blur-xl"
              initial={reduceMotion ? {} : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              whileHover={reduceMotion ? {} : { scale: 1.05 }}
            >
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">CP & LeetCode</p>
              <p className="text-red-400 font-extrabold text-lg leading-none mt-0.5">500+ Solved 🏆</p>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="w-full flex justify-center mt-12 z-10"
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <button
          onClick={() => scrollToSection("#about")}
          aria-label="Scroll down to About section"
          className="p-3.5 rounded-full glass border border-white/10 hover:border-red-500/40 hover:bg-red-500/10 text-gray-400 hover:text-red-400 transition-all duration-300 group"
        >
          <ArrowDown size={18} className="group-hover:translate-y-0.5 transition-transform duration-300" />
        </button>
      </motion.div>
    </SectionWrapper>
  );
}
