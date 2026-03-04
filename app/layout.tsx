import type { Metadata } from "next";
import "./globals.css";

import { Josefin_Sans } from "next/font/google";
import Header from "./_components/layout/Header";

import { ClerkProvider } from "@clerk/nextjs";

const josefin = Josefin_Sans({
  subsets: ["latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: `%s SHOP`,
    default: "Welcome in our shop! ",
  },
  description: "Best products in the planet with the healthiest food!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${josefin.className} min-h-screen flex flex-col max-w-7xl mx-auto`}
        >
          <Header />
          <div className="p-1">
            <main>{children}</main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
