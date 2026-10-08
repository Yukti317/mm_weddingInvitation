import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Heart, Calendar, MapPin, Camera, UserCheck, BookOpen } from 'lucide-react';
import { BRIDE_NAME, GROOM_NAME } from '../data/weddingData';

interface NavigationHeaderProps {
  onOpenRsvp: () => void;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({ onOpenRsvp }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Our Story', href: '#our-story' },
    { label: 'Celebrations', href: '#events' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Venue', href: '#venue' },
    { label: 'Blessings', href: '#blessings' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#FFF9F0]/95 backdrop-blur-xl border-b border-[#C9A45C]/30 py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Name Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div
            className="w-7 h-7 xs:w-8 xs:w-8 sm:w-9 sm:h-9
              rounded-full bg-[#7A1F35] border border-[#C9A45C]
              flex items-center justify-center
              text-[#C9A45C] font-serif font-bold
              text-[8px] xs:text-[10px] sm:text-xs
              tracking-tight leading-none text-center px-0.5
              shadow-sm"
          >
            M❤️M
          </div>
          <span className="font-serif font-bold text-lg tracking-wider text-[#7A1F35] group-hover:text-[#63182A] transition-colors">
            {BRIDE_NAME} & {GROOM_NAME}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-serif tracking-widest text-[#332629] hover:text-[#7A1F35] uppercase font-semibold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action RSVP Button: 🍷 #7A1F35 + gold text */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenRsvp}
            className="px-5 py-2 rounded-full bg-[#7A1F35] hover:bg-[#63182A] text-[#C9A45C] border border-[#C9A45C]/50 font-serif font-bold text-xs uppercase tracking-widest shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            RSVP
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-[#FFF9F0] border border-[#C9A45C] text-[#7A1F35]"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#7A1F35]" /> : <Menu className="w-5 h-5 text-[#7A1F35]" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FFF9F0]/98 border-b border-[#C9A45C]/30 backdrop-blur-2xl px-6 py-6 space-y-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-serif text-[#332629] hover:text-[#7A1F35] font-semibold transition-colors"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRsvp();
              }}
              className="w-full py-3 rounded-full bg-[#7A1F35] text-[#C9A45C] border border-[#C9A45C]/50 font-serif font-bold text-xs uppercase tracking-widest shadow-md"
            >
              Confirm RSVP
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
