import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/Components";


const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rawhew Ranch Kenya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} min-h-screen min-w-screen bg-white text-black`}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
