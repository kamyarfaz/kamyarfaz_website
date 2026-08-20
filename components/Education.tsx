import React from "react";
import { motion } from "motion/react";

const Education = () => {
  return (
    <section
      className="w-full bg-[#f3f3f3] pb-6 overflow-hidden"
      id="education"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start"
        >
          <div className="relative w-full max-w-4xl">
            <span className="absolute -top-20 -left-4 md:-left-8 text-9xl md:text-[180px] font-black text-[#e6e6e6] select-none -z-10 opacity-50 md:opacity-100">
              01
            </span>

            <div className="relative z-10 pt-12 md:pt-24">
              <h2 className="text-4xl md:text-5xl font-bold text-[#202020] mb-6">
                Education
              </h2>

              <p className="text-lg md:text-xl font-medium text-black mb-8 leading-relaxed">
                Polytechnic University of Turin
              </p>

              <div className="text-lg text-[#404040] space-y-6 leading-relaxed">
                <p>Master's degree in Data Science and Engineering</p>

                {/* Thesis */}
                <p>
                  <span className="font-medium text-[#202020]">Thesis:</span>{" "}
                  Artificial Intelligence for Anomaly Detection in Satellite
                  Telemetry under Space Operational Constraints
                </p>

                <p>
                  Developed and evaluated Transformer-based deep learning models
                  for anomaly detection in satellite telemetry data under space
                  environment conditions. Achieved high detection accuracy
                  through advanced sequence modeling techniques and implemented
                  the Transformer architecture on FPGA hardware for efficient,
                  low-latency inference in resource-constrained aerospace
                  systems.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
