import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: {
    default: "FinLef – Tìm Thẻ Tín Dụng & Vay Tiền Online Phù Hợp Nhất",
    template: "%s | FinLef",
  },
  description:
    "FinLef giúp bạn tìm và đăng ký thẻ tín dụng, vay tiền online nhanh chóng. Thông tin minh bạch, cập nhật mới nhất từ các ngân hàng hàng đầu.",
  metadataBase: new URL("https://finlef.com"),
  openGraph: {
    siteName: "FinLef",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${openSans.variable} h-full antialiased`}>
      <head>
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#ffffff"/>
      </head>
      <body className="min-h-full flex flex-col">
        <GoogleTagManager gtmId="GTM-WDPRTMTL" />
<Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
