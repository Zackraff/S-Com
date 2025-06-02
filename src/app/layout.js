// src/app/layout.js
import Header from "./views/Header"; 
import Footer from "./views/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Pastikan path benar

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "S-Moni",
  description: "Landing Page for S-Moni",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Header di bagian atas */}
        <Header />

        {/* Konten utama yang akan berubah sesuai dengan rute */}
        <main>{children}</main>

        {/* Footer di bagian bawah */}
        <Footer />
      </body>
    </html>
  );
}
