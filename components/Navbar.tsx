"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { NAV_LINKS } from "@/data/constants";
import { cn } from "@/lib/utils";
import TurjoLogo from "./TurjoLogo";

/**
 * Navbar Component — floating pill style with active section detection,
 * animated underline indicator, glow CTA, and a slide-in mobile drawer.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const reduceMotion = useReducedMotion();

  /* ── scroll + section detection ── */
  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });

    if (pathname === "/projects") {
      setActiveSection("projects");
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }

    const sectionIds = NAV_LINKS.filter((l) => l.href.startsWith("#")).map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observers.forEach((o) => o.disconnect());
    };
  }, [pathname]);

  const handleNavClick = (href: string) => {
    if (href.startsWith("/")) {
      router.push(href);
    } else if (href.startsWith("#")) {
      if (pathname !== "/") {
        router.push("/" + href);
      } else {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={reduceMotion ? { opacity: 1, y: 0 } : { y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3 sm:pt-4"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Floating Navbar Pill Container */}
        <div
          className={cn(
            "relative flex items-center justify-between w-full max-w-7xl rounded-full transition-all duration-300 px-4 md:px-8 glass",
            scrolled ? "h-14 shadow-2xl shadow-red-500/10 border-red-500/20" : "h-16 md:h-20"
          )}
        >
          {/* Subtle top Crimson glow line */}
          <span
            className="pointer-events-none absolute top-0 left-[15%] right-[15%] h-px rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.5), transparent)",
            }}
            aria-hidden="true"
          />

          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick(pathname === "/" ? "#home" : "/")}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 focus:outline-none"
            aria-label="Go to home"
          >
            <TurjoLogo />
          </motion.button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const id = link.href.startsWith("/")
                ? link.href.replace("/", "")
                : link.href.replace("#", "");
              const isActive = activeSection === id;
              const isHovered = hoveredLink === link.name;

              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={cn(
                    "relative px-4 py-2 rounded-xl text-sm font-semibold tracking-wide transition-colors duration-200 focus:outline-none",
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  )}
                >
                  {(isActive || isHovered) && (
                    <motion.span
                      layoutId={reduceMotion ? undefined : "nav-pill"}
                      className="absolute inset-0 rounded-xl bg-white/10 border border-white/12 -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span>{link.name}</span>
                </button>
              );
            })}
          </div>

          {/* CTA Hire Me Button */}
          <button
            onClick={() => handleNavClick("#contact")}
            className="hidden md:flex items-center gap-2 flex-shrink-0 text-xs font-bold rounded-xl px-5 py-2.5 bg-red-600/15 text-red-300 hover:text-white border border-red-500/35 hover:border-red-500 hover:bg-red-600 transition-all duration-300 shadow-md hover:shadow-red-600/25 focus:outline-none uppercase tracking-wider"
            aria-label="Hire me"
          >
            <Zap size={14} className="text-red-400" />
            <span>Hire Me</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden ml-auto flex items-center justify-center w-10 h-10 rounded-xl glass border border-white/10 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={18} className="text-red-400" /> : <Menu size={18} className="text-gray-300" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer (Portal) */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {mobileMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-md"
                  onClick={() => setMobileMenuOpen(false)}
                />

                {/* Drawer Panel */}
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", stiffness: 350, damping: 32 }}
                  className="fixed top-0 right-0 z-[101] h-full w-[80%] max-w-xs flex flex-col pt-8 pb-10 px-6 bg-[#0a0d14] border-l border-white/10 shadow-2xl overflow-y-auto"
                >
                  {/* Close button */}
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="self-end p-2 rounded-xl glass text-gray-400 hover:text-white transition-colors mb-6"
                  >
                    <X size={18} />
                  </button>

                  <div className="mb-8">
                    <TurjoLogo />
                    <p className="text-xs text-gray-400 mt-2">Full-Stack Developer</p>
                  </div>

                  <nav className="flex flex-col gap-1.5">
                    {NAV_LINKS.map((link) => {
                      const id = link.href.startsWith("/")
                        ? link.href.replace("/", "")
                        : link.href.replace("#", "");
                      const isActive = activeSection === id;
                      return (
                        <button
                          key={link.name}
                          onClick={() => handleNavClick(link.href)}
                          className={cn(
                            "flex items-center justify-between w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200",
                            isActive
                              ? "bg-red-500/15 border border-red-500/30 text-white"
                              : "text-gray-400 hover:text-white hover:bg-white/5"
                          )}
                        >
                          <span>{link.name}</span>
                          {isActive && <span className="w-1.5 h-1.5 rounded-full bg-red-500" />}
                        </button>
                      );
                    })}
                  </nav>

                  <button
                    onClick={() => handleNavClick("#contact")}
                    className="mt-auto flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-red-600 text-white font-bold text-sm tracking-wider uppercase shadow-lg shadow-red-600/30"
                  >
                    <Zap size={14} />
                    <span>Hire Me</span>
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
