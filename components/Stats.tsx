"use client";

import { motion } from "framer-motion";
import { Code2, FolderGit2, GraduationCap, Briefcase } from "lucide-react";

const STATS = [
  {
    icon: Code2,
    value: "500+",
    label: "Problems Solved",
    sublabel: "LeetCode · Codeforces · HackerRank",
    color: "text-red-400",
    numColor: "text-red-300",
    border: "border-red-500/20",
    hoverBorder: "hover:border-red-500/40",
    glow: "from-red-500/10 to-transparent",
    iconBg: "bg-red-500/15 border border-red-500/25",
    bar: "bg-red-500",
  },
  {
    icon: FolderGit2,
    value: "7+",
    label: "Projects Built",
    sublabel: "Full-Stack & API Integrations",
    color: "text-orange-400",
    numColor: "text-orange-300",
    border: "border-orange-500/20",
    hoverBorder: "hover:border-orange-500/40",
    glow: "from-orange-500/10 to-transparent",
    iconBg: "bg-orange-500/15 border border-orange-500/25",
    bar: "bg-orange-500",
  },
  {
    icon: GraduationCap,
    value: "3.87",
    label: "CGPA / 4.00",
    sublabel: "B.Sc. Software Engineering",
    color: "text-emerald-400",
    numColor: "text-emerald-300",
    border: "border-emerald-500/20",
    hoverBorder: "hover:border-emerald-500/40",
    glow: "from-emerald-500/10 to-transparent",
    iconBg: "bg-emerald-500/15 border border-emerald-500/25",
    bar: "bg-emerald-500",
  },
  {
    icon: Briefcase,
    value: "2+",
    label: "Years Building",
    sublabel: "Production Web Applications",
    color: "text-amber-400",
    numColor: "text-amber-300",
    border: "border-amber-500/20",
    hoverBorder: "hover:border-amber-500/40",
    glow: "from-amber-500/10 to-transparent",
    iconBg: "bg-amber-500/15 border border-amber-500/25",
    bar: "bg-amber-500",
  },
];

export default function Stats() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 28, scale: 0.93 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ scale: 1.04, y: -5 }}
                className={`relative glass rounded-2xl p-5 md:p-6 border ${stat.border} ${stat.hoverBorder} transition-all duration-400 overflow-hidden group cursor-default`}
              >
                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                {/* Top color bar */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] ${stat.bar} opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10 flex flex-col gap-3.5">
                  <div className={`w-10 h-10 rounded-xl ${stat.iconBg} flex items-center justify-center`}>
                    <Icon size={20} className={stat.color} />
                  </div>
                  <div>
                    <p className={`text-2xl md:text-3xl font-bold ${stat.numColor} leading-none mb-1`}>
                      {stat.value}
                    </p>
                    <p className="text-gray-200 font-semibold text-sm md:text-[15px]">{stat.label}</p>
                    <p className="text-gray-500 text-xs mt-0.5 leading-snug">{stat.sublabel}</p>
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
