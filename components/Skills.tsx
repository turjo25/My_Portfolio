"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  Palette,
  Settings,
  Database,
  Wrench,
  Trophy,
  Terminal,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/constants";
import SectionWrapper from "./SectionWrapper";
import SkillBadge from "./SkillBadge";

const CATEGORY_ICONS: Record<string, React.ComponentType<{ size?: number | string; className?: string }>> = {
  "Programming Languages": Code2,
  Frontend: Palette,
  Backend: Settings,
  Databases: Database,
  Tools: Wrench,
  "Competitive Programming": Trophy,
};

export default function Skills() {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: reduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <SectionWrapper id="skills">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-indigo-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">
            Technical Expertise
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading">
            <span className="text-gradient-primary">Skills & Technologies</span>
          </h2>
        </div>

        {/* Skills Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {SKILL_CATEGORIES.map((category) => {
            const IconComponent = CATEGORY_ICONS[category.name] ?? Terminal;

            return (
              <motion.div
                key={category.name}
                variants={cardVariants}
                whileHover={reduceMotion ? {} : { y: -4, scale: 1.015 }}
                className="bento-card rounded-2xl p-6 border border-indigo-500/20 hover:border-indigo-500/45 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-indigo-500/10"
              >
                {/* Top Indigo Accent Line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                />

                {/* Ambient Glow */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shrink-0">
                      <IconComponent size={18} />
                    </div>
                    <h3 className="text-base font-bold text-gray-100 font-heading tracking-tight">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <SkillBadge key={skill} skill={skill} />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
