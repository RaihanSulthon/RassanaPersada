export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Capability", href: "#capability" },
  { label: "Menu", href: "#menu" },
  { label: "Contact", href: "#contact" },
];

// Dari Compro: tidak ada angka spesifik, hapus stats fiktif
// Ganti dengan 4 poin dari Contract Program
export const CONTRACT_PROGRAMS = [
  {
    icon: "🍽️",
    title: "Food & Beverage Management",
    en: "Catering & Related Services",
  },
  {
    icon: "🏭",
    title: "Facilities Service",
    en: "Facility Support Management",
  },
  { icon: "🛒", title: "Procurement Management", en: "Global Procurement" },
  { icon: "👷", title: "Labor Management", en: "Workforce Solutions" },
];

export const VALUES = [
  { icon: "⭐", en: "Excellent Service",              id: "Pelayanan yang Sangat Baik" },
  { icon: "👂", en: "Excellent Listening Skills",     id: "Kemampuan Mendengarkan yang Sangat Baik" },
  { icon: "💡", en: "Excellent Innovation",           id: "Kegiatan Inovasi yang Sangat Baik" },
  { icon: "🥗", en: "Excellent Food Balance",         id: "Keseimbangan Makanan yang Sangat Baik" },
  { icon: "🤝", en: "Long-Term Client Partnership",   id: "Kemitraan dan Kepercayaan Klien Jangka Panjang yang Sangat Baik" },
  { icon: "💼", en: "Professional Atmosphere",        id: "Atmosfer Profesionalisme yang Sangat Baik" },
];

export const BUSINESS_PROCESS = [
  {
    step: "01",
    title: "Launching",
    label: { en: "Project Scoping", id: "Ruang Lingkup Proyek" },
    desc: {
      en: "Define the project scope, objectives, and stakeholder expectations.",
      id: "Tentukan ruang lingkup proyek, tujuan, dan harapan pemangku kepentingan.",
    },
  },
  {
    step: "02",
    title: "Testing",
    label: { en: "Resource Planning", id: "Perencanaan Sumber Daya" },
    desc: {
      en: "Develop schedules, budgets, and resource allocation strategies.",
      id: "Kembangkan jadwal, anggaran, dan strategi alokasi sumber daya.",
    },
  },
  {
    step: "03",
    title: "Development",
    label: { en: "Solution Design", id: "Desain Solusi" },
    desc: {
      en: "Design & develop the best results according to customer needs & desires with optimal results based on efficiency and effectiveness.",
      id: "Rancang & kembangkan hasil terbaik sesuai dengan kebutuhan & keinginan pelanggan dengan hasil optimal berdasarkan efisiensi dan efektivitas.",
    },
  },
  {
    step: "04",
    title: "Research",
    label: { en: "Analysis & Study", id: "Analisis & Studi" },
    desc: {
      en: "Conduct all necessary studies and analyses covering all aspects from food ingredients, geographic factors to space utilization.",
      id: "Melakukan semua studi dan analisis yang diperlukan mencakup semua aspek mulai dari bahan makanan, faktor geografis hingga pemanfaatan ruang.",
    },
  },
];

export const FOOD_STANDARDS = [
  { icon: "🌿", title: "Segar Alami", en: "Naturally Fresh" },
  { icon: "🚫", title: "Non-GMO", en: "Non-GMO" },
  { icon: "🧪", title: "Tanpa Pengawet", en: "Preservative-Free" },
  { icon: "🎨", title: "Tanpa Pewarna", en: "No Artificial Color" },
];

