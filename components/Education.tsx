import React from "react";
import { motion } from "motion/react";
import {
  GraduationCap,
  MapPin,
  Calendar,
  BookOpen,
  Cpu,
  Award,
} from "lucide-react";

interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location?: string;
  period: string;
  isMaster?: boolean;
  projectLabel?: string;
  projectTitle?: string;
  description?: string;
  tags?: string[];
}

const educationData: EducationItem[] = [
  {
    id: "master",
    degree: "Master's Degree",
    field: "Data Science and Engineering",
    institution: "Polytechnic University of Turin",
    location: "Turin, Italy",
    period: "Sep 2024 — Sep 2026",
    isMaster: true,
    projectLabel: "Master's Thesis",
    projectTitle:
      "Artificial Intelligence for Anomaly Detection in Satellite Telemetry under Space Operational Constraints",
    description:
      "Developed and evaluated Transformer-based deep learning models for anomaly detection in satellite telemetry data under space environment conditions. Achieved high detection accuracy through advanced sequence modeling techniques and implemented the Transformer architecture on FPGA hardware for efficient, low-latency inference in resource-constrained aerospace systems.",
    tags: [
      "Transformers",
      "Deep Learning",
      "FPGA Hardware",
      "Satellite Telemetry",
      "Anomaly Detection",
    ],
  },
  {
    id: "bachelor",
    degree: "Bachelor's Degree",
    field: "Computer Science",
    institution: "University of Science and Technology of Mazandaran",
    location: "Iran",
    period: "Sep 2020 — Sep 2024",
    projectLabel: "Final Project",
    projectTitle: "Detection of Alzheimer's with Convolutional Neural Network",
    tags: ["Computer Vision", "CNN", "Healthcare AI", "Deep Learning"],
  }
];

const Education = () => {
  return (
    <section
      className="w-full bg-[#f3f3f3] py-16 md:py-24 overflow-hidden"
      id="education"
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
            {/* Background Big Number */}
            <span className="absolute -top-16 -left-4 md:-left-8 text-9xl md:text-[180px] font-black text-[#e2e2e2] select-none -z-10 opacity-60">
              01
            </span>

            {/* Section Header */}
            <div className="relative z-10 pt-8 md:pt-16 mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#202020] tracking-tight">
                Education
              </h2>
              <div className="w-12 h-1 bg-[#202020] mt-3 rounded-full" />
            </div>

            {/* Education List */}
            <div className="space-y-6">
              {educationData.map((item) => (
                <div
                  key={item.id}
                  className={`bg-white/80 backdrop-blur-sm border rounded-2xl p-6 md:p-8 transition-all duration-300 ${
                    item.isMaster
                      ? "border-[#202020]/20 shadow-sm hover:shadow-md"
                      : "border-[#e5e5e5] hover:border-[#ccc]"
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#eee]">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1">
                        <GraduationCap className="w-4 h-4 text-[#202020]" />
                        {item.degree}
                      </div>
                      <h3 className="text-2xl font-bold text-[#202020]">
                        {item.field}
                      </h3>
                      <p className="text-base font-medium text-[#404040] mt-1 flex flex-wrap items-center gap-2">
                        <span>{item.institution}</span>
                        {item.location && (
                          <>
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-300" />
                            <span className="text-sm text-neutral-500 font-normal flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5" /> {item.location}
                            </span>
                          </>
                        )}
                      </p>
                    </div>

                    <div className="self-start md:self-center shrink-0">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold ${
                          item.isMaster
                            ? "bg-[#202020] text-white"
                            : "bg-[#e8e8e8] text-[#333]"
                        }`}
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {/* Project / Thesis Highlight (If exists) */}
                  {item.projectTitle && (
                    <div className="mt-6 bg-[#f8f8f8] rounded-xl p-5 border border-[#eaeaea]">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="p-2 bg-white rounded-lg border border-[#e0e0e0] text-[#202020] mt-0.5 shrink-0">
                          {item.isMaster ? (
                            <BookOpen className="w-4 h-4" />
                          ) : (
                            <Award className="w-4 h-4" />
                          )}
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                            {item.projectLabel}
                          </span>
                          <h4 className="text-base font-bold text-[#202020] leading-snug mt-0.5">
                            {item.projectTitle}
                          </h4>
                        </div>
                      </div>

                      {item.description && (
                        <p className="text-sm text-[#4a4a4a] leading-relaxed mt-3 pl-0 md:pl-11">
                          {item.description}
                        </p>
                      )}

                      {/* Tech Badges */}
                      {item.tags && (
                        <div className="mt-4 pl-0 md:pl-11 flex flex-wrap gap-2 items-center">
                          {item.isMaster && (
                            <span className="text-xs font-medium text-neutral-400 flex items-center gap-1 mr-1">
                              <Cpu className="w-3.5 h-3.5" /> Key Focus:
                            </span>
                          )}
                          {item.tags.map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-xs font-medium px-2.5 py-1 bg-white border border-[#dedede] text-[#333] rounded-md shadow-2xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
