'use client';

import { FadeIn } from '@/components/animate-ui/fade-in';
import { 
  Code, 
  Cloud, 
  Shield, 
  Brain, 
  Network, 
  Cpu, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: 'Custom Software',
      description: 'Enterprise-grade web and mobile applications built with modern frameworks like React, Next.js, and Node.js. We focus on performance, scalability, and exceptional user experiences.',
      features: ['Full-stack web development', 'Mobile app development (iOS/Android)', 'API design and integration', 'Legacy system modernization'],
      icon: Code
    },
    {
      title: 'Cloud-Native Systems',
      description: 'Scalable architectures on AWS, Azure, and Google Cloud with DevOps automation and serverless computing. We help you transition to a flexible, cost-effective infrastructure.',
      features: ['Cloud migration strategies', 'DevOps & CI/CD automation', 'Kubernetes & Docker orchestration', 'Serverless architecture design'],
      icon: Cloud
    },
    {
      title: 'Cyber Security',
      description: 'End-to-end data protection, digital forensics, and proactive threat management. We ensure your digital assets are shielded against evolving cyber threats.',
      features: ['Security audits & vulnerability assessments', 'Managed threat detection', 'Data encryption & compliance', 'Network security optimization'],
      icon: Shield
    },
    {
      title: 'AI & Data Solutions',
      description: 'Harnessing machine learning and predictive analytics to automate workflows and drive intelligent decisions. Transform your data into a strategic business asset.',
      features: ['Predictive modeling & analytics', 'Process automation (RPA)', 'Generative AI integration', 'Data engineering & warehousing'],
      icon: Brain
    },
    {
      title: 'Modern Networking',
      description: 'High-speed fiber optics, software-defined networking (SDN), and unified WiFi for seamless global connectivity. We build the backbone of your digital operation.',
      features: ['SD-WAN implementation', 'Fiber-to-the-X (FTTX)', 'Campus WiFi optimization', 'Network monitoring & managed support'],
      icon: Network
    },
    {
      title: 'IoT & Smart Systems',
      description: 'Connected infrastructure and smart automation solutions for industrial and residential environments. Bridging the gap between the physical and digital worlds.',
      features: ['Industrial IoT (IIoT) sensors', 'Smart building automation', 'Asset tracking systems', 'Edge computing solutions'],
      icon: Cpu
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Background patterns */}
      <div className="fixed inset-0 bg-[radial-gradient(#ff621908_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 border-b border-orange-50 bg-linear-to-b from-orange-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn direction="up">
              <h1 className="text-5xl md:text-7xl font-bold text-[#373e51] mb-8 tracking-tight">
                Modern <span className="text-[#ff6219]">Technology Stack</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-light">
                Engineering high-performance solutions designed to ensure your infrastructure is scalable, secure, and future-proof.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <FadeIn key={index} delay={index * 0.1} direction="up" className="h-full">
                <div className="bg-white border border-orange-100 rounded-[2.5rem] p-10 h-full hover:shadow-2xl hover:border-orange-500 transition-all duration-500 group relative overflow-hidden flex flex-col">
                  {/* Subtle Background Icon */}
                  <service.icon className="absolute -right-8 -top-8 w-48 h-48 text-orange-500/5 group-hover:scale-110 transition-transform duration-700" />

                  <div className="w-16 h-16 bg-linear-to-br from-[#ff6219] to-[#ff7a3d] rounded-[1.25rem] flex items-center justify-center mb-8 shadow-xl shadow-orange-500/20 group-hover:rotate-6 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#373e51] mb-6 group-hover:text-orange-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 text-[16px] leading-relaxed mb-8 flex-grow">{service.description}</p>

                  <div className="space-y-4 mt-auto pt-8 border-t border-orange-50">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#ff6219] mb-4">Core Capabilities</h4>
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#ff6219] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#373e51] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Build the Future?</h2>
            <p className="text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
              Our engineering team is ready to design a scalable technology infrastructure for your next big milestone.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#ff6219] text-white font-bold py-5 px-10 rounded-2xl hover:bg-[#ff7a3d] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                    Start Your Project
                    <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                    href="/get-quote"
                    className="inline-flex items-center gap-2 bg-white/10 text-white font-bold py-5 px-10 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                    Request Custom Quote
                </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}