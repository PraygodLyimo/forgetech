'use client';
import { FadeIn } from '@/components/animate-ui/fade-in';
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function Footer() {
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
  ];

  const brandName = "FORGETECH";

  return (
    <footer className="relative bg-[#373e51] text-white pt-10 pb-8 border-t border-white/10 overflow-hidden">
      {/* Background Texture (Dot Pattern) */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#ff6219]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-4 space-y-6">
            <FadeIn delay={0} direction="up">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-10 h-10"
                  >
                    <Image
                      src="/f-icon.png"
                      alt="ForgeTech Icon"
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                  <div className="flex overflow-hidden">
                    {brandName.split("").map((letter, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + idx * 0.05, duration: 0.5, ease: "easeOut" }}
                        className={letter === "T" || letter === "E" || letter === "C" || letter === "H" && idx > 4 ? "text-[#ff6219]" : "text-white"}
                        style={{ color: idx >= 5 ? "#ff6219" : "white" }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </div>
                </span>
                <span className="text-xs text-[#ff6219] uppercase tracking-[0.3em] mt-2 font-black">
                  ICT Excellence & Engineering
                </span>
              </div>
              <p className="text-gray-300 text-base leading-relaxed max-w-sm">
                Deploying enterprise-grade technology infrastructure across East Africa with world-class precision and local support.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#ff6219] hover:border-[#ff6219] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group shadow-xl"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Company Links */}
          <div className="md:col-span-2">
            <FadeIn delay={0.2} direction="up">
              <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#ff6219] rounded-full"></span>
                Links
              </h4>
              <ul className="space-y-4">
                {['About Us', 'Services', 'Products', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-gray-400 hover:text-white transition-all duration-300 block font-semibold hover:translate-x-1">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Legal/Support */}
          <div className="md:col-span-2">
            <FadeIn delay={0.3} direction="up">
              <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#ff6219] rounded-full"></span>
                Support
              </h4>
              <ul className="space-y-4">
                {['Portal', 'Terms', 'Privacy', 'Careers'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-all duration-300 block font-semibold hover:translate-x-1">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Newsletter Section */}
          <div className="md:col-span-4">
            <FadeIn delay={0.4} direction="up">
              <div className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-6 backdrop-blur-xl relative overflow-hidden group">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#ff6219]/10 rounded-full blur-2xl group-hover:bg-[#ff6219]/20 transition-colors duration-500" />

                <h4 className="text-white text-lg font-bold mb-2">Join the Forge</h4>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">Subscribe for the latest enterprise ICT insights and system updates.</p>

                <div className="relative">
                  <input
                    type="email"
                    placeholder="Engineering Email"
                    className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ff6219] focus:ring-1 focus:ring-[#ff6219]/30 transition-all font-medium"
                  />
                  <button className="absolute right-2 top-2 bottom-2 px-4 bg-[#ff6219] rounded-xl hover:bg-[#e55a17] transition-all shadow-lg hover:shadow-[#ff6219]/30 flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Bottom Bar */}
        <FadeIn delay={0.5} direction="up">
          <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
              <p className="text-sm text-gray-400 font-bold tracking-tight">
                &copy; 2025 <span className="text-white">ForgeTech Tanzania</span>
              </p>
              <span className="hidden md:block w-1 h-1 bg-white/20 rounded-full"></span>
              <p className="text-sm text-gray-500 font-medium italic">Building Digital Foundations</p>
            </div>

            <div className="flex items-center gap-8">
              <p className="text-xs text-gray-500 font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                System Status: Nominal
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}