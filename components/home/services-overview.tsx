'use client';

import { FadeIn } from '@/components/animate-ui/fade-in';
import { Network, Shield, Cloud, Cpu } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    title: 'Modern Networking',
    description: 'Enterprise-grade fiber optics and SD-WAN solutions.',
    icon: Network,
    href: '/services#networking'
  },
  {
    title: 'Cyber Security',
    description: 'Proactive threat management and data protection.',
    icon: Shield,
    href: '/services#security'
  },
  {
    title: 'Cloud Systems',
    description: 'Scalable cloud migration and infrastructure.',
    icon: Cloud,
    href: '/services#cloud'
  },
  {
    title: 'IoT & Smart Systems',
    description: 'Integrated automation for modern organizations.',
    icon: Cpu,
    href: '/services#iot'
  }
];

export function ServicesOverview() {
  return (
    <section className="py-24 bg-[#fff9f5]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#373e51] mb-6">
              Engineering <span className="text-[#ff6219]">Digital Foundations</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We deliver end-to-end ICT infrastructure that scales with your business, 
              combining international standards with local expertise.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} direction="up">
              <Link href={feature.href} className="group">
                <div className="bg-white p-8 rounded-3xl border border-orange-100 hover:border-[#ff6219] hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#ff6219] transition-colors">
                    <feature.icon className="w-6 h-6 text-[#ff6219] group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#373e51] mb-3">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
