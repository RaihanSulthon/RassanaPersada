import { useEffect, useState } from "react";
import { useLang } from "../contexts/LanguageContext";
import { t, tx } from "../constants/translations";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggle } = useLang();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NAV_LINKS = [
    { label: tx(t.nav.about, lang), href: "#about" },
    { label: tx(t.nav.services, lang), href: "#services" },
    { label: tx(t.nav.whyUs, lang), href: "#why" },
    { label: tx(t.nav.capability, lang), href: "#capability" },
    { label: tx(t.nav.menu, lang), href: "#menu" },
    { label: tx(t.nav.contact, lang), href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-5 md:px-8 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-[rgba(4,4,80,0.97)] backdrop-blur-md border-b border-[#DBB732]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex flex-col leading-tight">
          <span className="text-[#DBB732] font-bold text-lg tracking-widest">
            RASSANA
          </span>

          <span className="text-white text-[11px] tracking-[4px] opacity-70">
            PERSADA
          </span>
        </div>

        {/* Desktop nav + switcher */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 text-[13px] font-medium tracking-wide no-underline transition-colors duration-200 hover:text-[#DBB732]"
            >
              {link.label}
            </a>
          ))}

          {/* Language toggle pill */}
          <button
            onClick={toggle}
            aria-label="Switch language"
            className="relative flex items-center h-7 w-16 rounded-full bg-white/10 border border-white/20 hover:border-[#DBB732]/50 transition-all duration-300 cursor-pointer shrink-0"
          >
            {/* Sliding indicator */}
            <span
              className={`absolute top-0.5 h-6 w-7 rounded-full bg-[#DBB732] transition-all duration-300 ${
                lang === "en" ? "left-0.5" : "left-8.5"
              }`}
            />

            <span
              className={`relative z-10 w-8 text-center text-[11px] font-bold transition-colors duration-300 ${
                lang === "en" ? "text-[#020240]" : "text-white/50"
              }`}
            >
              EN
            </span>

            <span
              className={`relative z-10 w-8 text-center text-[11px] font-bold transition-colors duration-300 ${
                lang === "id" ? "text-[#020240]" : "text-white/50"
              }`}
            >
              ID
            </span>
          </button>
        </div>

        {/* Mobile: hamburger + lang toggle */}
        <div className="md:hidden flex items-center gap-3">
          {/* Mobile language toggle */}
          <button
            onClick={toggle}
            aria-label="Switch language"
            className="relative flex items-center h-6 w-14 rounded-full bg-white/10 border border-white/20 hover:border-[#DBB732]/50 transition-all duration-300 cursor-pointer"
          >
            <span
              className={`absolute top-0.5 h-5 w-6 rounded-full bg-[#DBB732] transition-all duration-300 ${
                lang === "en" ? "left-0.5" : "left-7.5"
              }`}
            />

            <span
              className={`relative z-10 w-7 text-center text-[10px] font-bold transition-colors duration-300 ${
                lang === "en" ? "text-[#020240]" : "text-white/50"
              }`}
            >
              EN
            </span>

            <span
              className={`relative z-10 w-7 text-center text-[10px] font-bold transition-colors duration-300 ${
                lang === "id" ? "text-[#020240]" : "text-white/50"
              }`}
            >
              ID
            </span>
          </button>

          {/* Hamburger */}
          <button
            className="flex flex-col gap-1.5 p-2 cursor-pointer"
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
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-72 pb-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 pt-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 text-[14px] font-medium tracking-wide no-underline py-2.5 px-3 rounded-xl transition-colors duration-200 hover:text-[#DBB732] hover:bg-[#DBB732]/8"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}