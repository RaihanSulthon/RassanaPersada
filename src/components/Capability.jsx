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
    <section id="capability" className="bg-white py-24 px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <span
              className="inline-block px-5 py-1.5 rounded-full text-[#0808DB] text-xs font-semibold tracking-widest mb-4"
              style={{ background: "rgba(8,8,219,0.06)" }}
            >
              KAPASITAS KAMI / OUR CAPABILITY
            </span>
            <h2 className="text-4xl font-extrabold text-[#020240] mb-3">Angka Berbicara</h2>
            <p className="text-[#888] text-base">Numbers That Speak for Themselves</p>
          </div>
        </AnimatedSection>

        {/* Stat counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {STATS.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1}>
              <div
                className="text-center rounded-2xl p-10"
                style={{ background: "linear-gradient(135deg, #0808DB, #020240)" }}
              >
                <div className="text-[#DBB732] text-5xl font-black leading-none">
                  <AnimatedCounter target={s.val} suffix={s.suffix} />
                </div>
                <div className="text-white text-[15px] font-semibold mt-3">{s.label}</div>
                <div className="text-white/40 text-[11px] tracking-wide mt-1">{s.en}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Capability detail */}
        <AnimatedSection delay={0.2}>
          <div className="bg-[#f8f9ff] rounded-3xl p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-[28px] font-extrabold text-[#020240] mb-3">
                Infrastruktur Produksi Kelas Industri
              </h3>
              <p className="text-[#888] text-[13px] tracking-wide mb-6">
                INDUSTRIAL-GRADE PRODUCTION INFRASTRUCTURE
              </p>
              <p className="text-[#555] text-[15px] leading-relaxed">
                Dapur produksi kami dilengkapi peralatan berkapasitas tinggi, sistem penyimpanan
                berpendingin modern, dan armada distribusi yang menjangkau lokasi terpencil
                di seluruh nusantara.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {CAPABILITIES.map((item, i) => (
                <AnimatedSection key={item} delay={0.3 + i * 0.08} direction="right">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#DBB732] flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#020240]" />
                    </div>
                    <span className="text-[#333] text-sm">{item}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}