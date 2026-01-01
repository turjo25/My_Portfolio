"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  skill: string;
}

/**
 * SkillBadge Component
 * Individual skill badge with hover animation
 */
export default function SkillBadge({ skill }: SkillBadgeProps) {
  const badgeVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.6,
      y: 10
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
        type: "spring",
        stiffness: 300,
        damping: 20
      },
    },
  };

  return (
    <motion.span
      variants={badgeVariants}
      className="px-4 py-2 text-sm font-medium bg-gradient-to-br from-blue-500/20 to-blue-600/20 text-blue-300 rounded-full border border-blue-500/30 backdrop-blur-sm"
      whileHover={{ 
        scale: 1.1, 
        backgroundColor: "rgba(59, 130, 246, 0.35)",
        borderColor: "rgba(59, 130, 246, 0.5)",
        y: -2
      }}
    >
      {skill}
    </motion.span>
  );
}

