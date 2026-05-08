import type { Metadata } from "next";
import { Poppins, Nunito_Sans, Noto_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["300", "400", "600", "700", "800"],
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
  weight: ["400", "700"],
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
      className={`${poppins.variable} ${nunitoSans.variable} ${notoSans.variable} antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body
        className="min-h-screen flex flex-col"
        style={{ fontFamily: "var(--font-nunito), var(--font-noto), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
