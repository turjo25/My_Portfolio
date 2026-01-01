"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { EDUCATION } from "@/data/constants";
import SectionWrapper from "./SectionWrapper";

/**
 * Education Section Component
 * Display educational background in timeline-style cards
 */
export default function Education() {
  // Enhanced container variants with staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.1,
      },
    },
  };

  // Enhanced item variants with scale and rotation
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -60,
      scale: 0.95,
      rotateY: -10
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  // Content variants for internal elements
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Content item variants
  const contentItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <SectionWrapper id="education">
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 md:mb-20 text-center tracking-tight"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <span className="text-gradient-blue">
          Education
        </span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px", amount: 0.2 }}
        className="max-w-4xl mx-auto space-y-7"
      >
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative glass rounded-2xl p-7 hover:bg-white/10 transition-all duration-500 group overflow-hidden"
            whileHover={{ scale: 1.02, x: 12, y: -4 }}
          >
            {/* Gradient accent on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.25 + 0.3, duration: 0.6 }}
            />
            
            <motion.div
              variants={contentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-start gap-5 relative z-10"
            >
              {/* Icon */}
              <motion.div
                variants={contentItemVariants}
                className="p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl group-hover:from-blue-500/30 group-hover:to-blue-600/30 transition-all duration-500"
              >
                <GraduationCap size={28} className="text-blue-400" />
              </motion.div>

              {/* Content */}
              <motion.div variants={contentVariants} className="flex-1">
                <motion.h3
                  variants={contentItemVariants}
                  className="text-xl font-semibold text-white mb-3 tracking-tight"
                >
                  {edu.degree}
                </motion.h3>
                <motion.p
                  variants={contentItemVariants}
                  className="text-blue-400 font-semibold mb-2.5 text-lg"
                >
                  {edu.institution}
                </motion.p>
                <motion.p
                  variants={contentItemVariants}
                  className="text-gray-400 text-sm mb-2.5 font-medium"
                >
                  {edu.period}
                </motion.p>
                <motion.p
                  variants={contentItemVariants}
                  className="text-gray-200 font-semibold text-base"
                >
                  {edu.grade}
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Timeline connector (except for last item) */}
            {index < EDUCATION.length - 1 && (
              <motion.div
                className="absolute left-9 top-24 w-0.5 h-8 bg-gradient-to-b from-blue-500/40 to-blue-500/20"
                initial={{ scaleY: 0, originY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ 
                  delay: index * 0.25 + 0.6,
                  duration: 0.7,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

