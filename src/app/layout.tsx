
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Md Shahariar Hassan | DevOps & Systems Engineering",
  description:
    "DevOps and Systems Engineering portfolio of Md Shahariar Hassan. Exploring Linux, high-performance networking, automation, CI/CD, and cloud infrastructure.",
  keywords: [
    "DevOps",
    "Linux",
    "Systems Engineering",
    "CI/CD",
    "Cloud Infrastructure",
    "DPDK",
    "Md Shahariar Hassan",
  ],
  openGraph: {
    title: "Md Shahariar Hassan | DevOps & Systems Engineering",
    description:
      "Building scalable infrastructure and reliable engineering systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
