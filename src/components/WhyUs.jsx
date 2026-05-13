import AnimatedSection from "./AnimatedSection";
import { PILLARS, VALUES, COMMITMENTS } from "../constants/data";
import { useLang } from "../contexts/LanguageContext";
import { t, tx } from "../constants/translations";

export default function WhyUs() {
  const { lang } = useLang();

  return (
    <section id="why" className="bg-[#020240] py-16 md:py-20 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <AnimatedSection variant="blur-up" delay={0}>
            <span className="inline-block px-5 py-1.5 rounded-full text-[#DBB732] text-xs font-semibold tracking-widest mb-4 bg-[#DBB732]/10 border border-[#DBB732]/30">
              {tx(t.whyUs.badge, lang)}
            </span>
          </AnimatedSection>
          <AnimatedSection variant="fade-up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
              {tx(t.whyUs.heading, lang)}
            </h2>
          </AnimatedSection>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PILLARS.map((p, i) => (
            <AnimatedSection key={p.title} variant="zoom-in" delay={0.1 + i * 0.09}>
              <div className="rounded-2xl p-7 border border-[#DBB732]/40 md:border-[#DBB732]/15 cursor-default h-full
                             transition-all duration-300 hover:bg-[#DBB732]/5 hover:border-[#DBB732]/40 hover:-translate-y-1">
                <AnimatedSection variant="fade-up" delay={0.2 + i * 0.09}>
                  <span className="text-3xl mb-4 block">{p.icon}</span>
                </AnimatedSection>
                <h3 className="text-white text-base font-bold mb-1">{p.title[lang]}</h3>
<p className="text-white/60 text-sm leading-relaxed mt-2">{p.desc[lang]}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-14">
          <AnimatedSection variant="fade-up" delay={0}>
            <h3 className="text-center text-white text-xl font-bold mb-2">{tx(t.whyUs.valuesHeading, lang)}</h3>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {VALUES.map((v, i) => (
              <AnimatedSection key={v.text} variant="zoom-in" delay={0.1 + i * 0.07}>
                <div className="flex items-start gap-3 rounded-xl p-4 border border-[#DBB732]/15 hover:border-[#DBB732]/40 hover:bg-[#DBB732]/5 transition-all duration-300">
                  <span className="text-xl shrink-0">{v.icon}</span>
                  <p className="text-white text-sm font-semibold leading-snug">{v[lang]}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <AnimatedSection variant="fade-up" delay={0}>
            <h3 className="text-center text-white text-xl font-bold mb-2">{tx(t.whyUs.commitmentHeading, lang)}</h3>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
            {COMMITMENTS.map((c, i) => (
              <AnimatedSection key={c.title} variant="zoom-in" delay={0.1 + i * 0.1}>
                <div className="rounded-2xl p-6 border border-[#DBB732]/20 hover:border-[#DBB732]/50 hover:bg-[#DBB732]/5 transition-all duration-300 text-center h-full">
                  <span className="text-3xl block mb-3">{c.icon}</span>
                  <h4 className="text-white font-bold text-base mb-2">{c.title[lang]}</h4>
<p className="text-white/60 text-sm leading-relaxed">{c.desc[lang]}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}