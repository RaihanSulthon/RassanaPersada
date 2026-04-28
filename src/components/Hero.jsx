import { useEffect, useState } from "react";

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  width:  Math.random() * 4 + 2,
  height: Math.random() * 4 + 2,
  opacity: Math.random() * 0.5 + 0.1,
  left:  `${Math.random() * 100}%`,
  top:   `${Math.random() * 100}%`,
  duration: `${Math.random() * 6 + 4}s`,
  delay:    `${Math.random() * 4}s`,
}));

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const entrance = (delayS) => ({
    opacity:   loaded ? 1 : 0,
    transform: loaded ? "none" : "translateY(40px)",
    transition: `opacity 0.9s ease ${delayS}s, transform 0.9s ease ${delayS}s`,
  });

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #020240 0%, #0808DB 50%, #04046b 100%)",
      }}
    >
      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-[#DBB732]"
          style={{
            width:   p.width,
            height:  p.height,
            opacity: p.opacity,
            left:    p.left,
            top:     p.top,
            animation: `float ${p.duration} ease-in-out infinite alternate`,
            animationDelay: p.delay,
          }}
        />
      ))}

      {/* Decorative rings */}
      <div
        className="absolute top-[20%] right-[10%] w-96 h-96 rounded-full"
        style={{
          border: "1px solid rgba(219,183,50,0.15)",
          animation: "spin 30s linear infinite",
        }}
      />
      <div
        className="absolute top-[15%] right-[7%] rounded-full"
        style={{
          width: 500, height: 500,
          border: "1px solid rgba(219,183,50,0.08)",
          animation: "spin 40s linear infinite reverse",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-4xl">
        {/* Badge */}
        <div style={entrance(0.2)} className="mb-6">
          <span
            className="inline-block px-5 py-1.5 rounded-full text-[#DBB732] text-xs font-semibold tracking-[3px]"
            style={{
              background: "rgba(219,183,50,0.1)",
              border:     "1px solid rgba(219,183,50,0.3)",
            }}
          >
            INDUSTRIAL CATERING SPECIALIST
          </span>
        </div>

        {/* Heading */}
        <div style={entrance(0.4)}>
          <h1 className="text-white text-6xl font-extrabold leading-none tracking-tight mb-2">
            RASSANA
          </h1>
          <h1 className="text-[#DBB732] text-6xl font-extrabold leading-none tracking-tight mb-6">
            PERSADA
          </h1>
        </div>

        {/* Taglines */}
        <div style={entrance(0.6)}>
          <p className="text-white/75 text-lg leading-relaxed mb-2">
            Solusi Katering Industri Berskala Besar untuk Korporasi Indonesia
          </p>
          <p className="text-[#DBB732]/70 text-[15px] tracking-wide mb-10">
            Large-Scale Industrial Catering Solutions for Indonesian Corporations
          </p>
        </div>

        {/* CTAs */}
        <div
          style={entrance(0.8)}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#contact"
            className="inline-block px-9 py-3.5 rounded-full font-bold text-sm tracking-wide
                       bg-[#DBB732] text-[#020240] no-underline
                       transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f0cc4a]"
          >
            Hubungi Kami
          </a>
          <a
            href="#about"
            className="inline-block px-9 py-3.5 rounded-full font-semibold text-sm tracking-wide
                       text-white no-underline transition-all duration-300
                       hover:text-[#DBB732] hover:border-[#DBB732]"
            style={{ border: "1px solid rgba(255,255,255,0.3)" }}
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 1s ease 1.2s" }}
      >
        <div
          className="w-px h-14 mx-auto"
          style={{
            background: "linear-gradient(to bottom, #DBB732, transparent)",
            animation:  "pulse 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}