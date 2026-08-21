'use client';

import { FadeIn } from '@/components/animate-ui/fade-in';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Download, Share2, Shield, Network, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function BusinessCardPage() {
  const whatsappUrl = 'https://wa.me/255758100137';

  return (
    <div className="min-h-screen bg-[#fffdfb] overflow-hidden relative">
      {/* Background Glows */}
      <div className="fixed inset-0 bg-[radial-gradient(#ff621908_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] bg-[#ff6219]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[50%] h-[50%] bg-[#373e51]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <section className="relative pt-32 pb-12 border-b border-orange-50/50 bg-white/40 backdrop-blur-3xl z-10">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <FadeIn direction="up">
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-[#ff6219] mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#373e51] mb-3 tracking-tight">
              Sales & Support <span className="text-[#ff6219]">Business Card</span>
            </h1>
            <p className="text-gray-600 text-base leading-relaxed max-w-xl mx-auto font-light">
              Official contact card for Arusha Networks Ltd sales, technical site inspections, and infrastructure engineering support.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Business Card Display */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn direction="up">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              
              {/* Card Front View */}
              <motion.div 
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-linear-to-br from-[#373e51] via-[#2b3141] to-[#1c202b] text-white p-8 rounded-3xl shadow-2xl border border-white/10 relative overflow-hidden flex flex-col justify-between h-[280px]"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#ff6219]/20 rounded-full blur-3xl pointer-events-none" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff6219]">Arusha Networks Ltd</span>
                    <Shield className="w-6 h-6 text-[#ff6219]" />
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-tight">Sales & Support Team</h2>
                  <p className="text-xs text-gray-300 font-medium">IT & Security Infrastructure Specialists</p>
                </div>

                <div className="space-y-1.5 text-xs text-gray-300 border-t border-white/10 pt-4">
                  <p className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#ff6219]" />
                    <span className="font-bold text-white">+255 758 100 137</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#ff6219]" />
                    <span>info@arushanetworks.com</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#ff6219]" />
                    <span>Arusha, Tanzania</span>
                  </p>
                </div>
              </motion.div>

              {/* Card Back View */}
              <motion.div 
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white border border-orange-100 p-8 rounded-3xl shadow-xl flex flex-col justify-between h-[280px] relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Network className="w-5 h-5 text-[#ff6219]" />
                    <span className="text-xs font-black uppercase tracking-wider text-[#373e51]">Solutions Offered</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-gray-700 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6219]" />
                      <span>UTP & CAT6/CAT6A Cabling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6219]" />
                      <span>Fiber Optic Splicing & Wi-Fi</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6219]" />
                      <span>CCTV & HD Surveillance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6219]" />
                      <span>Electric Fences & Gate Motors</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6219]" />
                      <span>Biometric Access Control</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-bold">
                  <span>Social: @arushanetworksltd</span>
                  <span className="text-[#ff6219]">Arusha, TZ</span>
                </div>
              </motion.div>

            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full text-sm font-bold bg-[#ff6219] text-white shadow-lg hover:bg-[#e55a17] transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Contact Sales on WhatsApp
              </a>
              <a
                href="/Arusha_Networks_Ltd_Company_Profile.pdf"
                download
                className="px-8 py-4 rounded-full text-sm font-bold bg-[#373e51] text-white shadow-lg hover:bg-black transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-[#ff6219]" />
                Download Business Profile PDF
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
