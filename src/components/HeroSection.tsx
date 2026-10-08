import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, MapPin, Heart, ArrowDown } from 'lucide-react';
import { PhotoTransformer } from './PhotoTransformer';
import { BRIDE_NAME, GROOM_NAME, EVENT_DATES } from '../data/weddingData';

interface HeroSectionProps {
  onScrollToStory?: () => void;
  onScrollToEvents?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToStory, onScrollToEvents }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden bg-[#FFF9F0] text-[#332629]">
      {/* Luxury Cinematic Ambient Glow & Spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A45C]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#F8E8E5] rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Petals Canvas / Background Texture */}
      <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(#C9A45C_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center space-y-10">
        {/* Subtle Welcome Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FFF9F0] border border-[#C9A45C] text-[#7A1F35] text-xs uppercase tracking-[0.3em] font-mono shadow-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C9A45C] animate-spin" />
          <span className="font-semibold">Save The Date • Wedding</span>
        </motion.div>

        {/* Hero Title Typography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-3 sm:space-y-4 max-w-3xl w-full"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-extrabold tracking-tight text-[#7A1F35] drop-shadow-sm break-words leading-tight">
            {BRIDE_NAME} <span className="text-[#C9A45C] inline-block animate-pulse">❤️</span> {GROOM_NAME}
          </h1>

          <p className="text-lg sm:text-2xl font-serif font-light tracking-wider sm:tracking-widest text-[#7A1F35]/90 italic">
            25 • 26 November 2026
          </p>

          <p className="text-[11px] sm:text-xs md:text-sm font-sans tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[#332629] max-w-xl mx-auto pt-2 border-t border-[#C9A45C]/30 font-medium">
            Laxmi Party Plot • Himatnagar, Gujarat
          </p>
        </motion.div>

        {/* Central Illustrated Photo Transformer Artwork */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="w-full max-w-xs sm:max-w-md mx-auto relative group"
        >
          {/* Soft Glowing Flowers Frame */}
          <div className="absolute -inset-4 sm:-inset-6 rounded-3xl bg-gradient-to-tr from-[#C9A45C]/20 via-[#F8E8E5] to-[#C9A45C]/15 blur-xl group-hover:blur-2xl transition-all duration-700 pointer-events-none" />

          {/* Render Styled Vector Artwork */}
          <PhotoTransformer
            style="vector"
            caption={`${BRIDE_NAME} ❤️ ${GROOM_NAME}`}
            subCaption="25 & 26 November 2026"
            className="shadow-xl rounded-2xl border border-[#C9A45C]"
          />
        </motion.div>

        {/* Quick Action Navigation Buttons: 🍷 #7A1F35 + gold text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto pt-2"
        >
          <button
            onClick={onScrollToStory}
            className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full bg-[#7A1F35] hover:bg-[#63182A] text-[#C9A45C] border border-[#C9A45C]/50 font-serif font-bold text-xs sm:text-sm tracking-wider shadow-md hover:shadow-lg active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer touch-manipulation"
          >
            <span>Explore Our Story</span>
            <Heart className="w-4 h-4 fill-[#C9A45C] text-[#C9A45C]" />
          </button>

          <button
            onClick={onScrollToEvents}
            className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full bg-[#FFF9F0] hover:bg-[#F8E8E5] text-[#7A1F35] border-2 border-[#C9A45C] font-serif font-bold text-xs sm:text-sm tracking-wider shadow-sm active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer touch-manipulation"
          >
            <Calendar className="w-4 h-4 text-[#C9A45C]" />
            <span>Wedding Schedule</span>
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="pt-10 flex flex-col items-center gap-2 text-[#332629]/80 hover:text-[#7A1F35] cursor-pointer text-xs uppercase font-mono tracking-widest"
          onClick={onScrollToStory}
        >
          <span>Scroll To Begin Story</span>
          <ArrowDown className="w-4 h-4 text-[#C9A45C]" />
        </motion.div>
      </div>
    </section>
  );
};
