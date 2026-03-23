import type { Metadata } from "next";
import { Barlow, Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["italic"],
  variable: "--font-display",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Infinity Studios",
  description: "Creative agency.",
  icons: {
    icon: "/images/infinity.svg",
    shortcut: "/images/infinity.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/videos/hero_bg.mp4"
          as="video"
          type="video/mp4"
        />
        <link
          rel="preload"
          href="/images/hero_bg.jpeg"
          as="image"
          type="image/jpeg"
        />
      </head>
      <body className={`${instrumentSerif.variable} ${barlow.variable}`}>
        {children}
      </body>
    </html>
  );
}
