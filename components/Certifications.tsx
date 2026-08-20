"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Award, Trophy, CheckCircle2, ChevronDown } from "lucide-react";

const honorsList = [
  {
    title: "Ranked Top 10 Cohort",
    description:
      "Ranked among the top 10 students in the 2024 Computer Science cohort at MAZUST",
  },
  {
    title: "19th Place in ICPC",
    description:
      "Placed 19th in the ICPC Asia West Regional Contest (Tehran Site)",
  },
];

const certCategories = [
  {
    category: "Specializations & Key Tracks",
    items: [
      "Deep Learning Specialization — DeepLearning.AI",
      "Machine Learning Specialization — DeepLearning.AI / Stanford",
      "Google Advanced Data Analytics Specialization — Google / Coursera",
      "Neuroscience and Neuroimaging Specialization — Johns Hopkins University",
    ],
  },
  {
    category: "Neuroscience, fMRI & Signal Processing",
    items: [
      "Principles of fMRI 1 & 2 — Johns Hopkins University",
      "Fundamental Neuroscience for Neuroimaging — Johns Hopkins University",
      "Introduction to Neurohacking In R — Johns Hopkins University",
      "Master Neuroscience and Neuroanatomy — Udemy",
      "PCA & Multivariate Signal Processing Applied to Neural Data — Udemy",
      "Complete Neural Signal Processing and Analysis: Zero to Hero — Udemy",
    ],
  },
  {
    category: "AI, Machine Learning & Deep Learning",
    items: [
      "Neural Networks and Deep Learning — Stanford University",
      "Convolutional Neural Networks — Stanford University",
      "Sequence Models — Stanford University",
      "Structuring Machine Learning Projects — Stanford University",
      "Supervised Machine Learning: Regression & Classification — Stanford",
      "Advanced Learning Algorithms — Stanford University",
      "Unsupervised Learning, Recommenders, Reinforcement Learning — Stanford",
      "Improving Deep Neural Networks: Tuning & Optimization — Stanford",
      "The Nuts and Bolts of Machine Learning — Google",
    ],
  },
  {
    category: "Data Analytics, Math & Programming",
    items: [
      "Google Data Analytics Capstone — Google",
      "Foundations of Data Science — Google",
      "Process Data from Dirty to Clean — Google",
      "Share Data Through the Art of Visualization — Google",
      "The Power of Statistics & Regression Analysis — Google",
      "MATLAB Programming for Engineers and Scientists — Vanderbilt University",
      "Mastering Programming with MATLAB — Vanderbilt University",
      "Introduction to Data, Signal, and Image Analysis with MATLAB — Vanderbilt",
    ],
  },
];

export const Certifications = () => {
  const [showAllCerts, setShowAllCerts] = useState(false);

  return (
    <section
      className="w-full bg-[#f3f3f3] py-16 md:py-24 overflow-hidden"
      id="Certifications"
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
              03
            </span>

            {/* Header */}
            <div className="relative z-10 pt-8 md:pt-16 mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-[#202020] tracking-tight">
                Honors & Certifications
              </h2>
              <div className="w-12 h-1 bg-[#202020] mt-3 rounded-full" />
            </div>

            {/* Honors & Awards Card */}
            <div className="bg-white/80 backdrop-blur-sm border border-[#e5e5e5] rounded-2xl p-6 md:p-8 mb-8 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-[#202020]" />
                Honors & Awards
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {honorsList.map((honor, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-[#f8f8f8] rounded-xl border border-[#eaeaea] flex items-start gap-3"
                  >
                    <div className="p-2 bg-white rounded-lg border border-[#e0e0e0] shrink-0 text-[#202020]">
                      <Trophy className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#202020]">
                        {honor.title}
                      </h4>
                      <p className="text-sm text-[#555] mt-1 leading-snug">
                        {honor.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Card */}
            <div className="bg-white/80 backdrop-blur-sm border border-[#e5e5e5] rounded-2xl p-6 md:p-8 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-6 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#202020]" />
                Professional Certifications (
                {certCategories.reduce((acc, cat) => acc + cat.items.length, 0)}
                + Verified Courses)
              </h3>

              <div className="space-y-6">
                {(showAllCerts
                  ? certCategories
                  : certCategories.slice(0, 2)
                ).map((cat, idx) => (
                  <div key={idx} className="space-y-3">
                    <h4 className="text-sm font-bold text-[#202020] border-b border-[#eee] pb-2">
                      {cat.category}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {cat.items.map((cert, certIdx) => (
                        <div
                          key={certIdx}
                          className="flex items-start gap-2 text-xs md:text-sm text-[#333] bg-[#f9f9f9] p-2.5 rounded-lg border border-[#f0f0f0]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#202020] shrink-0 mt-0.5" />
                          <span>{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Show More / Less Toggle */}
              <button
                onClick={() => setShowAllCerts(!showAllCerts)}
                className="mt-6 w-full py-3 bg-[#f3f3f3] hover:bg-[#e8e8e8] text-[#202020] text-xs font-bold uppercase tracking-wider rounded-xl border border-[#dedede] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>
                  {showAllCerts ? "Show Less" : "View All Certifications"}
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    showAllCerts ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
