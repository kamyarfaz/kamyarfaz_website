import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto min-h-screen px-4 md:px-8 pt-32 lg:pt-0 flex flex-col lg:flex-row items-center justify-between overflow-hidden">
      {/* Rotated Text Sidebar (Desktop Only) */}
      <div className="hidden lg:flex flex-col items-center absolute left-10 top-1/2 -translate-y-1/2 h-[600px] justify-between z-10 w-[20px]">
        <div className="-rotate-90 origin-center whitespace-nowrap text-[#a1a4aa] font-medium text-sm tracking-wide transform translate-y-24">
          Full stack Developer
        </div>
        <div className="h-[200px] w-[1px] bg-gray-300 my-4" />
        <div className="-rotate-90 origin-center text-[#a1a4aa] font-medium text-sm tracking-wide transform -translate-y-8">
          2026
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full lg:pl-32 flex flex-col lg:flex-row gap-12 lg:gap-0 mt-12 lg:mt-32 relative z-10">
        {/* Left Column: Text */}
        <div className="flex-1 flex flex-col justify-center items-start z-20 lg:max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-[#202020] leading-[1.1] mb-8"
          >
            Kamyar
            <br />
            Fazlolahnezhad
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#404040] leading-relaxed lg:max-w-xl font-medium"
          >
            <p className="mb-6">
              I'm Kamyar, AI Specialist based in{" "}
              <span className="rounded-md bg-gray-300 px-1.5 py-0.5 font-medium text-gray-900">
                Turin, Italy
              </span>
              , focused on AI products and scalab web applications...
            </p>
            <p>
              I work with startups, small businesses, and SaaS founders to
              design and develop web apps, dashboards, platforms, and internal
              tools that are not only visually polished but also engineered for
              long-term growth. From MVP builds to full-scale platforms, I
              handle projects end-to-end, from planning and UI implementation to
              backend logic, database design, and deployment.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Image & Stats */}
        <div className="flex-1 relative flex justify-center lg:justify-end items-center min-h-[500px]">
          {/* Stats Overlay */}
          {/* <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute top-0 right-0 lg:right-auto lg:left-10 flex gap-12 z-20 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm lg:bg-transparent lg:backdrop-blur-none lg:shadow-none"
          >
            <div>
              <p className="text-4xl md:text-5xl font-medium text-[#202020]">+20</p>
              <p className="text-sm text-[#404040] mt-1">Project completed</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-medium text-[#202020]">+3</p>
              <p className="text-sm text-[#404040] mt-1">Startup raised</p>
            </div>
          </motion.div> */}

          {/* Hero Image */}
          <div className="relative w-full max-w-[650px] aspect-[650/636] ">
            <ImageWithFallback
              src="/kamyar.png"
              alt="Kamyar Fazlolahnezhad"
              className="object-cover w-full h-full drop-shadow-2xl rounded-2xl lg:rounded-none lg:mask-image-linear-gradient-to-b"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
