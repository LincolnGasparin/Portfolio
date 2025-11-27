import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Kalam } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Portfólio desenvolvido em Next.js com Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
  return (
    <html lang="pt-BR" className="!scroll-smooth dark">
      <body className={`bg-gray-900 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/30 font-sans`}>
        {children}
      </body>
    </html>
  );
}
