'use client';

import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Link from 'next/link';

import { FadeIn } from '@/components/animate-ui/fade-in';
import { Network, Shield, Cloud, Zap, Phone, Package, LayoutGrid, CheckCircle2, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = '+255657530700';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [userName, setUserName] = useState('');

  const products = [
    {
      id: 1,
      category: 'networking',
      name: 'Enterprise Network Solutions',
      description: 'Complete structured cabling and network design for organizations of all sizes',
      features: ['Fiber optic cabling', 'Network switching', 'WiFi optimization', 'Load balancing'],
      price: 'Custom Quote',
      icon: Network
    },
    {
      id: 2,
      category: 'security',
      name: 'CCTV & Surveillance Systems',
      description: 'Professional CCTV installation with NVR capabilities and remote cloud access',
      features: ['4K camera systems', 'Night vision', 'Cloud storage', 'Remote monitoring'],
      price: 'Custom Quote',
      icon: Shield
    },
    {
      id: 3,
      category: 'security',
      name: 'Access Control Systems',
      description: 'Modern access control with biometric and card-based authentication for entry points',
      features: ['Biometric locks', 'Card readers', 'Visitor management', 'Audit logs'],
      price: 'Custom Quote',
      icon: Shield
    },
    {
      id: 4,
      category: 'cloud',
      name: 'Cloud Migration Services',
      description: 'Seamless migration of your infrastructure to secure cloud platforms',
      features: ['Assessment & planning', 'Data migration', 'Security setup', 'Staff training'],
      price: 'Custom Quote',
      icon: Cloud
    },
    {
      id: 5,
      category: 'cloud',
      name: 'Server Room Design & Setup',
      description: 'Complete server room infrastructure with cooling and power management',
      features: ['Physical infrastructure', 'Power systems', 'Cooling solutions', 'Virtualization'],
      price: 'Custom Quote',
      icon: Cloud
    },
    {
      id: 6,
      category: 'power',
      name: 'UPS & Backup Power Systems',
      description: 'Reliable power backup solutions for continuous operations during outages',
      features: ['Battery UPS', 'Generator integration', 'Power monitoring', 'Automatic failover'],
      price: 'Custom Quote',
      icon: Zap
    },
    {
      id: 7,
      category: 'communication',
      name: 'IP Telephony Systems',
      description: 'Modern IP PBX and unified communications solutions for clear collaboration',
      features: ['VoIP setup', 'Call routing', 'Video conferencing', 'Mobile integration'],
      price: 'Custom Quote',
      icon: Phone
    },
    {
      id: 8,
      category: 'communication',
      name: 'Business Communication Suite',
      description: 'Integrated communication platform for distributed and modern teams',
      features: ['Video conferencing', 'Instant messaging', 'File sharing', 'Integration APIs'],
      price: 'Custom Quote',
      icon: Phone
    },
  ];

  const categories = [
    { id: 'all', label: 'All Solutions', icon: LayoutGrid },
    { id: 'networking', label: 'Networking', icon: Network },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'cloud', label: 'Cloud & Servers', icon: Cloud },
    { id: 'power', label: 'Power & Backup', icon: Zap },
    { id: 'communication', label: 'Communication', icon: Phone },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const handleWhatsAppSend = (productName: string) => {
    if (!userName.trim()) {
      alert('Please enter your name');
      return;
    }

    const message = `Hi ForgeTech, I'm ${userName.trim()} and I'm interested in inquiring about: ${productName}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    setUserName('');
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Background patterns */}
      <div className="fixed inset-0 bg-[radial-gradient(#ff621908_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 border-b border-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn direction="up">
              <h1 className="text-5xl md:text-6xl font-bold text-[#373e51] mb-6 tracking-tight">
                Enterprise <span className="text-[#ff6219]">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Comprehensive ICT products and engineered systems designed to power modern organizations across East Africa.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, idx) => (
              <FadeIn key={category.id} delay={idx * 0.05} direction="up">
                <button
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${selectedCategory === category.id
                    ? 'bg-[#ff6219] text-white shadow-lg shadow-orange-500/30'
                    : 'bg-white text-[#373e51] border border-orange-100 hover:border-[#ff6219] hover:text-[#ff6219] hover:shadow-md'
                    }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.label}
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <FadeIn key={product.id} delay={index * 0.1} direction="up">
                <div className="bg-white border border-orange-100 rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group flex flex-col h-full border-b-4 border-b-orange-200 hover:border-b-[#ff6219]">
                  <div className="h-48 bg-linear-to-br from-[#ff6219] to-[#ff7a3d] flex items-center justify-center relative overflow-hidden">
                    <product.icon className="w-20 h-20 text-white/20 absolute -right-4 -bottom-4 rotate-12 group-hover:scale-120 transition-transform duration-500" />
                    <div className="text-center text-white relative z-10">
                      <product.icon size={48} className="mx-auto mb-3" aria-hidden />
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">{product.category}</p>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-[#373e51] mb-3 group-hover:text-[#ff6219] transition-colors">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-8 leading-relaxed">{product.description}</p>

                    <div className="mb-8 mt-auto pt-6 border-t border-orange-50">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Core Features</h4>
                      <ul className="grid grid-cols-1 gap-3">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-[#ff6219] shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between gap-4 pt-4">
                      <span className="text-lg font-black text-[#ff6219] tracking-tight">{product.price}</span>
                      <div className="flex items-center gap-2">
                        <Popover>
                          <PopoverTrigger asChild>
                            <button className="bg-[#ff6219] text-white px-5 py-2.5 rounded-xl hover:bg-[#e55a17] transition-all duration-300 text-sm font-bold shadow-md hover:shadow-orange-500/20 active:scale-95">
                              Inquire
                            </button>
                          </PopoverTrigger>
                          <PopoverContent className="w-80 p-6 rounded-3xl border-orange-100 shadow-2xl">
                            <div className="space-y-5">
                              <div>
                                <h4 className="font-bold text-xl text-[#373e51] mb-1">Quick Inquiry</h4>
                                <p className="text-[13px] text-gray-500">Interested in <span className="font-bold text-[#ff6219]">{product.name}</span>?</p>
                              </div>

                              <div className="space-y-2">
                                <label className="block text-xs font-bold uppercase tracking-widest text-[#373e51]">Full Name</label>
                                <input
                                  type="text"
                                  value={userName}
                                  onChange={(e) => setUserName(e.target.value)}
                                  placeholder="Enter your name"
                                  className="w-full px-4 py-3 border border-orange-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6219] transition-all text-sm"
                                  onKeyPress={(e) => e.key === 'Enter' && handleWhatsAppSend(product.name)}
                                />
                              </div>

                              <button
                                onClick={() => handleWhatsAppSend(product.name)}
                                className="w-full bg-[#25D366] text-white py-3.5 rounded-xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 text-sm"
                              >
                                <FaWhatsapp size={20} />
                                Start WhatsApp Inquiry
                              </button>
                            </div>
                          </PopoverContent>
                        </Popover>

                        <Link
                          href={`/get-quote?type=product&item=${encodeURIComponent(product.name)}`}
                          className="bg-white border border-orange-100 text-[#ff6219] px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-orange-50 transition-all duration-300 flex items-center gap-2 group/btn"
                        >
                          Quote
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-xl p-12 md:p-20 text-center relative overflow-hidden border border-orange-50">
              <div className="absolute top-0 right-0 p-12">
                <Package className="w-32 h-32 text-orange-500/5 rotate-12" />
              </div>

              <h2 className="text-4xl font-bold text-[#373e51] mb-8 relative z-10">Tailored Systems & Supply</h2>
              <p className="text-[17px] text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto relative z-10">
                Need something specific? We source and engineer custom ICT hardware and software packages
                tailored to your organizational scale. From high-availability server clusters to specialized
                security deployments, we deliver the precision you require.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                <a
                  href="/contact"
                  className="bg-linear-to-br from-[#ff6219] to-[#ff7a3d] text-white font-bold py-4 px-12 rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  Request Custom Pricing
                </a>
                <a
                  href="/services"
                  className="bg-white border border-orange-100 text-[#373e51] font-bold py-4 px-12 rounded-2xl hover:bg-orange-50 transition-all duration-300"
                >
                  Explore Managed Services
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}