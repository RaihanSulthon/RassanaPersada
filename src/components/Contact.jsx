import AnimatedSection from "./AnimatedSection";
import { CONTACT_INFO } from "../constants/data";
import { useLang } from "../contexts/LanguageContext";
import { t, tx } from "../constants/translations";

export default function Contact() {
  const { lang } = useLang();

  return (
    <section id="contact" className="bg-white py-16 md:py-20 px-5 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection variant="blur-up" delay={0}>
          <span className="inline-block px-5 py-1.5 rounded-full text-[#0808DB] text-xs font-semibold tracking-widest mb-5 bg-[#0808DB]/6">
            {tx(t.contact.badge, lang)}
          </span>
        </AnimatedSection>
        <AnimatedSection variant="fade-up" delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#020240] mb-4">
            {tx(t.contact.heading, lang)}
          </h2>
        </AnimatedSection>
        <AnimatedSection variant="fade-up" delay={0.18}>
          <p className="text-[#888] text-[15px] mb-2">{tx(t.contact.subheading, lang)}</p>
        </AnimatedSection>
        <AnimatedSection variant="fade-up" delay={0.26}>
          <p className="text-[#555] text-base leading-relaxed mb-10 max-w-lg mx-auto">
            {tx(t.contact.desc, lang)}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {CONTACT_INFO.map((c, i) => (
            <AnimatedSection key={c.label} variant="zoom-in" delay={0.3 + i * 0.1}>
              {c.href ? (
                <a href={c.href} target="_blank" rel="noopener noreferrer"
                  className="bg-[#f8f9ff] rounded-2xl p-6 border border-[#0808DB]/8 h-full flex flex-col
                             no-underline group transition-all duration-300
                             hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(8,8,219,0.1)]
                             hover:border-[#0808DB]/25">
                  <span className="text-2xl block mb-2">{c.icon}</span>
                  <p className="text-[#888] text-xs tracking-wide mb-1">{c.label}</p>
                  <p className="text-[#020240] font-semibold text-sm group-hover:text-[#0808DB] transition-colors duration-200">{c.val}</p>
                  <p className="text-[#0808DB] text-[11px] mt-2 font-medium">
                    {tx(t.contact.mapsLabel, lang)}
                  </p>
                </a>
              ) : (
                <div className="bg-[#f8f9ff] rounded-2xl p-6 border border-[#0808DB]/8 h-full">
                  <span className="text-2xl block mb-2">{c.icon}</span>
                  <p className="text-[#888] text-xs tracking-wide mb-1">{c.label}</p>
                  <p className="text-[#020240] font-semibold text-sm">{c.val}</p>
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection variant="zoom-in" delay={0.6}>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:info@rassanapersada.co.id"
              className="inline-block px-10 py-4 rounded-full text-white font-bold text-[15px]
                 tracking-wide no-underline bg-linear-to-br from-[#0808DB] to-[#020240]
                 transition-all duration-300 hover:-translate-y-0.5
                 hover:shadow-[0_16px_48px_rgba(8,8,219,0.3)]">
              {tx(t.contact.emailBtn, lang)}
            </a>
            <a href="https://wa.me/6281258883435" target="_blank" rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full text-[#020240] font-bold text-[15px]
                 tracking-wide no-underline bg-[#DBB732]
                 transition-all duration-300 hover:-translate-y-0.5
                 hover:bg-[#f0cc4a] hover:shadow-[0_16px_48px_rgba(219,183,50,0.4)]">
              {tx(t.contact.waBtn, lang)}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}