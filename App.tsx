import React from "react";
import { motion } from "framer-motion";

export default function App() {
  const modules = [
    {
      title: "Modul 1: AI Marketing Fundamentals",
      desc: "Fondasi penting agar tidak sekadar 'ikut-ikutan', tapi paham strategi inti marketing era AI.",
      points: [
        "Mindset benar menggunakan AI sebagai 'Co-Pilot' Strategis",
        "Teknik Prompting 'Golden Formula' untuk hasil presisi",
        "Setup Workspace produktivitas marketing 10x lipat"
      ]
    },
    {
      title: "Modul 2: Killer Brand Identity",
      desc: "Bangun persepsi brand premium yang membuat kompetitor terlihat amatir di mata audiens.",
      points: [
        "Menggali Unique Value Proposition (UVP) otomatis",
        "Membuat Brand Voice & Persona yang konsisten",
        "Studi kasus: Rebranding total dalam waktu singkat"
      ]
    },
    {
      title: "Modul 3: Unlimited Content Engine",
      desc: "Cara 'malas' tapi cerdas untuk mendominasi sosial media dengan ratusan konten.",
      points: [
        "Generate kalender konten 30 hari dalam 5 menit",
        "Scripting viral untuk TikTok/Reels/Shorts",
        "Repurposing konten: 1 ide jadi 10 format berbeda"
      ]
    },
    {
      title: "Modul 4: Salespage yang Menjual",
      desc: "Ubah pengunjung menjadi pembeli dengan struktur landing page yang menghipnotis.",
      points: [
        "Copywriting Headline yang 'mematikan' logika penundaan",
        "Struktur anatomi Landing Page konversi tinggi",
        "Membuat Offer Stack yang sulit ditolak"
      ]
    },
    {
      title: "Modul 5: Winning Ads Strategy",
      desc: "Berhenti bakar uang iklan. Buat iklan yang profit (ROAS positif) sejak hari pertama.",
      points: [
        "Membuat 50 variasi Ad Copy (FB/IG Ads) instan",
        "Riset Interest & Hidden Audience targeting",
        "Analisis pola iklan kompetitor yang sedang winning"
      ]
    },
    {
      title: "Modul 6: Visual Design & Creative",
      desc: "Hemat jutaan rupiah biaya desainer grafis dengan kemampuan AI Generative.",
      points: [
        "Membuat aset visual iklan high-quality tanpa skill gambar",
        "Desain logo & identitas visual profesional",
        "Edit & manipulasi foto produk otomatis untuk katalog"
      ]
    },
    {
      title: "Modul 7: Video Marketing Revolution",
      desc: "Produksi video promosi profesional tanpa perlu sewa studio atau kamera mahal.",
      points: [
        "Membuat video Faceless (tanpa wajah) yang menarik",
        "AI Voiceover (Text-to-Speech) bahasa Indonesia natural",
        "Editing video cepat & auto-captioning"
      ]
    },
    {
      title: "Modul 8: Market Research Intelligence",
      desc: "Intip dapur kompetitor dan pahami apa yang sebenarnya diinginkan pasar saat ini.",
      points: [
        "Bedah strategi marketing lawan bisnis secara legal",
        "Validasi ide produk sebelum launching besar-besaran",
        "Mencari celah pasar (Blue Ocean) yang belum digarap"
      ]
    },
    {
      title: "Modul 9: Email & CRM Automation",
      desc: "Bangun kolam uang Anda sendiri yang tidak bergantung pada algoritma sosial media.",
      points: [
        "Membuat Lead Magnet yang dikejar-kejar orang",
        "Email Sequence untuk Nurturing & Closing otomatis",
        "Teknik broadcast copywriting anti masuk spam"
      ]
    },
    {
      title: "Modul 10: The AI Chatbot Agent",
      desc: "Punya Customer Service 24 jam yang tidak pernah mengeluh, tidur, atau minta cuti.",
      points: [
        "Setup Custom GPT untuk melayani tanya jawab",
        "Script handling keberatan calon pembeli otomatis",
        "Integrasi chatbot ke alur penjualan bisnis"
      ]
    }
  ];

  // Primary Color: #007EBD
  // Heading: #000000
  // Body: #272525
  const primaryButtonClass = "inline-flex justify-center items-center px-8 py-3.5 bg-[#007EBD] text-white rounded-lg shadow-lg hover:bg-[#0069a0] hover:-translate-y-0.5 transition-all font-semibold";

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-[#272525] antialiased font-sans selection:bg-[#007EBD] selection:text-white">
      {/* Top nav */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a 
              href="#hero" 
              onClick={(e) => handleScroll(e, "hero")}
              className="flex items-center gap-3 group"
            >
              <div className="h-10 w-10 rounded-lg bg-[#007EBD] flex items-center justify-center text-white font-bold shadow-md group-hover:scale-105 transition-transform">
                AI
              </div>
              <span className="font-semibold text-lg tracking-tight text-[#000000] group-hover:text-[#007EBD] transition-colors">AI Marketing Masterclass</span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#272525]">
              <a 
                href="#modules" 
                onClick={(e) => handleScroll(e, "modules")}
                className="hover:text-[#007EBD] transition-colors"
              >
                Modul
              </a>
              <a 
                href="#pricing" 
                onClick={(e) => handleScroll(e, "pricing")}
                className="hover:text-[#007EBD] transition-colors"
              >
                Harga
              </a>
              <a 
                href="#faq" 
                onClick={(e) => handleScroll(e, "faq")}
                className="hover:text-[#007EBD] transition-colors"
              >
                FAQ
              </a>
              <a
                href="#pricing"
                onClick={(e) => handleScroll(e, "pricing")}
                className="ml-4 inline-flex items-center px-4 py-2 bg-[#007EBD] text-white rounded-md shadow-md hover:bg-[#0069a0] transition-all"
              >
                Daftar Rp 97.000
              </a>
            </nav>

            <div className="md:hidden">
              <button className="p-2 rounded-md hover:bg-gray-100 text-[#272525]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section id="hero" className="relative overflow-hidden pt-10 pb-16 lg:pt-20 lg:pb-24">
            {/* Background Blurs - Subtle Blue */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-[#007EBD] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-sky-300 opacity-20 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              {/* Left: copy */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="max-w-xl">
                  <p className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#007EBD] text-xs font-bold tracking-wide uppercase mb-6 border border-blue-100">
                    Masterclass • 10 Modul • Full Demo
                  </p>
                  <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.15] text-[#000000]">
                    Kuasai AI untuk Bangun Branding, Konten, Iklan & Penjualan
                  </h1>
                  <p className="mt-6 text-lg text-[#272525] leading-relaxed">
                    Pelajari seluruh ekosistem marketing modern berbasis AI: dari branding, konten, salespage, hingga
                    chatbot. Cocok untuk pemula & pelaku bisnis yang ingin hasil cepat.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <a
                      href="#pricing"
                      onClick={(e) => handleScroll(e, "pricing")}
                      className={primaryButtonClass}
                    >
                      Daftar Rp 97.000
                    </a>
                    <a
                      href="#modules"
                      onClick={(e) => handleScroll(e, "modules")}
                      className="inline-flex justify-center items-center w-full sm:w-auto px-8 py-3.5 text-[#007EBD] bg-white border border-gray-200 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-sm"
                    >
                      Lihat modul lengkap →
                    </a>
                  </div>

                  <div className="mt-8 flex items-center gap-3 text-sm text-[#272525]/80">
                    <span className="line-through decoration-red-400">Rp 247.000</span>
                    <span className="px-2 py-0.5 rounded bg-green-100 text-green-700 border border-green-200 font-bold text-xs">
                      Hemat Rp 150.000
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Right: mockup */}
              <motion.div
                className="flex justify-center lg:justify-end"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-gray-200 bg-white transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="relative h-48 bg-gray-200">
                    <img
                      src="https://images.unsplash.com/photo-1526378727650-7a0e3f9b3f1e?q=80&w=1200&auto=format&fit=crop"
                      alt="Course Preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <p className="font-bold text-lg">AI Marketing Ecosystem</p>
                        <p className="text-xs opacity-90">Video Course & Assets</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Premium Access</p>
                        <p className="text-xs text-gray-500">Lifetime Update</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-[#007EBD] uppercase tracking-wide font-bold">Special Offer</p>
                        <p className="text-xl font-bold text-[#007EBD]">Rp 97.000</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-[#007EBD] w-3/4"></div>
                        </div>
                        <p className="text-xs text-gray-500 text-right">75% Slots Taken</p>
                    </div>

                    <a
                      href="#pricing"
                      onClick={(e) => handleScroll(e, "pricing")}
                      className="block w-full text-center bg-[#272525] text-white py-3 rounded-lg font-bold hover:bg-black transition-colors"
                    >
                      Ambil Slot Sekarang
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Value bullets */}
        <section className="bg-white border-y border-gray-100 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: "⚡", title: "Praktis & Langsung Pakai", desc: "Full demo agar langsung bisa diterapkan tanpa teori berbelit." },
                { icon: "🎯", title: "Cocok untuk Pemula", desc: "Langkah-langkah mudah dan modul disusun dari dasar ke lanjutan." },
                { icon: "📈", title: "Fokus Hasil", desc: "Rancang strategi yang meningkatkan engagement & konversi penjualan." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-gray-100">
                    <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-blue-50 text-[#007EBD] text-2xl">
                        {item.icon}
                    </div>
                    <div>
                        <h3 className="font-bold text-[#000000] text-lg">{item.title}</h3>
                        <p className="mt-1 text-sm text-[#272525] leading-relaxed">{item.desc}</p>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modules */}
        <section id="modules" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl text-[#000000]">Kurikulum Lengkap</h2>
            <p className="mt-4 text-lg text-[#272525]">
              10 Modul komprehensif yang dirancang untuk membawa Anda dari pemula hingga mahir dalam menggunakan AI untuk pemasaran.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {modules.map((m, idx) => (
              <motion.article 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#007EBD]/30 transition-all cursor-default flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-6">
                    <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-blue-50 text-[#007EBD] text-base font-bold shadow-sm">
                        {idx + 1}
                    </span>
                    <span className="text-xs font-medium text-[#007EBD] bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider border border-blue-100">Modul Video</span>
                </div>
                <h3 className="text-xl font-bold text-[#000000] group-hover:text-[#007EBD] transition-colors mb-3">{m.title}</h3>
                <p className="text-sm text-[#272525]/80 leading-relaxed mb-6 border-b border-gray-100 pb-4">{m.desc}</p>
                
                <ul className="space-y-3 mt-auto">
                  {m.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#272525]">
                          <svg className="w-5 h-5 text-[#007EBD] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          <span className="leading-snug">{p}</span>
                      </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-[#007EBD] relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full opacity-10 blur-[80px]"></div>
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-64 h-64 bg-sky-300 rounded-full opacity-20 blur-[80px]"></div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Kata Mereka yang Sudah Praktek</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { quote: "Akhirnya bisa buat konten harian tanpa pusing. Tekniknya langsung bisa dipakai.", name: "Rina", role: "Online Seller" },
                { quote: "Iklan jadi lebih tertarget dan cost per lead turun drastis. Recommended!", name: "Anton", role: "UMKM Owner" },
                { quote: "Modul chatbot dan email sangat membantu automasi customer support saya.", name: "Dita", role: "Freelancer" }
              ].map((t, i) => (
                  <div key={i} className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                    <div className="flex gap-1 mb-4 text-yellow-300">
                        {[1,2,3,4,5].map(s => <span key={s}>★</span>)}
                    </div>
                    <p className="italic text-white/90 leading-relaxed mb-6">"{t.quote}"</p>
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-white text-[#007EBD] flex items-center justify-center text-sm font-bold shadow-lg">
                            {t.name[0]}
                        </div>
                        <div>
                            <p className="font-semibold text-white">{t.name}</p>
                            <p className="text-xs text-white/70">{t.role}</p>
                        </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#000000]">Investasi Leher ke Atas Terbaik</h2>
                <p className="mt-4 text-[#272525]">Harga sangat terjangkau untuk skill yang akan meningkatkan profit bisnis Anda.</p>
            </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative">
            <div className="absolute top-0 right-0 bg-[#007EBD] text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg z-10 shadow-md">
                BEST VALUE
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 h-full">
                <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-[#000000]">AI Marketing Masterclass</h3>
                    <p className="text-[#007EBD] font-medium mt-1">Full 10 Modul • Lifetime Access</p>
                    <p className="mt-4 text-[#272525] text-sm leading-relaxed">
                        Dapatkan akses penuh ke seluruh materi, update masa depan, dan bonus template siap pakai untuk mempercepat proses belajar Anda.
                    </p>
                    
                    <ul className="mt-8 space-y-3">
                        {[
                            "Akses video materi seumur hidup",
                            "Tanpa biaya langganan bulanan",
                            "Full demo & resources file",
                            "Akses grup support komunitas"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-[#272525]">
                                <svg className="w-5 h-5 text-[#007EBD] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="md:col-span-2 bg-gray-50 p-8 md:p-10 flex flex-col justify-center items-center border-t md:border-t-0 md:border-l border-gray-100 text-center relative">
                    <div className="text-sm text-gray-500 mb-1">Harga Normal</div>
                    <div className="text-xl line-through text-gray-400 decoration-red-400">Rp 247.000</div>
                    <div className="mt-2 text-4xl font-extrabold text-[#007EBD]">Rp 97.000</div>
                    <p className="text-xs text-gray-500 mt-2 mb-6">Sekali bayar, akses selamanya</p>
                    
                    <a href="#" className="w-full inline-flex justify-center items-center px-6 py-4 bg-[#007EBD] text-white rounded-xl shadow-lg hover:bg-[#0069a0] hover:-translate-y-0.5 transition-all font-bold">
                        Ambil Promo Sekarang
                    </a>
                    <p className="text-[10px] text-gray-400 mt-4">Garansi 7 hari uang kembali*</p>
                </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24">
          <h2 className="text-2xl font-bold text-center mb-10 text-[#000000]">Pertanyaan yang Sering Diajukan</h2>
          <div className="space-y-4">
            {[
                { q: "Apakah cocok untuk pemula?", a: "Sangat cocok. Modul disusun dari dasar pengenalan AI hingga praktik lanjutan, dilengkapi full demo langkah demi langkah." },
                { q: "Berapa lama akses kelas?", a: "Akses seumur hidup (Lifetime). Anda bisa belajar kapan saja dan di mana saja. Update modul juga akan diberikan gratis." },
                { q: "Apakah ada garansi?", a: "Ya, kami memberikan garansi pengembalian dana 7 hari jika materi dirasa tidak sesuai dengan ekspektasi Anda (syarat & ketentuan berlaku)." },
                { q: "Metode pembayaran apa yang tersedia?", a: "Kami menerima transfer bank lokal (BCA, Mandiri, BNI, BRI) dan E-Wallet (OVO, GoPay, Dana) melalui payment gateway yang aman." }
            ].map((faq, i) => (
                <details key={i} className="group bg-white rounded-xl border border-gray-200 overflow-hidden transition-all hover:border-[#007EBD]/50">
                    <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-[#000000] select-none">
                        {faq.q}
                        <span className="transform group-open:rotate-180 transition-transform text-[#007EBD]">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </span>
                    </summary>
                    <div className="px-5 pb-5 pt-0 text-[#272525] text-sm leading-relaxed border-t border-transparent group-open:border-gray-100 group-open:pt-3">
                        {faq.a}
                    </div>
                </details>
            ))}
          </div>
        </section>

        {/* CTA footer */}
        <section className="bg-slate-900 border-t border-gray-800 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-[#007EBD]/10 to-blue-900/10 pointer-events-none"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative z-10">
            <div>
              <h3 className="text-2xl font-bold text-white">Siap mulai perjalanan Anda?</h3>
              <p className="mt-2 text-gray-300 max-w-md">Ambil kursus sekarang dan mulailah menghemat waktu serta biaya marketing Anda menggunakan AI.</p>
            </div>
            <div>
              <a 
                href="#pricing" 
                onClick={(e) => handleScroll(e, "pricing")}
                className="inline-flex items-center px-8 py-4 bg-[#007EBD] text-white rounded-xl font-bold shadow-lg hover:bg-[#0069a0] transition-colors"
              >
                Daftar Sekarang Rp 97.000
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-[#272525]/60">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>© {new Date().getFullYear()} AI Marketing Masterclass. All rights reserved.</div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-[#007EBD] transition-colors">Terms</a>
                        <a href="#" className="hover:text-[#007EBD] transition-colors">Privacy</a>
                        <a href="#" className="hover:text-[#007EBD] transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
      </main>
    </div>
  );
}