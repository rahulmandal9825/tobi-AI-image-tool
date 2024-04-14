import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'next/font/google';
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tobi - AI Imaging Tool ",
  description: "AI-Powered imaging Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider 
    appearance={{ variables: { colorPrimary: '#FF8C00'}}}>
    <html lang="en">
      <body>{children}</body>
    </html>
  </ClerkProvider>
  );
}
