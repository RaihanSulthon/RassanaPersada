// MenuSection.jsx
import AnimatedSection from "./AnimatedSection";
import { MENU_SELECTONE, SERVICES_MANAGEMENT } from "../constants/data";

export default function MenuSection() {
  return (
    <section id="menu" className="bg-[#f8f9ff] py-16 md:py-20 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <AnimatedSection variant="blur-up" delay={0}>
            <span className="inline-block px-5 py-1.5 rounded-full text-[#0808DB] text-xs font-semibold tracking-widest mb-4 bg-[#0808DB]/6">
              LAYANAN KAMI / OUR SERVICES
            </span>
          </AnimatedSection>
          <AnimatedSection variant="fade-up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020240] mb-2">
              Services & Menu Management
            </h2>
          </AnimatedSection>
          <AnimatedSection variant="fade-up" delay={0.18}>
            <p className="text-[#888] text-base">Layanan Fasilitas & Pilihan Menu Kami</p>
          </AnimatedSection>
        </div>

        {/* Services Management */}
        <AnimatedSection variant="fade-up" delay={0.1}>
          <h3 className="text-xl font-bold text-[#020240] mb-6 text-center">
            Services Management
          </h3>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {SERVICES_MANAGEMENT.map((s, i) => (
            <AnimatedSection key={s.title} variant="zoom-in" delay={0.1 + i * 0.07}>
              <div className="bg-white rounded-2xl p-5 border border-[#0808DB]/10 flex items-center gap-4
                             transition-all duration-300 hover:-translate-y-1
                             hover:shadow-[0_12px_40px_rgba(8,8,219,0.08)] h-full">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br from-[#0808DB] to-[#020240]">
                  <span className="text-lg">{s.icon}</span>
                </div>
                <div>
                  <p className="font-bold text-[#020240] text-sm">{s.title}</p>
                  <p className="text-[#888] text-xs mt-0.5">{s.en}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Menu Selectone */}
        <div className="rounded-3xl p-8 bg-gradient-to-br from-[#0808DB] to-[#020240]">
          <AnimatedSection variant="fade-up" delay={0}>
            <h3 className="text-white text-xl font-bold text-center mb-2">Menu Selectone</h3>
          </AnimatedSection>
          <AnimatedSection variant="fade-up" delay={0.08}>
            <p className="text-white/50 text-xs text-center tracking-widest mb-8">
              PILIHAN MENU KAMI / OUR MENU SELECTION
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MENU_SELECTONE.map((m, i) => (
              <AnimatedSection key={m.title} variant="zoom-in" delay={0.1 + i * 0.08}>
                <div className="flex items-start gap-3 rounded-xl p-4 border border-[#DBB732]/20
                               hover:border-[#DBB732]/50 hover:bg-[#DBB732]/5 transition-all duration-300 h-full">
                  <span className="text-2xl shrink-0">{m.icon}</span>
                  <div>
                    <p className="text-white font-semibold text-sm leading-snug">{m.title}</p>
                    <p className="text-[#DBB732]/60 text-[11px] mt-0.5">{m.en}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}