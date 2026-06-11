"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Landscape 16:9 promo images (1280×720) — shown with contain + matching bg
const promoImages = [
  { src: "/images/new/14.jpeg", bg: "#f0f0f0" }, // Quick easy installation — light bg
  { src: "/images/new/15.jpeg", bg: "#f0f0f0" }, // Installation benefits
  { src: "/images/new/16.jpeg", bg: "#ddd"     }, // Night mode
  { src: "/images/new/17.jpeg", bg: "#f0f0f0" }, // Day/night comparison
  { src: "/images/new/18.jpeg", bg: "#1a1a1a" }, // Battery / charging
  { src: "/images/new/19.jpeg", bg: "#f0f0f0" }, // Sound alerts
  { src: "/images/new/2.jpeg",  bg: "#0d0d0d" }, // Remote lock / app
  { src: "/images/new/1.jpeg",  bg: "#eee"    }, // vs comparison
];

// Portrait installation images — shown with contain + white bg so full image shows
const installImages = [
  { src: "/images/new/3.jpeg",  bg: "#c8b89a", label: "Koyu Ahşap"   },
  { src: "/images/new/4.jpeg",  bg: "#c0a87a", label: "Açık Ahşap"   },
  { src: "/images/new/5.jpeg",  bg: "#ede8e0", label: "Beyaz Kapı"   },
  { src: "/images/new/6.jpeg",  bg: "#e8ddd0", label: "Bej Kapı"     },
  { src: "/images/new/7.jpeg",  bg: "#e5ddd2", label: "Bej + Adaptör"},
  { src: "/images/new/8.jpeg",  bg: "#111",    label: "Siyah Kapı"   },
  { src: "/images/new/9.jpeg",  bg: "#555",    label: "Gri Kapı"     },
  { src: "/images/new/10.jpeg", bg: "#2a2a2a", label: "Koyu Kapı"    },
  { src: "/images/new/11.jpeg", bg: "#f0ebe4", label: "İç Mekan"     },
  { src: "/images/new/12.jpeg", bg: "#c8c0b0", label: "Gri Kapı 2"   },
  { src: "/images/new/13.jpeg", bg: "#4a3828", label: "Kahverengi"   },
];

function FullImage({ src, bg, alt, className = "" }: { src: string; bg: string; alt: string; className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={{ background: bg }}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        sizes="(max-width: 1024px) 100vw, 80vw"
      />
    </div>
  );
}

