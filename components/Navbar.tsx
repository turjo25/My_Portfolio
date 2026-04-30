"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
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
  const indicatorRef = useRef<HTMLSpanElement | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  /* ── scroll + section detection ── */
  useEffect(() => {
    setMounted(true);

    // Disable browser scroll restoration to prevent auto-scrolling on reload
    window.history.scrollRestoration = "manual";
    
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const el = document.querySelector(window.location.hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }

    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });

    if (pathname === "/projects") {
      setActiveSection("projects");
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }

    // IntersectionObserver — track which section is visible
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
  }, []);

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
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* ── pill container ── */}
        <div
          className={cn(
            "relative flex items-center justify-between w-full max-w-7xl rounded-full transition-all duration-500 px-4 md:px-8 glass",
            scrolled
              ? "h-14 md:h-16 shadow-2xl shadow-red-500/10"
              : "h-16 md:h-20",
          )}
        >
          {/* subtle top-edge red glow line */}
          <span
            className="pointer-events-none absolute top-0 left-[15%] right-[15%] h-px rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.45), transparent)",
            }}
          />

          {/* ── Logo ── */}
          <motion.button
            onClick={() => handleNavClick(pathname === "/" ? "#home" : "/")}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 focus:outline-none"
            aria-label="Go to home"
          >
            <TurjoLogo />
          </motion.button>

          {/* ── Desktop links ── */}
          <div className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => {
              const id = link.href.startsWith("/") ? link.href.replace("/", "") : link.href.replace("#", "");
              const isActive = activeSection === id;
              const isHovered = hoveredLink === link.name;

              return (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={cn(
                    "relative px-3 py-2 rounded-xl text-sm font-medium tracking-wide transition-colors duration-300 focus:outline-none",
                    isActive ? "text-white" : "text-gray-400 hover:text-white",
                  )}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  {/* hover / active pill background */}
                  <span
                    className="absolute inset-0 rounded-xl transition-all duration-200"
                    style={{
                      opacity: isActive || isHovered ? 1 : 0,
                      background: isActive
                        ? "rgba(255, 255, 255, 0.10)"
                        : "rgba(255, 255, 255, 0.04)",
                      border: isActive
                        ? "1px solid rgba(255, 255, 255, 0.15)"
                        : "1px solid rgba(255, 255, 255, 0.06)",
                    }}
                  />
                  <span className="relative z-10">{link.name}</span>
                </motion.button>
              );
            })}
          </div>

          {/* ── CTA Button ── */}
          <motion.button
            onClick={() => handleNavClick("#contact")}
            className="hidden md:flex items-center gap-2 flex-shrink-0 text-sm font-semibold rounded-xl px-5 py-2.5 transition-all duration-300 focus:outline-none"
            style={{
              background: "rgba(239, 68, 68, 0.1)",
              color: "#ef4444",
              border: "1px solid rgba(239, 68, 68, 0.3)",
              boxShadow: "0 0 20px rgba(239, 68, 68, 0.15)",
            }}
            whileHover={{
              scale: 1.04,
              background: "rgba(239, 68, 68, 0.2)",
              boxShadow: "0 0 32px rgba(239, 68, 68, 0.3)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            aria-label="Hire me"
          >
            <Zap size={14} strokeWidth={2.5} />
            Hire Me
          </motion.button>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden ml-auto flex items-center justify-center w-10 h-10 rounded-xl transition-colors focus:outline-none"
            style={{
              background: mobileMenuOpen
                ? "rgba(239, 68, 68, 0.12)"
                : "rgba(255, 255, 255, 0.05)",
              border: mobileMenuOpen 
                ? "1px solid rgba(239, 68, 68, 0.3)" 
                : "1px solid rgba(255, 255, 255, 0.1)",
            }}
            aria-label="Toggle mobile menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X size={18} className="text-red-400" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu size={18} className="text-gray-300" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile Drawer (portal) ── */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {mobileMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  key="backdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="fixed inset-0 z-[100]"
                  style={{
                    background: "rgba(2,12,27,0.75)",
                    backdropFilter: "blur(6px)",
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                />

                {/* Drawer panel */}
                <motion.div
                  key="drawer"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", stiffness: 320, damping: 32 }}
                  className="fixed top-0 right-0 z-[101] h-full w-[75%] max-w-xs flex flex-col pt-8 pb-10 px-6 overflow-y-auto"
                  style={{
                    background: "rgba(10, 10, 10, 0.97)",
                    borderLeft: "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: "-24px 0 80px rgba(0,0,0,0.8)",
                  }}
                >
                  {/* Close */}
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="self-end p-2 rounded-lg mb-8 text-gray-400 hover:text-white transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <X size={18} />
                  </button>

                  {/* Brand in drawer */}
                  <div className="mb-8">
                    <TurjoLogo />
                    <p className="text-xs text-gray-500 mt-2 ml-1">
                      Full-Stack Developer
                    </p>
                  </div>

                  {/* Links */}
                  <nav className="flex flex-col gap-1">
                    {NAV_LINKS.map((link, i) => {
                      const id = link.href.startsWith("/") ? link.href.replace("/", "") : link.href.replace("#", "");
                      const isActive = activeSection === id;
                      return (
                        <motion.button
                          key={link.name}
                          onClick={() => handleNavClick(link.href)}
                          initial={{ x: 24, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                          className={cn(
                            "flex items-center gap-3 w-full text-left px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 focus:outline-none",
                            isActive
                              ? "text-white"
                              : "text-gray-400 hover:text-white",
                          )}
                          style={
                            isActive
                              ? {
                                  background: "rgba(255, 255, 255, 0.08)",
                                  border: "1px solid rgba(255, 255, 255, 0.12)",
                                }
                              : {
                                  background: "transparent",
                                  border: "1px solid transparent",
                                }
                          }
                        >
                          {/* active bar */}
                          {isActive && (
                            <span
                              className="w-1 h-4 rounded-full flex-shrink-0 bg-red-500"
                            />
                          )}
                          {link.name}
                        </motion.button>
                      );
                    })}
                  </nav>

                  {/* CTA in drawer */}
                  <motion.button
                    onClick={() => handleNavClick("#contact")}
                    initial={{ y: 16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.35, duration: 0.35 }}
                    className="mt-auto flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold focus:outline-none"
                    style={{
                      background: "rgba(239, 68, 68, 0.1)",
                      color: "#ef4444",
                      border: "1px solid rgba(239, 68, 68, 0.3)",
                      boxShadow: "0 0 24px rgba(239, 68, 68, 0.2)",
                    }}
                  >
                    <Zap size={14} strokeWidth={2.5} />
                    Hire Me
                  </motion.button>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
