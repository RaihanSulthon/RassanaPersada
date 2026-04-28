import AnimatedSection from "./AnimatedSection";
import { CONTACT_INFO } from "../constants/data";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24 px-8">
      <div className="max-w-2xl mx-auto text-center">

        <AnimatedSection>
          <span
            className="inline-block px-5 py-1.5 rounded-full text-[#0808DB] text-xs font-semibold tracking-widest mb-5"
            style={{ background: "rgba(8,8,219,0.06)" }}
          >
            HUBUNGI KAMI / CONTACT US
          </span>
          <h2 className="text-5xl font-extrabold text-[#020240] mb-5">
            Siap Bekerja Sama?
          </h2>
          <p className="text-[#888] text-[15px] mb-2">Ready to Partner With Us?</p>
          <p className="text-[#555] text-base leading-relaxed mb-12 max-w-lg mx-auto">
            Kami siap mendiskusikan kebutuhan katering industri perusahaan Anda. Hubungi tim
            kami untuk konsultasi dan penawaran harga terbaik.
          </p>
        </AnimatedSection>

        {/* Contact info cards */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {CONTACT_INFO.map((c) => (
              <div
                key={c.label}
                className="bg-[#f8f9ff] rounded-2xl p-6 border border-[#0808DB]/08"
              >
                <span className="text-2xl block mb-2">{c.icon}</span>
                <p className="text-[#888] text-xs tracking-wide mb-1">{c.label}</p>
                <p className="text-[#020240] font-semibold text-sm">{c.val}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA button */}
        <AnimatedSection delay={0.35}>
          <a
            href="mailto:info@rassanapersada.co.id"
            className="inline-block px-12 py-4 rounded-full text-white font-bold text-[15px]
                       tracking-wide no-underline transition-all duration-300
                       hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(8,8,219,0.3)]"
            style={{ background: "linear-gradient(135deg, #0808DB, #020240)" }}
          >
            Kirim Pesan / Send Message
          </a>
        </AnimatedSection>

      </div>
    </section>
  );
}