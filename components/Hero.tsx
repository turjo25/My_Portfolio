"use client";

import { motion } from "framer-motion";
import { ArrowDown, Code2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/constants";
import SectionWrapper from "./SectionWrapper";

/**
 * Hero Section Component
 * Main landing section with name, role, tagline, and CTA buttons
 */
export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Container variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Word animation variants - accepts index as custom prop
  const wordVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.2 + i * 0.08,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  // Item variants for text elements
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  // Button container variants
  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Button variants
  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <SectionWrapper id="home" className="flex items-center justify-center relative">
      {/* Gradient background accent */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center space-y-12 w-full relative z-10"
      >
        {/* Main Heading */}
        <motion.div className="space-y-6">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            variants={itemVariants}
            itemProp="name"
          >
            <motion.span className="text-gradient">
              {PERSONAL_INFO.name.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-4"
                  variants={wordVariants}
                  custom={i}
                >
                  {word}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>

          <motion.div variants={itemVariants}>
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light tracking-tight">
              {PERSONAL_INFO.role}
            </p>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
            variants={itemVariants}
          >
            {PERSONAL_INFO.tagline}
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={buttonContainerVariants}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-4"
        >
          <motion.button
            variants={buttonVariants}
            onClick={() => scrollToSection("#projects")}
            className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-xl font-semibold transition-all duration-500 flex items-center gap-3 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            aria-label="View projects section"
          >
            <Code2 size={22} />
            <span className="tracking-wide">View Projects</span>
            <ArrowDown
              size={18}
              className="group-hover:translate-y-1 transition-transform duration-300"
            />
          </motion.button>

          <motion.button
            variants={buttonVariants}
            onClick={() => scrollToSection("#contact")}
            className="px-10 py-4 glass border border-white/20 hover:border-white/30 text-white rounded-xl font-semibold transition-all duration-500 hover:bg-white/10 tracking-wide"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            aria-label="Contact me"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - positioned relative to section */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 2.5,
            ease: [0.4, 0, 0.6, 1]
          }}
          className="cursor-pointer p-3 rounded-full glass hover:bg-white/10 transition-colors duration-300"
          onClick={() => scrollToSection("#about")}
        >
          <ArrowDown size={24} className="text-gray-400" />
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}

