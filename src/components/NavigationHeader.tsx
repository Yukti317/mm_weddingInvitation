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
          ? 'bg-stone-950/90 backdrop-blur-xl border-b border-amber-500/20 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Name Logo */}
        <a href="#" className="flex items-center gap-2 group">
         <div
  className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9
             rounded-full bg-gradient-to-tr from-amber-700 via-amber-500 to-amber-300
             flex items-center justify-center
             text-stone-950 font-serif font-bold
             text-[8px] xs:text-[10px] sm:text-xs
             tracking-tight leading-none text-center px-0.5
             shadow-[0_2px_6px_rgba(120,53,15,0.4),inset_0_1px_1px_rgba(255,255,255,0.4)]
             ring-1 ring-amber-200/40"
>
  M❤️M
</div>
          <span className="font-serif font-bold text-lg tracking-wider text-amber-100 group-hover:text-amber-300 transition-colors">
            {BRIDE_NAME} & {GROOM_NAME}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-serif tracking-widest text-stone-300 hover:text-amber-300 uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action RSVP Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenRsvp}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-stone-950 font-serif font-bold text-xs uppercase tracking-widest shadow-lg hover:shadow-amber-500/20 transition-all cursor-pointer"
          >
            RSVP
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-stone-900 border border-amber-500/30 text-amber-200"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-stone-950/95 border-b border-amber-500/30 backdrop-blur-2xl px-6 py-6 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-serif text-amber-200 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRsvp();
              }}
              className="w-full py-3 rounded-full bg-amber-400 text-stone-950 font-serif font-bold text-xs uppercase tracking-widest"
            >
              Confirm RSVP
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
