'use client';

import { FadeIn } from '@/components/animate-ui/fade-in';
import { motion } from 'motion/react';
import { ShieldCheck, FileText, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

export default function TermsPage() {
  const termsList = [
    {
      num: '01',
      title: 'Estimate Validity',
      text: 'This estimate is valid for 30 days from the date of issue.',
    },
    {
      num: '02',
      title: 'Confidentiality',
      text: 'This document is confidential between the client and the service provider.',
    },
    {
      num: '03',
      title: 'Expense Exclusions',
      text: 'The estimate excludes meals, accommodation, transport, and park fees, unless otherwise stated.',
    },
    {
      num: '04',
      title: 'Work Commencement',
      text: 'Work will commence only upon written approval of the estimate.',
    },
    {
      num: '05',
      title: 'Scope Changes & Additional Work',
      text: 'Any additional work or changes outside the agreed scope will be charged separately.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#fffdfb] overflow-hidden relative">
      {/* Background Glows */}
      <div className="fixed inset-0 bg-[radial-gradient(#ff621908_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] bg-[#ff6219]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[50%] h-[50%] bg-[#373e51]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero / Header */}
      <section className="relative pt-32 pb-16 border-b border-orange-50/50 bg-white/40 backdrop-blur-3xl z-10">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <FadeIn direction="up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-orange-100 text-[#ff6219] mb-4">
              <ShieldCheck className="w-4 h-4 text-[#ff6219]" />
              Arusha Networking Group
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#373e51] mb-5 tracking-tight">
              Terms & <span className="text-[#ff6219]">Conditions</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto font-light">
              Official business terms and conditions governing project estimates, proposals, and service delivery by Arusha Networking Group.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn direction="up">
            <div className="bg-white/80 backdrop-blur-xl border border-orange-100 rounded-3xl p-8 md:p-12 shadow-xl mb-12">
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
                <FileText className="w-8 h-8 text-[#ff6219]" />
                <div>
                  <h2 className="text-2xl font-bold text-[#373e51]">Estimate Terms & Business Agreement</h2>
                  <p className="text-sm text-gray-500">Please review our standard engagement terms</p>
                </div>
              </div>

              <div className="space-y-6">
                {termsList.map((term) => (
                  <motion.div
                    key={term.num}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-orange-50/50 border border-orange-100/60 hover:bg-orange-50 transition-colors"
                  >
                    <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#ff6219] text-white font-bold text-sm shrink-0 shadow-md">
                      {term.num}
                    </span>
                    <div>
                      <h3 className="font-bold text-[#373e51] text-base mb-1">{term.title}</h3>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">{term.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Business Info Banner */}
          <FadeIn direction="up">
            <div className="bg-[#373e51] text-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#ff6219]" />
                Arusha Networking Group — Business Contact
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                For questions regarding these terms, estimates, or service contracts, please reach out to our team via WhatsApp or phone.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#ff6219] shrink-0" />
                  <span>Arusha, Tanzania</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#ff6219] shrink-0" />
                  <a href="https://wa.me/255758100137" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6219] transition-colors font-medium">
                    +255 758 100 137
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#ff6219] shrink-0" />
                  <span>info@arushanetworks.com</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
