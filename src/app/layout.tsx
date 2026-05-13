import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zenthra Bilişim | Geleceğin Dijital Mimarı",
  description: "Zenthra Bilişim: Kurumsal teknoloji çözümleri, WMS depo yönetim sistemleri ve Ar-Ge projeleriyle geleceği inşa ediyoruz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-brand-bg text-foreground selection:bg-brand-blue/30`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
