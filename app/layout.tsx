import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

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
      <body className={`${inter.className} flex flex-col min-h-screen px-4 sm:px-6 lg:px-8`}>
        <Header />
        <main className="flex-grow pb-4">
          <div className="container mx-auto">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
