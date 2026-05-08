"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const specs = [
  { label: "Boyut", value: "120 × 59 × 39 mm", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m4 0h1m-5 4h1m4 0h1m-5 4h1m4 0h1" },
  { label: "Bağlantı", value: "Bluetooth 4.2", icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.757 9.172C6.445 4.485 14.055 4.485 18.742 9.172" },
  { label: "Ağırlık", value: "435g (pillerle)", icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" },
  { label: "Kullanım Ortamı", value: "İç Mekan", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { label: "Malzeme", value: "Alüminyum-Magnezyum", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-8.061 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946 8.061 3.42 3.42 0 010 4.438 3.42 3.42 0 00-1.946 8.061 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-8.061 3.42 3.42 0 010-4.438z" },
  { label: "Çalışma Sıcaklığı", value: "-10°C ~ 45°C", icon: "M9 19l-7-7 7-7m8 14l-7-7 7-7" },
  { label: "Çalışma Nemi", value: "%10 ~ %90 RH", icon: "M20 7l-8.944 4.472a2 2 0 01-1.788 0L3 7m0 10v-7l8-4 8 4v7a2 2 0 01-2 2H5a2 2 0 01-2-2z" },
  { label: "Pil Ömrü", value: "~6 Ay", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
];

export default function SpecsSection() {
  return (
    <section id="specs" className="py-32 bg-background relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4 block">TEKNİK</span>
          <h2 className="heading-section text-white mb-6" style={{ fontFamily: "var(--font-noto)" }}>
            Teknik Detaylar
          </h2>
          <p className="text-body-large max-w-2xl mx-auto">
            ABRA Smart Lock PRO&apos;nun tüm teknik kapasitesini ve donanım özelliklerini inceleyin.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Specs Card */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-transparent rounded-[2.5rem] blur opacity-50" />
            <div className="relative glass rounded-[2.5rem] p-10 sm:p-12 border border-white/10">
              <div className="grid grid-cols-1 gap-y-1">
                {specs.map((spec, index) => (
                  <motion.div 
                    key={spec.label} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className={`group flex items-center justify-between py-5 transition-all duration-300 ${index < specs.length - 1 ? "border-b border-white/5" : ""}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                        <svg className="w-6 h-6 text-white/80 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={spec.icon} />
                        </svg>
                      </div>
                      <span className="text-gray-200 text-lg font-medium group-hover:text-white transition-colors">{spec.label}</span>
                    </div>
                    <span className="text-white font-bold text-lg tracking-tight">{spec.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Specs Image Container */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <motion.div 
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-black/40 p-4 shadow-2xl shadow-black/50"
            >
              <Image
                src="/images/3.png"
                alt="ABRA Smart Lock PRO Teknik Özellikler"
                width={1000}
                height={800}
                className="w-full h-auto rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 glass-light px-8 py-6 rounded-2xl border border-white/10 shadow-2xl hidden sm:block z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Premium Kalite</div>
                  <div className="text-white/50 text-sm">Alüminyum-Magnezyum</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
