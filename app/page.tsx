'use client';

import HeroPage from "./pages/hero/page";
import { ServicesOverview } from "@/components/home/services-overview";
import { CompanyLogos } from "@/components/home/company-logos";

export default function Home() {
  return (
    <>
      <main>
        <HeroPage />
        <ServicesOverview />
        <CompanyLogos />
      </main>
    </>
  );
}
