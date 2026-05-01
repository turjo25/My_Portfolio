"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Settings, Database, Wrench, Trophy } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/constants";
import SectionWrapper from "./SectionWrapper";
import SkillBadge from "./SkillBadge";

const CATEGORY_ACCENTS: Record<string, { Icon: React.ComponentType<{ size: number; className: string }>; border: string; glow: string; bar: string }> = {
  "Programming Languages": { Icon: Code2, border: "border-red-500/20", glow: "from-red-500/8", bar: "bg-red-500" },
  "Frontend":              { Icon: Palette, border: "border-rose-500/20",   glow: "from-rose-500/8",   bar: "bg-rose-500" },
  "Backend":               { Icon: Settings, border: "border-orange-500/20",glow: "from-orange-500/8",bar: "bg-orange-500" },
  "Databases":             { Icon: Database, border: "border-red-500/20",   glow: "from-red-500/8",   bar: "bg-red-500" },
  "Tools":                 { Icon: Wrench, border: "border-gray-500/20",   glow: "from-gray-500/8",   bar: "bg-gray-500" },
  "Competitive Programming":{ Icon: Trophy, border: "border-amber-500/20", glow: "from-amber-500/8",  bar: "bg-amber-500" },
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 44, scale: 0.92 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <SectionWrapper id="skills">
      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-14 text-center tracking-tight"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <span className="text-gradient-primary">Skills</span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px", amount: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {SKILL_CATEGORIES.map((category, index) => {
          const accent = CATEGORY_ACCENTS[category.name] ?? {
            Icon: Trophy, border: "border-white/10", glow: "from-red-500/8", bar: "bg-red-500",
          };
          return (
            <motion.div
              key={category.name}
              variants={cardVariants}
              className={`glass rounded-2xl p-6 md:p-7 border ${accent.border} hover:border-opacity-60 transition-all duration-400 relative overflow-hidden group`}
              whileHover={{ scale: 1.03, y: -7 }}
            >
              {/* Top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] ${accent.bar} opacity-40 group-hover:opacity-80 transition-opacity duration-300`} />
              {/* Hover glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${accent.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />

              <div className="relative z-10">
                <div className="flex items-center gap-2.5 mb-5">
                  <accent.Icon size={20} className="text-white" />
                  <h3 className="text-[15px] font-bold text-gray-100 tracking-tight">{category.name}</h3>
                </div>

                <motion.div
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.2 } } }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2"
                >
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
