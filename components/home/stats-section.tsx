'use client';

import { FadeIn } from '@/components/animate-ui/fade-in';
import { motion } from 'motion/react';

export function StatsSection() {
  const stats = [
    { label: 'Active Installations', value: '1,200+' },
    { label: 'Uptime Guarantee', value: '99.9%' },
    { label: 'Support Response', value: '< 2 hrs' },
    { label: 'Years Experience', value: '10+' },
  ];

  return (
    <section className="py-16 bg-[#373e51] relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#ff6219]/20 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} direction="up" className="text-center px-4">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center space-y-2 cursor-pointer"
              >
                <span className="text-4xl md:text-5xl font-black text-white drop-shadow-md">
                  {stat.value}
                </span>
                <span className="text-sm md:text-base font-medium text-orange-200 uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
