import AnimatedSection from "./AnimatedSection";
import { CLIENTS } from "../constants/data";

export default function Clients() {
  return (
    <section id="clients" className="bg-[#f8f9ff] py-24 px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <span
              className="inline-block px-5 py-1.5 rounded-full text-[#0808DB] text-xs font-semibold tracking-widest mb-4"
              style={{ background: "rgba(8,8,219,0.06)" }}
            >
              KLIEN KAMI / OUR CLIENTS
            </span>
            <h2 className="text-4xl font-extrabold text-[#020240] mb-3">
              Dipercaya oleh Industri Terbaik
            </h2>
            <p className="text-[#888] text-base">Trusted by Indonesia's Leading Industries</p>
          </div>
        </AnimatedSection>

        {/* Client cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CLIENTS.map((c, i) => (
            <AnimatedSection key={c.name} delay={i * 0.08}>
              <div
                className="bg-white rounded-2xl p-7 border border-[#0808DB]/10 flex items-center gap-4
                           transition-all duration-300 hover:-translate-y-1
                           hover:shadow-[0_12px_40px_rgba(8,8,219,0.08)]"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: c.color }}
                >
                  <span className="text-white font-extrabold text-[15px]">{c.initials}</span>
                </div>
                <div>
                  <p className="font-bold text-[#020240] text-[15px]">{c.name}</p>
                  <p className="text-[#888] text-xs mt-0.5">{c.sector}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Disclaimer */}
        <AnimatedSection delay={0.4}>
          <div
            className="text-center mt-12 py-8 px-8 rounded-2xl"
            style={{ background: "linear-gradient(135deg, #0808DB, #020240)" }}
          >
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