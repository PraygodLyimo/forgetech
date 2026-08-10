'use client';

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const logos = [
  { src: "/companies/Hikvision_logo.svg.png", alt: "Hikvision" },
  { src: "/companies/Lenovo_Global_Corporate_Logo.png", alt: "Lenovo" },
  { src: "/companies/MikroTik-Logo.png", alt: "MikroTik" },
  { src: "/companies/UniFi-Logo.png", alt: "UniFi" },
  { src: "/companies/yealink-logo.png", alt: "Yealink" },
  { src: "/companies/ZKTECO-LOGO-1-1.png", alt: "ZKTeco" },
  { src: "/companies/suprema-bioentry-850x500.png", alt: "Suprema" },
  { src: "/companies/logo.png", alt: "Dahua" },
  { src: "/companies/Anviz-logo.png", alt: "Anviz" },
  { src: "/companies/Cambium_Networks_logo.svg.png", alt: "Cambium Networks" },
  { src: "/companies/Dell_Logo.png", alt: "Dell" },
  { src: "/companies/Grandstream-logo-transparent.png", alt: "Grandstream" },
  { src: "/companies/Hewlett-Packard-Logo-2008-2014.png", alt: "HP" },
];

const LogoCard = ({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) => {
  return (
    <figure
       className={cn(
        "relative h-24 w-60 cursor-pointer overflow-hidden rounded-2xl border p-4 transition-all duration-300",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] hover:scale-105",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center justify-center h-full">
        <div className="relative w-full h-full max-h-12">
            <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 160px, 200px"
            />
        </div>
      </div>
    </figure>
  );
};

export function CompanyLogos() {
  return (
    <section className="py-24 bg-white border-t border-orange-50 relative">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-xl md:text-2xl font-bold text-[#373e51] opacity-60 uppercase tracking-[0.3em] mb-4">
          Trusted Technologies we are dealing with
        </h2>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee reverse={true} repeat={6} className="[--duration:30s]">
          {logos.map((logo, idx) => (
            <LogoCard key={idx} {...logo} />
          ))}
        </Marquee>
        
        {/* Gradients for smooth fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-white z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-white z-10"></div>
      </div>
    </section>
  );
}
