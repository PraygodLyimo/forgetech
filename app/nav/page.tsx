'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Navigation items configuration
const navigationItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
];

interface NavigationProps {
  className?: string;
  onContactClick?: () => void;
}

export default function Navigation({ className = '', onContactClick }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navigation background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      if (!target.closest('header')) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent scroll when menu is open
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      document.getElementById('contactForm')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white shadow-md'
      } ${className}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="">
            <Image
              src="/forgetech.webp"
              alt="Logo"
              width={200}
              height={100}
              className="bject-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative font-semibold text-[#373e51] hover:text-[#ff6219] transition-colors duration-300 after:absolute after:left-0 after:-bottom-1.5 after:h-1 after:w-0 after:bg-[#ff6219] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            href="/get-quote"
            className="hidden sm:block bg-linear-to-br from-[#ff6219] to-[#ff7a3d] text-white font-bold py-2 px-4 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-200"
          >
            Get Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#373e51] hover:text-[#ff6219] transition-colors duration-200 rounded-lg hover:bg-gray-100"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Mobile Menu */}
          <div className="md:hidden fixed top-full left-0 right-0 bg-white border-t border-gray-100 shadow-2xl z-50 max-h-[calc(100vh-80px)] overflow-y-auto">
            <nav className="container mx-auto px-4 py-6">
              <div className="space-y-4">
                {navigationItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block font-semibold text-[#373e51] hover:text-[#ff6219] transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 border-l-4 border-transparent hover:border-[#ff6219]"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.label}
                  </Link>
                ))}
                
                <div className="pt-4 mt-4 border-t border-gray-100">
                  <button
                    onClick={() => {
                      handleContactClick();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full bg-linear-to-br from-[#ff6219] to-[#ff7a3d] text-white font-bold py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}