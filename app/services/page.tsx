'use client';

import { FadeIn } from '@/components/animate-ui/fade-in';
import { Wrench, Network, Shield, Zap, Cloud, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: 'ICT Consultancy & Support',
      description: 'We provide expert guidance and managed support for your ICT infrastructure, including planning, documentation, and SLA-based maintenance to ensure optimal performance and reliability.',
      features: ['Comprehensive infrastructure audits', 'Customized system design and architecture', 'Best practices and process consulting', 'Service Level Agreement (SLA) management'],
      icon: Wrench
    },
    {
      title: 'Networking Solutions',
      description: 'We design, implement, and optimize reliable network infrastructures tailored to your organization’s needs, covering everything from structured cabling to high-performance WiFi.',
      features: ['Structured cabling systems', 'Fiber optic installations', 'Custom network design', 'WiFi performance optimization'],
      icon: Network
    },
    {
      title: 'Security & Surveillance',
      description: 'We provide comprehensive security solutions, including CCTV, access control, alarm systems, and NVR setups, to safeguard your business and ensure peace of mind.',
      features: ['CCTV system installation and monitoring', 'Access control systems', 'Alarm system integration', 'Network Video Recorder (NVR) configuration'],
      icon: Shield
    },
    {
      title: 'Power & Backup',
      description: 'We provide reliable power solutions to ensure continuous operation, including UPS systems, battery banks, and generator integration for high-availability sites.',
      features: ['UPS systems', 'Battery banks installations', 'Generator setup', 'Power monitoring and management'],
      icon: Zap
    },
    {
      title: 'Cloud & Servers',
      description: 'We deliver end-to-end server and cloud solutions, including server room design, virtualization, cloud migration, and managed hosting, to ensure scalable and secure IT infrastructure.',
      features: ['Server room planning and design', 'Virtualization solutions', 'Cloud migration services', 'Managed hosting and support'],
      icon: Cloud
    },
    {
      title: 'Business Communication',
      description: 'Comprehensive business communication solutions, including IP telephony, PBX systems, video conferencing, and unified messaging, to enhance collaboration and connectivity across your organization.',
      features: ['IP telephony solutions', 'PBX systems installation and management', 'Video conferencing setup', 'Unified messaging'],
      icon: MessageSquare
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Background patterns */}
      <div className="fixed inset-0 bg-[radial-gradient(#ff621908_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 border-b border-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn direction="up">
              <h1 className="text-5xl md:text-6xl font-bold text-[#373e51] mb-6 tracking-tight">
                Professional <span className="text-[#ff6219]">ICT Services</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Expert guidance and managed support designed to ensure your infrastructure is scalable, secure, and always operational.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeIn key={index} delay={index * 0.1} direction="up" className="h-full">
                <div className="bg-white border border-orange-100 rounded-3xl p-8 h-full hover:shadow-2xl hover:border-orange-500 transition-all duration-500 group relative overflow-hidden flex flex-col">
                  {/* Subtle Background Icon */}
                  <service.icon className="absolute -right-4 -top-4 w-32 h-32 text-orange-500/5 group-hover:scale-110 transition-transform duration-500" />

                  <div className="w-14 h-14 bg-linear-to-br from-[#ff6219] to-[#ff7a3d] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20 group-hover:rotate-6 transition-transform">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#373e51] mb-4 group-hover:text-orange-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed mb-8 flex-grow">{service.description}</p>

                  <div className="space-y-3 mt-auto pt-6 border-t border-orange-50">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Core Competencies</h4>
                    <ul className="space-y-3">
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

      {/* Why Choose Us */}
      <section className="py-24 bg-[#373e51] text-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <FadeIn direction="up">
              <h2 className="text-4xl font-bold mb-16 text-center">Engineered for Excellence</h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {[
                { title: "Expert Engineering", desc: "Our certified engineers bring enterprise-grade experience to every local project." },
                { title: "Rapid Response", desc: "Arusha-based team providing fast on-site support and maintenance." },
                { title: "Quality Assurance", desc: "Partnered with leading vendors to provide reliable, warrantied solutions." },
                { title: "Round-the-clock Support", desc: "Proactive monitoring and support to maintain 99.9% uptime." }
              ].map((item, i) => (
                <FadeIn key={i} delay={0.2 + (i * 0.1)} direction="up">
                  <div className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#ff6219] transition-colors">
                      <CheckCircle2 className="w-6 h-6 text-[#ff6219] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn direction="up">
            <div className="max-w-3xl mx-auto bg-linear-to-br from-[#ff6219] to-[#ff7a3d] rounded-[3rem] p-12 md:p-16 shadow-2xl shadow-orange-500/20 text-white overflow-hidden relative">
              {/* Decorative Circle */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/10 rounded-full blur-3xl" />

              <h2 className="text-4xl font-bold mb-6 relative z-10">Ready to scale?</h2>
              <p className="text-xl mb-10 text-white/90 relative z-10">
                Let&apos;s design the right ICT solution for your organization&apos;s growth.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-[#ff6219] font-bold py-4 px-10 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative z-10"
              >
                Schedule Free Consultation
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}