import type { Metadata } from "next";
import { Inter, Kaushan_Script } from "next/font/google";
import Providers from "@/context/Providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kaushan",
});

export const metadata: Metadata = {
  title: "Mujtaba Mussavi Portfolio",
  description: "Mujtaba Mussavi personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`
        ${inter.variable}
        ${kaushan.variable} 
        font-sans bg-fixed bg-gradient-to-r from-green to-blue-400 dark:from-dark-500 dark:to-dark-700
        `}
          suppressHydrationWarning
        >
          {children}
        </body>
      </Providers>
    </html>
  );
}
