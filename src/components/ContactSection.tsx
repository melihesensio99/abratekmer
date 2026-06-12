"use client";

import { useEffect, useRef, useState } from "react";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left: Text */}
          <div className={`lg:w-5/12 text-center lg:text-left transition-all duration-700 opacity-100 translate-y-0`}>
            <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase mb-5 block">BİZE ULAŞIN</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight" style={{ fontFamily: "var(--font-outfit)" }}>
              Sorularınız için <br className="hidden lg:block"/> buradayız.
            </h2>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              ABRA Smart Lock PRO hakkında daha fazla bilgi almak, sipariş durumunuzu öğrenmek veya teknik destek talebinde bulunmak için profesyonel ekibimize ulaşın.
            </p>
          </div>

          {/* Right: Cards */}
          <div className={`lg:w-7/12 w-full grid sm:grid-cols-2 gap-6 transition-all duration-700 opacity-100 translate-y-0`}>
            
            {/* Address */}
            <div className="sm:col-span-2 glass rounded-3xl p-8 group hover:bg-white/[0.04] hover:border-primary/40 transition-all duration-500 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(227,43,43,0.3)] transition-all duration-500">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Merkez Ofis</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Trakya Bilim Teknoloji Geliştirme Merkezi <br />
                  Zafer Mah. Şehitler Cad. No:6 <br />
                  59850 Çorlu / Tekirdağ
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="glass rounded-3xl p-8 group hover:bg-white/[0.04] hover:border-primary/40 transition-all duration-500 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-6 border border-primary/20 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(227,43,43,0.3)] transition-all duration-500">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">E-posta</h3>
              <a href="mailto:info@abratasarim.com" className="text-primary hover:text-primary/80 font-medium transition-colors">
                info@abratasarim.com
              </a>
            </div>

            {/* Phone */}
            <div className="glass rounded-3xl p-8 group hover:bg-white/[0.04] hover:border-primary/40 transition-all duration-500 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-6 border border-primary/20 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(227,43,43,0.3)] transition-all duration-500">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Telefon</h3>
              <a href="tel:+905313529037" className="text-primary hover:text-primary/80 font-medium transition-colors">
                0 (531) 352 90 37
              </a>
            </div>

          </div>
        </div>

        {/* Company website link */}
        <div className={`text-center mt-16 transition-all duration-700 opacity-100 translate-y-0`}>
          <a
            href="https://abratasarim.com/tr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/30 hover:text-white/70 text-sm transition-colors font-medium tracking-wide"
          >
            abratasarim.com
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
