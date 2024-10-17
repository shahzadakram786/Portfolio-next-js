import type { Metadata } from "next";
import localFont from "next/font/local";
import {Great_Vibes} from "next/font/google";

import "./globals.css";

const Great_Vibes_init = Great_Vibes({
  subsets:['latin'],
  weight:['400'],
  variable:'--font-great_vibes'
})


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
  title: "Shahzad Akram Web developer",
  description:
    "I am Shahzad Akram with three years of experience in Front-End Development. With practical experience at Webloop, I’m sure to be your next web developer.",
  keywords: [
    "next js",
    "shahzad akram",
    "react js",
    "webloop.pk",
    "gilgit",
    "hire web dev",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Great_Vibes_init.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
