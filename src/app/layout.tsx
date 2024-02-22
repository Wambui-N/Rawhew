import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/Components";


const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} min-h-screen min-w-screen bg-white mx-[8vw] mt-[5vh]`}>
        <Navbar />
        {children}
        {/* <Footer /> */}
        </body>
    </html>
  );
}
