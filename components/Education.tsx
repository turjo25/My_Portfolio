"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Calendar, Award, Building2 } from "lucide-react";
import { EDUCATION } from "@/data/constants";
import SectionWrapper from "./SectionWrapper";

export default function Education() {
  const reduceMotion = useReducedMotion();

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
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <SectionWrapper id="education">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-red-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">
            Academic Background
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading">
            <span className="text-gradient-primary">Education</span>
          </h2>
        </div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-6 relative"
        >
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={reduceMotion ? {} : { y: -3 }}
              className="bento-card rounded-3xl p-6 sm:p-8 border border-white/8 hover:border-red-500/35 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Left Crimson Accent Line */}
              <div
                className="absolute top-0 bottom-0 left-0 w-[4px] bg-red-600 rounded-l-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              />

              {/* Ambient Glow */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-red-500/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                aria-hidden="true"
              />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10 pl-2 sm:pl-3">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="p-3.5 rounded-2xl bg-red-500/10 border border-red-500/25 text-red-400 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300 shrink-0 mt-1 sm:mt-0">
                    <GraduationCap size={24} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white font-heading tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-red-400 font-semibold text-sm sm:text-base mt-1 flex items-center gap-1.5">
                      <Building2 size={15} />
                      <span>{edu.institution}</span>
                    </p>
                  </div>
                </div>

                {/* Grade & Period Details */}
                <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-3 sm:gap-2 border-t sm:border-t-0 border-white/8 pt-4 sm:pt-0">
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs sm:text-sm font-medium bg-white/5 px-3 py-1.5 rounded-lg border border-white/8">
                    <Calendar size={14} className="text-red-400" />
                    <span>{edu.period}</span>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs sm:text-sm font-bold">
                    <Award size={14} />
                    <span>{edu.grade}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
