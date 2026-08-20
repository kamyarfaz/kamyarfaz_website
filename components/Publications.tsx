"use client";

import React from "react";
import { motion } from "motion/react";
import { BookOpen, FileText, Brain } from "lucide-react";

const researchInterests = [
  "EEG Signal Processing",
  "Computational Neuroscience",
  "Neuroinformatics",
  "Cognitive Modeling",
  "Single Cell Modeling",
  "Bioinformatics",
  "Neural Signal Processing",
];

const publishedList = [
  {
    title:
      "The Pleasure of Solving Mathematical Problems through Proper Mathematical Reading",
    status: "Published",
  },
];

const workingPapersList = [
  {
    title:
      "Robust Reinforcement Learning for Sim-to-Sim Transfer under Dynamics Mismatch",
    status: "Manuscript in Preparation",
  },
  {
    title:
      "Towards Faithful Prompt-based Abstractive Summarization: Extending SigExt with Evidence Retrieval and NLI-based Factual Verification",
    status: "Manuscript in Preparation",
  },
  {
    title:
      "Artificial Intelligence for Anomaly Detection in Satellite Telemetry under Space Operational Constraints",
    status: "Manuscript in Preparation",
  },
];

export const Publications = () => {
  return (
    <section
      className="w-full bg-[#f3f3f3] py-16 md:py-24 overflow-hidden"
      id="publications"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <div className="relative w-full">
            {/* Big Background Number */}
            <span className="absolute -top-16 -left-4 md:-left-8 text-9xl md:text-[180px] font-black text-[#e2e2e2] select-none -z-10 opacity-60">
              02
            </span>

            {/* Header */}
            <div className="relative z-10 pt-8 md:pt-16 mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-[#202020] tracking-tight">
                Publications & Research
              </h2>
              <div className="w-12 h-1 bg-[#202020] mt-3 rounded-full" />
            </div>

            {/* Research Interests Box */}
            <div className="bg-white/80 backdrop-blur-sm border border-[#e5e5e5] rounded-2xl p-6 md:p-8 mb-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500 mb-4">
                <Brain className="w-4 h-4 text-[#202020]" />
                Research Interests
              </div>
              <div className="flex flex-wrap gap-2">
                {researchInterests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-3 py-1.5 bg-[#f8f8f8] border border-[#e0e0e0] text-[#202020] rounded-lg"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Papers Card */}
            <div className="bg-white/80 backdrop-blur-sm border border-[#e5e5e5] rounded-2xl p-6 md:p-8 shadow-xs space-y-8">
              {/* Published */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#202020]" />
                  Publications
                </h3>
                <div className="space-y-3">
                  {publishedList.map((paper, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-[#f9f9f9] rounded-xl border border-[#ececec] flex flex-col md:flex-row md:items-center justify-between gap-3"
                    >
                      <p className="text-sm md:text-base font-semibold text-[#202020] leading-snug">
                        {paper.title}
                      </p>
                      <span className="shrink-0 text-xs font-semibold px-3 py-1 bg-[#202020] text-white rounded-full self-start md:self-auto">
                        {paper.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Working Manuscripts */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#202020]" />
                  Manuscripts in Preparation
                </h3>
                <div className="space-y-3">
                  {workingPapersList.map((paper, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-[#f9f9f9] rounded-xl border border-[#ececec] flex flex-col md:flex-row md:items-center justify-between gap-3"
                    >
                      <p className="text-sm md:text-base font-medium text-[#333] leading-snug">
                        {paper.title}
                      </p>
                      <span className="shrink-0 text-xs font-medium px-3 py-1 bg-[#e8e8e8] text-[#555] rounded-full self-start md:self-auto">
                        In Preparation
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
