import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Providers from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Alma Diaries",
  description: "My personal blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white text-black dark:bg-gray-900 dark:selection:bg-gray-900 dark:text-white h-full selection:bg-gray-50 `}
      >
        {" "}
        <Providers>
          <Navbar />
          <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 ">
            {" "}
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
