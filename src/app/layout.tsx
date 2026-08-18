import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import FluidTrail from "@/components/originkit/ui/hero-11/fluid-trail";

const zodiak = localFont({
  src: "../fonts/Poppins-SemiBold.woff2",
  variable: "--font-zodiak",
  weight: "700",
  style: "normal",
  display: "swap",
});

const jakarta = localFont({
  src: "../fonts/PlusJakartaSans-Regular.woff2",
  variable: "--font-jakarta",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MP Technologies - O futuro começa aqui",
  description:
    "Criamos experiências digitais, sistemas e produtos sob medida para transformar ideias em soluções reais.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${zodiak.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-jakarta">
        {children}
      </body>
    </html>
  );
} 