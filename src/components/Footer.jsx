export default function Footer() {
  return (
    <footer
      className="bg-[#020240] py-10 px-8"
      style={{ borderTop: "1px solid rgba(219,183,50,0.15)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">
        <div>
          <p className="text-[#DBB732] font-extrabold text-lg tracking-widest">RASSANA PERSADA</p>
          <p className="text-white/40 text-xs mt-1">
            Industrial Catering Specialist · Jakarta, Indonesia
          </p>
        </div>
        <p className="text-white/30 text-xs">
          © {new Date().getFullYear()} PT. Rassana Persada. All rights reserved.
        </p>
      </div>
    </footer>
  );
}