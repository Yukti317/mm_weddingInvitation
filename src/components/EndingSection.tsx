import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Quote, Sun } from 'lucide-react';
import { BRIDE_NAME, GROOM_NAME, EVENT_DATES } from '../data/weddingData';
import { PhotoTransformer } from './PhotoTransformer';

export const EndingSection: React.FC = () => {
  return (
    <section className="relative min-h-screen py-24 px-4 bg-gradient-to-b from-[#FFF9F0] via-[#F8E8E5] to-[#FFF9F0] text-[#332629] overflow-hidden flex flex-col items-center justify-center text-center border-t border-[#C9A45C]/30">
      {/* Glowing Sunset Ambient Lighting */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-t from-[#C9A45C]/20 via-[#F8E8E5] to-[#C9A45C]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating Fireflies & Petals Atmosphere */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.9, 0.2],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            className="absolute w-2 h-2 rounded-full bg-[#C9A45C] shadow-[0_0_12px_#C9A45C]"
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-12 flex flex-col items-center">
        {/* Central Illustrated Walking into Sunset Artwork */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full max-w-md mx-auto relative group"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#C9A45C]/30 via-[#F8E8E5] to-[#C9A45C]/20 blur-xl pointer-events-none" />
          <PhotoTransformer
            style="framed"
            caption={`${BRIDE_NAME} ❤️ ${GROOM_NAME}`}
            subCaption="Walking Hand in Hand Into Our Forever"
            className="shadow-xl"
          />
        </motion.div>

        {/* Final Emotional Quote Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-2xl bg-[#FFF9F0] border-2 border-[#C9A45C] p-6 sm:p-8 rounded-3xl shadow-xl space-y-3 sm:space-y-4 text-center"
        >
          <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[#C9A45C] mx-auto" />
          <blockquote className="font-serif italic text-base sm:text-xl text-[#7A1F35] leading-relaxed font-medium">
            "Every love story is beautiful, but ours is our favorite. Thank you for celebrating the beginning of our forever. We can't wait to celebrate with you."
          </blockquote>
        </motion.div>

        {/* Grand Final Sign-Off Typography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-3 sm:space-y-4 text-center w-full"
        >
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold text-[#7A1F35] drop-shadow-sm break-words">
            {BRIDE_NAME} <span className="text-[#C9A45C] inline-block animate-pulse">❤️</span> {GROOM_NAME}
          </h2>

          <p className="text-lg sm:text-2xl font-serif font-light text-[#7A1F35]/90 tracking-widest italic">
            25 • 26 November 2026
          </p>

          <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs font-mono text-[#332629] uppercase tracking-widest pt-2 sm:pt-4 font-medium">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C9A45C] animate-spin" />
            <span>12, SilverPark society, Palace Road, Mahavirnagar, Himatnagar</span>
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C9A45C] animate-spin" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
