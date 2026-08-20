import imgTradingDesktop from "figma:asset/5299f22df90cb76b508e4409156824ddef53dd0e.png";
import imgTradingMobile from "figma:asset/ef26ad4d4c0f39e004a1347aa15e9dad3ccf8574.png";
import { Github, PlayCircle } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const PROJECTS = [
  {
    id: "miznex",
    number: "01",
    link: "https://miznex.com/en",
    title: "Miznex",
    subtitle:
      "A comprehensive restaurant management platform with digital menus, POS, KDS, and inventory automation.",
    description:
      "Miznex is a comprehensive restaurant operations platform designed to centralize and simplify every core workflow in modern food businesses. It combines digital menu management, real-time Kitchen Display System (KDS), POS tools, inventory and ingredient tracking, supplier coordination, and stock control into a single, integrated system.",
    description2:
      "Restaurant owners and staff can manage menus, update items instantly, monitor ingredient quantities, control bills of materials, and track orders in real time across departments. With its structured dashboard, team-based task organization, and operational insights, Miznex reduces manual errors, improves service speed, and gives businesses full visibility over their daily operations — from supplier intake to final order delivery.",
    images: [
      {
        src: "/miznex-bg-2.png",
        className: "w-[90%] md:w-[600px] z-10 rounded-xl shadow-2xl",
      },
      {
        src: "/miznexMobile.png",
        className:
          "absolute -bottom-10 -left-10 w-[150px] md:w-[200px] z-20 rounded-xl shadow-2xl border-4 border-white",
      },
    ],
    layout: "left",
  },
  {
    id: "meta-lawyer",
    number: "02",
    link: "https://meta-lawyer.vercel.app/",
    title: "Meta Lawyer",
    subtitle:
      "An AI-powered legal assistant platform that helps users get fast, reasoned legal insights and document support.",
    description:
      "Meta Lawyer is an intelligent legal assistant platform that uses AI to provide users with clear, reasoned responses to legal questions, assist with document drafting, and offer guidance across a range of legal topics. Built to make legal information more accessible, it helps individuals and professionals quickly navigate complex legal language, explore legal rights, and get structured, resource-based answers without the wait.",
    description2:
      "Whether you need help summarizing legal text, understanding procedures, or generating legal documents, Meta Lawyer streamlines the process with AI-driven precision.",
    images: [
      {
        src: "/metalawyer.png",
        className: "w-full md:w-[650px] rounded-xl shadow-2xl",
      },
    ],
    layout: "right",
  },
  {
    id: "pisa",
    number: "03",
    link: "https://pizarealestateapp.netlify.app/",
    title: "Pisa",
    subtitle:
      "An all-in-one real-estate platform for listing, managing, and exploring properties.",
    description:
      "Pisa is a full-stack real-estate platform that enables users to list, browse, and manage properties through a unified, modern interface. It supports property creation and management, advanced search and filtering, user workspaces, and role-based access for teams or agencies.",
    description2:
      "The platform is designed to handle everything from property discovery to listing administration, providing structured dashboards, scalable architecture, and smooth user experience for both buyers and managers.",
    images: [
      {
        src: "/pisa.png",
        className: "w-full md:w-[650px] rounded-xl shadow-2xl",
      },
    ],
    layout: "left",
  },
  {
    id: "trading-ai",
    number: "04",
    link: "https://tradingaiapp.netlify.app/",
    title: "TradingAI",
    subtitle:
      "AI-powered trading assistant delivering smart entries, stops, targets, and confidence insights in real time.",
    description:
      "TradingAI is an AI-powered trading assistant that analyzes real-time market data to generate smart trade ideas with clear entry points, stop-loss levels, take-profit targets, confidence scores, and detailed reasoning. Built for modern traders, it combines live price feeds with advanced AI models to deliver fast, structured, and actionable insights.",
    description2:
      "Whether you're trading crypto, forex, or other markets, TradingAI helps reduce emotional decisions and supports a more data-driven strategy with transparent logic behind every recommendation.",
    images: [
      {
        src: "/tradingAIDesktop.png",
        className: "w-[90%] md:w-[600px] z-10 rounded-xl shadow-2xl",
      },
      {
        src: "/tradingAIMobile.png",
        className:
          "absolute bottom-0 -left-12 w-[120px] md:w-[150px] z-20 rounded-[2rem] shadow-2xl border-4 border-gray-900",
      },
    ],
    layout: "right",
  },
  {
    id: "doitify",
    number: "05",
    link: "https://doitify.com/",
    title: "Doitify",
    subtitle: "AI-powered project management and team collaboration platform",
    description:
      "Doitify is a smart platform for goal management, project management, team collaboration and personal growth that uses AI to help you with planning, teamwork and continuous tracking until you achieve results.",
    description2:
      "Manage projects, assign tasks, track progress, monitor team performance, collaborate in real time, and keep every workflow organized in one intelligent workspace.",
    images: [
      {
        src: "/doitifyDesktop.png",
        className: "w-[90%] md:w-[600px] z-10 rounded-xl shadow-2xl",
      },
    ],
    layout: "left",
  },
];

export function Projects() {
  return (
    <section
      className="w-full bg-[#f3f3f3] py-24 overflow-hidden"
      id="projects"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 flex flex-col gap-32">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${
              project.layout === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-12 lg:gap-24`}
          >
            {/* Text Content */}
            <div className="flex-1 relative">
              <span className="absolute -top-20 -left-4 md:-left-8 text-9xl md:text-[180px] font-black text-[#e6e6e6] select-none -z-10 opacity-50 md:opacity-100">
                {project.number}
              </span>

              <div className="relative z-10 pt-12 md:pt-24">
                <h3 className="text-4xl md:text-5xl font-bold text-[#202020] mb-6">
                  {project.title}
                </h3>
                <p className="text-lg md:text-xl font-medium text-black mb-8 leading-relaxed">
                  {project.subtitle}
                </p>
                <div className="text-lg text-[#404040] space-y-6 leading-relaxed">
                  <p>{project.description}</p>
                  {project.description2 && <p>{project.description2}</p>}
                </div>

                <div className="flex gap-4 mt-8">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-black/90 hover:bg-black text-white px-6 py-3 rounded-full transition-all group"
                  >
                    <span className="font-medium">Live Demo</span>
                    <PlayCircle
                      size={18}
                      className="fill-white text-black group-hover:scale-110 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Images */}
            <div className="flex-1 relative flex justify-center items-center py-12">
              <div className="relative w-full flex justify-center items-center">
                {project.images.map((img, i) => (
                  <ImageWithFallback
                    key={i}
                    src={img.src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className={`${img.className} max-w-none`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
