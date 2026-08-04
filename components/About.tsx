"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Sparkles } from "lucide-react";
import { CONTACT_INFO, ABOUT_TEXT, BACKGROUND, PERSONAL_INFO } from "@/data/constants";
import SectionWrapper from "./SectionWrapper";

export default function About() {
  const [imageError, setImageError] = useState(false);
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: reduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <SectionWrapper id="about">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-indigo-400 text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center justify-center gap-1.5">
            <Sparkles size={14} className="text-indigo-400" />
            Background & Philosophy
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading">
            <span className="text-gradient-primary">About Me</span>
          </h2>
        </div>

        {/* Asymmetric Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-5"
        >

          {/* Bento Tile 1: Profile & Identity Card (Lg Col 4) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 bento-card rounded-3xl p-7 flex flex-col items-center justify-between text-center relative overflow-hidden group border border-indigo-500/20 hover:border-indigo-500/40 shadow-lg hover:shadow-indigo-500/10"
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-indigo-500/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              aria-hidden="true"
            />

            {/* Profile Avatar */}
            <div className="relative w-36 h-36 rounded-full p-[3px] bg-gradient-to-br from-indigo-500 via-violet-500 to-indigo-400 shadow-xl shadow-indigo-500/25 mb-4">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#0b0c10] border-2 border-[#0b0c10]">
                {!imageError ? (
                  <Image
                    src="/profile.jpg"
                    alt={PERSONAL_INFO.name}
                    width={144}
                    height={144}
                    sizes="144px"
                    className="w-full h-full object-cover object-top"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-600/30 to-violet-600/30">
                    <span className="text-3xl font-bold text-gradient-primary">ST</span>
                  </div>
                )}
              </div>
            </div>

            <div className="relative z-10 w-full">
              <h3 className="text-xl font-bold text-white font-heading">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-indigo-400 text-sm font-semibold mt-1">
                {PERSONAL_INFO.role}
              </p>

              {/* Status Pill */}
              <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-emerald-400 text-xs font-semibold">
                  Open to Opportunities
                </span>
              </div>
            </div>

            {/* Social Link Chips */}
            <div className="flex justify-center gap-3 mt-6 pt-5 border-t border-indigo-500/20 w-full relative z-10">
              {CONTACT_INFO.linkedin && (
                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 glass rounded-xl text-gray-300 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300"
                >
                  <Linkedin size={18} />
                </a>
              )}
              {CONTACT_INFO.github && (
                <a
                  href={CONTACT_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 glass rounded-xl text-gray-300 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300"
                >
                  <Github size={18} />
                </a>
              )}
            </div>
          </motion.div>

          {/* Bento Tile 2: Main Bio & Engineering Mindset (Lg Col 8) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-8 bento-card rounded-3xl p-7 sm:p-9 relative overflow-hidden border border-indigo-500/20 hover:border-indigo-500/40 flex flex-col justify-between shadow-lg hover:shadow-indigo-500/10"
          >
            <div
              className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"
              aria-hidden="true"
            />

            <div>
              <div className="flex items-center gap-2 mb-4 text-indigo-400">
                <Sparkles size={18} />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Engineering Profile
                </span>
              </div>

              <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                {ABOUT_TEXT}
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {BACKGROUND}
              </p>
            </div>

            {/* Core Competencies Tech Badges */}
            <div className="mt-8 pt-6 border-t border-indigo-500/20">
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-3">
                Core Stack Focus
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Django",
                  "React",
                  "Python",
                  "JavaScript",
                  "PostgreSQL",
                  "C++",
                  "REST APIs",
                  "JWT Auth",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/25 text-gray-200 text-xs font-semibold hover:border-indigo-500/50 hover:bg-indigo-500/20 hover:text-white transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bento Tiles Row: Contact Info Cards (3 Columns) */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.location)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bento-card rounded-2xl p-5 border border-indigo-500/20 hover:border-indigo-500/40 flex items-center gap-4 transition-all duration-300 group block h-full shadow-md hover:shadow-indigo-500/10"
            >
              <div className="p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shrink-0">
                <MapPin size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Location</p>
                <p className="text-gray-100 font-semibold text-sm truncate">{CONTACT_INFO.location}</p>
              </div>
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-4">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="bento-card rounded-2xl p-5 border border-indigo-500/20 hover:border-indigo-500/40 flex items-center gap-4 transition-all duration-300 group block h-full shadow-md hover:shadow-indigo-500/10"
            >
              <div className="p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shrink-0">
                <Mail size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Email</p>
                <p className="text-gray-100 font-semibold text-sm truncate">{CONTACT_INFO.email}</p>
              </div>
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-4">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="bento-card rounded-2xl p-5 border border-indigo-500/20 hover:border-indigo-500/40 flex items-center gap-4 transition-all duration-300 group block h-full shadow-md hover:shadow-indigo-500/10"
            >
              <div className="p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shrink-0">
                <Phone size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Phone</p>
                <p className="text-gray-100 font-semibold text-sm truncate">{CONTACT_INFO.phone}</p>
              </div>
            </a>
          </motion.div>

        </motion.div>
      </div>
    </SectionWrapper>
  );
}
