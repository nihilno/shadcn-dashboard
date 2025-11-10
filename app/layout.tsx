import Navbar from "@/components/navbar/Navbar";
import Providers from "@/components/providers/providers";
import MainSidebar from "@/components/sidebar/MainSidebar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shadcn Focused Project",
  description: "Project focused on learning Shadcn library",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <MainSidebar />
          <main className="w-full">
            <Navbar />
            <div className="px-4 pb-4">{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
