import AnimatedSection from "./AnimatedSection";
import { PILLARS } from "../constants/data";

export default function WhyUs() {
  return (
    <section id="why" className="bg-[#020240] py-24 px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <span
              className="inline-block px-5 py-1.5 rounded-full text-[#DBB732] text-xs font-semibold tracking-widest mb-4"
              style={{
                background: "rgba(219,183,50,0.1)",
                border:     "1px solid rgba(219,183,50,0.3)",
              }}
            >
              KEUNGGULAN KAMI / OUR STRENGTHS
            </span>
            <h2 className="text-4xl font-extrabold text-white mb-3">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-white/50 text-base">Why Choose Rassana Persada?</p>
          </div>
        </AnimatedSection>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.08}>
              <div
                className="rounded-2xl p-8 border border-[#DBB732]/15 cursor-default
                           transition-all duration-300
                           hover:bg-[#DBB732]/5 hover:border-[#DBB732]/40 hover:-translate-y-1"
              >
                <span className="text-3xl mb-4 block">{p.icon}</span>
                <h3 className="text-white text-[17px] font-bold mb-1">{p.title}</h3>
                <p className="text-[#DBB732]/70 text-xs tracking-wide mb-3">{p.en}</p>
                <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}