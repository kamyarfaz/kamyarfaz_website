"use client"

import { Contact } from "@/components/Contact";
import Education from "@/components/Education";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { TechnicalExpertise } from "@/components/TechnicalExpertise";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#202020] font-sans selection:bg-gray-200">
      <Header />
      <main className="flex flex-col items-center w-full overflow-hidden">
        <Hero />
        <TechnicalExpertise />
        <Projects />
        <Education/>
        <Contact />
      </main>

      {/* Footer copyright if needed, otherwise part of Contact */}
      <footer className="w-full py-8 text-center text-sm text-gray-400">
        <p>© 2026 Kamyar Fazlolahnezhad. All rights reserved.</p>
      </footer>
    </div>
  );
}
