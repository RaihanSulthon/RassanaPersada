import AnimatedSection from "./AnimatedSection";
import { useLang } from "../contexts/LanguageContext";
import { t, tx } from "../constants/translations";

export default function About() {
  const { lang } = useLang();
  const points = t.about.points[lang];

  return (
    <section id="about" className="bg-white py-16 md:py-20 px-5 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-0">
          <AnimatedSection variant="fade-left" delay={0}>
            <div className="w-12 h-1 bg-[#DBB732] rounded mb-5" />
          </AnimatedSection>
          <AnimatedSection variant="fade-up" delay={0.08}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020240] leading-tight mb-6">
              {tx(t.about.heading1, lang)}
              <br />
              <span className="text-[#DBB732]">{tx(t.about.heading2, lang)}</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection variant="fade-up" delay={0.18}>
            <p className="text-[#444] text-base leading-relaxed mb-4">{tx(t.about.p1, lang)}</p>
          </AnimatedSection>
          <AnimatedSection variant="fade-up" delay={0.26}>
            <p className="text-[#666] text-[15px] leading-relaxed">{tx(t.about.p2, lang)}</p>
          </AnimatedSection>
          <div className="flex flex-col gap-3 mt-8">
            {points.map((point, i) => (
              <AnimatedSection key={i} variant="fade-left" delay={0.34 + i * 0.1}>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#DBB732] flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#020240]" />
                  </div>
                  <p className="text-[#555] text-sm leading-relaxed">{point}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection variant="fade-right" delay={0.2}>
          <div className="relative">
            <div className="rounded-3xl p-8 text-white bg-linear-to-br from-[#0808DB] to-[#020240]">
              <AnimatedSection variant="blur-up" delay={0.35}>
                <p className="text-[#DBB732] text-[13px] font-semibold tracking-widest mb-4">
                  {tx(t.about.visionLabel, lang)}
                </p>
              </AnimatedSection>
              <AnimatedSection variant="fade-up" delay={0.44}>
                <p className="text-xl font-light leading-relaxed">{tx(t.about.visionText, lang)}</p>
              </AnimatedSection>
              <div className="my-6 h-px bg-[#DBB732]/30" />
              <AnimatedSection variant="blur-up" delay={0.50}>
                <p className="text-[#DBB732] text-[13px] font-semibold tracking-widest mb-3">
                  {tx(t.about.missionLabel, lang)}
                </p>
              </AnimatedSection>
              <AnimatedSection variant="fade-up" delay={0.58}>
                <p className="text-sm text-white/70 leading-relaxed">{tx(t.about.missionText, lang)}</p>
              </AnimatedSection>
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#DBB732] rounded-2xl -z-10" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}