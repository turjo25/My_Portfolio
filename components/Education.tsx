"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { EDUCATION } from "@/data/constants";
import SectionWrapper from "./SectionWrapper";

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.22, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] } },
  };

  const CARD_ACCENTS = [
    { bar: "bg-red-500", border: "border-red-500/20", glow: "from-red-500/8", iconBg: "bg-red-500/15 border-red-500/25", iconColor: "text-red-400", gradeColor: "text-red-300" },
    { bar: "bg-orange-500", border: "border-orange-500/20", glow: "from-orange-500/8", iconBg: "bg-orange-500/15 border-orange-500/25", iconColor: "text-orange-400", gradeColor: "text-orange-300" },
  ];

  return (
    <SectionWrapper id="education">
      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-14 text-center tracking-tight"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <span className="text-gradient-primary">Education</span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px", amount: 0.15 }}
        className="max-w-4xl mx-auto space-y-6"
      >
        {EDUCATION.map((edu, index) => {
          const accent = CARD_ACCENTS[index] ?? CARD_ACCENTS[0];
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative glass rounded-2xl p-6 md:p-8 border ${accent.border} hover:border-opacity-60 transition-all duration-400 group overflow-hidden`}
              whileHover={{ scale: 1.015, x: 8, y: -4 }}
            >
              {/* Left accent bar */}
              <div className={`absolute top-0 bottom-0 left-0 w-[3px] ${accent.bar} opacity-50 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl`} />
              {/* Hover glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${accent.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />

              <div className="flex items-start gap-5 relative z-10 pl-2">
                {/* Icon */}
                <div className={`shrink-0 p-4 rounded-xl border ${accent.iconBg}`}>
                  <GraduationCap size={26} className={accent.iconColor} />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-gray-100 mb-1.5 tracking-tight">
                    {edu.degree}
                  </h3>
                  <p className={`font-semibold text-base mb-3 ${accent.iconColor}`}>
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {/* Period */}
                    <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                      <Calendar size={13} />
                      <span>{edu.period}</span>
                    </div>
                    {/* Grade badge */}
                    <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full border ${accent.iconBg} text-sm font-bold`}>
                      <Award size={13} className={accent.gradeColor} />
                      <span className={accent.gradeColor}>{edu.grade}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline connector */}
              {index < EDUCATION.length - 1 && (
                <motion.div
                  className={`absolute left-9 md:left-10 -bottom-6 w-[2px] h-6 ${accent.bar} opacity-30`}
                  initial={{ scaleY: 0, originY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.22 + 0.5, duration: 0.6 }}
                />
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
