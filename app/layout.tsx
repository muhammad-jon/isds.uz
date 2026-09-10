import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ISDS | IT системы для лидеров рынка | Резиденты IT-Park",
  description:
    "Поможем произвести автоматизацию бизнес-процессов и увеличить прибыль. Разработка высоконагруженных IT систем, мобильных приложений, ERP и CRM решений. Резиденты IT-Park с 2021 года.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/30 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
