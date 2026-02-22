import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "./_components/Navigation";
import Logo from "./_components/Logo";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "e-commerce website",
  description: "selling the best products on the planet",
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
        <header>
          <Logo />
          <Navigation />
        </header>

        <main> {children}</main>
        <footer>copyright by me</footer>
      </body>
    </html>
  );
}
