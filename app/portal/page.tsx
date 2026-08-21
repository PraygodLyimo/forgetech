'use client';

import { FadeIn } from '@/components/animate-ui/fade-in';
import { motion } from 'motion/react';
import { Wrench, ArrowLeft, Home, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function PortalPage() {
  return (
    <div className="min-h-screen bg-[#fffdfb] overflow-hidden relative flex items-center justify-center py-20">
      {/* Background Glows */}
      <div className="fixed inset-0 bg-[radial-gradient(#ff621908_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff6219]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#373e51]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-xl text-center relative z-10">
        <FadeIn direction="up">
          <div className="bg-white/80 backdrop-blur-xl border border-orange-100/60 rounded-[2.5rem] p-10 md:p-14 shadow-2xl space-y-6">
            
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-20 h-20 bg-orange-50 text-[#ff6219] rounded-3xl flex items-center justify-center mx-auto shadow-md"
            >
              <Wrench className="w-10 h-10" />
            </motion.div>

            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-orange-100 text-[#ff6219]">
              <ShieldCheck className="w-4 h-4 text-[#ff6219]" />
              Arusha Networks Client Portal
            </span>

            <h1 className="text-3xl md:text-4xl font-extrabold text-[#373e51]">
              We Are Working On This Portal
            </h1>

            <p className="text-gray-600 text-base leading-relaxed font-light">
              Our customer portal is currently under active development to bring you real-time project tracking, service requests, and automated account management.
            </p>

            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-[#ff6219] hover:bg-[#e55a17] text-white font-bold py-3.5 px-8 rounded-full shadow-lg transition-all"
              >
                <Home className="w-4 h-4" />
                Return Back to Home Page
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
