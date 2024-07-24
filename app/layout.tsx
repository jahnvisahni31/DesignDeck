import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Room } from "./Room";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  weight: ['400', '600', '700']
});

export const metadata: Metadata = {
  title: "DesignDeck",
  description: "A web-based design tool inspired by figma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary-black`}>
        <Room>
          {children}
        </Room>
      </body>
    </html>
  );
}