export const SECTORS = [
  {
    icon: "🍽️",
    title: { en: "Food & Beverage Management", id: "Manajemen Makanan & Minuman" },
    desc: {
      en: "Quality catering and beverage services for various industry segments. We formulate our own recipes and menus to maintain service quality with international standards.",
      id: "Layanan katering dan minuman berkualitas untuk berbagai segmen industri. Kami merumuskan resep dan menu sendiri untuk menjaga kualitas layanan dengan standar internasional.",
    },
    tag: "Contract Program",
  },
  {
    icon: "🏭",
    title: { en: "Facility Support Management", id: "Manajemen Dukungan Fasilitas" },
    desc: {
      en: "Comprehensive facility management: Security Access Services, Parking Management, Laundry Services, Area Cleaning, and Worker Placement Management.",
      id: "Pengelolaan fasilitas menyeluruh: Layanan Akses Keamanan, Manajemen Tempat Parkir, Pelayanan Binatu, Kebersihan Area, dan Manajemen Perlakuan & Penempatan Pekerja.",
    },
    tag: "Contract Program",
  },
  {
    icon: "🛒",
    title: { en: "Procurement Management", id: "Manajemen Pengadaan" },
    desc: {
      en: "High-standard raw material procurement from a ready supplier network in major Indonesian cities. All ingredients: Naturally Fresh, Non-GMO, Preservative-Free, No Artificial Color.",
      id: "Pengadaan bahan baku dengan standar tinggi dari jaringan pemasok siap di kota-kota besar Indonesia. Seluruh bahan: Segar Alami, Non-GMO, Tanpa Pengawet, Tanpa Pewarna.",
    },
    tag: "Contract Program",
  },
  {
    icon: "👷",
    title: { en: "Labor Management", id: "Manajemen Tenaga Kerja" },
    desc: {
      en: "Provision of fully documented workers with Personnel & Competency Management Certificates, Food Handling Certificates, and Medical Examinations.",
      id: "Penyediaan tenaga kerja berdokumen lengkap dengan Sertifikat Personel & Manajemen Kompetensi, Sertifikat Penanganan Makanan, dan Pemeriksaan Medis.",
    },
    tag: "Contract Program",
  },
  {
    icon: "🔧",
    title: { en: "Technical Support Assistant", id: "Asisten Dukungan Teknis" },
    desc: {
      en: "Rapid technical support and maintenance for operational facilities. Experienced professional team ready to ensure operational continuity.",
      id: "Dukungan teknis dan pemeliharaan cepat untuk fasilitas operasional. Tim profesional berpengalaman siap memastikan kelangsungan operasi.",
    },
    tag: "Contract Program",
  },
  {
    icon: "📚",
    title: { en: "Learning & Development", id: "Pembelajaran & Pengembangan" },
    desc: {
      en: "Regular internal training programs: Food Safety, HSE/HACCP, Basic Safety Training (BSS), Basic Offshore Safety Emergency Training, AK3U, AK3MIGAS, and POM Training.",
      id: "Program pelatihan internal berkala: Food Safety, HSE/HACCP, Basic Safety Training (BSS), Basic Offshore Safety Emergency Training, AK3U, AK3MIGAS, dan POM Training.",
    },
    tag: "Contract Program",
  },
];

export const PILLARS = [
  {
    icon: "🌍",
    title: { en: "Regional Reach", id: "Jangkauan Regional" },
    desc: {
      en: "With an extensive presence throughout Indonesia, PT. Rassana Persada Makmur can provide single-source regional services.",
      id: "Dengan kehadiran yang luas di seluruh Indonesia, PT. Rassana Persada Makmur dapat memberikan layanan penyediaan tunggal secara regional.",
    },
  },
  {
    icon: "🧠",
    title: { en: "Local Knowledge", id: "Pengetahuan Lokal" },
    desc: {
      en: "Extensive experience and capability in managing various projects locally, along with detailed technical knowledge to successfully develop and implement diverse projects.",
      id: "Pengalaman dan kemampuan yang luas dalam mengelola berbagai proyek secara lokal, serta pengetahuan teknis yang detail untuk berhasil mengembangkan dan mengimplementasikan berbagai proyek.",
    },
  },
  {
    icon: "🔬",
    title: { en: "Technical Abilities", id: "Kemampuan Teknis" },
    desc: {
      en: "Unmatched high-quality professional resources in depth of experience and knowledge, making our team sensitive to the strict service demands of the institutional environment.",
      id: "Sumber profesional berkualitas tinggi yang tiada bandingnya dalam kedalaman pengalaman dan pengetahuan, sehingga tim kami peka terhadap tuntutan layanan yang ketat dari lingkungan institusional.",
    },
  },
  {
    icon: "👥",
    title: { en: "Team Approach", id: "Pendekatan Tim" },
    desc: {
      en: "Our approach to various projects focuses on close collaboration with clients and facility staff to ensure effective delivery of proposed services.",
      id: "Pendekatan kami terhadap berbagai proyek berfokus pada kerja sama yang erat dengan klien dan staf menggunakan fasilitas untuk memastikan efektivitas pengiriman layanan yang diusulkan.",
    },
  },
  {
    icon: "🛡️",
    title: { en: "Health & Safety", id: "Health & Safety" },
    desc: {
      en: "Dedicated environmental health and safety personnel guided by locally and internationally recognized laws and legislation. Random specialist audits at workplaces ensure absolute compliance.",
      id: "Personel khusus kesehatan dan keselamatan lingkungan yang dipandu oleh hukum dan perundang-undangan yang diakui secara lokal dan internasional. Audit spesialis acak di tempat kerja memastikan kepatuhan yang absolut.",
    },
  },
  {
    icon: "📋",
    title: { en: "Menu Planning & Quality", id: "Menu Planning & Quality" },
    desc: {
      en: "Complete menu options tailored to different specific situations: Standard Regular Menu, VVIP Industry Menu, Special Event Menu, Health Menu, and Mining & Mineral Services Menu.",
      id: "Pilihan menu lengkap disesuaikan dengan situasi spesifik yang berbeda: Menu Standart Umum Reguler, Menu Industri VVIP, Menu Acara Khusus, Menu Kesehatan, dan Menu Jasa Tambang & Mineral.",
    },
  },
];

