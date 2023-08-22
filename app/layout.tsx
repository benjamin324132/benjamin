import { Toaster } from "@/components/Toaster";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Benjamin Landavazo Portillo • Fullstack Developer",
  description: "Showcase of my projects",
  keywords: [
    "Portfolio",
    "Projects",
    "Node.js",
    "React",
    "Skills",
    "Next JS",
    "Portfolio",
    "Flutter",
  ],
  authors: {
    name: "Benjamin Landavazo",
    url: "https://github.com/benjamin324132",
  },
  creator: "benjamin324132",
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "white" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL,
    title: "Benjamin Landavazo Portillo • Fullstack Developer",
    description: "Showcase of my projects",
    siteName: process.env.NEXT_PUBLIC_APP_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Benjamin Landavazo Portillo • Fullstack Developer",
    description: "Showcase of my projects",
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/og.jpg`],
    creator: "benjamin324132",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
