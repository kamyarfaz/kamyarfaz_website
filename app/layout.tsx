import type { Metadata } from "next";
import { Bebas_Neue, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kamyarfaz.com"),

  title: "Kamyar Fazlolahnezhad | Full Stack Developer",

  description:
    "Kamyar Fazlolahnezhad is a Full Stack Developer specializing in modern web development, React, Next.js, TypeScript, and scalable web applications.",

  keywords: [
    "Kamyar Fazlolahnezhad",
    "Full Stack Developer",
    "Full Stack Web Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Web Developer",
    "Software Developer",
  ],

  authors: [
    {
      name: "Kamyar Fazlolahnezhad",
      url: "https://kamyarfaz.com",
    },
  ],

  creator: "Kamyar Fazlolahnezhad",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Kamyar Fazlolahnezhad | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, TypeScript, and modern web applications.",
    url: "https://kamyarfaz.com",
    siteName: "Kamyar Fazlolahnezhad",
    type: "website",
    locale: "en_US",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} antialiased bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
