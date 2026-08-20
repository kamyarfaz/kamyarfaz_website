import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Story", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Education", href: "#" },
  { name: "Contact Me", href: "#" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-8 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
      <div className="text-xl font-bold text-[#202020]">Kamy</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-12 items-center text-[#111] text-sm font-medium">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-gray-600 transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 text-[#202020]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-6 md:hidden z-50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#111] text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
