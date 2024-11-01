"use client";

import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Room } from "./Room";
import ThemeProvider from "./provider";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import { UserProvider } from "@/context/UserContext";
import AnimatedCursor from "react-animated-cursor";
import { useEffect } from 'react';
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
});

// export const metadata: Metadata = {
//   title: "DesignDeck",
//   description: "A DesignDeck built with Liveblocks and Next.js",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
          .then((registration) => {
            console.log('ServiceWorker registration successful:', registration);
          })
          .catch((err) => {
            console.log('ServiceWorker registration failed:', err);
          });
      });
    }
  }, []);

  return (
    <html lang="en">
      <body className={`${workSans.className} bg-dark`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <UserProvider>
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={1}
            outerScale={2}
            outerAlpha={0}
            // hasBlendMode={true}
            innerStyle={{
              backgroundColor: "var(--cursor-color)",
            }}
            outerStyle={{
              border: "3px solid var(--cursor-color)",
            }}
          />
          <Room>{children}</Room>
            </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
