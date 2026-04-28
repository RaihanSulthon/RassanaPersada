import { useEffect, useState } from "react";
import { NAV_LINKS } from "../constants/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-5 md:px-8 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-[rgba(4,4,80,0.97)] backdrop-blur-md border-b border-[#DBB732]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16">
        <div className="flex flex-col leading-tight">
          <span className="text-[#DBB732] font-bold text-lg tracking-widest">RASSANA</span>
          <span className="text-white text-[11px] tracking-[4px] opacity-70">PERSADA</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/80 text-[13px] font-medium tracking-wide no-underline
                         transition-colors duration-200 hover:text-[#DBB732]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-72 pb-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 pt-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 text-[14px] font-medium tracking-wide no-underline
                         py-2.5 px-3 rounded-xl transition-colors duration-200
                         hover:text-[#DBB732] hover:bg-[#DBB732]/8"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
