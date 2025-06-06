import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-screen h-screen">
          {/* <ul className="flex flex-row gap-4 fixed top-0 left-0 z-20 p-4 bg-white/80 backdrop-blur-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/by-mesh">By Mesh</Link>
            </li>
            <li>
              <Link href="/by-char">By Character</Link>
            </li>
            <li>
              <Link href="/exhibition-hall">Exhibition Hall</Link>
            </li>
            <li>
              <Link href="/environment">Environment</Link>
            </li>
          </ul> */}
          <NuqsAdapter>
              {children}
          </NuqsAdapter>
        </div>
      </body>
    </html>
  );
}
