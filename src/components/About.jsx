import AnimatedSection from "./AnimatedSection";

export default function About() {
  const COMPANY_POINTS = [
    "Budaya perusahaan kami adalah kebanggaan dalam kinerja dan integritas, ditambah dengan tingkat komitmen yang berasal dari kepuasan dan motivasi karyawan.",
    "Kru kami berdokumen lengkap: Sertifikat Personel & Manajemen Kompetensi, Sertifikat Penanganan Makanan & Minuman Dasar, dan Pemeriksaan Medis.",
    "Kami lebih dari mampu menawarkan kutipan yang kompetitif dan variasi menu masakan dengan standar internasional.",
  ];

  return (
    <section id="about" className="bg-white py-16 md:py-20 px-5 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left — text */}
        <div className="flex flex-col gap-0">

          {/* Gold accent bar */}
          <AnimatedSection variant="fade-left" delay={0}>
            <div className="w-12 h-1 bg-[#DBB732] rounded mb-5" />
          </AnimatedSection>

          {/* Main heading */}
          <AnimatedSection variant="fade-up" delay={0.08}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020240] leading-tight mb-6">
              Tentang
              <br />
              <span className="text-[#DBB732]">Rassana Persada</span>
            </h2>
          </AnimatedSection>

          {/* First paragraph — dari Compro Company Information */}
          <AnimatedSection variant="fade-up" delay={0.18}>
            <p className="text-[#444] text-base leading-relaxed mb-4">
              PT. Rassana Persada Makmur didirikan oleh sekelompok profesional
              berdedikasi dengan pengalaman luas dalam Catering & Fasilitas,
              Manajemen Tenaga Kerja, Pengembangan Teknik, Manajemen Pengadaan,
              dan layanan Pengembangan Akses Keamanan di Indonesia. Kelompok
              profesional ini memiliki pengalaman faktual melayani di semua
              bidang serta kamp-kamp pertambangan besar.
            </p>
          </AnimatedSection>

          {/* Second paragraph — dari Compro Company Information */}
          <AnimatedSection variant="fade-up" delay={0.26}>
            <p className="text-[#666] text-[15px] leading-relaxed">
              Kami mempertahankan jaringan sumber daya manusia yang luas dengan
              pengalaman dalam perdagangan katering lepas pantai dan darat serta
              pembersihan umum area akomodasi. Kami mengadakan kursus pelatihan
              internal secara teratur untuk personel kami agar dapat
              meningkatkan keterampilan mereka dan melayani klien dengan lebih
              baik.
            </p>
          </AnimatedSection>

          {/* 3 poin dari Company Information Compro — ganti QUICK_STATS */}
          <div className="flex flex-col gap-3 mt-8">
            {COMPANY_POINTS.map((point, i) => (
              <AnimatedSection key={i} variant="fade-left" delay={0.34 + i * 0.1}>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#DBB732] flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#020240]" />
                  </div>
                  <p className="text-[#555] text-sm leading-relaxed">{point}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Right — Vision & Mission card dari Compro */}
        <AnimatedSection variant="fade-right" delay={0.2}>
          <div className="relative">
            <div className="rounded-3xl p-8 text-white bg-linear-to-br from-[#0808DB] to-[#020240]">

              <AnimatedSection variant="blur-up" delay={0.35}>
                <p className="text-[#DBB732] text-[13px] font-semibold tracking-widest mb-4">
                  VISI KAMI / OUR VISION
                </p>
              </AnimatedSection>

              <AnimatedSection variant="fade-up" delay={0.44}>
                <p className="text-xl font-light leading-relaxed">
                  "PT. Rassana Persada Makmur, yang fokus pada bisnis perawatan
                  kami dalam menyediakan katering kelas dunia dan layanan
                  terkait, memungkinkan klien kami untuk berkonsentrasi pada
                  bisnis inti mereka."
                </p>
              </AnimatedSection>

              <div className="my-6 h-px bg-[#DBB732]/30" />

              <AnimatedSection variant="blur-up" delay={0.50}>
                <p className="text-[#DBB732] text-[13px] font-semibold tracking-widest mb-3">
                  MISI KAMI / OUR MISSION
                </p>
              </AnimatedSection>

              <AnimatedSection variant="fade-up" delay={0.58}>
                <p className="text-sm text-white/70 leading-relaxed">
                  "Memiliki sikap bisa dilakukan serta mempunyai gairah untuk
                  kualitas dalam memberikan layanan di atas ekspektasi untuk
                  dapat menang melalui kerja tim serta membagikan kesuksesan
                  dan menjadi yang terbaik."
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