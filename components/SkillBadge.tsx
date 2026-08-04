import React from "react";

interface SkillBadgeProps {
  skill: string;
  className?: string;
}

/**
 * SkillBadge Component (Server-friendly)
 * Styled skill chip with hover state and crimson accent border.
 */
export default function SkillBadge({ skill, className = "" }: SkillBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 hover:bg-red-500/15 border border-white/10 hover:border-red-500/35 text-gray-300 hover:text-white transition-all duration-300 cursor-default select-none ${className}`}
    >
      {skill}
    </span>
  );
}
