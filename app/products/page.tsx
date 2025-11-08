'use client';

import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { FaWhatsapp, FaNetworkWired, FaShieldAlt, FaCloud, FaBolt, FaPhone, FaBox } from 'react-icons/fa';
import Link from 'next/link';

const WHATSAPP_NUMBER = '+255657530700'; // Replace with your actual WhatsApp number (with country code)

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
      iconurl: '<a href="https://www.flaticon.com/free-icons/computer" title="computer icons"></a>',
    },
    {
      id: 2,
      category: 'security',
      name: 'CCTV & Surveillance Systems',
      description: 'Professional CCTV installation with NVR (Network Video Recorder) capabilities',
      features: ['4K camera systems', 'Night vision', 'Cloud storage', 'Remote monitoring'],
      price: 'Custom Quote',
      icon: '<a href="https://www.flaticon.com/free-icons/cctv" title="cctv icons">Cctv icons created by Freepik - Flaticon</a>',
    },
    {
      id: 3,
      category: 'security',
      name: 'Access Control Systems',
      description: 'Modern access control with biometric and card-based authentication',
      features: ['Biometric locks', 'Card readers', 'Visitor management', 'Audit logs'],
      price: 'Custom Quote',
      iconurl: '<a href="https://www.flaticon.com/free-icons/access-control" title="access control icons">Access control icons created by Freepik - Flaticon</a>',
    },
    {
      id: 4,
      category: 'cloud',
      name: 'Cloud Migration Services',
      description: 'Seamless migration of your infrastructure to cloud platforms',
      features: ['Assessment & planning', 'Data migration', 'Security setup', 'Training'],
      price: 'Custom Quote',
      iconurl: '<a href="https://www.flaticon.com/free-icons/cloud" title="cloud icons">Cloud icons created by Freepik - Flaticon</a>',
    },
    {
      id: 5,
      category: 'cloud',
      name: 'Server Room Design & Setup',
      description: 'Complete server room infrastructure with cooling and power management',
      features: ['Physical infrastructure', 'Power systems', 'Cooling solutions', 'Virtualization'],
      price: 'Custom Quote',
      iconurl: '<a href="https://www.flaticon.com/free-icons/cloud" title="cloud icons">Cloud icons created by Freepik - Flaticon</a>',
    },
    {
      id: 6,
      category: 'power',
      name: 'UPS & Backup Power Systems',
      description: 'Reliable power backup solutions for continuous operations',
      features: ['Battery UPS', 'Generator integration', 'Power monitoring', 'Automatic failover'],
      price: 'Custom Quote',
      iconurl: <a href="https://www.flaticon.com/free-icons/electricity" title="electricity icons"></a>,
    },
    {
      id: 7,
      category: 'communication',
      name: 'IP Telephony Systems',
      description: 'Modern IP PBX and unified communications solutions',
      features: ['VoIP setup', 'Call routing', 'Video conferencing', 'Mobile integration'],
      price: 'Custom Quote',
      iconurl: '<a href="https://www.flaticon.com/free-icons/communication" title="communication icons">Communication icons created by Freepik - Flaticon</a>',
    },
    {
      id: 8,
      category: 'communication',
      name: 'Business Communication Suite',
      description: 'Integrated communication platform for modern businesses',
      features: ['Video conferencing', 'Instant messaging', 'File sharing', 'Integration APIs'],
      price: 'Custom Quote',
      iconurl: '<a href="https://www.flaticon.com/free-icons/communication" title="communication icons">Communication icons created by Freepik - Flaticon</a>',
    },
  ];

  // Map product categories to react-icons so we show a proper image/icon
  const iconMap: Record<string, any> = {
    networking: FaNetworkWired,
    security: FaShieldAlt,
    cloud: FaCloud,
    power: FaBolt,
    communication: FaPhone,
  };

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'networking', label: 'Networking' },
    { id: 'security', label: 'Security' },
    { id: 'cloud', label: 'Cloud & Servers' },
    { id: 'power', label: 'Power & Backup' },
    { id: 'communication', label: 'Communication' },
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-b from-[#fff9f5] to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-5xl font-bold text-[#373e51] mb-6">Our Products & Solutions</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive ICT solutions designed to meet the diverse needs of modern businesses across East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-[#ff6219] text-white'
                    : 'bg-white text-[#373e51] border border-orange-200 hover:border-[#ff6219] hover:text-[#ff6219]'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white border border-orange-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-40 bg-linear-to-br from-[#ff6219] to-[#ff7a3d] flex items-center justify-center">
                  <div className="text-center text-white">
                      {/* render a mapped react-icon for the product category (fallback to box) */}
                      {(() => {
                        const Icon = iconMap[product.category] || FaBox;
                        return <Icon size={30} className="mx-auto" aria-hidden />;
                      })()}
                      <p className="text-sm font-semibold">{product.category.toUpperCase()}</p>
                    </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#373e51] mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#373e51] mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#ff6219] rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-orange-200">
                    <span className="text-lg font-bold text-[#ff6219]">{product.price}</span>
                    <div className="flex items-center gap-3">
                      <Popover>
                        <PopoverTrigger asChild>
                          <button className="inline-block bg-[#ff6219] text-white px-4 py-2 rounded-lg hover:bg-[#e55a17] transition-colors duration-200 text-sm font-semibold">
                            Inquire
                          </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-72 p-4">
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-[#373e51] mb-1">Product Inquiry</h4>
                              <p className="text-sm text-gray-600">Product: <span className="font-semibold text-[#ff6219]">{product.name}</span></p>
                            </div>
                            
                            <div>
                              <label className="block text-sm font-semibold text-[#373e51] mb-2">Your Name *</label>
                              <input
                                type="text"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                placeholder="Enter your full name"
                                className="w-full px-3 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-200 text-sm"
                                onKeyPress={(e) => e.key === 'Enter' && handleWhatsAppSend(product.name)}
                              />
                            </div>

                            <button
                              onClick={() => handleWhatsAppSend(product.name)}
                              className="w-full bg-linear-to-br from-[#25D366] to-[#20BA5E] text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm"
                            >
                              <span>
                                <FaWhatsapp size={18} />
                              </span>
                              Send via WhatsApp
                            </button>
                          </div>
                        </PopoverContent>
                      </Popover>

                      <Link href={`/get-quote?type=product&item=${encodeURIComponent(product.name)}`} className="inline-block bg-white border border-orange-200 text-[#ff6219] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#fff7f1] transition-colors">Get Quote</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-12 text-center">
            <h2 className="text-4xl font-bold text-[#373e51] mb-6">Custom Solutions</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Don't see exactly what you need? We create custom ICT solutions tailored to your specific business requirements. Our experienced team will work with you to design and implement the perfect solution.
            </p>
            <a
              href="/contact"
              className="inline-block bg-linear-to-br from-[#ff6219] to-[#ff7a3d] text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-all duration-200"
            >
              Request a Custom Solution
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}