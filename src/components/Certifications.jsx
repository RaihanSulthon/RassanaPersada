import AnimatedSection from "./AnimatedSection";
import { CERTIFICATIONS } from "../constants/data";

export default function Certifications() {
  return (
    <section className="bg-[#020240] py-20 px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white mb-3">Sertifikasi & Standar</h2>
            <p className="text-white/50 text-[15px]">Certifications & Standards</p>
          </div>
        </AnimatedSection>

        {/* Cert badges */}
        <div className="flex justify-center gap-6 flex-wrap">
          {CERTIFICATIONS.map((cert, i) => (
            <AnimatedSection key={cert.name} delay={i * 0.1}>
              <div
                className="rounded-2xl px-8 py-6 text-center min-w-[160px]"
                style={{ border: `1px solid ${cert.color}40` }}
              >
                <div
                  className="w-3 h-3 rounded-full mx-auto mb-4"
                  style={{
                    background:  cert.color,
                    boxShadow:   `0 0 12px ${cert.color}`,
                  }}
                />
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