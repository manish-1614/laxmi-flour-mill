import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Laxmi Flour Mill | Premium Fresh Chakki Atta",
  description: "Experience the purity of fresh, stone-ground flour and artisanal grains from Laxmi Flour Mill. Milled daily for unmatched taste and nutrition.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased selection:bg-wheat/30`}
      >
        {children}
      </body>
    </html>
  );
}
