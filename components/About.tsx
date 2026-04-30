"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { CONTACT_INFO, ABOUT_TEXT } from "@/data/constants";
import SectionWrapper from "./SectionWrapper";

export default function About() {
  const [imageError, setImageError] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 36, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -24, scale: 0.96 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
  };

  const contactCards = [
    {
      icon: MapPin, label: "Location", value: CONTACT_INFO.location,
      href: `https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.location)}`,
      iconColor: "text-red-400", iconBg: "bg-red-500/15 border-red-500/25", hoverGlow: "from-red-500/10",
      target: "_blank",
    },
    {
      icon: Mail, label: "Email", value: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
      iconColor: "text-orange-400", iconBg: "bg-orange-500/15 border-orange-500/25", hoverGlow: "from-orange-500/10",
      target: undefined,
    },
    {
      icon: Phone, label: "Phone", value: CONTACT_INFO.phone,
      href: `tel:${CONTACT_INFO.phone}`,
      iconColor: "text-emerald-400", iconBg: "bg-emerald-500/15 border-emerald-500/25", hoverGlow: "from-emerald-500/10",
      target: undefined,
    },
  ];

  return (
    <SectionWrapper id="about">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-14 text-center tracking-tight"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="text-gradient-primary">About Me</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6"
        >
          {/* Profile card + bio */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Photo card */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-1 glass rounded-2xl p-6 flex flex-col items-center justify-center gap-4 relative overflow-hidden group border border-white/8 hover:border-white/14 transition-colors duration-300"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Photo */}
              <div className="relative w-36 h-36 rounded-full p-[2px] bg-gradient-to-br from-red-500 to-orange-600 shadow-lg shadow-red-500/20">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#07090f] border-2 border-[#07090f]">
                  {!imageError ? (
                    <Image
                      src="/profile.jpg"
                      alt="Shardul Turjo"
                      width={144}
                      height={144}
                      className="w-full h-full object-cover object-top"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-600/30 to-orange-600/30">
                      <span className="text-3xl font-bold text-gradient">ST</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="text-center relative z-10">
                <p className="text-white font-bold text-lg">Shardul Rahman Turjo</p>
                <p className="text-red-400 text-sm font-medium mt-0.5">Full-Stack Developer</p>
                <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                  </span>
                  <span className="text-emerald-400 text-xs font-medium">Open to Work</span>
                </div>
              </div>

              <div className="flex gap-3 relative z-10">
                {CONTACT_INFO.linkedin && (
                  <motion.a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer"
                    className="p-2.5 glass rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/15 border border-white/8 hover:border-red-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.15, y: -2 }} aria-label="LinkedIn">
                    <Linkedin size={17} />
                  </motion.a>
                )}
                {CONTACT_INFO.github && (
                  <motion.a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer"
                    className="p-2.5 glass rounded-xl text-gray-400 hover:text-white hover:bg-white/10 border border-white/8 hover:border-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.15, y: -2 }} aria-label="GitHub">
                    <Github size={17} />
                  </motion.a>
                )}
              </div>
            </motion.div>

            {/* Bio card */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-2 glass rounded-2xl p-7 md:p-9 relative overflow-hidden border border-white/8 hover:border-white/12 transition-colors duration-300"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

              <p className="text-red-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">Who I Am</p>
              <p className="text-gray-300 text-base md:text-[17px] leading-relaxed relative z-10">
                {ABOUT_TEXT}
              </p>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-2 mt-6 relative z-10">
                {[
                  { label: "Django", color: "text-emerald-300 border-emerald-500/25 bg-emerald-500/8" },
                  { label: "React", color: "text-blue-300 border-blue-500/25 bg-blue-500/8" },
                  { label: "Python", color: "text-yellow-300 border-yellow-500/25 bg-yellow-500/8" },
                  { label: "JavaScript", color: "text-amber-300 border-amber-500/25 bg-amber-500/8" },
                  { label: "PostgreSQL", color: "text-sky-300 border-sky-500/25 bg-sky-500/8" },
                  { label: "C++", color: "text-violet-300 border-violet-500/25 bg-violet-500/8" },
                ].map((t) => (
                  <span key={t.label} className={`px-3 py-1 text-xs font-semibold rounded-full border backdrop-blur-sm ${t.color}`}>
                    {t.label}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact cards */}
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {contactCards.map((c) => {
              const Icon = c.icon;
              return (
                <motion.a
                  key={c.label}
                  variants={cardVariants}
                  href={c.href}
                  target={c.target}
                  rel={c.target ? "noopener noreferrer" : undefined}
                  className="group glass rounded-xl p-5 border border-white/8 hover:border-white/14 transition-all duration-400 flex items-center gap-4 relative overflow-hidden"
                  whileHover={{ scale: 1.02, y: -3, x: 3 }}
                  transition={{ type: "spring", stiffness: 350, damping: 18 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.hoverGlow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />
                  <div className={`p-3.5 rounded-xl border ${c.iconBg} relative z-10 shrink-0`}>
                    <Icon size={22} className={c.iconColor} />
                  </div>
                  <div className="relative z-10 min-w-0">
                    <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-[0.15em] mb-0.5">{c.label}</p>
                    <p className="text-gray-100 font-semibold truncate">{c.value}</p>
                  </div>
                </motion.a>
              );
            })}

            {/* Social links */}
            <motion.div variants={cardVariants} className="glass rounded-xl p-5 border border-white/8 relative overflow-hidden">
              <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-[0.15em] mb-4">Connect With Me</p>
              <div className="flex gap-3">
                {CONTACT_INFO.linkedin && (
                  <motion.a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-500/12 border border-red-500/25 text-red-300 hover:text-red-200 hover:bg-red-500/20 hover:border-red-400/40 transition-all duration-300 text-sm font-semibold"
                    whileHover={{ scale: 1.04, x: 2 }}>
                    <Linkedin size={16} /> LinkedIn
                  </motion.a>
                )}
                {CONTACT_INFO.github && (
                  <motion.a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/12 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-sm font-semibold"
                    whileHover={{ scale: 1.04, x: 2 }}>
                    <Github size={16} /> GitHub
                  </motion.a>
                )}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
