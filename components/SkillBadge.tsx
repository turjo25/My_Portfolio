import React from "react";

interface SkillBadgeProps {
  skill: string;
  className?: string;
}

/**
 * SkillBadge Component (Server-friendly)
 * Styled skill chip with hover state and Cyber Indigo accent border.
 */
export default function SkillBadge({ skill, className = "" }: SkillBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 hover:border-indigo-500/40 text-gray-200 hover:text-white transition-all duration-300 cursor-default select-none ${className}`}
    >
      {skill}
    </span>
  );
}
