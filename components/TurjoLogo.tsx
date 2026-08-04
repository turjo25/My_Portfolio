"use client";

import { motion } from "framer-motion";

/**
 * TurjoLogo — Creative animated SVG logo for the navbar.
 * Styled with Cyber Indigo & Violet brand palette.
 */
export default function TurjoLogo() {
  return (
    <motion.div
      className="flex items-center gap-2.5 select-none"
      whileHover="hovered"
      initial="idle"
    >
      {/* ── Badge mark ── */}
      <motion.svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={{
          idle: { rotate: 0 },
          hovered: { rotate: 15, scale: 1.08 },
        }}
        transition={{ type: "spring", stiffness: 320, damping: 18 }}
        aria-hidden="true"
      >
        <defs>
          {/* Main gradient fill (Cyber Indigo & Violet) */}
          <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c7d2fe" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="logo-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Shimmer gradient (sweeps left→right on hover) */}
          <linearGradient id="shimmer-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="white" stopOpacity="0.35" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <clipPath id="hex-clip">
            {/* Hexagon path clipping region */}
            <path d="M19 2 L34 10.5 L34 27.5 L19 36 L4 27.5 L4 10.5 Z" />
          </clipPath>
        </defs>

        {/* Hexagon border ring */}
        <path
          d="M19 2 L34 10.5 L34 27.5 L19 36 L4 27.5 L4 10.5 Z"
          stroke="url(#logo-grad)"
          strokeWidth="1.5"
          fill="rgba(99,102,241,0.12)"
          filter="url(#logo-glow)"
        />

        {/* "T" letterform */}
        <text
          x="19"
          y="26"
          textAnchor="middle"
          fontFamily="Inter, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="20"
          fill="url(#logo-grad)"
          filter="url(#logo-glow)"
        >
          T
        </text>

        {/* Shimmer overlay */}
        <motion.rect
          x="-38"
          y="0"
          width="38"
          height="38"
          fill="url(#shimmer-grad)"
          clipPath="url(#hex-clip)"
          variants={{
            idle: { x: -38 },
            hovered: { x: 76 },
          }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        />
      </motion.svg>

      {/* ── Wordmark ── */}
      <div className="relative overflow-hidden">
        <motion.span
          className="block text-2xl md:text-[1.65rem] font-extrabold tracking-[-0.04em] leading-none"
          style={{
            background:
              "linear-gradient(135deg, #ffffff 0%, #c7d2fe 40%, #6366f1 80%, #8b5cf6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          variants={{
            idle: { letterSpacing: "-0.04em" },
            hovered: { letterSpacing: "-0.02em" },
          }}
          transition={{ duration: 0.25 }}
        >
          TURJO
        </motion.span>

        {/* Animated underline bar */}
        <motion.span
          className="absolute bottom-0 left-0 h-[2px] rounded-full"
          style={{
            background:
              "linear-gradient(90deg, #6366f1, #8b5cf6)",
          }}
          variants={{
            idle: { width: "0%", opacity: 0 },
            hovered: { width: "100%", opacity: 1 },
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}
