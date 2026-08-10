'use client';

import { useState } from 'react';
import { FadeIn } from '@/components/animate-ui/fade-in';
import { motion } from 'motion/react';
import { 
  Camera, 
  KeyRound, 
  Lock, 
  ShieldCheck, 
  Cable, 
  Server, 
  Radio, 
  Network, 
  CheckCircle2, 
  ArrowRight,
  Shield,
  Sparkles,
  Check
} from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'security' | 'networking'>('all');

  const securityServices = [
    {
      title: 'CCTV & Security Cameras',
      desc: 'Clear HD cameras with night vision and 24/7 video recording. Watch live video anytime on your phone.',
      points: [
        'Clear 4K HD night-vision cameras',
        'Live phone viewing app (iOS & Android)',
        '24/7 continuous video recording',
        'Motion detection alert alerts'
      ],
      icon: Camera,
      badge: 'Security'
    },
    {
      title: 'Fingerprint & Door Locks',
      desc: 'Smart door locks using fingerprints, face recognition, and keycards for offices and gate barriers.',
      points: [
        'Fingerprint & face recognition locks',
        'Staff attendance tracking software',
        'Automated main gate boom barriers',
        'Keycard & PIN code door entry'
      ],
      icon: KeyRound,
      badge: 'Security'
    },
    {
      title: 'Motion Alarms & Sirens',
      desc: 'Loud emergency sirens and motion sensors that protect your building and send instant SMS alerts.',
      points: [
        'Infrared motion & door sensors',
        'Loud emergency alarm sirens',
        'Instant SMS & call alerts to your phone',
        'Battery backup for power cuts'
      ],
      icon: Lock,
      badge: 'Security'
    },
    {
      title: 'Firewall & Internet Defense',
      desc: 'Protect your office computers and company data from hackers, viruses, and online threats.',
      points: [
        'Secure firewall installation',
        'Private encrypted VPN for remote staff',
        'Block harmful websites & viruses',
        'Regular security checkups'
      ],
      icon: ShieldCheck,
      badge: 'Security'
    }
  ];

  const networkingServices = [
    {
      title: 'Network Cables & Fiber Wiring',
      desc: 'Clean, neat CAT6 internet cable wiring and fiber optic splicing for smooth office connections.',
      points: [
        'Clean CAT6 & CAT6A cable wiring',
        'Fast fiber optic cable splicing',
        'Neat server rack cable organization',
        'Certified speed & signal testing'
      ],
      icon: Cable,
      badge: 'Networking'
    },
    {
      title: 'Routers & Core Switches',
      desc: 'High-speed internet routers and managed network switches to keep all office devices connected.',
      points: [
        'High-speed Gigabit routers & switches',
        'Separate guest & office networks',
        'Dual internet lines with auto-backup',
        'Fast file sharing between computers'
      ],
      icon: Server,
      badge: 'Networking'
    },
    {
      title: 'Wi-Fi Networks & Building Links',
      desc: 'Strong Wi-Fi coverage across your entire building with no dead spots, plus wireless links to other buildings.',
      points: [
        'Strong Wi-Fi 6 coverage (No dead zones)',
        'Building-to-building wireless links',
        'Custom Wi-Fi login page for visitors',
        'Fast indoor & outdoor wireless access'
      ],
      icon: Radio,
      badge: 'Networking'
    },
    {
      title: 'Server Room Cleanup & Support',
      desc: 'Fixing messy cables in server rooms, installing UPS power backups, and quick local technical support.',
      points: [
        'Messy cable cleanup & rack setup',
        'UPS battery backup for power cuts',
        'Same-day technician help in Arusha',
        'Regular maintenance & speed checks'
      ],
      icon: Network,
      badge: 'Networking'
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafbfc] overflow-hidden">
      {/* Background Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(#ff621906_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      {/* Header Section */}
      <section className="relative pt-32 pb-16 border-b border-gray-100 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <FadeIn direction="up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-orange-100 text-[#ff6219] mb-4">
              <Sparkles className="w-4 h-4 text-[#ff6219]" />
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#373e51] mb-5 tracking-tight">
              Security Systems & <span className="text-[#ff6219]">Networking Services</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto font-light">
              We install reliable security cameras, fingerprint door locks, fiber cables, and fast Wi-Fi networks for homes and businesses in Arusha.
            </p>
          </FadeIn>

          {/* Simple Tabs Filter */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-[#ff6219] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-[#ff6219]'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'security'
                  ? 'bg-[#ff6219] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-[#ff6219]'
              }`}
            >
              <Shield className="w-4 h-4" />
              Security Systems
            </button>
            <button
              onClick={() => setActiveTab('networking')}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'networking'
                  ? 'bg-[#373e51] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-[#373e51]'
              }`}
            >
              <Network className="w-4 h-4" />
              Networking & Wi-Fi
            </button>
          </div>
        </div>
      </section>

      {/* Main Services Grid Section */}
      <section className="py-16">
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
                      whileHover={{ y: -4 }}
                      className="bg-white border border-gray-200/80 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:border-[#ff6219] transition-all duration-300 flex flex-col justify-between h-full group"
                    >
                      <div>
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
                      whileHover={{ y: -4 }}
                      className="bg-white border border-gray-200/80 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:border-[#373e51] transition-all duration-300 flex flex-col justify-between h-full group"
                    >
                      <div>
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

      {/* CTA Section in Simple English */}
      <section className="py-16 bg-[#373e51] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Free On-Site Inspection in Arusha?</h2>
            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl mx-auto font-light">
              Our technicians will come to your location, inspect your building, and give you a clear plan and exact price estimate for free.
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