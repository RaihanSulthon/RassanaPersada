import AnimatedSection from "./AnimatedSection";
import {
  CONTRACT_PROGRAMS,
  FOOD_STANDARDS,
  BUSINESS_PROCESS,
} from "../constants/data";

const CAPABILITIES = [
  "Peralatan dan kendaraan operasional siap pakai",
  "Ruang penyimpanan dingin dan kering berstandar",
  "Kolam penyedia siap di kota-kota besar Indonesia",
  "Tim koki profesional dengan resep dan menu sendiri",
  "Kursus pelatihan internal secara teratur untuk personel",
];

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
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020240] mb-2">
              Angka Berbicara
            </h2>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.18}>
            <p className="text-[#888] text-base">
              Numbers That Speak for Themselves
            </p>
          </AnimatedSection>
        </div>

        {/* Contract Programs — dari Compro */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
          {CONTRACT_PROGRAMS.map((cp, i) => (
            <AnimatedSection
              key={cp.title}
              variant="zoom-in"
              delay={0.1 + i * 0.1}>
              <div className="text-center rounded-2xl p-6 bg-linear-to-br from-[#0808DB] to-[#020240] h-full flex flex-col items-center justify-center">
                <span className="text-3xl mb-3">{cp.icon}</span>
                <div className="text-white text-sm font-semibold leading-snug mt-1 text-center">
                  {cp.title}
                </div>
                <div className="text-white/40 text-[11px] tracking-wide mt-1 text-center">
                  {cp.en}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Capability detail */}
        <div className="bg-[#f8f9ff] rounded-3xl p-5 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center overflow-hidden">
          {/* Left text */}
          <div>
            <AnimatedSection variant="fade-left" delay={0.05}>
              <h3 className="text-2xl font-extrabold text-[#020240] mb-2">
                Kemampuan Operasional Kami
              </h3>
            </AnimatedSection>

            <AnimatedSection variant="fade-left" delay={0.14}>
              <p className="text-[#888] text-xs tracking-wide mb-5">
                OUR OPERATIONAL CAPABILITIES
              </p>
            </AnimatedSection>

            <AnimatedSection variant="fade-left" delay={0.22}>
              <p className="text-[#555] text-sm leading-relaxed">
                Kami mempertahankan jaringan sumber daya manusia yang luas
                dengan pengalaman dalam perdagangan katering lepas pantai dan
                darat serta pembersihan umum area akomodasi. Dengan peralatan,
                kendaraan, ruang penyimpanan dingin dan kering yang kami miliki
                serta kolam penyedia yang siap di kota-kota besar Indonesia.
              </p>
            </AnimatedSection>
          </div>

          {/* Right list */}
          <div className="flex flex-col gap-3">
            {CAPABILITIES.map((item, i) => (
              <AnimatedSection
                key={item}
                variant="fade-right"
                delay={0.1 + i * 0.09}>
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

        {/* Standar Bahan Baku */}
        <div className="mt-10">
          <AnimatedSection variant="fade-up" delay={0}>
            <h3 className="text-center text-2xl font-extrabold text-[#020240] mb-1">
              Standar Bahan Baku
            </h3>
          </AnimatedSection>
          <AnimatedSection variant="fade-up" delay={0.08}>
            <p className="text-center text-[#888] text-sm mb-8">
              Healthy Food Science Series
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {FOOD_STANDARDS.map((f, i) => (
              <AnimatedSection
                key={f.title}
                variant="zoom-in"
                delay={0.1 + i * 0.08}>
                <div className="text-center rounded-2xl p-6 bg-[#f8f9ff] border border-[#0808DB]/8 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(8,8,219,0.08)] transition-all duration-300">
                  <span className="text-3xl block mb-3">{f.icon}</span>
                  <p className="text-[#020240] font-bold text-sm">{f.title}</p>
                  <p className="text-[#aaa] text-xs mt-1">{f.en}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Business Process */}
        <div className="mt-14">
          <AnimatedSection variant="fade-up" delay={0}>
            <h3 className="text-center text-2xl font-extrabold text-[#020240] mb-1">
              Proses Bisnis Kami
            </h3>
          </AnimatedSection>
          <AnimatedSection variant="fade-up" delay={0.08}>
            <p className="text-center text-[#888] text-sm mb-8">
              Our Business Process
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {BUSINESS_PROCESS.map((bp, i) => (
              <AnimatedSection
                key={bp.step}
                variant="fade-up"
                delay={0.1 + i * 0.1}>
                <div className="relative rounded-2xl p-6 bg-gradient-to-br from-[#0808DB] to-[#020240] h-full">
                  <p className="text-[#DBB732] text-4xl font-black opacity-30 absolute top-4 right-5">
                    {bp.step}
                  </p>
                  <p className="text-[#DBB732] text-xs font-semibold tracking-widest mb-2">
                    {bp.en}
                  </p>
                  <h4 className="text-white font-bold text-base mb-3">
                    {bp.title}
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {bp.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}