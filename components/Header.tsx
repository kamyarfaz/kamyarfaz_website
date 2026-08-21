"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Skills", id: "expertise" },
  { label: "Projects", id: "projects" },
  { label: "Open Source", id: "openSourceProjects" },
  { label: "Blog", id: "blog" },
  { label: "Certifications", id: "Certifications" },
  { label: "Education", id: "education" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 pt-4 pb-2 px-4 transition-all duration-300"
    >
      <div
        className={`max-w-[1440px] mx-auto rounded-2xl transition-all duration-300 px-6 py-3.5 flex items-center justify-between border ${
          scrolled
            ? "bg-white/80 backdrop-blur-md border-[#e0e0e0] shadow-xs"
            : "bg-white/40 backdrop-blur-xs border-transparent"
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-2xl font-black tracking-tighter text-[#202020] hover:opacity-80 transition-opacity cursor-pointer relative bottom-1"
        >
          Kamy<span className="text-neutral-400">.</span>
        </button>

        {/* Desktop Navigation (Visible ONLY on >= 1024px) */}
        <nav className="hidden md:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-[#333]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative hover:text-[#000] transition-colors py-1 group cursor-pointer"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#202020] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#202020] hover:bg-[#000] text-white text-xs font-bold tracking-wide rounded-xl transition-all duration-200 shadow-2xs hover:shadow-sm cursor-pointer"
          >
            <span>Contact Me</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </button>
        </div>

        {/* Mobile / Tablet Hamburger Button (Visible on < 1024px) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl bg-[#f0f0f0] hover:bg-[#e5e5e5] text-[#202020] transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu (< 1024px) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl border border-[#e5e5e5] rounded-3xl p-6 shadow-xl z-50"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-3 text-base font-bold text-[#202020] hover:bg-[#f5f5f5] rounded-xl transition-colors flex items-center justify-between group text-left cursor-pointer"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400" />
                </button>
              ))}

              <div className="pt-4 mt-2 border-t border-[#eee]">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#202020] text-white text-sm font-bold rounded-2xl shadow-sm active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>Contact Me</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
