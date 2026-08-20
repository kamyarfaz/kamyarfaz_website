import { motion } from 'motion/react';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 left-0 w-full z-50 px-8 py-8 flex items-center justify-between max-w-[1440px] mx-auto pointer-events-none"
    >
      <div className="flex items-center gap-14 pointer-events-auto">
        <h1 className="text-xl font-bold tracking-tight text-[#202020]">Kamy</h1>
        
        <nav className="hidden md:flex gap-12 text-sm font-medium text-[#111]">
          <button onClick={() => scrollToSection('expertise')} className="hover:text-gray-600 transition-colors">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-gray-600 transition-colors">Projects</button>
          <button onClick={() => scrollToSection('Certifications')} className="hover:text-gray-600 transition-colors">Certifications</button>
          <button onClick={() => scrollToSection('education')} className="hover:text-gray-600 transition-colors">Education</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-gray-600 transition-colors">Contact Me</button>
        </nav>
      </div>
      
      {/* Mobile Menu Icon could go here */}
    </motion.header>
  );
}
