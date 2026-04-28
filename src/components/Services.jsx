import AnimatedSection from "./AnimatedSection";
import { SECTORS } from "../constants/data";

export default function Services() {
  return (
    <section id="services" className="bg-[#f8f9ff] py-24 px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <span
              className="inline-block px-5 py-1.5 rounded-full text-[#0808DB] text-xs font-semibold tracking-widest mb-4"
              style={{ background: "rgba(8,8,219,0.08)" }}
            >
              LAYANAN KAMI / OUR SERVICES
            </span>
            <h2 className="text-4xl font-extrabold text-[#020240] mb-3">
              Sektor yang Kami Layani
            </h2>
            <p className="text-[#666] text-base">Sectors We Serve</p>
          </div>
        </AnimatedSection>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SECTORS.map((s, i) => (
            <AnimatedSection
              key={s.title}
              delay={i * 0.1}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <div
                className="bg-white rounded-2xl p-9 border border-[#0808DB]/10
                           transition-all duration-300 cursor-default
                           hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(8,8,219,0.1)]
                           hover:border-[#DBB732]"
              >
                <div className="flex justify-between items-start mb-5">
                  <span className="text-4xl">{s.icon}</span>
                  <span
                    className={`text-[11px] font-bold px-3 py-1 rounded-full tracking-wide
                      ${s.tag === "Flagship"
                        ? "bg-[#DBB732] text-[#020240]"
                        : "bg-[#0808DB]/10 text-[#0808DB]"
                      }`}
                  >
                    {s.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#020240] mb-1">{s.title}</h3>
                <p className="text-[#aaa] text-xs tracking-wide mb-4">{s.en}</p>
                <p className="text-[#555] text-[15px] leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}