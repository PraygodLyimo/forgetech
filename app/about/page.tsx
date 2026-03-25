'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Outfit } from 'next/font/google';
import { GravityStarsBackground } from '@/components/animate-ui/components/backgrounds/gravity-stars';
import { Button } from '@/components/ui/moving-border';
import { FadeIn } from '@/components/animate-ui/fade-in';
import { Shield, Target, Users, Zap, CheckCircle2, Award } from 'lucide-react';

const outfit = Outfit({ subsets: ['latin'] });

export default function AboutPage() {
  const brandName = "FORGETECH";

  return (
    <div className={`min-h-screen bg-white ${outfit.className} overflow-hidden`}>
      {/* Background patterns */}
      <div className="fixed inset-0 bg-[radial-gradient(#ff621908_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 border-b border-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn direction="up">
              <span className="text-3xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight flex items-center justify-center gap-4 mb-8">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-12 h-12 md:w-16 md:h-16"
                >
                  <Image
                    src="/f-icon.png"
                    alt="ForgeTech Icon"
                    fill
                    className="object-contain"
                  />
                </motion.div>
                <div className="flex overflow-hidden py-2">
                  {brandName.split("").map((letter, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + idx * 0.05, duration: 0.6, ease: "easeOut" }}
                      className={letter === "T" || letter === "E" || letter === "C" || letter === "H" && idx > 4 ? "text-[#ff6219]" : "text-[#373e51]"}
                      style={{ color: idx >= 5 ? "#ff6219" : "#373e51" }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
              </span>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium max-w-3xl mx-auto">
                Leading the digital transformation of East Africa with robust, scalable technology infrastructure and world-class support.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-white border border-orange-100 p-10 rounded-[3rem] h-full hover:shadow-xl transition-all duration-500">
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-8">
                  <Target className="w-7 h-7 text-[#ff6219]" />
                </div>
                <h2 className="text-3xl font-bold text-[#373e51] mb-6">Our Mission</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To empower businesses across Tanzania and East Africa by deploying cutting-edge ICT infrastructure that is reliable, secure, and sustainable. We strive to be the bridge between complex technology and seamless business operations.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.4}>
              <div className="bg-[#373e51] p-10 rounded-[3rem] h-full text-white shadow-2xl">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                  <Award className="w-7 h-7 text-[#ff6219]" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-gray-300 text-lg leading-relaxed font-light">
                  To become the region&apos;s most trusted partner in digital infrastructure, recognized for our commitment to uptime, engineering excellence, and the success of the communities we serve.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50/50 border-y border-orange-50">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <h2 className="text-4xl font-bold text-[#373e51] mb-16 text-center">Our Core Values</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { icon: Shield, title: "Absolute Security", desc: "Prioritizing your data integrity and physical site security in every deployment." },
              { icon: Zap, title: "Engineered Uptime", desc: "Building redundant systems designed for 24/7 high-availability operations." },
              { icon: Users, title: "Local Presence", desc: "Headquartered in Arusha with deep expertise in the regional tech landscape." },
              { icon: CheckCircle2, title: "Transparency", desc: "Clear documentation and fair pricing protocols for long-term partnerships." }
            ].map((value, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} direction="up">
                <div className="bg-white p-8 rounded-3xl border border-orange-100 hover:border-orange-500 transition-all duration-500 h-full group">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#ff6219] transition-colors">
                    <value.icon className="w-6 h-6 text-[#ff6219] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-[#373e51] mb-3">{value.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview Overlay */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn direction="up">
              <div className="relative">
                <span className="text-[10rem] font-bold text-[#ff6219]/5 absolute -top-24 -left-20 pointer-events-none select-none">FORGE</span>
                <h2 className="text-4xl font-bold text-[#373e51] mb-8 relative">Who We Are</h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed relative">
                  <p>
                    ForgeTech is a premier Information and Communication Technology (ICT) company headquartered in Arusha, Tanzania. Our team of highly skilled and certified engineers and technicians is dedicated to delivering reliable, scalable, and sustainable technology solutions.
                  </p>
                  <p>
                    We provide ranging from small business networks to enterprise-grade server infrastructure and integrated security systems. We prioritize uptime, security, and clear documentation to ensure your operations run seamlessly.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>


    </div>
  );
}