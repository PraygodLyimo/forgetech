'use client';

import { useState, useEffect } from 'react';
import { FadeIn } from '@/components/animate-ui/fade-in';
import { motion } from 'motion/react';
import Image from 'next/image';
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
  CheckCircle2,
  LayoutGrid,
} from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/255758100137';

function AnimatedCardSlider({ images, alt }: { images: string[]; alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="h-40 relative overflow-hidden bg-gray-100 group/slider">
      {images.map((img, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: idx === currentIndex ? 1 : 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={img}
            alt={`${alt} - photo ${idx + 1}`}
            fill
            className="object-cover group-hover/slider:scale-105 transition-transform duration-700"
          />
        </motion.div>
      ))}

      {/* Category Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

      {/* Animated Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-2.5 left-0 right-0 z-10 flex justify-center gap-1.5 pointer-events-none">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-4 bg-[#ff6219]' : 'w-1.5 bg-white/60'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const securityServices = [
    {
      title: 'CCTV & Surveillance Systems',
      desc: 'Professional HD & 4K camera systems with remote live viewing — protecting offices, homes, lodges, and commercial sites across Tanzania.',
      points: [
        'HD & 4K day/night vision IP cameras',
        'NVR/DVR recording & cloud backup',
        'Remote live view on phone (iOS & Android)',
        'Indoor, outdoor & PTZ camera options'
      ],
      icon: Camera,
      badge: 'Security'
    },
    {
      title: 'Electric Fence Systems',
      desc: 'High-voltage perimeter electric fencing for homes, lodges, and commercial properties — the ultimate physical deterrent.',
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
      title: 'Access Control & Biometrics',
      desc: 'Smart entry systems using fingerprints, face recognition, keycards, and PIN codes for restricted areas and staff management.',
      points: [
        'Fingerprint & face recognition locks',
        'Keycard & PIN code entry systems',
        'Time & staff attendance tracking',
        'Remote door control & audit logs'
      ],
      icon: KeyRound,
      badge: 'Security'
    },
    {
      title: 'Gate Motors & Automated Barriers',
      desc: 'Heavy-duty automatic sliding gate motors, swing gate openers, and boom barriers for smooth and secure entry.',
      points: [
        'Sliding & swing gate motor installation',
        'Remote control & keypad entry integration',
        'Boom barriers for commercial parking & gates',
        'Battery backup for uninterrupted power'
      ],
      icon: Lock,
      badge: 'Security'
    }
  ];

  const networkingServices = [
    {
      title: 'UTP & Structured Cabling',
      desc: 'End-to-end UTP (CAT6 & CAT6A) and fiber optic cabling design, supply, and installation — built for offices, lodges, and facilities.',
      points: [
        'UTP, CAT6 & CAT6A structured cabling',
        'Network design & topology planning',
        'Fiber optic splicing & termination',
        'Neat server rack & patch panel setup'
      ],
      icon: Cable,
      badge: 'Networking'
    },
    {
      title: 'Wi-Fi System Design & Installation',
      desc: 'We design, install, configure, and manage Wi-Fi networks for total coverage with zero dead zones for offices, hotels, and lodges.',
      points: [
        'Site survey & signal coverage planning',
        'Access point placement & configuration',
        'Guest & staff network separation',
        'Ongoing network monitoring & management'
      ],
      icon: Radio,
      badge: 'Networking'
    },
    {
      title: 'Wireless PtP & Fiber Integration',
      desc: 'Complete configuration of long-distance wireless Point-to-Point links, switches, and routers for seamless communication.',
      points: [
        'Router, switch & firewall configuration',
        'Long-distance wireless PtP building links',
        'Dual-link failover & load balancing',
        'VLAN & bandwidth management'
      ],
      icon: Network,
      badge: 'Networking'
    },
    {
      title: 'Managed Network Infrastructure',
      desc: 'Ongoing management, maintenance, and technical support for your network infrastructure — keeping your systems running reliably.',
      points: [
        'Remote & on-site troubleshooting',
        'Network performance tuning & monitoring',
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
      description: 'Structured UTP & Fiber cabling and network design for organizations of all sizes',
      features: ['UTP CAT6/CAT6A & Fiber cabling', 'Network switching & Wi-Fi optimization'],
      icon: Network,
      images: [
        '/images/products/network_solutions_1787058632487.jpg',
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600',
      ]
    },
    {
      id: 2,
      category: 'security',
      name: 'CCTV & Surveillance Systems',
      description: 'CCTV installation with NVR capabilities and remote mobile access',
      features: ['4K HD camera systems', 'Night vision & NVR recording'],
      icon: Shield,
      images: [
        '/images/products/cctv_camera_1787058644495.jpg',
        'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=600',
      ]
    },
    {
      id: 3,
      category: 'security',
      name: 'Access Control Systems',
      description: 'Modern access control with biometric and card authentication',
      features: ['Biometric locks & face recognition', 'Card readers & attendance software'],
      icon: Shield,
      images: [
        '/images/products/access_control_1787058655798.jpg',
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=600',
      ]
    },
    {
      id: 4,
      category: 'cloud',
      name: 'Server Room Setup',
      description: 'Complete server room infrastructure with cooling & power management',
      features: ['Physical rack infrastructure', 'Power & cooling management'],
      icon: Server,
      images: [
        '/images/products/server_room_1787058677763.jpg',
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=600',
      ]
    },
    {
      id: 5,
      category: 'power',
      name: 'UPS & Backup Power',
      description: 'Reliable power backup solutions for continuous operations',
      features: ['Battery UPS systems', 'Automatic power failover'],
      icon: Zap,
      images: [
        '/images/products/ups_power_1787058689233.jpg',
        'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600',
      ]
    },
    {
      id: 6,
      category: 'security',
      name: 'Gate Motors & Electric Fences',
      description: 'Automated sliding & swing gate motors and high-voltage electric fencing',
      features: ['Automated gate motors & barriers', 'Perimeter electric fencing & alarms'],
      icon: Lock,
      images: [
        'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600',
      ]
    },
  ];

  const productCategories = [
    { id: 'all', label: 'All Products', icon: LayoutGrid },
    { id: 'networking', label: 'Networking', icon: Network },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'cloud', label: 'Cloud & Servers', icon: Server },
    { id: 'power', label: 'Power & Backup', icon: Zap },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

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
              Security Systems &{' '}
              <span className="text-[#ff6219]">Networking & Wi-Fi</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto font-light">
              We install security cameras, fingerprint locks, UTP cables, fiber optics, and fast Wi-Fi — and supply enterprise-grade hardware to power your entire organization.
            </p>
          </FadeIn>

          <div className="flex justify-center mt-8">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full text-base font-bold bg-[#ff6219] text-white shadow-lg transition-all hover:bg-[#e55a17] inline-flex items-center gap-2"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICES SECTION ───────────────────────────────── */}
      <section id="services" className="pt-16 pb-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn direction="up">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-10 rounded-full bg-[#ff6219]" />
              <h2 className="text-3xl font-extrabold text-[#373e51]">All Services</h2>
            </div>
            <p className="text-gray-500 mb-8 ml-5">Expert installation and technical services across Security Systems and Networking & Wi-Fi</p>
          </FadeIn>
        </div>

        <div className="container mx-auto px-4 max-w-6xl">
          {/* Security Systems Group */}
          <div className="mb-16">
            <FadeIn direction="up">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#ff6219] flex items-center justify-center font-bold">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#373e51]">Security Systems</h2>
                  <p className="text-sm text-gray-500">Protect your building, employees, and valuable items</p>
                </div>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6">
              {securityServices.map((item, idx) => (
                <FadeIn key={idx} delay={idx * 0.08} direction="up">
                  <motion.div 
                    whileHover={{ y: -6 }}
                    className="bg-white/70 backdrop-blur-xl border border-orange-100/50 rounded-3xl p-6 shadow-lg hover:shadow-orange-500/10 hover:border-[#ff6219] transition-all duration-300 flex flex-col justify-between h-full group relative overflow-hidden"
                  >
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ff6219] flex items-center justify-center group-hover:bg-[#ff6219] group-hover:text-white transition-colors">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold bg-orange-100/80 text-[#ff6219] px-3 py-1 rounded-full uppercase tracking-wider">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-[#373e51] mb-2 group-hover:text-[#ff6219] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 font-light">
                        {item.desc}
                      </p>

                      <div className="space-y-2 pt-3 border-t border-gray-100 mb-4">
                        {item.points.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                            <Check className="w-3.5 h-3.5 text-[#ff6219] shrink-0" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-gray-100">
                      <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#ff6219] hover:text-[#e55a17] transition-colors"
                      >
                        Contact Us
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Networking Group */}
          <div>
            <FadeIn direction="up">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#373e51] flex items-center justify-center font-bold">
                  <Network className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#373e51]">Networking & Wi-Fi</h2>
                  <p className="text-sm text-gray-500">Fast, strong, and reliable network connections</p>
                </div>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6">
              {networkingServices.map((item, idx) => (
                <FadeIn key={idx} delay={idx * 0.08} direction="up">
                  <motion.div 
                    whileHover={{ y: -6 }}
                    className="bg-white/70 backdrop-blur-xl border border-orange-100/50 rounded-3xl p-6 shadow-lg hover:shadow-slate-500/10 hover:border-[#373e51] transition-all duration-300 flex flex-col justify-between h-full group relative overflow-hidden"
                  >
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-gray-100 text-[#373e51] flex items-center justify-center group-hover:bg-[#373e51] group-hover:text-white transition-colors">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold bg-slate-100 text-[#373e51] px-3 py-1 rounded-full uppercase tracking-wider">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-[#373e51] mb-2 group-hover:text-[#ff6219] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 font-light">
                        {item.desc}
                      </p>

                      <div className="space-y-2 pt-3 border-t border-gray-100 mb-4">
                        {item.points.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                            <Check className="w-3.5 h-3.5 text-[#ff6219] shrink-0" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-gray-100">
                      <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#ff6219] hover:text-[#e55a17] transition-colors"
                      >
                        Contact Us
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS SECTION ───────────────────────────────── */}
      <section id="products" className="py-16 bg-white/50 border-t border-orange-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn direction="up">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-10 rounded-full bg-[#373e51]" />
              <h2 className="text-3xl font-extrabold text-[#373e51]">Products & Packages</h2>
            </div>
            <p className="text-gray-500 mb-8 ml-5">Hardware and infrastructure systems we supply, install, and configure</p>
          </FadeIn>

          {/* Products Category Filter */}
          <div className="flex flex-wrap gap-2.5 mb-8 ml-5">
            {productCategories.map((category, idx) => (
              <FadeIn key={category.id} delay={idx * 0.04} direction="up">
                <button
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold transition-all duration-300 text-xs ${selectedCategory === category.id
                    ? 'bg-[#ff6219] text-white shadow-md'
                    : 'bg-white text-[#373e51] border border-orange-100 hover:border-[#ff6219] hover:text-[#ff6219]'
                  }`}
                >
                  <category.icon className="w-3.5 h-3.5" />
                  {category.label}
                </button>
              </FadeIn>
            ))}
          </div>

          {/* Package Cards Grid with Animated Multiple Image Scrolling & No Contact Us Button */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <FadeIn key={product.id} delay={index * 0.06} direction="up">
                <div className="bg-white border border-orange-100/60 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group h-full">
                  
                  {/* Animated Multiple Picture Carousel Slider */}
                  <AnimatedCardSlider images={product.images} alt={product.name} />

                  <div className="p-5 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-[#ff6219] font-bold uppercase tracking-wider mb-1.5">
                        <product.icon size={13} aria-hidden />
                        <span>{product.category}</span>
                      </div>

                      <h3 className="text-base font-bold text-[#373e51] mb-1.5 group-hover:text-[#ff6219] transition-colors">{product.name}</h3>
                      <p className="text-gray-600 text-xs mb-3 leading-relaxed">{product.description}</p>

                      <div className="space-y-1.5 pt-2 border-t border-orange-50">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="text-xs text-gray-600 flex items-center gap-2 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6219] shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
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
              <Package className="w-12 h-12 text-[#ff6219] opacity-80" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Free On-Site Inspection in Arusha?</h2>
            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl mx-auto font-light">
              Our technicians will visit your location, assess your needs, and give you a clear plan — completely free of charge.
            </p>
            <div className="flex justify-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#ff6219] text-white font-bold py-4 px-8 rounded-full hover:bg-[#ff7a3d] shadow-lg transition-all"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}