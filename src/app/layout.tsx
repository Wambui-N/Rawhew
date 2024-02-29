import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/Components";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rawhew Ranch Kenya",
  description:
    "A small intimate campsite bordering KWS Game Farm, a few meters from off the Naivasha – Kinangop Road. We offer high-quality pitches with a wide variety of facilities to enrich your camping experience. Our location away from the urban jungle and the busy highway gives our camp an adventurous sense of solitude and freedom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} min-h-screen min-w-screen bg-white text-black`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
