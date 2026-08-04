"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin, ArrowUpRight, Send } from "lucide-react";
import { CONTACT_INFO, PERSONAL_INFO } from "@/data/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();
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

  const contactLinks = [
    {
      href: `mailto:${CONTACT_INFO.email}`,
      icon: Mail,
      label: "Send Email",
      sub: CONTACT_INFO.email,
    },
    {
      href: `tel:${CONTACT_INFO.phone}`,
      icon: Phone,
      label: "Call Me",
      sub: CONTACT_INFO.phone,
    },
    {
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.location)}`,
      icon: MapPin,
      label: CONTACT_INFO.location,
      sub: "View on Google Maps",
      external: true,
    },
  ];

  return (
    <footer id="contact" className="relative border-t border-white/8 bg-[#08090d]">
      {/* Ambient Gradient Backdrop */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
      >
        {/* Footer Header */}
        <motion.div variants={itemVariants} className="text-center mb-14">
          <p className="text-red-400 text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center justify-center gap-1.5">
            <Send size={14} />
            Let&apos;s Connect
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading mb-4">
            <span className="text-gradient-primary">Get In Touch</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Open for full-stack engineering roles, technical projects, or open-source collaborations. Drop a line!
          </p>
        </motion.div>

        {/* Contact Method Cards Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-12">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="bento-card rounded-2xl p-5 border border-white/8 hover:border-red-500/35 transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/25 text-red-400 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300 shrink-0">
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-100 font-bold text-sm truncate">{link.label}</p>
                    <p className="text-gray-400 text-xs truncate">{link.sub}</p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-gray-500 group-hover:text-red-400 transition-colors duration-300 shrink-0 ml-2" />
              </a>
            );
          })}
        </motion.div>

        {/* Social Links Row */}
        <motion.div variants={itemVariants} className="flex justify-center gap-4 mb-14">
          {CONTACT_INFO.linkedin && (
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3 rounded-xl bento-card border border-white/10 text-gray-200 hover:text-white hover:border-red-500/40 hover:bg-red-500/10 transition-all duration-300 font-semibold text-sm"
            >
              <Linkedin size={18} className="text-red-400" />
              <span>LinkedIn</span>
            </a>
          )}
          {CONTACT_INFO.github && (
            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3 rounded-xl bento-card border border-white/10 text-gray-200 hover:text-white hover:border-red-500/40 hover:bg-red-500/10 transition-all duration-300 font-semibold text-sm"
            >
              <Github size={18} className="text-gray-300" />
              <span>GitHub</span>
            </a>
          )}
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="text-center text-gray-500 text-xs sm:text-sm border-t border-white/8 pt-8 font-medium"
        >
          © {currentYear}{" "}
          <span className="text-gray-300 font-semibold">{PERSONAL_INFO.name}</span>
          {" · "}All rights reserved. Built with Next.js & Tailwind CSS.
        </motion.div>
      </motion.div>
    </footer>
  );
}
