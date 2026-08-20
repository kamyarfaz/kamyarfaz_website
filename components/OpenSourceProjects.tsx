"use client";

import { motion } from "motion/react";
import ProjectCard from "./ui/projectcard";
import YearMarker from "./ui/yearmarker";

interface OpenSourceProject {
  title: string;
  year: string;
  link: string | null;
  description: string;
}

const projects: OpenSourceProject[] = [
  {
    title: "Long-Document Scientific Summarization",
    year: "2026",
    link: "https://github.com/kamyarfaz/Long-Document-Scientific-Summarization",
    description:
      "QLoRA-based scientific summarization with hierarchical inference, evidence retrieval, support scoring, and evaluation.",
  },
  {
    title: "Technical Docs QA",
    year: "2026",
    link: "https://github.com/kamyarfaz/Technical-Docs-QA",
    description:
      "Hybrid BM25/FAISS retrieval pipeline with transformer embeddings, reranking, and grounded QA.",
  },
  {
    title: "Network Intrusion Detection",
    year: "2026",
    link: "https://github.com/kamyarfaz/Network-Intrusion-Detection",
    description:
      "ML-based binary and multi-class network intrusion detection with feature preprocessing and evaluation.",
  },
  {
    title: "BESSTIE: Sentiment & Sarcasm Classification",
    year: "2026",
    link: "https://github.com/kamyarfaz/Sarcasm-Detection",
    description:
      "NLP analysis of sentiment and sarcasm across Australian, Indian, and British English.",
  },
  {
    title: "English Named Entity Recognition",
    year: "2026",
    link: "https://github.com/kamyarfaz/english-named-entity-recognition",
    description: "BERT/DistilBERT NER on CoNLL-2003; 0.9180 test F1.",
  },
  {
    title: "SigExt: Faithful Abstractive Summarization",
    year: "2026",
    link: "https://github.com/kamyarfaz/SigExt",
    description:
      "Hallucination filtering, evidence retrieval, NLI verification, and agentic refinement for faithful summarization.",
  },
  {
    title: "Brain-Inspired Computing: Memristive Reservoir Computing",
    year: "2026",
    link: "https://github.com/kamyarfaz/Brain-Inspired-Computing-NARMA",
    description:
      "Memristive reservoir computing for nonlinear temporal NARMA prediction.",
  },
  {
    title: "Robust Reinforcement Learning for Sim-to-Sim Transfer",
    year: "2025",
    link: "https://github.com/kamyarfaz/Robust-Reinforcement-Learning-for-Sim-to-Sim-Transfer-under-Dynamics-Mismatch",
    description: "Robust policy transfer under simulated dynamics mismatch.",
  },
  {
    title: "ICA, PCA & GED on EEG Data",
    year: "2025",
    link: "https://github.com/kamyarfaz/Computational-linear-algebra-for-large-scale-problems/tree/main/ICA",
    description:
      "Comparative analysis of dimensionality-reduction methods for EEG signals.",
  },
  {
    title: "Audio Analysis and Classification",
    year: "2024",
    link: "https://github.com/kamyarfaz/Audio-Analysis-and-Classification",
    description:
      "Machine-learning-based audio feature analysis and classification.",
  },
  {
    title: "Alzheimer's Detection with CNN",
    year: "2023",
    link: "https://github.com/kamyarfaz/alzheimer-detection-using-CNN",
    description:
      "CNN-based Alzheimer's disease detection from neuroimaging data.",
  },
  {
    title: "Polyp U-Net Segmentation",
    year: "2023",
    link: "https://github.com/kamyarfaz/polyp-unet-segmentation",
    description: "U-Net-based medical image segmentation for polyp detection.",
  },
];

const OpenSourceProjects = () => {
  return (
    <section
      className="w-full max-w-360 px-4 md:px-8 py-24 mx-auto"
      id="openSourceProjects"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 max-w-4xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#202020]">
          Open Source Projects
        </h2>
        <p className="text-xl md:text-2xl text-[#404040] leading-relaxed">
          Research and machine-learning projects I've built and shared publicly,
          spanning NLP, signal processing, and applied deep learning.
        </p>
      </motion.div>

      <div className="flex flex-col gap-16 md:gap-20">
        {Array.from(
          projects.reduce((groups, project) => {
            const items = groups.get(project.year) ?? [];
            items.push(project);
            groups.set(project.year, items);
            return groups;
          }, new Map<string, OpenSourceProject[]>()),
        ).map(([year, items]) => (
          <div key={year} className="relative">
            <YearMarker year={year} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OpenSourceProjects;