export default function BannerSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeInstall, setActiveInstall] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-advance install carousel
  useEffect(() => {
    const t = setInterval(() => setActiveInstall(p => (p + 1) % installImages.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section ref={sectionRef} className="pt-8 pb-24 bg-black overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        {/* ── 1. Hero promo: Quick Easy Installation (16:9) ── */}
        <div className={`reveal ${isVisible ? "active" : ""}`}>
          <div className="rounded-[2rem] overflow-hidden" style={{ background: "#f0f0f0" }}>
            <div className="relative aspect-video w-full">
              <Image src="/images/new/14.jpeg" alt="ABRA Smart Lock PRO - Hızlı ve Kolay Kurulum"
                fill className="object-contain" priority sizes="100vw" />
            </div>
          </div>
        </div>

        {/* ── 2. Section heading ── */}
        <div className={`text-center py-10 reveal delay-200 ${isVisible ? "active" : ""}`}>
          <span className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4 block">NEDEN ABRA?</span>
          <h2 className="heading-section text-white mb-6">Akıllı Güvenlik, Basit Kurulum</h2>
          <p className="text-body-large max-w-3xl mx-auto">
            Mevcut kapınızı ve kilit sisteminizi değiştirmenize gerek yok. ABRA, dakikalar içinde kurulur.
          </p>
        </div>

        {/* ── 3. Installation Benefits (16:9) ── */}
        <div className={`reveal delay-300 ${isVisible ? "active" : ""}`}>
          <div className="rounded-[2rem] overflow-hidden relative group">
            <div className="relative aspect-video w-full" style={{ background: "#f0f0f0" }}>
              <Image src="/images/new/15.jpeg" alt="Alet Gerektirmez, Anahtar Değiştirme Yok, Tüm Kapılarla Uyumlu"
                fill className="object-contain" sizes="100vw" />
            </div>
          </div>
        </div>

        {/* ── 4. Night Mode + Day/Night side by side (both 16:9) ── */}
        <div className={`grid md:grid-cols-2 gap-6 reveal delay-400 ${isVisible ? "active" : ""}`}>
          {/* Night Mode */}
          <div className="rounded-[2rem] overflow-hidden group relative">
            <div className="relative aspect-video w-full" style={{ background: "#ddd" }}>
              <Image src="/images/new/16.jpeg" alt="ABRA Gece Modu - Quiet Unlocking at Night"
                fill className="object-contain transition-transform duration-700 group-hover:scale-105" sizes="50vw" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none rounded-[2rem]" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-primary text-xs font-bold tracking-widest uppercase">Night Mode</span>
              <h3 className="text-white text-xl sm:text-2xl font-extrabold mt-1">Sessiz Gece Açılması</h3>
              <p className="text-white/70 text-sm mt-1">Gece geç dönerken aileni uyandırma</p>
            </div>
          </div>

          {/* Day/Night comparison */}
          <div className="rounded-[2rem] overflow-hidden group relative">
            <div className="relative aspect-video w-full" style={{ background: "#f0f0f0" }}>
              <Image src="/images/new/17.jpeg" alt="Gündüz Yarım Kilit vs Gece Tam Kilit"
                fill className="object-contain transition-transform duration-700 group-hover:scale-105" sizes="50vw" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none rounded-[2rem]" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-primary text-xs font-bold tracking-widest uppercase">Dual Mode</span>
              <h3 className="text-white text-xl sm:text-2xl font-extrabold mt-1">Gündüz &amp; Gece Modu</h3>
              <p className="text-white/70 text-sm mt-1">Gündüz hızlı çıkış, gece tam güvenlik</p>
            </div>
          </div>
        </div>

        {/* ── 5. Battery + Smart Alerts side by side (both 16:9) ── */}
        <div className={`grid md:grid-cols-2 gap-6 reveal delay-500 ${isVisible ? "active" : ""}`}>
          {/* Battery */}
          <div className="rounded-[2rem] overflow-hidden group relative">
            <div className="relative aspect-video w-full" style={{ background: "#1a1a1a" }}>
              <Image src="/images/new/18.jpeg" alt="Pil Yedekleme ve USB-C Şarj"
                fill className="object-contain transition-transform duration-700 group-hover:scale-105" sizes="50vw" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none rounded-[2rem]" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-primary text-xs font-bold tracking-widest uppercase">Güç Yönetimi</span>
              <h3 className="text-white text-xl sm:text-2xl font-extrabold mt-1">6 Aya Varan Pil Ömrü</h3>
              <p className="text-white/70 text-sm mt-1">USB şarj ile hiç mahsur kalmayın</p>
            </div>
          </div>

          {/* Sound alerts */}
          <div className="rounded-[2rem] overflow-hidden group relative">
            <div className="relative aspect-video w-full" style={{ background: "#f0f0f0" }}>
              <Image src="/images/new/19.jpeg" alt="Sesli Uyarılar ve Pil Bildirimi"
                fill className="object-contain transition-transform duration-700 group-hover:scale-105" sizes="50vw" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none rounded-[2rem]" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-primary text-xs font-bold tracking-widest uppercase">Akıllı Uyarılar</span>
              <h3 className="text-white text-xl sm:text-2xl font-extrabold mt-1">Sesli &amp; App Bildirimleri</h3>
              <p className="text-white/70 text-sm mt-1">Pil bitmeden önce uyarı alırsınız</p>
            </div>
          </div>
        </div>

        {/* ── 6. Remote App — full width 16:9 ── */}
        <div className={`reveal delay-600 ${isVisible ? "active" : ""}`}>
          <div className="rounded-[2rem] overflow-hidden relative">
            <div className="relative aspect-video w-full" style={{ background: "#0d0d0d" }}>
              <Image src="/images/new/2.jpeg" alt="Uzaktan Kilit Açma / Kapama - ABRA App"
                fill className="object-contain" sizes="100vw" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent pointer-events-none rounded-[2rem]" />
            <div className="absolute left-8 sm:left-14 top-1/2 -translate-y-1/2 max-w-xs">
              <span className="text-primary text-xs font-bold tracking-widest uppercase block mb-2">Remote Access</span>
              <h3 className="text-white text-2xl sm:text-4xl font-extrabold mb-4">Uzaktan Kilit Aç / Kapat</h3>
              <ul className="space-y-1.5 text-white/80 text-sm">
                <li className="flex items-start gap-2"><span className="text-primary">•</span>Wifi ile her yerden kontrol</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span>Misafir erişimi uzaktan yönetim</li>
                <li className="flex items-start gap-2"><span className="text-primary">•</span>Kapı açıldığında otomatik bildirim</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── 7. Uyumluluk: Installation carousel with portrait images ── */}
        <div className={`reveal delay-700 ${isVisible ? "active" : ""}`}>
          <div className="text-center py-10">
            <span className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4 block">UYUMLULUK</span>
            <h2 className="text-white text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-noto)" }}>Her Kapıya Uyar</h2>
            <p className="text-white/50 text-xl max-w-2xl mx-auto">Ahşap, metal, bej, siyah — tüm Avrupa tipi kapı ve kilit sistemleriyle uyumlu</p>
          </div>

          {/* Thumbnail row */}
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-4 px-2">
            {installImages.map((img, i) => (
              <button key={i} onClick={() => setActiveInstall(i)}
                style={{ background: img.bg }}
                className={`relative flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 transition-all ${
                  activeInstall === i ? "border-primary scale-105 shadow-lg shadow-primary/30" : "border-transparent opacity-50 hover:opacity-75"
                }`}
              >
                <Image src={img.src} alt={img.label} fill className="object-contain p-1" />
              </button>
            ))}
          </div>

          {/* Main large display — portrait images shown 3:4 */}
          <div className="mt-4 rounded-[2rem] overflow-hidden relative group"
            style={{ background: installImages[activeInstall].bg }}>
            <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
              <motion.div
                key={activeInstall}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={installImages[activeInstall].src}
                  alt={installImages[activeInstall].label}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </motion.div>
            </div>
            <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-white text-sm font-bold">{installImages[activeInstall].label} — ABRA Uyumlu</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
