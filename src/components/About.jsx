import AnimatedSection from "./AnimatedSection";


const QUICK_STATS = [
  { label: "Tahun Pengalaman", en: "Years Experience",  val: "5+"  },
  { label: "Klien Aktif",      en: "Active Clients",    val: "20+" },
  { label: "Sektor Industri",  en: "Industry Sectors",  val: "4+"  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* Left — text */}
        <div>
          <AnimatedSection direction="left">
            <div className="w-12 h-1 bg-[#DBB732] rounded mb-5" />
            <h2 className="text-4xl font-extrabold text-[#020240] leading-tight mb-6">
              Tentang<br />
              <span className="text-[#DBB732]">Rassana Persada</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.15} direction="left">
            <p className="text-[#444] text-base leading-relaxed mb-5">
              Rassana Persada adalah perusahaan katering industri terpercaya yang berbasis di
              Jakarta, Indonesia. Kami hadir untuk memenuhi kebutuhan logistik makanan berskala
              besar bagi perusahaan-perusahaan terkemuka di berbagai sektor strategis nasional.
            </p>
            <p className="text-[#666] text-[15px] leading-relaxed">
              Founded on the belief that a well-fed workforce is a productive workforce, we deliver
              precision-planned, nutritionally balanced meals — thousands of portions per day — to
              mining sites, island resorts, factories, and industrial complexes across the
              Indonesian archipelago.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3} direction="left">
            <div className="flex gap-10 mt-10">
              {QUICK_STATS.map((s) => (
                <div key={s.label}>
                  <div className="text-4xl font-extrabold text-[#0808DB]">{s.val}</div>
                  <div className="text-[13px] text-[#666] leading-snug mt-1">
                    {s.label}
                    <br />
                    <span className="text-[11px] text-[#aaa]">{s.en}</span>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Right — mission card */}
        <AnimatedSection direction="right" delay={0.2}>
          <div className="relative">
            <div
              className="rounded-3xl p-10 text-white"
              style={{ background: "linear-gradient(135deg, #0808DB, #020240)" }}
            >
              <p className="text-[#DBB732] text-[13px] font-semibold tracking-widest mb-4">
                MISI KAMI / OUR MISSION
              </p>
              <p className="text-xl font-light leading-relaxed">
                "Menyajikan cita rasa terbaik dengan standar kualitas tertinggi, demi
                produktivitas dan kesejahteraan tenaga kerja Indonesia di mana pun mereka berada."
              </p>
              <div className="my-7" style={{ height: 1, background: "rgba(219,183,50,0.3)" }} />
              <p className="text-sm text-white/60 leading-relaxed">
                "Delivering the finest culinary experience to the highest quality standards —
                for the productivity and wellbeing of Indonesia's workforce, wherever they are."
              </p>
            </div>
            {/* Decorative corner box */}
            <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-[#DBB732] rounded-2xl -z-10" />
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}