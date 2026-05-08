"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 py-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <span className="text-2xl font-black tracking-tighter text-white group-hover:text-primary transition-colors" style={{ fontFamily: "var(--font-noto)" }}>
                ABRA
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </motion.div>
            <p className="text-white/30 text-sm leading-relaxed font-light">
              Akıllı güvenlik çözümleri ile evinizi daha güvenli hale getirin.
            </p>
            <a
              href="https://abratasarim.com/tr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-white/30 text-xs hover:text-white/60 transition-colors"
            >
              abratasarim.com
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-medium text-sm mb-4">Ürün</h4>
            <ul className="space-y-2">
              {[
                { label: "Özellikler", href: "#features" },
                { label: "Teknik Detaylar", href: "#specs" },
                { label: "Videolar", href: "#videos" },
                { label: "Katalog", href: "/catalog.pdf" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/30 text-sm font-light hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium text-sm mb-4">Destek</h4>
            <ul className="space-y-2">
              {[
                { label: "Hakkımızda", href: "#about" },
                { label: "İletişim", href: "#contact" },
                { label: "SSS", href: "#" },
                { label: "Garanti", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/30 text-sm font-light hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium text-sm mb-4">İletişim</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@abratasarim.com" className="text-white/30 text-sm font-light hover:text-primary transition-colors">
                  info@abratasarim.com
                </a>
              </li>
              <li>
                <a href="tel:+905313529037" className="text-white/30 text-sm font-light hover:text-primary transition-colors">
                  0 (531) 352 90 37
                </a>
              </li>
              <li className="text-white/20 text-xs font-light leading-relaxed">
                Trakya Bilim Teknoloji Merkezi, Çorlu / Tekirdağ
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="https://www.trendyol.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary/80 text-sm hover:text-primary transition-colors"
              >
                Trendyol Mağaza
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="section-divider my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs font-light">
            © {new Date().getFullYear()} ABRA Tasarım Mühendislik Hizmetleri. Tüm hakları saklıdır.
          </p>
          <p className="text-white/15 text-xs font-light">
            <a href="https://www.erdemadali.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/40 transition-colors">
              Erdem ADALI
            </a>
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
