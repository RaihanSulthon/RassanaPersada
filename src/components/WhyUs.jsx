import AnimatedSection from "./AnimatedSection";
import { PILLARS } from "../constants/data";

export default function WhyUs() {
  return (
    <section id="why" className="bg-[#020240] py-16 md:py-20 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading — badge → title → subtitle */}
        <div className="text-center mb-12">
          <AnimatedSection variant="blur-up" delay={0}>
            <span className="inline-block px-5 py-1.5 rounded-full text-[#DBB732] text-xs font-semibold tracking-widest mb-4 bg-[#DBB732]/10 border border-[#DBB732]/30">
              KEUNGGULAN KAMI / OUR STRENGTHS
            </span>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
              Mengapa Memilih Kami?
            </h2>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.18}>
            <p className="text-white/50 text-base">Why Choose Rassana Persada?</p>
          </AnimatedSection>
        </div>

        {/* Pillar cards — zoom-in, tightly staggered */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PILLARS.map((p, i) => (
            <AnimatedSection key={p.title} variant="zoom-in" delay={0.1 + i * 0.09}>
              <div
                className="rounded-2xl p-7 border border-[#DBB732]/40 md:border-[#DBB732]/15 cursor-default h-full
                           transition-all duration-300
                           hover:bg-[#DBB732]/5 hover:border-[#DBB732]/40 hover:-translate-y-1"
              >
                <AnimatedSection variant="fade-up" delay={0.2 + i * 0.09}>
                  <span className="text-3xl mb-4 block">{p.icon}</span>
                </AnimatedSection>
                <h3 className="text-white text-base font-bold mb-1">{p.title}</h3>
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
