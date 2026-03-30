import { FadeIn } from '@/components/animate-ui/fade-in';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
    return (
        <section id="about" className="bg-background">
            <div className="mx-auto max-w-7xl px-4 py-20">
                <FadeIn direction="up">
                    <h3 className="text-3xl font-bold mb-12 text-[#373e51] text-center">About ForgeTech</h3>
                </FadeIn>

                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn delay={0.2} direction="up">
                        <div className="p-8 md:p-12 rounded-[2rem] shadow-xl bg-white border border-orange-50 relative overflow-hidden">
                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
                            
                            <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed relative z-10">
                                ForgeTech is a premier ICT company based in Arusha, Tanzania. Our certified engineers deliver reliable, scalable solutions—from enterprise networks to advanced security systems. We prioritize uptime, robust security, and engineering excellence so your operations never stop.
                            </p>
                            
                            <div className="relative z-10">
                                <Link 
                                    href="/about"
                                    className="inline-flex items-center gap-2 bg-linear-to-br from-[#ff6219] to-[#ff7a3d] text-white font-bold py-4 px-8 rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                >
                                    Read Our Full Story
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