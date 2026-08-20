import { motion } from 'motion/react';

const TECH_STACK = [
  { name: 'Redis', icon: 'https://cdn.simpleicons.org/redis/4B5563' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/4B5563' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/4B5563' },
  { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/4B5563' },
  { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/4B5563' },
  { name: 'Redux', icon: 'https://cdn.simpleicons.org/redux/4B5563' },
  { name: 'NestJS', icon: 'https://cdn.simpleicons.org/nestjs/4B5563' },
  { name: 'Three.js', icon: 'https://cdn.simpleicons.org/threedotjs/4B5563' },
  { name: 'TanStack', icon: 'https://cdn.simpleicons.org/reactquery/4B5563' }, // Using React Query icon as proxy or find better
  { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/4B5563' },
  { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase/4B5563' },
  { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/4B5563' },
  { name: 'GraphQL', icon: 'https://cdn.simpleicons.org/graphql/4B5563' },
  { name: 'Linux', icon: 'https://cdn.simpleicons.org/linux/4B5563' },
  { name: 'Jest', icon: 'https://cdn.simpleicons.org/jest/4B5563' },
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git/4B5563' },

  { name: 'Artificial Intelligence', icon: '/AI.svg' },
  { name: 'Data Science', icon: 'https://cdn.simpleicons.org/pandas/4B5563' },
  { name: 'Machine Learning', icon: '/machine-learning.svg' },
  { name: 'Deep Learning', icon: '/deep-learning.svg' },
  { name: 'Natural Language Processing', icon: '/Natural-Language-Processing.svg' },
  { name: 'Signal Processing', icon: '/signal.svg' },
  { name: 'Bioinformatics', icon: '/bioinformatics.svg' },

  { name: 'Product Management', icon: '/product-management.svg' },
  { name: 'Product Strategy', icon: '/strategy.svg' },
  { name: 'Business Analysis', icon: '/analysis.svg' },
  { name: 'Agile & Scrum', icon: '/sync.svg' },
];

export function TechnicalExpertise() {
  return (
    <section className="w-full max-w-[1440px] px-8 py-20 mx-auto" id="expertise">
      <div className="mb-16 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#202020]">Technical Expertise</h2>
        <p className="text-xl md:text-2xl text-[#404040] leading-relaxed">
          I believe in using the right tool for the job. My skillset spans the entire web development spectrum, from pixel-perfect frontend implementations to scalable backend architectures.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-12">
        {TECH_STACK.map((tech, index) => (
          <motion.div 
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="flex flex-col items-center justify-center gap-4 group"
          >
            <div className="w-16 h-16 relative flex items-center justify-center transition-transform group-hover:scale-110">
               <img 
                 src={tech.icon} 
                 alt={tech.name}
                 className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100"
               />
            </div>
            <span className="text-sm font-medium whitespace-nowrap text-[#4b5563] group-hover:text-[#202020] transition-colors">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