export const MENU_SELECTONE = [
  { icon: "🍱", title: { en: "Standard Regular Menu", id: "Menu Standart Umum Reguler" } },
  { icon: "👑", title: { en: "General & Special Industry VVIP", id: "Menu Industri Umum & Khusus - VVIP" } },
  { icon: "🎉", title: { en: "General & Special Event Menu", id: "Menu Acara Umum & Khusus" } },
  { icon: "🥗", title: { en: "Health Food & Beverage Menu", id: "Menu Makanan & Minuman Kesehatan" } },
  { icon: "⛏️", title: { en: "Mining & Mineral Service Menu", id: "Menu Makanan & Minuman Jasa Tambang & Mineral" } },
];

export const SERVICES_MANAGEMENT = [
  { icon: "🔒", title: { en: "Security Access Service", id: "Layanan Akses Keamanan" } },
  { icon: "🅿️", title: { en: "Parking Management Service", id: "Layanan Manajemen Tempat Parkir" } },
  { icon: "👕", title: { en: "Laundry Facility Service", id: "Layanan Fasilitas Pelayanan Binatu" } },
  { icon: "🧹", title: { en: "Area Cleaning Facility Service", id: "Layanan Fasilitas Pelayanan Kebersihan Area" } },
  { icon: "👷", title: { en: "Worker Placement Management Service", id: "Layanan Manajemen Perlakuan & Penempatan Pekerja" } },
  { icon: "🍽️", title: { en: "F&B Catering Facility Service", id: "Layanan Fasilitas Makanan & Minuman - Katering" } },
];

// Company Commitment dari Compro
export const COMMITMENTS = [
  {
    icon: "✅",
    title: { en: "High Specifications", id: "Spesifikasi Tinggi" },
    desc: {
      en: "Using high specifications in selecting all materials & candidates.",
      id: "Menggunakan spesifikasi tinggi dalam memilih semua material & kandidat.",
    },
  },
  {
    icon: "🤝",
    title: { en: "Professional & Integrity", id: "Profesional & Integritas" },
    desc: {
      en: "Upholding a professional attitude and integrity as the primary quality.",
      id: "Menjunjung sikap profesional dan integritas sebagai kualitas utama.",
    },
  },
  {
    icon: "🌿",
    title: { en: "Healthy Work Environment", id: "Lingkungan Kerja Sehat" },
    desc: {
      en: "Create a safe, comfortable, and healthy work atmosphere.",
      id: "Ciptakan suasana kerja yang aman, nyaman, dan sehat.",
    },
  },
];

// Recruitment & Certification dari Compro
export const COMPETENCY_CERTS = [
  "Sertifikat Keamanan Makanan",
  "Sertifikat Penanganan Makanan (MLC 2006 3.2 Lampiran 1&2)",
  "Sertifikat Kompetensi (MLC 2006 3.2 Lampiran 1&2)",
  "Sertifikat Panduan HSE/HACCP",
  "Sertifikat Penanganan Makanan, Kebersihan & Sanitasi",
];

export const MOG_TRAINING_CERTS = [
  "Basic Safety Training / BSS",
  "Basic Offshore Safety Emergency Training",
  "TBOSIET OPITO Approval for FPSO",
  "H2S OPITO",
  "POM Training",
  "AK3U Training",
  "AK3MIGAS Training",
];

export const CERTIFICATIONS = [
  { name: "Halal MUI",      status: { en: "In Process",   id: "Dalam Proses"    }, desc: { en: "In Process",              id: "In Process"               }, color: "#DBB732" },
  { name: "ISO 22000",      status: { en: "In Process",   id: "Dalam Proses"    }, desc: { en: "Food Safety Mgmt System", id: "Food Safety Mgmt System"  }, color: "#DBB732" },
  { name: "ISO 14001",      status: { en: "In Process",   id: "Dalam Proses"    }, desc: { en: "Environmental Mgmt",      id: "Environmental Mgmt"       }, color: "#DBB732" },
  { name: "ISO 9001:2015",  status: { en: "In Process",   id: "Dalam Proses"    }, desc: { en: "Quality Mgmt System",     id: "Quality Mgmt System"      }, color: "#DBB732" },
  { name: "ISO 45001:2018", status: { en: "In Process",   id: "Dalam Proses"    }, desc: { en: "Occupational Health & Safety", id: "Occupational Health & Safety" }, color: "#DBB732" },
  { name: "HACCP",          status: { en: "Certified",    id: "Tersertifikasi"  }, desc: { en: "Food Safety Certified",   id: "Food Safety Certified"    }, color: "#22c55e" },
  { name: "Food Safety",    status: { en: "Certified",    id: "Tersertifikasi"  }, desc: { en: "Handling & Sanitation",   id: "Handling & Sanitation"    }, color: "#22c55e" },
];

export const CONTACT_INFO = [
  {
    icon: "📍",
    label: "Alamat",
    val: "Jakarta, Indonesia",
    href: "https://www.google.com/maps/search/?api=1&query=Jl.+Puyuh+Timur+II+No.4+RT.3%2FRW.2+Jurang+Manggu+Timur+Kec.+Pd.+Aren+Kota+Tangerang+Selatan+Banten+15222",
  },
  { icon: "📧", label: "Email", val: "info@rassanapersada.co.id" },
  { icon: "📞", label: "WhatsApp", val: "+62 812-1819-4346" },
];
