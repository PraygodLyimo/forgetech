'use client';

import HeroPage from "./pages/hero/page";
import { ServicesOverview } from "@/components/home/services-overview";
import { CompanyLogos } from "@/components/home/company-logos";
import { StatsSection } from "@/components/home/stats-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <main>
        <HeroPage />
        <CompanyLogos />
        <StatsSection />
        <ServicesOverview />
      </main>
    </div>
  );
}
