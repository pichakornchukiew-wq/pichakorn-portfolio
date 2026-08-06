import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ARTIST } from "@/lib/data";
import "@/styles/globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${ARTIST.name} | Painting, Sculpture, Drawing`,
    template: `%s`,
  },
  description:
    "A studio practice built slowly, in series, around stillness, duration, and the rooms we leave behind.",
  metadataBase: new URL("https://www.pichakornchukiew.com"),
  openGraph: {
    title: ARTIST.name,
    description:
      "A studio practice built slowly, in series, around stillness, duration, and the rooms we leave behind.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="work-site">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
