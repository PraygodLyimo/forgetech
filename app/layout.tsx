import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./nav/page";
import Footer from "./pages/footer/page";

// Removed Google font imports (Geist). Using system fonts to avoid build-time network fetch.

export const metadata: Metadata = {
  title: "ForgeTech",
  description: "ForgeTech - Modern ICT Solutions for East Africa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
