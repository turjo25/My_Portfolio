"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { CONTACT_INFO, ABOUT_TEXT } from "@/data/constants";
import SectionWrapper from "./SectionWrapper";

/**
 * About Section Component
 * Profile summary and contact information
 */
export default function About() {
  // Main container variants with staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Item variants with refined animation
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  // Contact cards container variants
  const cardsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Contact card variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: -30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <SectionWrapper id="about">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 md:mb-20 text-center tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="text-gradient-blue">
            About Me
          </span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px 0px" }}
          className="space-y-10"
        >
          {/* Profile Summary */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-6 md:p-10 gradient-accent relative overflow-hidden"
          >
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            />
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed relative z-10 font-light">
              {ABOUT_TEXT}
            </p>
          </motion.div>

          {/* Contact Information Cards */}
          <motion.div
            variants={cardsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {/* Location */}
            <motion.a
              variants={cardVariants}
              href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.location)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass rounded-xl p-6 hover:bg-white/10 transition-all duration-500 flex items-center gap-5 relative overflow-hidden"
              whileHover={{ scale: 1.02, y: -4, x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="p-3.5 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl group-hover:from-blue-500/30 group-hover:to-blue-600/30 transition-all duration-500 relative z-10">
                <MapPin size={26} className="text-blue-400" />
              </div>
              <div className="relative z-10">
                <p className="text-sm text-gray-400 mb-1 font-medium tracking-wide">Location</p>
                <p className="text-white font-semibold">{CONTACT_INFO.location}</p>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              variants={cardVariants}
              href={`mailto:${CONTACT_INFO.email}`}
              className="group glass rounded-xl p-6 hover:bg-white/10 transition-all duration-500 flex items-center gap-5 relative overflow-hidden"
              whileHover={{ scale: 1.02, y: -4, x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="p-3.5 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl group-hover:from-purple-500/30 group-hover:to-purple-600/30 transition-all duration-500 relative z-10">
                <Mail size={26} className="text-purple-400" />
              </div>
              <div className="relative z-10 flex-1 min-w-0">
                <p className="text-sm text-gray-400 mb-1 font-medium tracking-wide">Email</p>
                <p className="text-white font-semibold break-all">{CONTACT_INFO.email}</p>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              variants={cardVariants}
              href={`tel:${CONTACT_INFO.phone}`}
              className="group glass rounded-xl p-6 hover:bg-white/10 transition-all duration-500 flex items-center gap-5 relative overflow-hidden"
              whileHover={{ scale: 1.02, y: -4, x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="p-3.5 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl group-hover:from-green-500/30 group-hover:to-green-600/30 transition-all duration-500 relative z-10">
                <Phone size={26} className="text-green-400" />
              </div>
              <div className="relative z-10">
                <p className="text-sm text-gray-400 mb-1 font-medium tracking-wide">Phone</p>
                <p className="text-white font-semibold">{CONTACT_INFO.phone}</p>
              </div>
            </motion.a>

            {/* Social Links */}
            <motion.div
              variants={cardVariants}
              className="glass rounded-xl p-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-transparent" />
              <div className="flex items-center gap-5 relative z-10">
                <div className="p-3.5 bg-gradient-to-br from-gray-500/20 to-gray-600/20 rounded-xl">
                  <Github size={26} className="text-gray-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400 mb-3 font-medium tracking-wide">Connect</p>
                  <div className="flex gap-5">
                    {CONTACT_INFO.linkedin && (
                      <motion.a
                        href={CONTACT_INFO.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                        aria-label="LinkedIn"
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin size={24} />
                      </motion.a>
                    )}
                    {CONTACT_INFO.github && (
                      <motion.a
                        href={CONTACT_INFO.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                        aria-label="GitHub"
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={24} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

