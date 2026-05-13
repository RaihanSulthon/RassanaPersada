import AnimatedSection from "./AnimatedSection";
import { CERTIFICATIONS, COMPETENCY_CERTS, MOG_TRAINING_CERTS } from "../constants/data";
import { useLang } from "../contexts/LanguageContext";
import { t, tx } from "../constants/translations";

export default function Certifications() {
  const { lang } = useLang();

  return (
    <section className="bg-[#020240] py-14 md:py-16 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <AnimatedSection variant="fade-up" delay={0}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
              {tx(t.certs.heading, lang)}
            </h2>
          </AnimatedSection>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {CERTIFICATIONS.map((cert, i) => (
            <AnimatedSection key={cert.name} variant="zoom-in" delay={0.1 + i * 0.1}>
              <div className="rounded-2xl px-6 py-5 text-center h-full" style={{ border: `1px solid ${cert.color}40` }}>
                <div className="w-3 h-3 rounded-full mx-auto mb-4" style={{ background: cert.color, boxShadow: `0 0 12px ${cert.color}` }} />
                <p className="text-white font-bold text-base mb-1">{cert.name}</p>
<p className="text-xs font-semibold mb-1" style={{ color: cert.color }}>{cert.status[lang]}</p>
<p className="text-white/40 text-[11px]">{cert.desc[lang]}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatedSection variant="fade-left" delay={0.2}>
            <div className="rounded-2xl p-6 border border-[#DBB732]/20">
              <h4 className="text-[#DBB732] text-sm font-bold tracking-widest mb-4">COMPETENCY TRAINING CERTIFICATE</h4>
              <div className="flex flex-col gap-2">
                {COMPETENCY_CERTS.map((cert, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#DBB732] shrink-0 mt-2" />
                    <p className="text-white/70 text-sm">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection variant="fade-right" delay={0.2}>
            <div className="rounded-2xl p-6 border border-[#DBB732]/20">
              <h4 className="text-[#DBB732] text-sm font-bold tracking-widest mb-4">MOG TRAINING CERTIFICATE</h4>
              <div className="flex flex-col gap-2">
                {MOG_TRAINING_CERTS.map((cert, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#DBB732] shrink-0 mt-2" />
                    <p className="text-white/70 text-sm">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}