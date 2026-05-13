                                        import { useEffect, useState } from "react";

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  width: Math.random() * 4 + 2,
  height: Math.random() * 4 + 2,
  opacity: Math.random() * 0.5 + 0.1,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: `${Math.random() * 4}s`,
}));

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const entrance = (delayS) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "none" : "translateY(40px)",
    transition: `opacity 0.9s ease ${delayS}s, transform 0.9s ease ${delayS}s`,
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-[#020240] via-[#0808DB] to-[#04046b] px-5 sm:px-8">
      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-[#DBB732] animate-float"
          style={{
            width: p.width,
            height: p.height,
            opacity: p.opacity,
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
          }}
        />
      ))}

      {/* Decorative rings */}
      <div className="absolute top-[20%] right-[10%] w-96 h-96 rounded-full border border-[#DBB732]/15 animate-spin-slow" />
      <div className="absolute top-[15%] right-[7%] w-125 h-125 rounded-full border border-[#DBB732]/8 animate-spin-slower" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl w-full">
        {/* Badge */}
        <div style={entrance(0.2)} className="mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full text-[#DBB732] text-[10px] sm:text-xs font-semibold tracking-[2px] sm:tracking-[3px] bg-[#DBB732]/10 border border-[#DBB732]/30">
            INDUSTRIAL CATERING SPECIALIST
          </span>
        </div>

        {/* Heading */}
        <div style={entrance(0.4)}>
          <h1 className="text-white text-4xl sm:text-6xl font-extrabold leading-none tracking-tight mb-2">
            RASSANA
          </h1>
          <h1 className="text-[#DBB732] text-4xl sm:text-6xl font-extrabold leading-none tracking-tight mb-6">
            PERSADA
          </h1>
        </div>

        {/* Taglines */}
        <div style={entrance(0.6)}>
          <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-2">
            Solusi Katering Industri Berskala Besar untuk Korporasi Indonesia
          </p>
          <p className="text-[#DBB732]/70 text-sm sm:text-[15px] tracking-wide mb-10">
            Large-Scale Industrial Catering Solutions for Indonesian
            Corporations
          </p>
        </div>

        {/* CTAs */}
        <div
          style={entrance(0.8)}
          className="flex gap-4 justify-center flex-wrap">
          <a
            href="#contact"
            className="inline-block px-9 py-3.5 rounded-full font-bold text-sm tracking-wide
                       bg-[#DBB732] text-[#020240] no-underline
                       transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f0cc4a]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block w-4 h-4 mr-2 -mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Hubungi Kami
          </a>
          <a
            href="/COMPRO_RPM.pdf"
            download="Company_Profile_Rassana_Persada.pdf"
            className="inline-block px-9 py-3.5 rounded-full font-semibold text-sm tracking-wide
             text-white no-underline border border-white/30
             transition-all duration-300 hover:text-[#DBB732] hover:border-[#DBB732]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block w-4 h-4 mr-2 -mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4"
              />
            </svg>
            Download Compro
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 1s ease 1.2s" }}>
        <div className="w-px h-14 mx-auto bg-linear-to-b from-[#DBB732] to-transparent animate-pulse-line" />
      </div>
    </section>
  );
}
