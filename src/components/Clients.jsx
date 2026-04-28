import AnimatedSection from "./AnimatedSection";
import { CLIENTS } from "../constants/data";

export default function Clients() {
  return (
    <section id="clients" className="bg-[#f8f9ff] py-16 md:py-20 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <AnimatedSection variant="blur-up" delay={0}>
            <span className="inline-block px-5 py-1.5 rounded-full text-[#0808DB] text-xs font-semibold tracking-widest mb-4 bg-[#0808DB]/6">
              KLIEN KAMI / OUR CLIENTS
            </span>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020240] mb-2">
              Dipercaya oleh Industri Terbaik
            </h2>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.18}>
            <p className="text-[#888] text-base">Trusted by Indonesia's Leading Industries</p>
          </AnimatedSection>
        </div>

        {/* Client cards — zoom-in staggered */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CLIENTS.map((c, i) => (
            <AnimatedSection key={c.name} variant="zoom-in" delay={0.1 + i * 0.08}>
              <div
                className="bg-white rounded-2xl p-6 border border-[#0808DB]/10 flex items-center gap-4
                           transition-all duration-300 hover:-translate-y-1
                           hover:shadow-[0_12px_40px_rgba(8,8,219,0.08)]"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: c.color }}
                >
                  <span className="text-white font-extrabold text-sm">{c.initials}</span>
                </div>
                <div>
                  <p className="font-bold text-[#020240] text-sm">{c.name}</p>
                  <p className="text-[#888] text-xs mt-0.5">{c.sector}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Disclaimer — fades in last */}
        <AnimatedSection variant="fade-up" delay={0.55}>
          <div className="text-center mt-10 py-6 px-8 rounded-2xl bg-linear-to-br from-[#0808DB] to-[#020240]">
            <p className="text-white/70 text-sm mb-1">
              *Nama klien bersifat ilustratif untuk keperluan portfolio
            </p>
            <p className="text-[#DBB732]/70 text-xs tracking-wide">
              *Client names are illustrative for portfolio purposes
            </p>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
