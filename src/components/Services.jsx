import AnimatedSection from "./AnimatedSection";
import { SECTORS } from "../constants/data";

export default function Services() {
  return (
    <section id="services" className="bg-[#f8f9ff] py-16 md:py-20 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading — three elements stagger in */}
        <div className="text-center mb-12">
          <AnimatedSection variant="blur-up" delay={0}>
            <span className="inline-block px-5 py-1.5 rounded-full text-[#0808DB] text-xs font-semibold tracking-widest mb-4 bg-[#0808DB]/8">
              LAYANAN KAMI / OUR SERVICES
            </span>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020240] mb-2">
              Sektor yang Kami Layani
            </h2>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.18}>
            <p className="text-[#666] text-base">Sectors We Serve</p>
          </AnimatedSection>
        </div>

        {/* Cards — zoom-in staggered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SECTORS.map((s, i) => (
            <AnimatedSection
              key={s.title}
              variant="zoom-in"
              delay={0.1 + i * 0.1}
            >
              <div
                className="bg-white rounded-2xl p-7 border border-[#0808DB]/10
                           transition-all duration-300 cursor-default
                           hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(8,8,219,0.1)]
                           hover:border-[#DBB732] h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-3xl">{s.icon}</span>
                  <span
                    className={`text-[11px] font-bold px-3 py-1 rounded-full tracking-wide ${
                      s.tag === "Flagship"
                        ? "bg-[#DBB732] text-[#020240]"
                        : "bg-[#0808DB]/10 text-[#0808DB]"
                    }`}
                  >
                    {s.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#020240] mb-1">{s.title}</h3>
                <p className="text-[#aaa] text-xs tracking-wide mb-3">{s.en}</p>
                <p className="text-[#555] text-sm leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
