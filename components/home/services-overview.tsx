'use client';

import { FadeIn } from '@/components/animate-ui/fade-in';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Network, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Award, 
  Zap, 
  FileCheck2 
} from 'lucide-react';
import Link from 'next/link';

export function ServicesOverview() {
  return (
    <section className="py-24 bg-linear-to-b from-[#fff9f5] via-white to-[#fff9f5] relative overflow-hidden">
      {/* Animated Background Decorative Lighting */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-[#ff6219]/20 rounded-full blur-[140px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-10 -right-32 w-96 h-96 bg-[#373e51]/20 rounded-full blur-[140px] pointer-events-none" 
      />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Main Header in Simple English with Animated Sparkle */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <FadeIn direction="up">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider bg-orange-100/80 text-[#ff6219] border border-orange-200 mb-6 shadow-sm cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#ff6219] animate-spin" style={{ animationDuration: '4s' }} />
              Free On-Site Survey & Quick Quote
            </motion.span>

            <h2 className="text-4xl md:text-6xl font-bold text-[#373e51] mb-6 leading-tight tracking-tight">
              Protect Your Office & Get <br />
              <span className="text-[#ff6219]">Super-Fast Wi-Fi & Security</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
              We install security cameras, fingerprint door locks, alarms, fiber cables, and Wi-Fi networks in Arusha with quick local service and 1-year warranty.
            </p>
          </FadeIn>
        </div>

        {/* Animated Value Guarantees Banner Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16">
          {[
            { title: 'Free Site Visit', desc: 'Free inspection in Arusha', icon: FileCheck2 },
            { title: 'Same-Day Support', desc: 'Fast local engineers', icon: Clock },
            { title: '1-Year Warranty', desc: 'Guaranteed equipment', icon: Award },
            { title: 'Full Installation', desc: 'From wiring to mobile app', icon: Zap },
          ].map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.08} direction="up">
              <motion.div 
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-orange-100 shadow-md hover:shadow-xl hover:border-[#ff6219] transition-all duration-300 flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ff6219] flex items-center justify-center shrink-0 group-hover:bg-[#ff6219] group-hover:text-white transition-colors">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#373e51]">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Feature Spotlight 1: Security Systems */}
        <div className="max-w-6xl mx-auto mb-12">
          <FadeIn direction="up">
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-linear-to-br from-[#373e51] via-[#2d3343] to-[#1e222d] text-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden border border-white/10 group"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff6219]/15 rounded-full blur-[120px] pointer-events-none group-hover:bg-[#ff6219]/30 transition-all duration-700" />
              <ShieldCheck className="absolute -right-12 -bottom-12 w-80 h-80 text-white/5 pointer-events-none group-hover:scale-110 transition-transform duration-700" />

              <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
                <div className="md:col-span-8 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-[#ff6219] text-white font-bold text-xs px-3.5 py-1.5 rounded-full tracking-wider uppercase shadow-lg shadow-orange-500/30">
                      Security Spotlight
                    </span>
                    <span className="bg-white/10 text-gray-300 text-xs px-3.5 py-1.5 rounded-full font-medium border border-white/15">
                      Cameras & Door Locks
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                    Smart HD Cameras & <br />
                    <span className="text-[#ff6219]">Fingerprint Door Locks</span>
                  </h3>

                  <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl font-light">
                    Keep your business safe with clear HD cameras, fingerprint door locks, and loud alarm sirens. Watch live video anytime on your mobile phone from anywhere.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      'Clear Night-Vision HD Cameras',
                      'Fingerprint & Face Door Locks',
                      'Loud Motion Sensor Alarms',
                      'Instant Phone & SMS Alerts'
                    ].map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-sm text-gray-200">
                        <CheckCircle2 className="w-4 h-4 text-[#ff6219] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        href="/get-quote?item=Smart+Security+System+Survey&type=service"
                        className="inline-flex items-center gap-3 bg-[#ff6219] hover:bg-[#e55a17] text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                      >
                        Book Free On-Site Visit
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </motion.div>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white font-semibold underline underline-offset-4 decoration-[#ff6219]"
                    >
                      View All Security Options
                    </Link>
                  </div>
                </div>

                <div className="md:col-span-4 flex flex-col items-center justify-center">
                  <motion.div 
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-white/5 backdrop-blur-xl border border-white/15 rounded-3xl p-6 text-center w-full space-y-4 shadow-inner"
                  >
                    <div className="w-16 h-16 bg-[#ff6219]/20 text-[#ff6219] rounded-2xl flex items-center justify-center mx-auto shadow-md">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Full Security Control</h4>
                    <p className="text-xs text-gray-400">Watch live footage and control doors directly from your phone.</p>
                    <div className="pt-2 border-t border-white/10 flex justify-around text-center text-xs">
                      <div>
                        <div className="font-bold text-lg text-[#ff6219]">100%</div>
                        <div className="text-gray-400">Clear Video</div>
                      </div>
                      <div>
                        <div className="font-bold text-lg text-[#ff6219]">24/7</div>
                        <div className="text-gray-400">Recording</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>

        {/* Feature Spotlight 2: Networking */}
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="up">
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-linear-to-br from-orange-50/70 via-white to-orange-50/40 border border-orange-200/80 rounded-[2.5rem] p-8 md:p-14 shadow-xl relative overflow-hidden group"
            >
              {/* Background Glow */}
              <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#ff6219]/5 rounded-full blur-[100px] pointer-events-none" />
              <Network className="absolute -left-12 -bottom-12 w-80 h-80 text-[#ff6219]/5 pointer-events-none group-hover:scale-110 transition-transform duration-700" />

              <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
                <div className="md:col-span-8 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-[#373e51] text-white font-bold text-xs px-3.5 py-1.5 rounded-full tracking-wider uppercase shadow-md">
                      Networking Spotlight
                    </span>
                    <span className="bg-orange-100 text-[#ff6219] text-xs px-3.5 py-1.5 rounded-full font-bold">
                      Super-Fast Internet Wiring
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-bold text-[#373e51] tracking-tight leading-tight">
                    Fast Fiber Cabling & <br />
                    <span className="text-[#ff6219]">High-Speed Wi-Fi Networks</span>
                  </h3>

                  <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl font-light">
                    Stop slow internet and buffer lag. We lay clean fiber and network cables, setup strong Wi-Fi routers, and connect buildings wirelessly with zero dead spots.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      'Clean & Neat Network Cable Wiring',
                      'High-Speed Routers & Switches',
                      'Fast Wi-Fi Coverage with No Dead Zones',
                      'Long-Distance Building Wireless Links'
                    ].map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-[#ff6219] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        href="/get-quote?item=Enterprise+Network+Design&type=service"
                        className="inline-flex items-center gap-3 bg-[#373e51] hover:bg-[#ff6219] text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                      >
                        Request Free Network Inspection
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </motion.div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#ff6219] font-semibold underline underline-offset-4"
                    >
                      Talk to an Engineer
                    </Link>
                  </div>
                </div>

                <div className="md:col-span-4 flex flex-col items-center justify-center">
                  <motion.div 
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="bg-white border border-orange-100 rounded-3xl p-6 text-center w-full space-y-4 shadow-lg"
                  >
                    <div className="w-16 h-16 bg-[#373e51]/10 text-[#373e51] rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                      <Network className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-[#373e51]">Fast & Reliable</h4>
                    <p className="text-xs text-gray-500">Smooth connection for computers, phones, and smart TV devices.</p>
                    <div className="pt-2 border-t border-gray-100 flex justify-around text-center text-xs">
                      <div>
                        <div className="font-bold text-lg text-[#373e51]">100%</div>
                        <div className="text-gray-500">Reliable</div>
                      </div>
                      <div>
                        <div className="font-bold text-lg text-[#373e51]">High Speed</div>
                        <div className="text-gray-500">Fiber</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>

        {/* Promotional Call To Action Footer Banner */}
        <div className="mt-16 text-center">
          <FadeIn direction="up">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="bg-linear-to-r from-[#ff6219] to-[#ff7a3d] rounded-3xl p-8 md:p-10 text-white shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div className="text-left max-w-xl">
                <h4 className="text-2xl md:text-3xl font-bold mb-2">Ready to Upgrade Your Network or Cameras?</h4>
                <p className="text-white/90 text-sm md:text-base">Get a free design and exact price quote within 24 hours.</p>
              </div>
              <Link
                href="/contact"
                className="bg-[#373e51] hover:bg-black text-white font-bold py-4 px-8 rounded-full shadow-xl hover:scale-105 transition-all shrink-0 flex items-center gap-2"
              >
                Contact Arusha Team
                <ArrowRight className="w-5 h-5 text-[#ff6219]" />
              </Link>
            </motion.div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}



