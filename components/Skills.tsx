"use client";

import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/data/constants";
import SectionWrapper from "./SectionWrapper";
import SkillBadge from "./SkillBadge";

/**
 * Skills Section Component
 * Display categorized skills in animated cards
 */
export default function Skills() {
  // Container variants with enhanced stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  // Card variants with scale and rotation
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  // Skills badge container variants
  const badgeContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <SectionWrapper id="skills">
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 md:mb-20 text-center tracking-tight"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <span className="text-gradient-blue">
          Skills
        </span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px", amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {SKILL_CATEGORIES.map((category, index) => (
          <motion.div
            key={category.name}
            variants={cardVariants}
            className="glass rounded-2xl p-7 hover:bg-white/10 transition-all duration-500 relative overflow-hidden group"
            whileHover={{ scale: 1.03, y: -8 }}
            custom={index}
          >
            {/* Gradient accent on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
            />
            <motion.h3
              className="text-xl font-semibold text-white mb-5 tracking-tight relative z-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
            >
              {category.name}
            </motion.h3>
            <motion.div
              variants={badgeContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2.5 relative z-10"
            >
              {category.skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

