'use client';
import { FadeIn } from '@/components/animate-ui/fade-in';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#373e51]">Get In Touch</h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Ready to transform your ICT infrastructure? Connect with our engineering team today.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-5xl mx-auto">
          <FadeIn delay={0.2} direction="up">
            <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                
                {/* Location */}
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 hover:bg-orange-50 transition-colors group">
                    <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <MapPin className="w-8 h-8 text-[#ff6219]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#373e51] mb-2">Location</h3>
                    <p className="text-gray-600">Arusha, Tanzania</p>
                </div>

                {/* Phone */}
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 hover:bg-orange-50 transition-colors group">
                    <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Phone className="w-8 h-8 text-[#ff6219]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#373e51] mb-2">Phone</h3>
                    <p className="text-gray-600">+255 758 100137</p>
                </div>

                {/* Email */}
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 hover:bg-orange-50 transition-colors group">
                    <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Mail className="w-8 h-8 text-[#ff6219]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#373e51] mb-2">Email</h3>
                    <p className="text-gray-600">info@arushanetworks.com</p>
                </div>

              </div>

              <div className="text-center pt-8 border-t border-gray-100">
                  <p className="text-gray-500 mb-6">Need a detailed consultation or want to submit an inquiry?</p>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-[#373e51] text-white font-bold py-4 px-10 rounded-full hover:bg-[#ff6219] hover:-translate-y-1 transition-all duration-300 shadow-xl"
                  >
                      Visit Interaction Center
                      <ArrowRight className="w-5 h-5" />
                  </Link>
              </div>

            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}