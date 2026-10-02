import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ISDS | IT системы для лидеров рынка | Резиденты Cyber Park",
  description:
    "Поможем произвести автоматизацию бизнес-процессов и увеличить прибыль. Разработка высоконагруженных IT систем, мобильных приложений, ERP и CRM решений. Резиденты Cyber Park с 2021 года.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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
      className="dark scroll-smooth h-full antialiased"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/30 selection:text-primary font-sans">
        {children}
      </body>
    </html>
  );
}
