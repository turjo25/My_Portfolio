"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  ArrowUpRight,
  Send,
  Check,
  Copy,
  User,
  Tag,
  MessageSquare,
  Loader2,
  Sparkles,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { CONTACT_INFO, PERSONAL_INFO } from "@/data/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const reduceMotion = useReducedMotion();

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: reduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const contactLinks = [
    {
      href: `mailto:${CONTACT_INFO.email}`,
      icon: Mail,
      label: "Email",
      sub: CONTACT_INFO.email,
      isEmail: true,
    },
    {
      href: `tel:${CONTACT_INFO.phone}`,
      icon: Phone,
      label: "Phone",
      sub: CONTACT_INFO.phone,
    },
    {
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        CONTACT_INFO.location
      )}`,
      icon: MapPin,
      label: "Location",
      sub: CONTACT_INFO.location,
      external: true,
    },
  ];

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch (err: any) {
      console.error("Submission error:", err);
      setStatus("error");
      setErrorMessage("Network error occurred. Please check your connection and try again.");
    }
  };

  const handleResetForm = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <footer id="contact" className="relative bg-[#0b0c10]">
      {/* Glowing Indigo Divider Line at Top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent pointer-events-none" />

      {/* Ambient Cyber Indigo Blur Backdrop */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-14">
          <p className="text-indigo-400 text-xs font-bold uppercase tracking-[0.2em] mb-2.5 flex items-center justify-center gap-1.5">
            <Sparkles size={14} className="text-indigo-400" />
            Let&apos;s Connect
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading mb-4">
            <span className="text-gradient-primary">Get In Touch</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Have a project in mind, job opportunity, or technical question? Send a message directly using the form below!
          </p>
        </motion.div>

        {/* 2-Column Main Layout: Contact Info (Left) + Send Message Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-16">
          
          {/* Left Column: Direct Info & Social Cards */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Availability Status Card */}
            <div className="bento-card rounded-2xl p-5 border border-indigo-500/25 flex items-center gap-3.5 bg-gradient-to-r from-indigo-500/15 via-indigo-500/5 to-transparent shadow-lg shadow-indigo-500/5">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div>
                <p className="text-gray-100 font-semibold text-sm">Available for Opportunities</p>
                <p className="text-gray-400 text-xs">Open for Full-Stack, Backend & Engineering Roles</p>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="flex flex-col gap-3.5">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <div key={link.label} className="relative group">
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="bento-card rounded-2xl p-4 sm:p-5 border border-indigo-500/20 hover:border-indigo-500/45 transition-all duration-300 flex items-center justify-between group shadow-md hover:shadow-indigo-500/10"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shrink-0">
                          <Icon size={20} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-gray-400 text-xs font-medium">{link.label}</p>
                          <p className="text-gray-100 font-bold text-sm truncate">{link.sub}</p>
                        </div>
                      </div>
                      
                      {link.isEmail ? (
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          title="Copy Email Address"
                          className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 hover:bg-indigo-500/25 text-gray-300 hover:text-indigo-400 transition-colors duration-200 shrink-0 ml-2"
                        >
                          {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                        </button>
                      ) : (
                        <ArrowUpRight size={18} className="text-gray-500 group-hover:text-indigo-400 transition-colors duration-300 shrink-0 ml-2" />
                      )}
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3.5 pt-1">
              {CONTACT_INFO.linkedin && (
                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 p-3.5 rounded-xl bento-card border border-indigo-500/25 text-gray-200 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/15 transition-all duration-300 font-semibold text-sm"
                >
                  <Linkedin size={18} className="text-indigo-400" />
                  <span>LinkedIn</span>
                </a>
              )}
              {CONTACT_INFO.github && (
                <a
                  href={CONTACT_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 p-3.5 rounded-xl bento-card border border-indigo-500/25 text-gray-200 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/15 transition-all duration-300 font-semibold text-sm"
                >
                  <Github size={18} className="text-gray-300" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </motion.div>

          {/* Right Column: Send Message Form */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <div className="bento-card rounded-2xl p-6 sm:p-8 border border-indigo-500/25 relative overflow-hidden shadow-xl shadow-indigo-500/10">
              
              {/* Inner Header with Glowing Gradient Divider */}
              <div className="flex items-center gap-3 mb-6 pb-4 relative">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/25 text-indigo-400">
                  <Send size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-100">Send Me a Message</h3>
                  <p className="text-xs text-gray-400">Fill out the form below for direct contact.</p>
                </div>
                {/* Glowing bottom line divider */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-indigo-500/35 via-indigo-500/15 to-transparent" />
              </div>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 px-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-100 mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-400 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you for getting in touch! Your message has been dispatched to <span className="text-indigo-400 font-medium">{CONTACT_INFO.email}</span>. I will get back to you shortly.
                  </p>
                  <button
                    onClick={handleResetForm}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-sm transition-colors duration-200 shadow-lg shadow-indigo-600/30"
                  >
                    <Send size={14} />
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-medium flex items-center gap-2">
                      <AlertCircle size={16} className="shrink-0 text-indigo-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Row: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Input */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Your Name <span className="text-indigo-400">*</span>
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Johnson"
                          className="w-full bg-[#0e111a] border border-indigo-500/20 hover:border-indigo-500/40 focus:border-indigo-500/80 focus:ring-2 focus:ring-indigo-500/25 rounded-xl py-2.5 pl-10 pr-4 text-sm text-gray-100 placeholder-gray-500 transition-all outline-none"
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Your Email <span className="text-indigo-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@example.com"
                          className="w-full bg-[#0e111a] border border-indigo-500/20 hover:border-indigo-500/40 focus:border-indigo-500/80 focus:ring-2 focus:ring-indigo-500/25 rounded-xl py-2.5 pl-10 pr-4 text-sm text-gray-100 placeholder-gray-500 transition-all outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Subject
                    </label>
                    <div className="relative">
                      <Tag size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        id="contact-subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Project Collaboration / Job Opportunity"
                        className="w-full bg-[#0e111a] border border-indigo-500/20 hover:border-indigo-500/40 focus:border-indigo-500/80 focus:ring-2 focus:ring-indigo-500/25 rounded-xl py-2.5 pl-10 pr-4 text-sm text-gray-100 placeholder-gray-500 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label htmlFor="contact-message" className="block text-xs font-semibold text-gray-300">
                        Message <span className="text-indigo-400">*</span>
                      </label>
                      <span className="text-[11px] text-gray-500">
                        {formData.message.length} chars
                      </span>
                    </div>
                    <div className="relative">
                      <MessageSquare size={16} className="absolute left-3.5 top-3 text-gray-500" />
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Hello Turjo, I'd like to discuss a project..."
                        className="w-full bg-[#0e111a] border border-indigo-500/20 hover:border-indigo-500/40 focus:border-indigo-500/80 focus:ring-2 focus:ring-indigo-500/25 rounded-xl py-2.5 pl-10 pr-4 text-sm text-gray-100 placeholder-gray-500 transition-all outline-none resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

        {/* Footer Bottom / Copyright */}
        <div className="relative pt-8 text-center text-gray-500 text-xs sm:text-sm font-medium">
          {/* Glowing bottom line divider */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/25 to-transparent" />
          
          © {currentYear}{" "}
          <span className="text-gray-300 font-semibold">{PERSONAL_INFO.name}</span>
          {" · "}All rights reserved. Built with Next.js & Tailwind CSS.
        </div>
      </motion.div>
    </footer>
  );
}
