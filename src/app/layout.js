import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio - CK",
  description: "เก็บข้อมูลผลงาน ไว้ใช้สำหรับสมัครงาน Developer หรือ กลุ่มIT",
  icons:{
    icon:'/favicon-32x32.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`inter.className antialiased`}>{children}</body>
    </html>
  );
}
