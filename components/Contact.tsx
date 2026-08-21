"use client";

import {
  Mail,
  Phone,
  Copy,
  Check,
  Github,
  Linkedin,
  ArrowUpRight,
  MapPin,
  Send,
  Instagram,
  Twitter,
} from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, isEmail: boolean) => {
    navigator.clipboard.writeText(text);
    if (isEmail) {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section
      className="w-full bg-[#f3f3f3] py-16 md:py-24 px-4 md:px-12"
      id="contact"
    >
      <div className="mx-auto">
        {/* Main Light Container Card */}
        <div className="relative overflow-hidden bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-16 border border-[#e5e5e5] shadow-sm">
          {/* Top Status & Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#eee]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f8f8f8] border border-[#e0e0e0] text-xs font-semibold text-[#202020]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for AI Projects & Full-Stack Opportunities
            </div>

            <div className="flex items-center gap-1.5 text-xs font-medium text-[#666]">
              <MapPin className="w-3.5 h-3.5 text-[#202020]" />
              <span>Turin, Italy</span>
            </div>
          </div>

          {/* Heading & Intro */}
          <div className="my-10 ">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#202020] leading-tight">
              Let's build something scalable together.
            </h2>
            <p className="mt-4 text-base md:text-lg text-[#555] font-normal leading-relaxed">
              Feel free to reach out if you're looking for an AI Specialist,
              Full-Stack Developer, have a query, or simply want to connect.
            </p>
          </div>

          {/* Action Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            {/* Email Box */}
            <div className="group relative bg-[#f9f9f9] hover:bg-white border border-[#eaeaea] hover:border-[#ccc] rounded-2xl p-6 transition-all duration-300 shadow-2xs hover:shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white border border-[#e0e0e0] rounded-xl text-[#202020] group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={() => copyToClipboard("kamyarfaz@gmail.com", true)}
                  className="flex items-center gap-1.5 text-xs font-medium text-[#555] hover:text-[#202020] bg-white border border-[#e0e0e0] hover:bg-[#f0f0f0] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-xs uppercase tracking-wider text-neutral-400 font-bold block mb-1">
                Email Address
              </span>
              <a
                href="mailto:kamyarfaz@gmail.com"
                className="text-xl md:text-2xl font-bold text-[#202020] hover:underline break-all"
              >
                kamyarfaz@gmail.com
              </a>

              <div className="mt-6 pt-4 border-t border-[#eaeaea] flex items-center justify-between text-xs text-[#666]">
                <span>Direct Mail</span>
                <a
                  href="mailto:kamyarfaz@gmail.com"
                  className="inline-flex items-center gap-1 text-[#202020] font-semibold hover:underline"
                >
                  Send Email <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Phone Box */}
            <div className="group relative bg-[#f9f9f9] hover:bg-white border border-[#eaeaea] hover:border-[#ccc] rounded-2xl p-6 transition-all duration-300 shadow-2xs hover:shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white border border-[#e0e0e0] rounded-xl text-[#202020] group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={() => copyToClipboard("+39 351 871 8630", false)}
                  className="flex items-center gap-1.5 text-xs font-medium text-[#555] hover:text-[#202020] bg-white border border-[#e0e0e0] hover:bg-[#f0f0f0] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-xs uppercase tracking-wider text-neutral-400 font-bold block mb-1">
                Phone / WhatsApp
              </span>
              <a
                href="tel:+393518718630"
                className="text-xl md:text-2xl font-bold text-[#202020] hover:underline"
              >
                +39 351 871 8630
              </a>

              <div className="mt-6 pt-4 border-t border-[#eaeaea] flex items-center justify-between text-xs text-[#666]">
                <span>Call or Message</span>
                <a
                  href="tel:+393518718630"
                  className="inline-flex items-center gap-1 text-[#202020] font-semibold hover:underline"
                >
                  Call Now <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Socials & Copyright Bar */}
          <div className="pt-8 mt-10 border-t border-[#eee] flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#777] font-medium">
              © 2026 Kamyar Fazlolahnezhad. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <a
                href="https://github.com/kamyarfaz"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 bg-[#f8f8f8] hover:bg-[#ececec] text-[#202020] rounded-xl text-xs font-semibold border border-[#e0e0e0] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/kamyarfaz"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 bg-[#f8f8f8] hover:bg-[#ececec] text-[#202020] rounded-xl text-xs font-semibold border border-[#e0e0e0] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#0077b5]" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://t.me/kamyarfaz"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 bg-[#f8f8f8] hover:bg-[#ececec] text-[#202020] rounded-xl text-xs font-semibold border border-[#e0e0e0] transition-colors"
              >
                <Send className="w-4 h-4 text-[#229ED9]" />
                <span>Telegram</span>
              </a>

              <a
                href="https://instagram.com/kamyarfaz"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 bg-[#f8f8f8] hover:bg-[#ececec] text-[#202020] rounded-xl text-xs font-semibold border border-[#e0e0e0] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#E4405F]" />
                <span>Instagram</span>
              </a>

              <a
                href="https://x.com/kamyarfaz"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 bg-[#f8f8f8] hover:bg-[#ececec] text-[#202020] rounded-xl text-xs font-semibold border border-[#e0e0e0] transition-colors"
              >
                <Twitter className="w-4 h-4 text-[#000000]" />
                <span>X</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
