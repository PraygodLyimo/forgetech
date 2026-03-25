'use client';

import AboutPage from "./pages/aboutus/page";
import ContactPage from "./pages/contact/page";
import HeroPage from "./pages/hero/page";
import ServicesPage from "./pages/services/page";



export default function Home() {
  return (
    <>
      <main>
        <HeroPage />
        <ServicesPage />
        <AboutPage />
        <ContactPage />
      </main>
    </>
  );
}
