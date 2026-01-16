import type { Metadata, Viewport } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#66BB6A" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EcoSync - Rwanda's AI-Powered Sustainability Platform",
  description:
    "EcoSync transforms Rwanda's students into eco-leaders through AI-powered smart solar guidance, adaptive eco-challenges, and verified environmental impact tracking. Join 500+ students making measurable impact toward Vision 2050.",
  keywords: [
    "EcoSync",
    "Rwanda sustainability",
    "AI-powered platform",
    "eco-friendly",
    "solar energy Rwanda",
    "student environmental action",
    "green technology",
    "sustainable living",
    "Rwanda Vision 2050",
    "REMA",
    "REG",
    "MINEDUC",
    "environmental impact tracking",
    "eco-challenges",
    "smart energy",
  ],
  authors: [{ name: "EcoSync" }],
  creator: "EcoSync",
  publisher: "EcoSync",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ecosync.rw"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "EcoSync - Rwanda's AI-Powered Sustainability Platform",
    description:
      "Transform your daily actions into measurable environmental impact. Join Rwanda's first AI-powered sustainability platform connecting students, families, and national partners.",
    url: "https://ecosync.rw",
    siteName: "EcoSync",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "EcoSync - Rwanda's Sustainability Platform",
      },
    ],
    locale: "en_RW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoSync - Rwanda's AI-Powered Sustainability Platform",
    description:
      "Transform your daily actions into measurable environmental impact. Join Rwanda's sustainability revolution.",
    images: ["/assets/logo.png"],
    creator: "@ecosync",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/logo.png",
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
  manifest: "/manifest.json",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
