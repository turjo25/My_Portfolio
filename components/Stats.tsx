"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Code2, FolderGit2, GraduationCap, Briefcase } from "lucide-react";

const STATS = [
  {
    icon: Code2,
    value: "500+",
    label: "Problems Solved",
    sublabel: "LeetCode · Codeforces · HackerRank",
    badge: "Algorithmic Practice",
  },
  {
    icon: FolderGit2,
    value: "7+",
    label: "Projects Built",
    sublabel: "Full-Stack Web & REST APIs",
    badge: "Production Ready",
  },
  {
    icon: GraduationCap,
    value: "3.87",
    label: "CGPA / 4.00",
    sublabel: "B.Sc. Software Engineering",
    badge: "Academic Honor",
  },
  {
    icon: Briefcase,
    value: "2+",
    label: "Years Experience",
    sublabel: "Building Web Applications",
    badge: "Django & React",
  },
];

export default function Stats() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: reduceMotion ? 0 : index * 0.08,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={reduceMotion ? {} : { y: -4, scale: 1.02 }}
                className="bento-card rounded-2xl p-5 md:p-6 border border-white/8 hover:border-red-500/35 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Glow Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between h-full gap-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/25 flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-300/80 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20">
                      {stat.badge}
                    </span>
                  </div>

                  <div>
                    <p className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight mb-1">
                      {stat.value}
                    </p>
                    <p className="text-gray-200 font-semibold text-sm sm:text-base">
                      {stat.label}
                    </p>
                    <p className="text-gray-400 text-xs mt-0.5 leading-snug">
                      {stat.sublabel}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
