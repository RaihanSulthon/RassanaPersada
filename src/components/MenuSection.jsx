import AnimatedSection from "./AnimatedSection";
import { MENU_SELECTONE, SERVICES_MANAGEMENT } from "../constants/data";
import { useLang } from "../contexts/LanguageContext";
import { t, tx } from "../constants/translations";

export default function MenuSection() {
  const { lang } = useLang();

  return (
    <section id="menu" className="bg-[#f8f9ff] py-16 md:py-20 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <AnimatedSection variant="blur-up" delay={0}>
            <span className="inline-block px-5 py-1.5 rounded-full text-[#0808DB] text-xs font-semibold tracking-widest mb-4 bg-[#0808DB]/6">
              {tx(t.menu.badge, lang)}
            </span>
          </AnimatedSection>
          <AnimatedSection variant="fade-up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020240] mb-2">
              {tx(t.menu.heading, lang)}
            </h2>
          </AnimatedSection>
          <AnimatedSection variant="fade-up" delay={0.18}>
            <p className="text-[#888] text-base">{tx(t.menu.subheading, lang)}</p>
          </AnimatedSection>
        </div>

        <AnimatedSection variant="fade-up" delay={0.1}>
          <h3 className="text-xl font-bold text-[#020240] mb-6 text-center">
            {tx(t.menu.mgmtHeading, lang)}
          </h3>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {SERVICES_MANAGEMENT.map((s, i) => (
            <AnimatedSection key={s.title} variant="zoom-in" delay={0.1 + i * 0.07}>
              <div
                className="bg-white rounded-2xl p-5 border border-[#0808DB]/10 flex items-center gap-4
                             transition-all duration-300 hover:-translate-y-1
                             hover:shadow-[0_12px_40px_rgba(8,8,219,0.08)] h-full"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-linear-to-br from-[#0808DB] to-[#020240]">
                  <span className="text-lg">{s.icon}</span>
                </div>
                <div>
                  <p className="font-bold text-[#020240] text-sm">{s.title[lang]}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="rounded-3xl p-8 bg-linear-to-br from-[#0808DB] to-[#020240]">
          <AnimatedSection variant="fade-up" delay={0}>
            <h3 className="text-white text-xl font-bold text-center mb-2">
              {tx(t.menu.menuHeading, lang)}
            </h3>
          </AnimatedSection>
          <AnimatedSection variant="fade-up" delay={0.08}>
            <p className="text-white/50 text-xs text-center tracking-widest mb-8">
              {tx(t.menu.menuSub, lang)}
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MENU_SELECTONE.map((m, i) => (
              <AnimatedSection key={m.title} variant="zoom-in" delay={0.1 + i * 0.08}>
                <div
                  className="flex items-start gap-3 rounded-xl p-4 border border-[#DBB732]/20
                               hover:border-[#DBB732]/50 hover:bg-[#DBB732]/5 transition-all duration-300 h-full"
                >
                  <span className="text-2xl shrink-0">{m.icon}</span>
                  <p className="text-white font-semibold text-sm leading-snug">{m.title[lang]}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
