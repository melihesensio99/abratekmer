import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ABRA Smart Lock PRO | Akıllı Kilit Çözümleri",
  description:
    "ABRA Smart Lock PRO ile evinizin güvenliğini akıllı hale getirin. Wi-Fi ve Bluetooth bağlantı, kolay kurulum, uzun pil ömrü. Trendyol'dan hemen satın alın.",
  keywords: [
    "akıllı kilit",
    "smart lock",
    "ABRA",
    "ev güvenliği",
    "bluetooth kilit",
    "wifi kilit",
    "akıllı ev",
  ],
  openGraph: {
    title: "ABRA Smart Lock PRO | Akıllı Kilit",
    description:
      "Akıllı güvenlik, basitleştirildi. ABRA Smart Lock PRO ile evinizi kontrol edin.",
    type: "website",
    locale: "tr_TR",
    siteName: "ABRA Smart Lock",
  },
  twitter: {
    card: "summary_large_image",
    title: "ABRA Smart Lock PRO",
    description: "Akıllı güvenlik, basitleştirildi.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${outfit.variable} antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body
        className="min-h-screen flex flex-col font-sans"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
