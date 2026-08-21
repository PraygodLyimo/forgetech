'use client';
import { FadeIn } from '@/components/animate-ui/fade-in';
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function Footer() {
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/arushanetworksltd' },
    { name: 'Twitter', icon: Twitter, href: 'https://x.com/arushanetworksltd' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/arushanetworksltd' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/arushanetworksltd' },
  ];

  const brandName = "Arusha Networking Group";

  return (
    <footer className="relative bg-[#373e51] text-white pt-10 pb-8 border-t border-white/10 overflow-hidden">
      {/* Background Texture (Dot Pattern) */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#ff6219]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-5 space-y-6">
            <FadeIn delay={0} direction="up">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-10 h-10 rounded-xl bg-[#ff6219] text-white flex items-center justify-center font-black text-sm shadow-md shrink-0"
                  >
                    ANG
                  </motion.div>
                  <div className="flex overflow-hidden flex-wrap">
                    {brandName.split("").map((letter, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + idx * 0.05, duration: 0.5, ease: "easeOut" }}
                        style={{ color: idx >= 7 ? "#ff6219" : "white" }}
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </motion.span>
                    ))}
                  </div>
                </span>
                <span className="text-xs text-[#ff6219] uppercase tracking-[0.3em] mt-2 font-black">
                  IT & Security Infrastructure
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                Installing and managing reliable network cabling (UTP & fiber), Wi-Fi, and security systems (CCTV, electric fences, access control & gate motors) in Arusha & East Africa.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#ff6219] hover:border-[#ff6219] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group shadow-xl"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <FadeIn delay={0.2} direction="up">
              <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#ff6219] rounded-full"></span>
                Quick Links
              </h4>
              <ul className="space-y-3.5">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'About', href: '/about' },
                  { name: 'Services', href: '/services' },
                  { name: 'Contact', href: '/contact' },
                ].map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm text-gray-300 hover:text-[#ff6219] transition-all duration-300 block font-semibold hover:translate-x-1">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Resources & Downloads */}
          <div className="md:col-span-4">
            <FadeIn delay={0.3} direction="up">
              <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#ff6219] rounded-full"></span>
                Resources & Downloads
              </h4>
              <ul className="space-y-3.5">
                {[
                  { name: 'Client Portal', href: '/portal', isDownload: false },
                  { name: 'Terms & Conditions', href: '/terms', isDownload: false },
                  { name: '📄 Business Profile (PDF)', href: '/Arusha_Networks_Ltd_Company_Profile.pdf', isDownload: true },
                  { name: '📇 Sales Business Card', href: '/business-card', isDownload: false },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      download={item.isDownload ? true : undefined}
                      className="text-sm text-gray-300 hover:text-[#ff6219] transition-all duration-300 block font-semibold hover:translate-x-1"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>

        {/* Bottom Bar */}
        <FadeIn delay={0.5} direction="up">
          <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
              <p className="text-sm text-gray-400 font-bold tracking-tight">
                &copy; 2025 <span className="text-white">Arusha Networking Group</span>
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