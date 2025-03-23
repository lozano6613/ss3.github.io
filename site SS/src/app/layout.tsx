import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Bolt.new - Что вы хотите узнать сейчас?",
  description: "Создавайте, запускайте, редактируйте и развертывайте полнофункциональные веб и мобильные приложения.",
  icons: {
    icon: '/favicon.svg'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} dark`}>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
