"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Brain, Layers, Code2, Database, Wrench, Sparkles } from "lucide-react";

type Category =
  | "All"
  | "AI & Data Science"
  | "Product & Strategy"
  | "Frontend"
  | "Backend & DB"
  | "Tools & Infra";

interface TechItem {
  name: string;
  icon: string;
  category: Category;
}

const CATEGORIES: { id: Category; label: string; icon: React.ReactNode }[] = [
  { id: "All", label: "All Skills", icon: <Sparkles className="w-4 h-4" /> },
  {
    id: "AI & Data Science",
    label: "AI & Data Science",
    icon: <Brain className="w-4 h-4" />,
  },
  {
    id: "Product & Strategy",
    label: "Product & Strategy",
    icon: <Layers className="w-4 h-4" />,
  },
  { id: "Frontend", label: "Frontend", icon: <Code2 className="w-4 h-4" /> },
  {
    id: "Backend & DB",
    label: "Backend & DB",
    icon: <Database className="w-4 h-4" />,
  },
  {
    id: "Tools & Infra",
    label: "Tools & Infra",
    icon: <Wrench className="w-4 h-4" />,
  },
];

const TECH_STACK: TechItem[] = [
  // AI & Data Science (7)
  {
    name: "Artificial Intelligence",
    icon: "/AI.svg",
    category: "AI & Data Science",
  },
  {
    name: "Data Science",
    icon: "https://cdn.simpleicons.org/pandas/4B5563",
    category: "AI & Data Science",
  },
  {
    name: "Machine Learning",
    icon: "/machine-learning.svg",
    category: "AI & Data Science",
  },
  {
    name: "Deep Learning",
    icon: "/deep-learning.svg",
    category: "AI & Data Science",
  },
  {
    name: "NLP",
    icon: "/Natural-Language-Processing.svg",
    category: "AI & Data Science",
  },
  {
    name: "Signal Processing",
    icon: "/signal.svg",
    category: "AI & Data Science",
  },
  {
    name: "Bioinformatics",
    icon: "/bioinformatics.svg",
    category: "AI & Data Science",
  },

  // Product & Strategy (6)
  {
    name: "Product Management",
    icon: "/product-management.svg",
    category: "Product & Strategy",
  },
  {
    name: "Product Strategy",
    icon: "/strategy.svg",
    category: "Product & Strategy",
  },
  {
    name: "Tech Leadership",
    icon: "https://cdn.simpleicons.org/pnpm/4B5563",
    category: "Product & Strategy",
  },
  {
    name: "Business Analysis",
    icon: "/analysis.svg",
    category: "Product & Strategy",
  },
  {
    name: "Product Analytics",
    icon: "https://cdn.simpleicons.org/googleanalytics/4B5563",
    category: "Product & Strategy",
  },
  { name: "Agile & Scrum", icon: "/sync.svg", category: "Product & Strategy" },

  // Frontend (8)
  {
    name: "TypeScript",
    icon: "https://cdn.simpleicons.org/typescript/4B5563",
    category: "Frontend",
  },
  {
    name: "React",
    icon: "https://cdn.simpleicons.org/react/4B5563",
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: "https://cdn.simpleicons.org/nextdotjs/4B5563",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.simpleicons.org/tailwindcss/4B5563",
    category: "Frontend",
  },
  {
    name: "Redux",
    icon: "https://cdn.simpleicons.org/redux/4B5563",
    category: "Frontend",
  },
  {
    name: "Three.js",
    icon: "https://cdn.simpleicons.org/threedotjs/4B5563",
    category: "Frontend",
  },
  {
    name: "TanStack",
    icon: "https://cdn.simpleicons.org/reactquery/4B5563",
    category: "Frontend",
  },
  {
    name: "HTML5",
    icon: "https://cdn.simpleicons.org/html5/4B5563",
    category: "Frontend",
  },

  // Backend & DB (4)
  {
    name: "NestJS",
    icon: "https://cdn.simpleicons.org/nestjs/4B5563",
    category: "Backend & DB",
  },
  {
    name: "Redis",
    icon: "https://cdn.simpleicons.org/redis/4B5563",
    category: "Backend & DB",
  },
  {
    name: "Supabase",
    icon: "https://cdn.simpleicons.org/supabase/4B5563",
    category: "Backend & DB",
  },
  {
    name: "GraphQL",
    icon: "https://cdn.simpleicons.org/graphql/4B5563",
    category: "Backend & DB",
  },

  // Tools & Infra (5)
  {
    name: "Figma",
    icon: "https://cdn.simpleicons.org/figma/4B5563",
    category: "Tools & Infra",
  },
  {
    name: "Design Systems",
    icon: "https://cdn.simpleicons.org/storybook/4B5563",
    category: "Tools & Infra",
  },
  {
    name: "Linux",
    icon: "https://cdn.simpleicons.org/linux/4B5563",
    category: "Tools & Infra",
  },
  {
    name: "Jest",
    icon: "https://cdn.simpleicons.org/jest/4B5563",
    category: "Tools & Infra",
  },
  {
    name: "Git",
    icon: "https://cdn.simpleicons.org/git/4B5563",
    category: "Tools & Infra",
  },
];

export function TechnicalExpertise() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredTech =
    activeCategory === "All"
      ? TECH_STACK
      : TECH_STACK.filter((item) => item.category === activeCategory);

  return (
    <section
      className="w-full bg-[#f3f3f3] py-16 md:py-24 overflow-hidden"
      id="expertise"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        {/* Header Section */}
        <div className="mb-12 max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
            Skillset & Technologies
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#202020] tracking-tight">
            Technical Expertise
          </h2>
          <div className="w-12 h-1 bg-[#202020] mt-3 rounded-full mb-6" />
          <p className="text-base md:text-lg text-[#555] leading-relaxed">
            I believe in using the right tool for the job. My skillset spans the
            entire software engineering spectrum, from AI research and neural
            signal processing to product architecture and high-performance web
            development.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? "bg-[#202020] text-white border-[#202020] shadow-sm"
                    : "bg-white/80 hover:bg-white text-[#555] border-[#e0e0e0] hover:border-[#ccc]"
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
                {cat.id !== "All" && (
                  <span
                    className={`ml-1 text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-[#f0f0f0] text-[#666]"
                    }`}
                  >
                    {TECH_STACK.filter((i) => i.category === cat.id).length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Tech Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech) => (
              <motion.div
                layout
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="group relative bg-white/80 hover:bg-white backdrop-blur-xs border border-[#e5e5e5] hover:border-[#bbb] rounded-2xl p-4 transition-all duration-300 shadow-2xs hover:shadow-sm flex flex-col items-center justify-center gap-3 text-center"
              >
                {/* Tech Icon Container */}
                <div className="w-12 h-12 relative flex items-center justify-center p-2 rounded-xl bg-[#f8f8f8] border border-[#f0f0f0] group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100"
                  />
                </div>

                {/* Tech Name */}
                <div className="flex flex-col items-center gap-0.5">
                  <span className="text-xs md:text-sm font-bold text-[#202020] leading-snug">
                    {tech.name}
                  </span>
                  <span className="text-[10px] text-neutral-400 font-medium">
                    {tech.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
