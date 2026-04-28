import AnimatedSection from "./AnimatedSection";
import { CERTIFICATIONS } from "../constants/data";

export default function Certifications() {
  return (
    <section className="bg-[#020240] py-14 md:py-16 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <AnimatedSection variant="fade-up" delay={0}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Sertifikasi & Standar</h2>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.1}>
            <p className="text-white/50 text-[15px]">Certifications & Standards</p>
          </AnimatedSection>
        </div>

        {/* Cert badges — zoom-in, each pops in individually */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {CERTIFICATIONS.map((cert, i) => (
            <AnimatedSection key={cert.name} variant="zoom-in" delay={0.1 + i * 0.1}>
              <div
                className="rounded-2xl px-6 py-5 text-center h-full"
                style={{ border: `1px solid ${cert.color}40` }}
              >
                <AnimatedSection variant="fade" delay={0.25 + i * 0.1}>
                  <div
                    className="w-3 h-3 rounded-full mx-auto mb-4"
                    style={{ background: cert.color, boxShadow: `0 0 12px ${cert.color}` }}
                  />
                </AnimatedSection>
                <p className="text-white font-bold text-base mb-1">{cert.name}</p>
                <p className="text-xs font-semibold mb-1" style={{ color: cert.color }}>
                  {cert.status}
                </p>
                <p className="text-white/40 text-[11px]">{cert.en}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
