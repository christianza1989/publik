// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "src/components/homepage/Header";
import { ThemeProvider } from "src/components/ThemeProvider";
import { BackToTopButton } from "src/components/BackToTopButton";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Publikuota.lt",
  description: "Automatizuota turinio rinkodaros platforma",
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    // Nurodome kalbą tiesiogiai čia
    <html lang="lt" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Header />
          {children}
          <BackToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
