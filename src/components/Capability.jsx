import { useEffect, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { useInView } from "../hooks/useInView";
import { STATS, CAPABILITIES } from "../constants/data";

function AnimatedCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useInView();

  useEffect(() => {
    if (!visible) return;
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [visible, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Capability() {
  return (
    <section id="capability" className="bg-white py-16 md:py-20 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <AnimatedSection variant="blur-up" delay={0}>
            <span className="inline-block px-5 py-1.5 rounded-full text-[#0808DB] text-xs font-semibold tracking-widest mb-4 bg-[#0808DB]/6">
              KAPASITAS KAMI / OUR CAPABILITY
            </span>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020240] mb-2">Angka Berbicara</h2>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.18}>
            <p className="text-[#888] text-base">Numbers That Speak for Themselves</p>
          </AnimatedSection>
        </div>

        {/* Stat counters — zoom-in, each pops independently */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
          {STATS.map((s, i) => (
            <AnimatedSection key={s.label} variant="zoom-in" delay={0.1 + i * 0.1}>
              <div className="text-center rounded-2xl p-6 bg-linear-to-br from-[#0808DB] to-[#020240]">
                <div className="text-[#DBB732] text-3xl md:text-4xl font-black leading-none">
                  <AnimatedCounter target={s.val} suffix={s.suffix} />
                </div>
                <div className="text-white text-sm font-semibold mt-3">{s.label}</div>
                <div className="text-white/40 text-[11px] tracking-wide mt-1">{s.en}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Capability detail */}
        <div className="bg-[#f8f9ff] rounded-3xl p-5 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center overflow-hidden">

          {/* Left text — three staggered blocks */}
          <div>
            <AnimatedSection variant="fade-left" delay={0.05}>
              <h3 className="text-2xl font-extrabold text-[#020240] mb-2">
                Infrastruktur Produksi Kelas Industri
              </h3>
            </AnimatedSection>

            <AnimatedSection variant="fade-left" delay={0.14}>
              <p className="text-[#888] text-xs tracking-wide mb-5">
                INDUSTRIAL-GRADE PRODUCTION INFRASTRUCTURE
              </p>
            </AnimatedSection>

            <AnimatedSection variant="fade-left" delay={0.22}>
              <p className="text-[#555] text-sm leading-relaxed">
                Dapur produksi kami dilengkapi peralatan berkapasitas tinggi, sistem penyimpanan
                berpendingin modern, dan armada distribusi yang menjangkau lokasi terpencil
                di seluruh nusantara.
              </p>
            </AnimatedSection>
          </div>

          {/* Right list — each item slides in from right */}
          <div className="flex flex-col gap-3">
            {CAPABILITIES.map((item, i) => (
              <AnimatedSection key={item} variant="fade-right" delay={0.1 + i * 0.09}>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#DBB732] flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#020240]" />
                  </div>
                  <span className="text-[#333] text-sm">{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
