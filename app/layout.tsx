import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Room } from "./Room";
import ThemeProvider from "./provider";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://design-deck.vercel.app/' || 'https://fallback-url.com/';

export const metadata: Metadata = {
  title: "DesignDeck - Collaborative Design Platform",
  description: "A collaborative design platform built with Liveblocks and Next.js, allowing real-time design creation, editing, and sharing.",
  keywords: "collaborative design, real-time design, Liveblocks, Next.js, online design tools, design platform, creative collaboration",

  openGraph: {
    title: "DesignDeck - Collaborative Real-Time Design Platform",
    description: "Create, edit, and share designs collaboratively in real-time with DesignDeck.",
    url: baseUrl, 
    type: "website",
    locale: "en_US", 
    siteName: "DesignDeck", 
    images: [
      {
        url: `${baseUrl}/og-image.jpg`, 
        width: 1200,
        height: 630,
        alt: "DesignDeck preview image", 
      },
    ],
  },

  twitter: {
    card: "summary_large_image", 
    title: "DesignDeck - Real-Time Collaborative Design",
    description: "Collaborate in real-time on designs with DesignDeck, built with Liveblocks and Next.js.",
    images: [`${baseUrl}/og-image.jpg`], 
  },

  applicationName: "DesignDeck",
  robots: "index, follow", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${workSans.className} bg-primary-grey-200`}>
        <ThemeProvider



          attribute="class"
          defaultTheme="system"
          enableSystem
        >

          <Room>{children}</Room>


        </ThemeProvider>
      </body>
    </html>
  );
}
