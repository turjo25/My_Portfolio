"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin, ArrowUpRight } from "lucide-react";
import { CONTACT_INFO } from "@/data/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const reduceMotion = useReducedMotion();

  const vp = { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.25 } };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: reduceMotion ? { duration: 0 } : { staggerChildren: 0.13, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 36 },
    visible: { opacity: 1, y: 0, transition: reduceMotion ? { duration: 0 } : { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] } },
  };

  const btnVariants = {
    hidden: { opacity: 0, scale: reduceMotion ? 1 : 0.9, y: reduceMotion ? 0 : 18 },
    visible: { opacity: 1, scale: 1, y: 0, transition: reduceMotion ? { duration: 0 } : { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
  };

  const contactLinks = [
    {
      href: `mailto:${CONTACT_INFO.email}`,
      icon: Mail, label: "Send Email", sub: CONTACT_INFO.email,
      color: "text-red-300", iconBg: "bg-red-500/12 border-red-500/25 hover:bg-red-500/22 hover:border-red-400/45",
      glow: "from-red-500/8",
    },
    {
      href: `tel:${CONTACT_INFO.phone}`,
      icon: Phone, label: "Call Me", sub: CONTACT_INFO.phone,
      color: "text-rose-300", iconBg: "bg-rose-500/12 border-rose-500/25 hover:bg-rose-500/22 hover:border-rose-400/45",
      glow: "from-rose-500/8",
    },
    {
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.location)}`,
      icon: MapPin, label: CONTACT_INFO.location, sub: "View on Maps",
      color: "text-orange-300", iconBg: "bg-orange-500/12 border-orange-500/25 hover:bg-orange-500/22 hover:border-orange-400/45",
      glow: "from-orange-500/8", external: true,
    },
  ];

  const socialLinks = [
    {
      href: CONTACT_INFO.linkedin!, icon: Linkedin, label: "LinkedIn",
      color: "text-red-300", bg: "bg-red-500/12 border-red-500/25 hover:bg-red-500/22 hover:border-red-400/45",
    },
    {
      href: CONTACT_INFO.github!, icon: Github, label: "GitHub",
      color: "text-gray-300", bg: "bg-white/6 border-white/12 hover:bg-white/12 hover:border-white/22",
    },
  ];

  return (
    <footer id="contact" className="relative border-t border-white/8">
      {/* Gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-500/4 via-transparent to-orange-500/4 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        {...vp}
        variants={containerVariants}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-14">
          <p className="text-red-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
            <span className="text-gradient-primary">Let&apos;s Work Together</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          {...vp}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
        >
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                variants={btnVariants}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`group glass rounded-2xl p-5 border transition-all duration-400 flex items-center gap-4 relative overflow-hidden ${link.iconBg}`}
                whileHover={reduceMotion ? {} : { scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 320, damping: 18 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${link.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />
                <div className={`shrink-0 p-3 rounded-xl border ${link.iconBg} relative z-10`}>
                  <Icon size={20} className={link.color} />
                </div>
                <div className="relative z-10 min-w-0">
                  <p className="text-gray-100 font-semibold text-sm truncate">{link.label}</p>
                  <p className="text-gray-500 text-xs truncate">{link.sub}</p>
                </div>
                <ArrowUpRight size={15} className="text-gray-600 group-hover:text-gray-300 transition-colors duration-300 relative z-10 ml-auto shrink-0" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Social icons */}
        <motion.div {...vp} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }} className="flex justify-center gap-4 mb-14">
          {socialLinks.map((s) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.label}
                variants={btnVariants}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`flex items-center gap-2.5 px-5 py-3 glass border rounded-xl transition-all duration-300 font-semibold text-sm ${s.bg} ${s.color}`}
                whileHover={reduceMotion ? {} : { scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.96 }}
              >
                <Icon size={18} />
                {s.label}
              </motion.a>
            );
          })}
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="text-center text-gray-600 text-sm border-t border-white/8 pt-8 font-medium"
        >
          © {currentYear}{" "}
          <span className="text-gray-400">MD. Shardul Rahman Turjo</span>
          {" · "}All rights reserved.
        </motion.div>
      </motion.div>
    </footer>
  );
}
