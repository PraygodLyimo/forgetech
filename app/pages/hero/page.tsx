'use client';

import { HyperText } from '@/components/ui/hyper-text';
import { Globe } from '@/components/ui/globe';
import { FadeIn } from '@/components/animate-ui/fade-in';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Sparkles, ShieldCheck, Network, Camera, Lock, Search } from 'lucide-react';
import Link from 'next/link';

export default function HeroPage() {
    const [query, setQuery] = useState('');

    const handleSearch = (value = query) => {
        if (!value.trim()) return;
        window.location.href = `/products?search=${encodeURIComponent(value.trim())}`;
    };

    return (
        <div className="w-full overflow-hidden">
            <section className="min-h-[90vh] flex items-center justify-center relative bg-linear-to-b from-white via-[#fffdfb] to-[#fff9f5] py-16">
                <Globe className="opacity-60 pointer-events-auto scale-100 md:scale-[1.25]" />
                
                <div className="relative z-10 mx-auto px-4 py-12 space-y-8 text-center max-w-4xl">
                    <FadeIn delay={0} direction="down">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-50 text-[#ff6219] font-bold text-sm border border-orange-200 shadow-sm cursor-pointer"
                        >
                            <Sparkles className="w-4 h-4 text-[#ff6219] animate-pulse" />
                            <span>Trusted Technology Partner in Arusha, Tanzania</span>
                        </motion.div>
                    </FadeIn>

                    <FadeIn delay={0.2} direction="up">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#373e51] leading-tight mx-auto tracking-tight">
                            <HyperText>Fast Wi-Fi Networks & Smart Security Systems</HyperText>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.4} direction="up">
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mx-auto max-w-3xl font-light">
                            Arusha Networking Group installs clear HD security cameras, fingerprint door locks, motion alarms, fiber internet cables, and high-speed Wi-Fi across Arusha and East Africa.
                        </p>
                    </FadeIn>

                    {/* Animated Quick Action Buttons */}
                    <FadeIn delay={0.5} direction="up">
                        <div className="flex flex-wrap justify-center gap-4 pt-2">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                                <Link 
                                    href="/services" 
                                    className="bg-[#ff6219] hover:bg-[#e55a17] text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-orange-500/20 transition-all"
                                >
                                    Explore Our Services
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                                <Link 
                                    href="/contact" 
                                    className="bg-[#373e51] hover:bg-black text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all"
                                >
                                    Book Free Site Survey
                                </Link>
                            </motion.div>
                        </div>
                    </FadeIn>

                    {/* Animated Interactive Search */}
                    <FadeIn delay={0.6} direction="up">
                        <div className="flex justify-center pt-4">
                            <motion.div 
                                whileFocus={{ scale: 1.02 }}
                                className="w-full max-w-2xl border border-orange-200/80 rounded-2xl overflow-hidden shadow-xl bg-white flex items-center p-1.5 focus-within:border-[#ff6219] transition-all"
                            >
                                <Search className="w-5 h-5 text-gray-400 ml-4 shrink-0" />
                                <input
                                    type="text"
                                    placeholder="Search CCTV cameras, Wi-Fi routers, door locks..."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                    className="flex-1 px-4 py-3 outline-none text-gray-700 placeholder-gray-400 bg-transparent text-sm md:text-base"
                                />
                                <button
                                    onClick={() => handleSearch()}
                                    className="bg-linear-to-br from-[#ff6219] to-[#ff7a3d] text-white font-bold px-6 py-3 rounded-xl hover:from-[#e55a17] hover:to-[#e56b35] transition-all duration-200 shrink-0 text-sm shadow-md"
                                >
                                    Search
                                </button>
                            </motion.div>
                        </div>
                    </FadeIn>

                    {/* Animated Quick Chips */}
                    <FadeIn delay={0.8} direction="up">
                        <div className="flex flex-wrap justify-center gap-2.5 pt-2">
                            {[
                                { name: 'CCTV Cameras', icon: Camera },
                                { name: 'Wi-Fi & Cables', icon: Network },
                                { name: 'Fingerprint Door Locks', icon: Lock },
                                { name: 'Alarms & Security', icon: ShieldCheck }
                            ].map((chip) => (
                                <motion.span
                                    key={chip.name}
                                    whileHover={{ scale: 1.08, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {
                                        setQuery(chip.name);
                                        handleSearch(chip.name);
                                    }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-[#ff6219] font-bold text-xs cursor-pointer hover:bg-orange-50 hover:border-[#ff6219] transition-all duration-200 shadow-sm"
                                >
                                    <chip.icon className="w-3.5 h-3.5" />
                                    <span>{chip.name}</span>
                                </motion.span>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}

