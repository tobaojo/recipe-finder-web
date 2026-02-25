import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900", "1000"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Recipe Finder - Find the perfect recipe for any occasion",
  description:
    "Discover delicious recipes tailored to your preferences with Recipe Finder. Whether you're looking for quick meals, healthy options, or gourmet dishes, our app helps you find the perfect recipe for any occasion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.className}>
      <body className="text-[#163A34]">
        <Header />
        <div className="p-4">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
