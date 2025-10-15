import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundFX from "./components/BackgroundFX";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ranjan - Full Stack Developer Portfolio",
  description: "Professional portfolio of Ranjan, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.",
  keywords: "portfolio, developer, full-stack, react, nextjs, typescript, web development",
  authors: [{ name: "Ranjan" }],
  openGraph: {
    title: "Ranjan - Full Stack Developer Portfolio",
    description: "Professional portfolio showcasing modern web development projects and skills.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BackgroundFX />
        {children}
      </body>
    </html>
  );
}
