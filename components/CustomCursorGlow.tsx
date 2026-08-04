"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, useReducedMotion } from "framer-motion";

/**
 * Subtly-Tuned 60FPS Cursor & Multi-Layer Background Glow Spotlight
 * Features GPU-accelerated mouse tracking with an elegant, muted Cyber Indigo ambient glow.
 */
export default function CustomCursorGlow() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const reduceMotion = useReducedMotion();

  // Mouse Motion Values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth Spring Physics for the Outer Ring
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Enable only on fine pointer devices (desktop mouse/trackpad)
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer || reduceMotion) return;

    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);

      if (!isVisible) setIsVisible(true);

      // Fast CSS Variable updates for instant GPU-accelerated background spotlight tracking
      rafId = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--cursor-x", `${clientX}px`);
        document.documentElement.style.setProperty("--cursor-y", `${clientY}px`);
      });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = target.closest(
        'a, button, input, textarea, select, [role="button"], .bento-card, .glass-card, .glass, [data-cursor-hover]'
      );

      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [mouseX, mouseY, isVisible, reduceMotion]);

  if (reduceMotion || !isVisible) return null;

  return (
    <>
      {/* ── 1. Global Viewport Background Spotlight Layer (Subtler Opacities & Radii) ── */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-opacity duration-500"
        aria-hidden="true"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        {/* Layer A: Subtler Atmospheric Aura */}
        <div
          className="absolute inset-0 transition-all duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(${
              isHovered ? "600px" : "500px"
            } circle at var(--cursor-x, -500px) var(--cursor-y, -500px), 
              rgba(99, 102, 241, 0.12) 0%, 
              rgba(139, 92, 246, 0.06) 35%, 
              rgba(99, 102, 241, 0.02) 65%, 
              transparent 80%)`,
          }}
        />

        {/* Layer B: Soft Core Beam */}
        <div
          className="absolute inset-0 transition-all duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(${
              isHovered ? "300px" : "240px"
            } circle at var(--cursor-x, -500px) var(--cursor-y, -500px), 
              rgba(99, 102, 241, 0.15) 0%, 
              rgba(139, 92, 246, 0.07) 45%, 
              transparent 75%)`,
          }}
        />
      </div>

      {/* ── 2. Top Precision Cursor Overlay ── */}
      <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
        {/* Core Precision Indigo Dot */}
        <motion.div
          className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-[0_0_10px_#6366f1] pointer-events-none"
          style={{
            x: mouseX,
            y: mouseY,
            translateX: "-50%",
            translateY: "-50%",
            scale: isClicking ? 0.7 : isHovered ? 1.4 : 1,
          }}
          transition={{ type: "spring", stiffness: 850, damping: 35 }}
        />

        {/* Outer Spring Follower Ring */}
        <motion.div
          className={`fixed top-0 left-0 rounded-full border pointer-events-none transition-colors duration-200 ${
            isHovered
              ? "border-indigo-400/80 bg-indigo-500/12 backdrop-blur-[1px] shadow-[0_0_16px_rgba(99,102,241,0.25)]"
              : "border-indigo-500/30 bg-transparent shadow-[0_0_8px_rgba(99,102,241,0.12)]"
          }`}
          style={{
            x: smoothX,
            y: smoothY,
            translateX: "-50%",
            translateY: "-50%",
            width: isHovered ? 48 : 34,
            height: isHovered ? 48 : 34,
            scale: isClicking ? 0.85 : 1,
          }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
        />
      </div>
    </>
  );
}
