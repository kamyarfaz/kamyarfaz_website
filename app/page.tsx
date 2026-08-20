// src/app/page.tsx

"use client";

import { Contact } from "@/components/Contact";
import Education from "@/components/Education";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { TechnicalExpertise } from "@/components/TechnicalExpertise";
import { Publications } from "@/components/Publications";
import { Certifications } from "@/components/Certifications";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#202020] font-sans selection:bg-gray-200">
      <Header />
      <main className="flex flex-col items-center w-full overflow-hidden">
        <Hero />
        <TechnicalExpertise />
        <Projects />
        <Education />
        <Publications />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}
