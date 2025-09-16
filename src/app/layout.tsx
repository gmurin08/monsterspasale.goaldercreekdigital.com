import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Monster Spa Sale",
  description: "Unbeatable deals on premium spas and hot tubs - Monster Spa Sale!",
  openGraph: {
    title: "Monster Spa Sale",
    description: "Unbeatable deals on premium spas and hot tubs - Monster Spa Sale!",
    images: [
      {
        url: '/images/mspaog.png',
        width: 1200,
        height: 630,
        alt: 'Monster Spa Sale',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Monster Spa Sale",
    description: "Unbeatable deals on premium spas and hot tubs - Monster Spa Sale!",
    images: ['/images/mspaog.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script 
          src="https://link.msgsndr.com/js/form_embed.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
