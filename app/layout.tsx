import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SiteChrome } from "@/components/site-chrome";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Pavan Kumar | Motion Designer",
  description:
    "Premium motion designer portfolio for Pavan Kumar featuring cinematic projects, branding systems, and visual storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${playfair.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-black text-white antialiased">
        <SmoothScroll>
          <SiteChrome>{children}</SiteChrome>
        </SmoothScroll>
      </body>
    </html>
  );
}
