import { useEffect, useState } from "react";
import { NAV_LINKS } from "../constants/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-8 transition-all duration-300"
      style={{
        background:    scrolled ? "rgba(4,4,80,0.97)"         : "transparent",
        backdropFilter:scrolled ? "blur(12px)"                : "none",
        borderBottom:  scrolled ? "1px solid rgba(219,183,50,0.2)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex flex-col leading-tight">
          <span className="text-[#DBB732] font-bold text-lg tracking-widest">RASSANA</span>
          <span className="text-white text-[11px] tracking-[4px] opacity-70">PERSADA</span>
        </div>

        {/* Links */}
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
      </div>
    </nav>
  );
}