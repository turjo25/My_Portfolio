"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  skill: string;
  colorClass?: string;
}

const SKILL_COLORS: Record<string, string> = {
  "C++":        "text-violet-300 border-violet-500/30 bg-violet-500/10 hover:bg-violet-500/20 hover:border-violet-400/50",
  "Java":       "text-orange-300 border-orange-500/30 bg-orange-500/10 hover:bg-orange-500/20 hover:border-orange-400/50",
  "Python":     "text-yellow-300 border-yellow-500/30 bg-yellow-500/10 hover:bg-yellow-500/20 hover:border-yellow-400/50",
  "JavaScript": "text-amber-300 border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 hover:border-amber-400/50",
  "PHP":        "text-indigo-300 border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20 hover:border-indigo-400/50",
  "React":      "text-cyan-300 border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 hover:border-cyan-400/50",
  "HTML":       "text-rose-300 border-rose-500/30 bg-rose-500/10 hover:bg-rose-500/20 hover:border-rose-400/50",
  "CSS":        "text-sky-300 border-sky-500/30 bg-sky-500/10 hover:bg-sky-500/20 hover:border-sky-400/50",
  "Django":     "text-emerald-300 border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 hover:border-emerald-400/50",
  "PostgreSQL": "text-blue-300 border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-400/50",
  "MySQL":      "text-teal-300 border-teal-500/30 bg-teal-500/10 hover:bg-teal-500/20 hover:border-teal-400/50",
  "Git":        "text-red-300 border-red-500/30 bg-red-500/10 hover:bg-red-500/20 hover:border-red-400/50",
  "GitHub":     "text-gray-300 border-gray-500/30 bg-gray-500/10 hover:bg-gray-500/20 hover:border-gray-400/50",
  "CodeForces": "text-blue-400 border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-400/50",
  "LeetCode":   "text-amber-400 border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 hover:border-amber-400/50",
  "HackerRank": "text-green-400 border-green-500/30 bg-green-500/10 hover:bg-green-500/20 hover:border-green-400/50",
};

const DEFAULT_COLOR = "text-blue-300 border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-400/50";

export default function SkillBadge({ skill }: SkillBadgeProps) {
  const colorClass = SKILL_COLORS[skill] ?? DEFAULT_COLOR;

  return (
    <motion.span
      variants={{
        hidden: { opacity: 0, scale: 0.7, y: 8 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } },
      }}
      className={`px-3.5 py-1.5 text-sm font-semibold rounded-full border backdrop-blur-sm transition-all duration-300 cursor-default ${colorClass}`}
      whileHover={{ scale: 1.08, y: -2 }}
    >
      {skill}
    </motion.span>
  );
}
