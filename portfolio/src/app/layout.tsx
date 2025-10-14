// Layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // Ensure this path is correct

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pankhuri Gupta - Portfolio Website | Software Developer Enthusiast",
  description: "Personal portfolio website of Pankhuri Gupta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
