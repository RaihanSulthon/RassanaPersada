import AnimatedSection from "./AnimatedSection";

const QUICK_STATS = [
  { label: "Tahun Pengalaman", en: "Years Experience",  val: "5+"  },
  { label: "Klien Aktif",      en: "Active Clients",    val: "20+" },
  { label: "Sektor Industri",  en: "Industry Sectors",  val: "4+"  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-16 md:py-20 px-5 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left — text */}
        <div className="flex flex-col gap-0">

          {/* Gold accent bar reveals first */}
          <AnimatedSection variant="fade-left" delay={0}>
            <div className="w-12 h-1 bg-[#DBB732] rounded mb-5" />
          </AnimatedSection>

          {/* Main heading */}
          <AnimatedSection variant="fade-up" delay={0.08}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020240] leading-tight mb-6">
              Tentang<br />
              <span className="text-[#DBB732]">Rassana Persada</span>
            </h2>
          </AnimatedSection>

          {/* First paragraph */}
          <AnimatedSection variant="fade-up" delay={0.18}>
            <p className="text-[#444] text-base leading-relaxed mb-4">
              Rassana Persada adalah perusahaan katering industri terpercaya yang berbasis di
              Jakarta, Indonesia. Kami hadir untuk memenuhi kebutuhan logistik makanan berskala
              besar bagi perusahaan-perusahaan terkemuka di berbagai sektor strategis nasional.
            </p>
          </AnimatedSection>

          {/* Second paragraph */}
          <AnimatedSection variant="fade-up" delay={0.26}>
            <p className="text-[#666] text-[15px] leading-relaxed">
              Founded on the belief that a well-fed workforce is a productive workforce, we deliver
              precision-planned, nutritionally balanced meals — thousands of portions per day — to
              mining sites, island resorts, factories, and industrial complexes across the
              Indonesian archipelago.
            </p>
          </AnimatedSection>

          {/* Stats — each number pops in with zoom */}
          <div className="flex gap-5 flex-wrap mt-8">
            {QUICK_STATS.map((s, i) => (
              <AnimatedSection key={s.label} variant="zoom-in" delay={0.34 + i * 0.1}>
                <div>
                  <div className="text-4xl font-extrabold text-[#0808DB]">{s.val}</div>
                  <div className="text-[13px] text-[#666] leading-snug mt-1">
                    {s.label}
                    <br />
                    <span className="text-[11px] text-[#aaa]">{s.en}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Right — mission card slides in from right */}
        <AnimatedSection variant="fade-right" delay={0.2}>
          <div className="relative">
            <div className="rounded-3xl p-8 text-white bg-linear-to-br from-[#0808DB] to-[#020240]">

              <AnimatedSection variant="blur-up" delay={0.35}>
                <p className="text-[#DBB732] text-[13px] font-semibold tracking-widest mb-4">
                  MISI KAMI / OUR MISSION
                </p>
              </AnimatedSection>

              <AnimatedSection variant="fade-up" delay={0.44}>
                <p className="text-xl font-light leading-relaxed">
                  "Menyajikan cita rasa terbaik dengan standar kualitas tertinggi, demi
                  produktivitas dan kesejahteraan tenaga kerja Indonesia di mana pun mereka berada."
                </p>
              </AnimatedSection>

              <div className="my-6 h-px bg-[#DBB732]/30" />

              <AnimatedSection variant="fade-up" delay={0.54}>
                <p className="text-sm text-white/60 leading-relaxed">
                  "Delivering the finest culinary experience to the highest quality standards —
                  for the productivity and wellbeing of Indonesia's workforce, wherever they are."
                </p>
              </AnimatedSection>

            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#DBB732] rounded-2xl -z-10" />
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
