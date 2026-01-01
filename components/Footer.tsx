"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import { CONTACT_INFO } from "@/data/constants";

/**
 * Footer / Contact Section
 * Production-ready, accessible, optimized
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const reduceMotion = useReducedMotion();

  /* Common viewport animation props */
  const viewProps = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.3 },
  };

  /* Animation Variants */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: reduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: reduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: reduceMotion ? 1 : 0.9, y: reduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <footer
      id="contact"
      className="relative border-t border-white/10 glass-strong"
    >
      {/* Gradient background accent */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={reduceMotion ? { duration: 0 } : { duration: 1.2 }}
      />

      <motion.div
        {...viewProps}
        variants={containerVariants}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center space-y-6 mb-12">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            <span className="text-gradient-blue">Get In Touch</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 max-w-3xl mx-auto text-lg font-light leading-relaxed"
          >
            I am always open to discussing new projects, creative ideas,or opportunities to be part of your vision.
          </motion.p>
        </motion.div>

        {/* Contact Buttons */}
        <motion.div
          {...viewProps}
          variants={buttonContainerVariants}
          className="flex flex-wrap justify-center gap-5 mb-12"
        >
          {/* Email */}
          <motion.a
            variants={buttonVariants}
            href={`mailto:${CONTACT_INFO.email}`}
            className="group glass rounded-xl px-6 py-3 border border-white/10 transition-all duration-500 flex items-center gap-3 relative overflow-hidden hover:bg-white/10"
            whileHover={reduceMotion ? {} : { scale: 1.05, y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Mail size={20} className="text-blue-400 relative z-10" />
            <span className="text-gray-200 font-medium relative z-10">
              Email
            </span>
          </motion.a>

          {/* Phone */}
          <motion.a
            variants={buttonVariants}
            href={`tel:${CONTACT_INFO.phone}`}
            title="Call (mobile devices)"
            className="group glass rounded-xl px-6 py-3 border border-white/10 transition-all duration-500 flex items-center gap-3 relative overflow-hidden hover:bg-white/10"
            whileHover={reduceMotion ? {} : { scale: 1.05, y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Phone size={20} className="text-green-400 relative z-10" />
            <span className="text-gray-200 font-medium relative z-10">
              Call
            </span>
          </motion.a>

          {/* Location */}
          <motion.a
            variants={buttonVariants}
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              CONTACT_INFO.location
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass rounded-xl px-6 py-3 border border-white/10 transition-all duration-500 flex items-center gap-3 relative overflow-hidden hover:bg-white/10"
            whileHover={reduceMotion ? {} : { scale: 1.05, y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <MapPin size={20} className="text-purple-400 relative z-10" />
            <span className="text-gray-200 font-medium relative z-10">
              Location
            </span>
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          {...viewProps}
          variants={buttonContainerVariants}
          className="flex justify-center gap-6 mb-12"
        >
          {CONTACT_INFO.linkedin && (
            <motion.a
              variants={buttonVariants}
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group p-4 glass border border-white/10 rounded-xl transition-all duration-500 relative overflow-hidden hover:bg-blue-500/20"
              whileHover={reduceMotion ? {} : { scale: 1.15, rotate: 5, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Linkedin size={26} className="text-blue-400 relative z-10" />
            </motion.a>
          )}

          {CONTACT_INFO.github && (
            <motion.a
              variants={buttonVariants}
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group p-4 glass border border-white/10 rounded-xl transition-all duration-500 relative overflow-hidden hover:bg-gray-500/20"
              whileHover={reduceMotion ? {} : { scale: 1.15, rotate: -5, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Github size={26} className="text-gray-400 relative z-10" />
            </motion.a>
          )}
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="text-center text-gray-400 text-sm border-t border-white/10 pt-10 font-light tracking-wide"
        >
          © {currentYear} MD. SHARDUL RAHMAN TURJO. All rights reserved.
        </motion.div>
      </motion.div>
    </footer>
  );
}
