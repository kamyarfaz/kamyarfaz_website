import type { Metadata } from "next";
import { Bebas_Neue, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kamyarfaz.com"),

  title: "Kamyar Fazlolahnezhad | AI & Data Science Specialist",

  icons: {
    icon: "/logo.png",
  },
  
  description:
    "Kamyar Fazlolahnezhad is an AI and Data Science Specialist focused on artificial intelligence, machine learning, data-driven applications, and modern web technologies.",

  keywords: [
    "Kamyar Fazlolahnezhad",
    "Kamyar Fazlolahnezhad AI",
    "Kamyar Fazlolahnezhad Data Science",
    "AI Specialist",
    "Artificial Intelligence Specialist",
    "Data Science",
    "Data Scientist",
    "Machine Learning",
    "AI Developer",
    "Machine Learning Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
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
    title: "Kamyar Fazlolahnezhad | AI & Data Science Specialist",
    description:
      "AI and Data Science Specialist focused on artificial intelligence, machine learning, data-driven applications, and modern web technologies.",
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
