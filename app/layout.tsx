import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://scope-video-player.vercel.app'),
  title: "LearnWell",
  description: "Watch and create educational videos",
  openGraph: {
    images: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} px-4 sm:px-6 lg:px-8`}>
        <Header />
        <main>
          <div className="container mx-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
