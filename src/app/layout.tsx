
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
  metadataBase: new URL("https://ronok-devops-portfolio.vercel.app"),

  title: "Md Shahariar Hassan | DevOps Engineering Portfolio",

  description:
    "Professional engineering portfolio featuring Docker, Bitbucket CI/CD automation, Linux systems, Python services, Prometheus, Grafana, and software security.",

  keywords: [
    "DevOps",
    "Docker",
    "Linux",
    "CI/CD",
    "Bitbucket Pipelines",
    "Python",
    "Prometheus",
    "Grafana",
    "Md Shahariar Hassan",
  ],

  openGraph: {
    title: "Md Shahariar Hassan | DevOps Engineering Portfolio",
    description:
      "Linux · Docker · CI/CD Automation · Python · Prometheus · Grafana",
    url: "https://ronok-devops-portfolio.vercel.app/",
    siteName: "SH.DEVOPS",
    type: "website",
    images: [
      {
        url: "/images/devops-linkedin-preview.png",
        width: 1200,
        height: 630,
        alt: "Md Shahariar Hassan DevOps Engineering Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Md Shahariar Hassan | DevOps Engineering Portfolio",
    description:
      "Docker, Linux, CI/CD, and containerized observability infrastructure.",
    images: ["/images/devops-linkedin-preview.png"],
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
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
