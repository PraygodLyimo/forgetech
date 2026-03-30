"use client";

import { Calendar as CalendarIcon, FileText as FileTextIcon, Bell as BellIcon, Share2 as Share2Icon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import AnimatedBeamMultipleOutputDemo from "@/components/examples/animated-beam-multiple-outputs";
import AnimatedListDemo from "@/components/examples/animated-list-demo";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";

const services = [
  {
    name: "Custom Software",
    body: "Enterprise-grade web and mobile applications built with modern frameworks like React, Next.js, and Node.js.",
  },
  {
    name: "Cloud-Native Systems",
    body: "Scalable architectures on AWS, Azure, and Google Cloud with DevOps automation and serverless computing.",
  },
  {
    name: "Cyber Security",
    body: "End-to-end data protection, digital forensics, and proactive threat management for secure operations.",
  },
  {
    name: "AI & Data Solutions",
    body: "Harnessing machine learning and predictive analytics to automate workflows and drive intelligent decisions.",
  },
  {
    name: "Modern Networking",
    body: "High-speed fiber optics, software-defined networking (SDN), and unified WiFi for seamless global connectivity.",
  },
  {
    name: "IoT & Smart Systems",
    body: "Connected infrastructure and smart automation solutions for industrial and residential environments.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Our Services",
    description: "Comprehensive ICT solutions tailored to your needs.",
    href: "/services",
    cta: "View All",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s]"
      >
        {services.map((s, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white">
                  {s.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{s.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Service Updates",
    description: "Get notified about project milestones and service requests.",
    href: "/contact",
    cta: "Contact Us",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute top-4 right-2 h-[300px] w-full scale-75 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Integrated Solutions",
    description: "Complete ICT ecosystem for your organization.",
    href: "/get-quote",
    cta: "Get Quote",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute top-4 right-2 h-[300px] border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Schedule Consultation",
    description: "Book a consultation to discuss your ICT needs.",
    className: "col-span-3 lg:col-span-1",
    href: "/contact",
    cta: "Book Now",
    background: (
      <Calendar
        mode="single"
        selected={new Date()}
        className="absolute top-10 right-0 origin-top scale-75 rounded-md border [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90"
      />
    ),
  },
];

export default function ServicesPage() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-[#fff9f5]">
      <div className="mx-auto px-4 text-center max-w-7xl">
        <h2 className="text-4xl font-bold mb-4 text-[#373e51]">Our Services</h2>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          We provide a comprehensive range of ICT solutions, tailored to meet the unique needs of your organization and ensure optimal performance, security, and scalability.
        </p>

        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
