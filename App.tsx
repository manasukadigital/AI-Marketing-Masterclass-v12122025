import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const toggleModule = (index: number) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  const modules = [
    {
      title: "Modul 1: AI Marketing Fundamentals",
      desc: "Fondasi penting agar tidak sekadar 'ikut-ikutan', tapi paham strategi inti marketing era AI.",
      lessons: [
        "Perkenalan Course",
        "AI Marketing Tool Overview",
        "Pengertian Prompt Engineering",
        "AI Prompt Formula (Golden Rule)"
      ],
      resources: ["Dokumen Prompt Source", "List Tool AI Tambahan"]
    },
    {
      title: "Modul 2: Killer Brand Identity",
      desc: "Bangun persepsi brand premium yang membuat kompetitor terlihat amatir di mata audiens.",
      lessons: [
        "Pengenalan Branding Era AI",
        "Pengertian & Manfaat Branding",
        "3P Brand Strategy",
        "Demo: Ciptakan Visi & Misi",
        "Demo: Build Brand Purpose",
        "Demo: Build Brand Promise",
        "Demo: Build Positioning",
        "Demo: Build Value Proposition",
        "Demo: Build Differensiasi",
        "Demo: Build Target Market",
        "Demo: Brand Personality",
        "Demo: Build Brand Story",
        "Demo: Brand Slogan",
        "Demo: Brand Tone Of Voice",
        "Demo: Finalisasi Brand Guidelines"
      ],
      resources: ["Prompt Source Branding", "Tool AI Tambahan Branding"]
    },
    {
      title: "Modul 3: Unlimited Content Engine",
      desc: "Cara 'malas' tapi cerdas untuk mendominasi sosial media dengan ratusan konten.",
      lessons: [
        "Pendahuluan Content Marketing",
        "Pengertian Konten Marketing",
        "Benefit Konten Marketing",
        "Demo: Ciptakan Konten Pillar",
        "Demo: Generate Ide Konten Tanpa Batas",
        "Demo: Membuat Konten (Production)",
        "Demo: Membuat Script Konten Viral",
        "Demo: Membuat Copywriting Deskripsi/Caption",
        "Demo: Membuat Kalender Konten Otomatis"
      ],
      resources: ["Prompt Source Konten", "Tool AI Konten Marketing"]
    },
    {
      title: "Modul 4: Salespage yang Menjual",
      desc: "Ubah pengunjung menjadi pembeli dengan struktur landing page yang menghipnotis.",
      lessons: [
        "Pengenalan Salespage",
        "Struktur Anatomi Salespage",
        "Elemen Konversi Tinggi",
        "Bedah Proven Salespage",
        "Demo: Membuat Struktur Salespage",
        "Demo: Membuat Copywriting Salespage",
        "Demo: Teknik Revisi Salespage",
        "Demo: Desain Visual Salespage"
      ]
    },
    {
      title: "Modul 5: Winning Ads Strategy",
      desc: "Berhenti bakar uang iklan. Buat iklan yang profit (ROAS positif) sejak hari pertama.",
      lessons: [
        "Pengenalan Ads Strategy",
        "Jenis Ide Konten Iklan",
        "Struktur Copywriting Iklan",
        "Creative Ads Lustre",
        "Demo: Ads Strategy Execution",
        "Demo: Mendapatkan Ide Konten Winning",
        "Demo: Ciptakan Script Konten Ads",
        "Demo: Membuat Copywriting Deskripsi Ads"
      ]
    },
    {
      title: "Modul 6: Visual Design & Creative",
      desc: "Hemat jutaan rupiah biaya desainer grafis dengan kemampuan AI Generative.",
      lessons: [
        "Pengenalan AI Design",
        "3 Ide Desain untuk Eksekusi",
        "Temukan Ide by Brand Produk",
        "Ide Desain by Kompetitor",
        "Temukan Ide by Ads Rekomendasi",
        "Demo: Temukan Desain by Brand",
        "Demo: Desain by Kompetitor",
        "Demo: Useful Tool Designify",
        "Demo: Useful Tool Probably",
        "Demo: Useful Tool Flair AI"
      ]
    },
    {
      title: "Modul 7: Video Marketing Revolution",
      desc: "Produksi video promosi profesional tanpa perlu sewa studio atau kamera mahal.",
      lessons: [
        "Pengenalan Video Marketing",
        "Dasar-dasar Video Iklan",
        "Elemen Penting Video Iklan",
        "Demo: Membuat Script & Konsep Video",
        "Demo: Create Video dengan AI Lumen5",
        "Demo: Create Video dengan Invideo AI",
        "Demo: Create Video dengan Adcreative AI"
      ]
    },
    {
      title: "Modul 8: Market Research Intelligence",
      desc: "Intip dapur kompetitor dan pahami apa yang sebenarnya diinginkan pasar saat ini.",
      lessons: [
        "Pengenalan Market Research",
        "Tantangan & Solusi Bisnis Ecommerce",
        "Pentingnya Riset Audience",
        "Pentingnya Riset Kompetitor",
        "Keuntungan Optimasi Produk",
        "Demo: Riset Audience Mendalam",
        "Demo: Riset Kompetitor",
        "Demo: Optimasi Pengembangan Produk"
      ]
    },
    {
      title: "Modul 9: Email & CRM Automation",
      desc: "Bangun kolam uang Anda sendiri yang tidak bergantung pada algoritma sosial media.",
      lessons: [
        "Pengenalan CRM & Email Marketing",
        "Strategi Email Edukasi",
        "Strategi Email Launching Produk",
        "Teknik Email Urgency & Scarcity",
        "Konsep Email Funneling",
        "Demo: Create Email Edukasi",
        "Demo: Create Email Peluncuran Produk",
        "Demo: Email Urgency",
        "Demo: Membuat Funnel Email Marketing"
      ]
    },
    {
      title: "Modul 10: The AI Chatbot Agent",
      desc: "Punya Customer Service 24 jam yang tidak pernah mengeluh, tidur, atau minta cuti.",
      lessons: [
        "Pengenalan AI Chatbot",
        "Persiapan & Setup Environment",
        "Buat Akun Github",
        "Daftar Aplikasi Render.com",
        "Deploy Flowise di Render.com",
        "Deploy Flowise di Railway",
        "Pengenalan Interface Flowise",
        "Tool di dalam Flowise",
        "Demo: Customer Service Chatbot",
        "Demo: AI Support & Marketing Agent",
        "Demo: Koneksikan Chat ke Website",
        "Demo: Koneksikan Chatbot ke Telegram"
      ]
    }
  ];

  // Primary Color: #5E4CE6
  // Heading: #231971
  // Body: #2A2742
  // Note: primaryButtonClass is no longer used for checkout buttons as they are now red.
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const checkoutLink = "https://utas.to/tl4mj8?checkout=1";

  return (
    <div className="min-h-screen bg-slate-50 text-[#2A2742] antialiased font-sans selection:bg-[#5E4CE6] selection:text-white">
      {/* Top nav */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a 
              href="#hero" 
              onClick={(e) => handleScroll(e, "hero")}
              className="flex items-center gap-3 group"
            >
              <div className="h-10 w-10 rounded-lg bg-[#5E4CE6] flex items-center justify-center text-white font-bold shadow-md group-hover:scale-105 transition-transform">
                AI
              </div>
              <span className="font-semibold text-lg tracking-tight text-[#231971] group-hover:text-[#5E4CE6] transition-colors">AI Marketing Masterclass</span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#2A2742]">
              <a 
                href="#modules" 
                onClick={(e) => handleScroll(e, "modules")}
                className="hover:text-[#5E4CE6] transition-colors"
              >
                Modul
              </a>
              <a 
                href="#pricing" 
                onClick={(e) => handleScroll(e, "pricing")}
                className="hover:text-[#5E4CE6] transition-colors"
              >
                Harga
              </a>
              <a 
                href="#faq" 
                onClick={(e) => handleScroll(e, "faq")}
                className="hover:text-[#5E4CE6] transition-colors"
              >
                FAQ
              </a>
              <a
                href={checkoutLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition-all"
              >
                Daftar Rp 97.000
              </a>
            </nav>

            <div className="md:hidden">
              <button className="p-2 rounded-md hover:bg-gray-100 text-[#2A2742]">
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
            {/* Background Blurs - Purple/Indigo/Pink vibe */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-[#5E4CE6] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-purple-300 opacity-20 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              {/* Left: copy */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="max-w-xl">
                  <p className="inline-block px-3 py-1 rounded-full bg-[#5E4CE6]/10 text-[#5E4CE6] text-xs font-bold tracking-wide uppercase mb-6 border border-[#5E4CE6]/20">
                    Masterclass • 10 Modul • Full Demo
                  </p>
                  <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.15] text-[#231971]">
                    Kuasai AI untuk Bangun Branding, Konten, Iklan & Penjualan
                  </h1>
                  <p className="mt-6 text-lg text-[#2A2742] leading-relaxed">
                    Pelajari seluruh ekosistem marketing modern berbasis AI: dari branding, konten, salespage, hingga
                    chatbot. Cocok untuk pemula & pelaku bisnis yang ingin hasil cepat.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <a
                      href={checkoutLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex justify-center items-center px-8 py-3.5 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 hover:-translate-y-0.5 transition-all font-semibold"
                    >
                      Daftar Rp 97.000
                    </a>
                    <a
                      href="#modules"
                      onClick={(e) => handleScroll(e, "modules")}
                      className="inline-flex justify-center items-center w-full sm:w-auto px-8 py-3.5 text-[#5E4CE6] bg-white border border-[#5E4CE6] rounded-lg font-semibold hover:bg-[#5E4CE6]/5 transition-colors shadow-sm"
                    >
                      Lihat modul lengkap →
                    </a>
                  </div>

                  <div className="mt-8 flex items-center gap-3 text-sm text-[#2A2742]/80">
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
                  <div className="relative aspect-square bg-gray-50">
                    <img
                      src="https://i.ibb.co.com/gZLgyRDQ/dreamina-2025-12-10-8200-Ultra-realistic-3-D-mockup-of-a-premium.jpg"
                      alt="Course Preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <p className="font-bold text-lg">AI Marketing Masterclass</p>
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
                        <p className="text-xs text-[#5E4CE6] uppercase tracking-wide font-bold">Special Offer</p>
                        <p className="text-xl font-bold text-[#5E4CE6]">Rp 97.000</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-[#5E4CE6] w-3/4"></div>
                        </div>
                        <p className="text-xs text-gray-500 text-right">75% Slots Taken</p>
                    </div>

                    <a
                      href={checkoutLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
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
                    <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-[#5E4CE6]/10 text-[#5E4CE6] text-2xl">
                        {item.icon}
                    </div>
                    <div>
                        <h3 className="font-bold text-[#231971] text-lg">{item.title}</h3>
                        <p className="mt-1 text-sm text-[#2A2742] leading-relaxed">{item.desc}</p>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modules */}
        <section id="modules" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl text-[#231971]">Kurikulum Lengkap</h2>
            <p className="mt-4 text-lg text-[#2A2742]">
              10 Modul dengan {modules.reduce((acc, curr) => acc + curr.lessons.length, 0)}+ video materi yang dirancang untuk membawa Anda dari pemula hingga mahir.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
            {modules.map((m, idx) => (
              <motion.article 
                key={idx} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`group bg-white rounded-2xl border transition-all overflow-hidden ${expandedModule === idx ? 'border-[#5E4CE6] shadow-lg ring-1 ring-[#5E4CE6]/20' : 'border-gray-200 shadow-sm hover:border-[#5E4CE6]/50'}`}
              >
                <div 
                  onClick={() => toggleModule(idx)}
                  className="p-6 sm:p-8 cursor-pointer flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between"
                >
                  <div className="flex gap-4 items-start flex-1">
                    <span className={`inline-flex items-center justify-center h-10 w-10 rounded-full text-base font-bold shadow-sm flex-shrink-0 transition-colors ${expandedModule === idx ? 'bg-[#5E4CE6] text-white' : 'bg-[#5E4CE6]/10 text-[#5E4CE6]'}`}>
                        {idx + 1}
                    </span>
                    <div>
                      <h3 className={`text-xl font-bold transition-colors ${expandedModule === idx ? 'text-[#5E4CE6]' : 'text-[#231971]'}`}>{m.title}</h3>
                      <p className="text-sm text-[#2A2742]/80 mt-1">{m.desc}</p>
                      
                      <div className="mt-3 flex items-center gap-4 text-xs font-medium text-gray-500">
                        <span className="flex items-center gap-1">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                           {m.lessons.length} Materi Video
                        </span>
                        {m.resources && (
                          <span className="flex items-center gap-1">
                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                             {m.resources.length} Lampiran
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className={`transform transition-transform duration-300 ${expandedModule === idx ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedModule === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-slate-50 border-t border-gray-100"
                    >
                      <div className="p-6 sm:p-8 pt-4">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Daftar Materi</h4>
                        <ul className="space-y-3">
                          {m.lessons.map((lesson, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-[#2A2742]">
                                  <div className="mt-0.5 w-5 h-5 rounded-full bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 text-[#5E4CE6]">
                                    <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                                  </div>
                                  <span className="font-medium">{lesson}</span>
                              </li>
                          ))}
                        </ul>

                        {m.resources && (
                           <div className="mt-6 pt-6 border-t border-gray-200/50">
                             <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Bonus Lampiran</h4>
                             <div className="flex flex-wrap gap-2">
                               {m.resources.map((res, i) => (
                                 <span key={i} className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#5E4CE6]/10 text-[#5E4CE6] text-xs font-semibold border border-[#5E4CE6]/20">
                                   <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                   {res}
                                 </span>
                               ))}
                             </div>
                           </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-[#5E4CE6] relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full opacity-10 blur-[80px]"></div>
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-64 h-64 bg-pink-300 rounded-full opacity-20 blur-[80px]"></div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Kata Mereka yang Sudah Praktek</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  quote: "Saya dulu sering kehabisan ide buat konten sosmed. Setelah ikut kelas ini, saya bisa membuat stok konten yang banyak dengan sangat cepat. Tekniknya sangat praktis, tanpa basa-basi, dan langsung bisa dieksekusi. Sekarang akun saya jadi jauh lebih aktif dan interaksi dengan followers meningkat pesat!", 
                  name: "Rina", 
                  role: "Online Seller" 
                },
                { 
                  quote: "Biasanya saya sering boncos kalau ngiklan karena targeting-nya kurang tepat. Di sini diajarin cara riset audience yang bener-bener spesifik pakai AI. Hasilnya? Biaya iklan jadi terasa jauh lebih hemat dan efisien, serta penjualan pun jadi lebih lancar. Sangat recommended untuk pebisnis!", 
                  name: "Anton", 
                  role: "UMKM Owner" 
                },
                { 
                  quote: "Sebagai freelancer, saya sering kewalahan handle chat klien satu-satu. Modul chatbot & automasi CRM di course ini sangat membantu pekerjaan saya. Sekarang sistem bisa bantu jawab pertanyaan klien & follow up otomatis, jadi saya bisa fokus ngerjain projek dengan tenang.", 
                  name: "Dita", 
                  role: "Freelancer" 
                }
              ].map((t, i) => (
                  <div key={i} className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-colors flex flex-col h-full">
                    <div className="flex gap-1 mb-4 text-yellow-300">
                        {[1,2,3,4,5].map(s => <span key={s}>★</span>)}
                    </div>
                    <p className="italic text-white/90 leading-relaxed mb-6 text-sm flex-grow">"{t.quote}"</p>
                    <div className="flex items-center gap-3 mt-auto">
                        <div className="h-10 w-10 rounded-full bg-white text-[#5E4CE6] flex items-center justify-center text-sm font-bold shadow-lg flex-shrink-0">
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
                <h2 className="text-3xl font-bold text-[#231971]">Investasi Leher ke Atas Terbaik</h2>
                <p className="mt-4 text-[#2A2742]">Harga sangat terjangkau untuk skill yang akan meningkatkan profit bisnis Anda.</p>
            </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative">
            <div className="absolute top-0 right-0 bg-[#5E4CE6] text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg z-10 shadow-md">
                BEST VALUE
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 h-full">
                <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-[#231971]">AI Marketing Masterclass</h3>
                    <p className="text-[#5E4CE6] font-medium mt-1">Full 10 Modul • Lifetime Access</p>
                    <p className="mt-4 text-[#2A2742] text-sm leading-relaxed">
                        Dapatkan akses penuh ke seluruh materi, update masa depan, dan bonus template siap pakai untuk mempercepat proses belajar Anda.
                    </p>
                    
                    <ul className="mt-8 space-y-3">
                        {[
                            "Akses video materi seumur hidup",
                            "Tanpa biaya langganan bulanan",
                            "Full demo & resources file"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-[#2A2742]">
                                <svg className="w-5 h-5 text-[#5E4CE6] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* Image Insertion */}
                    <div className="mt-8 rounded-xl overflow-hidden border border-gray-100 shadow-sm aspect-square bg-gray-50">
                        <img 
                            src="https://i.ibb.co.com/chfn8nfV/dreamina-2025-12-10-7949-Ultra-realistic-3-D-mockup-of-a-premium.jpg" 
                            alt="AI Marketing Masterclass Bundle" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                
                <div className="md:col-span-2 bg-gray-50 p-8 md:p-10 flex flex-col justify-center items-center border-t md:border-t-0 md:border-l border-gray-100 text-center relative">
                    <div className="text-sm text-gray-500 mb-1">Harga Normal</div>
                    <div className="text-xl line-through text-gray-400 decoration-red-400">Rp 247.000</div>
                    <div className="mt-2 text-4xl font-extrabold text-[#5E4CE6]">Rp 97.000</div>
                    <p className="text-xs text-gray-500 mt-2 mb-6">Sekali bayar, akses selamanya</p>
                    
                    <a 
                      href={checkoutLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full inline-flex justify-center items-center px-6 py-4 bg-red-600 text-white rounded-xl shadow-lg hover:bg-red-700 hover:-translate-y-0.5 transition-all font-bold"
                    >
                        Ambil Promo Sekarang
                    </a>
                    <p className="text-[10px] text-gray-400 mt-4 px-2 leading-relaxed">
                        Pembeli tidak perlu khawatir, karena seluruh transaksi diproses melalui pihak ketiga yang terpercaya, yaitu UTAS. Pembayaran dapat dilakukan melalui QRIS, Virtual Account (BCA, BNI, BRI, Mandiri, Permata), e-wallet (LinkAja, Dana, ShopeePay), serta kartu kredit/debit.
                    </p>
                </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24">
          <h2 className="text-2xl font-bold text-center mb-10 text-[#231971]">Pertanyaan yang Sering Diajukan</h2>
          <div className="space-y-4">
            {[
                { q: "Apakah cocok untuk pemula?", a: "Sangat cocok. Modul disusun dari dasar pengenalan AI hingga praktik lanjutan, dilengkapi full demo langkah demi langkah." },
                { q: "Berapa lama akses kelas?", a: "Akses seumur hidup (Lifetime). Anda bisa belajar kapan saja dan di mana saja. Update modul juga akan diberikan gratis." },
                { q: "Bagaimana cara akses kelasnya?", a: "Setelah pembayaran terkonfirmasi, Anda akan otomatis mendapatkan email berisi detail login ke member area untuk mengakses seluruh materi video dan asset." },
                { q: "Metode pembayaran apa yang tersedia?", a: "Pembeli tidak perlu khawatir, karena seluruh transaksi diproses melalui pihak ketiga yang terpercaya, yaitu UTAS. Pembayaran dapat dilakukan melalui QRIS, Virtual Account (BCA, BNI, BRI, Mandiri, Permata), e-wallet (LinkAja, Dana, ShopeePay), serta kartu kredit/debit." }
            ].map((faq, i) => (
                <details key={i} className="group bg-white rounded-xl border border-gray-200 overflow-hidden transition-all hover:border-[#5E4CE6]/50">
                    <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-[#231971] select-none">
                        {faq.q}
                        <span className="transform group-open:rotate-180 transition-transform text-[#5E4CE6]">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </span>
                    </summary>
                    <div className="px-5 pb-5 pt-0 text-[#2A2742] text-sm leading-relaxed border-t border-transparent group-open:border-gray-100 group-open:pt-3">
                        {faq.a}
                    </div>
                </details>
            ))}
          </div>
        </section>

        {/* CTA footer */}
        <section className="bg-[#231971] border-t border-indigo-900/50 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-[#5E4CE6]/10 to-blue-900/10 pointer-events-none"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative z-10">
            <div>
              <h3 className="text-2xl font-bold text-white">Siap mulai perjalanan Anda?</h3>
              <p className="mt-2 text-gray-300 max-w-md">Ambil kursus sekarang dan mulailah menghemat waktu serta biaya marketing Anda menggunakan AI.</p>
            </div>
            <div>
              <a 
                href={checkoutLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-xl font-bold shadow-lg hover:bg-red-700 transition-colors"
              >
                Daftar Sekarang Rp 97.000
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-[#2A2742]/60">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                    <div>© {new Date().getFullYear()} AI Marketing Masterclass. All rights reserved.</div>
                </div>
            </div>
        </footer>
      </main>
    </div>
  );
}