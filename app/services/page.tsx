'use client';

import { useState } from 'react';
import { FadeIn } from '@/components/animate-ui/fade-in';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { 
  Camera, 
  KeyRound, 
  Lock, 
  Cable, 
  Server, 
  Radio, 
  Network, 
  ArrowRight,
  Shield,
  Sparkles,
  Check,
  Package,
  Zap,
  Phone,
  CheckCircle2,
  LayoutGrid,
} from 'lucide-react';
import Link from 'next/link';

const WHATSAPP_NUMBER = '+255758100137';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'security' | 'networking'>('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [userName, setUserName] = useState('');

  const securityServices = [
    {
      title: 'CCTV & Surveillance',
      desc: 'Professional HD camera systems with remote live viewing — protecting offices, homes, lodges, and camps across Tanzania.',
      points: [
        'HD & 4K day/night vision cameras',
        'NVR/DVR recording systems',
        'Remote live view on phone (iOS & Android)',
        'Indoor, outdoor & PTZ camera options'
      ],
      icon: Camera,
      badge: 'Security'
    },
    {
      title: 'Door Locks & Access Control',
      desc: 'Smart entry systems using fingerprints, face recognition, keycards, and PIN codes — ideal for offices, gates, and restricted rooms.',
      points: [
        'Fingerprint & face recognition locks',
        'Keycard & PIN code entry',
        'Staff attendance tracking software',
        'Boom barriers & automated gate systems'
      ],
      icon: KeyRound,
      badge: 'Security'
    },
    {
      title: 'Electric Fence Systems',
      desc: 'High-voltage perimeter electric fencing for homes, lodges, and commercial properties — the strongest physical deterrent.',
      points: [
        'Energizer & energized fence installation',
        'Alarm integration on breach detection',
        'Indoor & outdoor control panels',
        'Compliant with Tanzania safety standards'
      ],
      icon: Zap,
      badge: 'Security'
    },
    {
      title: 'Motion Alarms & Sirens',
      desc: 'Loud emergency sirens and motion sensors that instantly detect intruders and send SMS alerts to your phone.',
      points: [
        'Infrared motion & magnetic door sensors',
        'Loud 120dB emergency alarm sirens',
        'Instant SMS & call alerts',
        'Battery backup for power cuts'
      ],
      icon: Lock,
      badge: 'Security'
    }
  ];

  const networkingServices = [
    {
      title: 'LAN Structured Cabling',
      desc: 'End-to-end LAN structured cabling design, supply, and installation — built for small offices, homes, lodges, and camps across Tanzania.',
      points: [
        'CAT6 & CAT6A structured cabling',
        'Network design & topology planning',
        'Fiber optic splicing & termination',
        'Neat server rack & patch panel setup'
      ],
      icon: Cable,
      badge: 'Networking'
    },
    {
      title: 'WiFi System Design & Installation',
      desc: 'We design, install, configure, and manage WiFi networks for total coverage with no dead zones — ideal for lodges, camps, homes, and small offices.',
      points: [
        'Site survey & signal coverage planning',
        'Access point placement & configuration',
        'Guest & staff network separation',
        'Ongoing monitoring & management'
      ],
      icon: Radio,
      badge: 'Networking'
    },
    {
      title: 'Wireless & Fiber Configuration',
      desc: 'Full configuration of both wireless and fiber connections to ensure the fastest, most reliable connectivity for your environment.',
      points: [
        'Router, switch & firewall configuration',
        'Fiber-to-WiFi integration & handover',
        'Dual-link failover & load balancing',
        'VLAN & bandwidth control setup'
      ],
      icon: Network,
      badge: 'Networking'
    },
    {
      title: 'Managed Network Support',
      desc: 'Ongoing management, maintenance, and technical support for your network — so your connection always stays fast and reliable.',
      points: [
        'Remote & on-site troubleshooting',
        'Speed testing & performance tuning',
        'UPS & power backup for server rooms',
        'Same-day technician support in Arusha'
      ],
      icon: Server,
      badge: 'Networking'
    }
  ];

  const products = [
    {
      id: 1,
      category: 'networking',
      name: 'Enterprise Network Solutions',
      description: 'Complete structured cabling and network design for organizations of all sizes',
      features: ['Fiber optic cabling', 'Network switching', 'WiFi optimization', 'Load balancing'],
      price: 'Custom Quote',
      icon: Network,
      image: '/images/products/network_solutions_1787058632487.jpg'
    },
    {
      id: 2,
      category: 'security',
      name: 'CCTV & Surveillance Systems',
      description: 'Professional CCTV installation with NVR capabilities and remote cloud access',
      features: ['4K camera systems', 'Night vision', 'Cloud storage', 'Remote monitoring'],
      price: 'Custom Quote',
      icon: Shield,
      image: '/images/products/cctv_camera_1787058644495.jpg'
    },
    {
      id: 3,
      category: 'security',
      name: 'Access Control Systems',
      description: 'Modern access control with biometric and card-based authentication for entry points',
      features: ['Biometric locks', 'Card readers', 'Visitor management', 'Audit logs'],
      price: 'Custom Quote',
      icon: Shield,
      image: '/images/products/access_control_1787058655798.jpg'
    },
    {
      id: 4,
      category: 'cloud',
      name: 'Server Room Design & Setup',
      description: 'Complete server room infrastructure with cooling and power management',
      features: ['Physical infrastructure', 'Power systems', 'Cooling solutions', 'Virtualization'],
      price: 'Custom Quote',
      icon: Server,
      image: '/images/products/server_room_1787058677763.jpg'
    },
    {
      id: 5,
      category: 'power',
      name: 'UPS & Backup Power Systems',
      description: 'Reliable power backup solutions for continuous operations during outages',
      features: ['Battery UPS', 'Generator integration', 'Power monitoring', 'Automatic failover'],
      price: 'Custom Quote',
      icon: Zap,
      image: '/images/products/ups_power_1787058689233.jpg'
    },
    {
      id: 6,
      category: 'communication',
      name: 'IP Telephony Systems',
      description: 'Modern IP PBX and unified communications solutions for clear collaboration',
      features: ['VoIP setup', 'Call routing', 'Video conferencing', 'Mobile integration'],
      price: 'Custom Quote',
      icon: Phone,
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 7,
      category: 'communication',
      name: 'Business Communication Suite',
      description: 'Integrated communication platform for distributed and modern teams',
      features: ['Video conferencing', 'Instant messaging', 'File sharing', 'Integration APIs'],
      price: 'Custom Quote',
      icon: Phone,
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600'
    },
  ];

  const productCategories = [
    { id: 'all', label: 'All Products', icon: LayoutGrid },
    { id: 'networking', label: 'Networking', icon: Network },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'cloud', label: 'Cloud & Servers', icon: Server },
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
    const message = `Hi Arusha Networking Group, I'm ${userName.trim()} and I'm interested in inquiring about ${productName}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setUserName('');
  };

  return (
    <div className="min-h-screen bg-[#fffdfb] overflow-hidden relative">
      {/* Background Glows */}
      <div className="fixed inset-0 bg-[radial-gradient(#ff621908_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] bg-[#ff6219]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-[#373e51]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* ── HEADER ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 border-b border-orange-50/50 bg-white/40 backdrop-blur-3xl z-10">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <FadeIn direction="up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-orange-100 text-[#ff6219] mb-4">
              <Sparkles className="w-4 h-4 text-[#ff6219]" />
              Our Services & Products
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#373e51] mb-5 tracking-tight">
              Security, Networking &{' '}
              <span className="text-[#ff6219]">Enterprise Hardware</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto font-light">
              We install security cameras, fingerprint locks, fiber cables, and fast Wi-Fi — and supply the enterprise-grade hardware to power your entire organization.
            </p>
          </FadeIn>

          {/* Jump links */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a href="#services" className="px-6 py-3 rounded-full text-sm font-bold bg-[#ff6219] text-white shadow-md transition-all hover:bg-[#e55a17]">
              Our Services
            </a>
            <a href="#products" className="px-6 py-3 rounded-full text-sm font-bold bg-[#373e51] text-white shadow-md transition-all hover:bg-black">
              Our Products
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICES SECTION ───────────────────────────────── */}
      <section id="services" className="pt-20 pb-4">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn direction="up">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-10 rounded-full bg-[#ff6219]" />
              <h2 className="text-3xl font-extrabold text-[#373e51]">Professional Services</h2>
            </div>
            <p className="text-gray-500 mb-8 ml-5">Expert installation and technical services by our Arusha team</p>
          </FadeIn>

          {/* Services Filter Tabs */}
          <div className="flex flex-wrap justify-start gap-3 mb-10 ml-5">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'all' ? 'bg-[#ff6219] text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-[#ff6219]'}`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'security' ? 'bg-[#ff6219] text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-[#ff6219]'}`}
            >
              <Shield className="w-4 h-4" />
              Security Systems
            </button>
            <button
              onClick={() => setActiveTab('networking')}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'networking' ? 'bg-[#373e51] text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-[#373e51]'}`}
            >
              <Network className="w-4 h-4" />
              Networking & Wi-Fi
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-6xl">

          {/* Security Systems Group */}
          {(activeTab === 'all' || activeTab === 'security') && (
            <div className="mb-16">
              <FadeIn direction="up">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#ff6219] flex items-center justify-center font-bold">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#373e51]">Security & Protection Systems</h2>
                    <p className="text-sm text-gray-500">Protect your building, employees, and valuable items</p>
                  </div>
                </div>
              </FadeIn>

              <div className="grid md:grid-cols-2 gap-6">
                {securityServices.map((item, idx) => (
                  <FadeIn key={idx} delay={idx * 0.08} direction="up">
                    <motion.div 
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="bg-white/60 backdrop-blur-xl border border-orange-100/50 rounded-3xl p-7 shadow-xl hover:shadow-orange-500/20 hover:border-[#ff6219] transition-all duration-500 flex flex-col justify-between h-full group relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/30 rounded-full blur-3xl group-hover:bg-[#ff6219]/20 transition-all duration-500" />
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-5">
                          <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#ff6219] flex items-center justify-center group-hover:bg-[#ff6219] group-hover:text-white transition-colors">
                            <item.icon className="w-6 h-6" />
                          </div>
                          <span className="text-xs font-bold bg-orange-100/80 text-[#ff6219] px-3 py-1 rounded-full uppercase tracking-wider">
                            {item.badge}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-[#373e51] mb-2 group-hover:text-[#ff6219] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">
                          {item.desc}
                        </p>

                        <div className="space-y-2.5 pt-4 border-t border-gray-100 mb-6">
                          {item.points.map((point, pIdx) => (
                            <div key={pIdx} className="flex items-center gap-2.5 text-xs text-gray-700 font-medium">
                              <Check className="w-4 h-4 text-[#ff6219] shrink-0" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-100">
                        <Link
                          href={`/get-quote?item=${encodeURIComponent(item.title)}&type=service`}
                          className="inline-flex items-center gap-2 text-sm font-bold text-[#ff6219] hover:text-[#e55a17] transition-colors"
                        >
                          Request Price & Quote
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.div>
                  </FadeIn>
                ))}
              </div>
            </div>
          )}

          {/* Networking Group */}
          {(activeTab === 'all' || activeTab === 'networking') && (
            <div>
              <FadeIn direction="up">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#373e51] flex items-center justify-center font-bold">
                    <Network className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#373e51]">Networking & Wi-Fi Services</h2>
                    <p className="text-sm text-gray-500">Fast, strong, and reliable internet connections</p>
                  </div>
                </div>
              </FadeIn>

              <div className="grid md:grid-cols-2 gap-6">
                {networkingServices.map((item, idx) => (
                  <FadeIn key={idx} delay={idx * 0.08} direction="up">
                    <motion.div 
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="bg-white/60 backdrop-blur-xl border border-orange-100/50 rounded-3xl p-7 shadow-xl hover:shadow-slate-500/20 hover:border-[#373e51] transition-all duration-500 flex flex-col justify-between h-full group relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100/30 rounded-full blur-3xl group-hover:bg-[#373e51]/10 transition-all duration-500" />
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-5">
                          <div className="w-12 h-12 rounded-2xl bg-gray-100 text-[#373e51] flex items-center justify-center group-hover:bg-[#373e51] group-hover:text-white transition-colors">
                            <item.icon className="w-6 h-6" />
                          </div>
                          <span className="text-xs font-bold bg-slate-100 text-[#373e51] px-3 py-1 rounded-full uppercase tracking-wider">
                            {item.badge}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-[#373e51] mb-2 group-hover:text-[#ff6219] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">
                          {item.desc}
                        </p>

                        <div className="space-y-2.5 pt-4 border-t border-gray-100 mb-6">
                          {item.points.map((point, pIdx) => (
                            <div key={pIdx} className="flex items-center gap-2.5 text-xs text-gray-700 font-medium">
                              <Check className="w-4 h-4 text-[#ff6219] shrink-0" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-100">
                        <Link
                          href={`/get-quote?item=${encodeURIComponent(item.title)}&type=service`}
                          className="inline-flex items-center gap-2 text-sm font-bold text-[#ff6219] hover:text-[#e55a17] transition-colors"
                        >
                          Request Price & Quote
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.div>
                  </FadeIn>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── PRODUCTS SECTION ───────────────────────────────── */}
      <section id="products" className="py-20 bg-white/50 border-t border-orange-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn direction="up">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-10 rounded-full bg-[#373e51]" />
              <h2 className="text-3xl font-extrabold text-[#373e51]">Enterprise Products</h2>
            </div>
            <p className="text-gray-500 mb-8 ml-5">Hardware and systems we supply, install, and configure for your business</p>
          </FadeIn>

          {/* Products Filter */}
          <div className="flex flex-wrap gap-3 mb-10 ml-5">
            {productCategories.map((category, idx) => (
              <FadeIn key={category.id} delay={idx * 0.04} direction="up">
                <button
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold transition-all duration-300 text-sm ${selectedCategory === category.id
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

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <FadeIn key={product.id} delay={index * 0.08} direction="up">
                <div className="bg-white/80 backdrop-blur-xl border border-orange-100/50 rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-orange-500/20 transition-all duration-500 hover:-translate-y-3 group flex flex-col h-full">
                  <div className="h-48 relative overflow-hidden bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                      <div className="flex items-center gap-2 text-white">
                        <product.icon size={16} aria-hidden />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">{product.category}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-[#373e51] mb-3 group-hover:text-[#ff6219] transition-colors">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">{product.description}</p>

                    <div className="mb-6 mt-auto pt-6 border-t border-orange-50">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Core Features</h4>
                      <ul className="grid grid-cols-1 gap-2.5">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-[#ff6219] shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between gap-4 pt-4">
                      <span className="text-base font-black text-[#ff6219] tracking-tight">{product.price}</span>
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
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
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

      {/* ── CTA SECTION ─────────────────────────────────────── */}
      <section className="py-16 bg-[#373e51] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ff621910_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <FadeIn direction="up">
            <div className="flex justify-center mb-6">
              <Package className="w-14 h-14 text-[#ff6219] opacity-80" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Free On-Site Inspection in Arusha?</h2>
            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl mx-auto font-light">
              Our technicians will visit your location, assess your needs, and give you a clear plan with exact pricing — completely free of charge.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#ff6219] text-white font-bold py-4 px-8 rounded-full hover:bg-[#ff7a3d] shadow-lg transition-all"
              >
                Contact Arusha Team
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/get-quote"
                className="inline-flex items-center gap-2 bg-white/10 text-white font-bold py-4 px-8 rounded-full border border-white/20 hover:bg-white/20 transition-all"
              >
                Request Exact Price Quote
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}