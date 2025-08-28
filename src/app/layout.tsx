// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "src/components/homepage/Header";
import { ThemeProvider } from "src/components/ThemeProvider"; // <<< PRIDĖTA
import { BackToTopButton } from "src/components/BackToTopButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Publikuota.lt",
  description: "Automatizuota turinio rinkodaros platforma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
