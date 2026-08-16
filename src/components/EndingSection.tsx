import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Quote, Sun } from 'lucide-react';
import { BRIDE_NAME, GROOM_NAME, EVENT_DATES } from '../data/weddingData';
import { PhotoTransformer } from './PhotoTransformer';

export const EndingSection: React.FC = () => {
  return (
    <section className="relative min-h-screen py-24 px-4 bg-gradient-to-b from-stone-950 via-rose-950/40 to-stone-950 text-white overflow-hidden flex flex-col items-center justify-center text-center border-t border-amber-500/30">
      {/* Glowing Sunset Ambient Lighting */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-t from-orange-500/20 via-rose-500/20 to-amber-300/10 rounded-full blur-[140px] pointer-events-none" />

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
            className="absolute w-2 h-2 rounded-full bg-amber-300 shadow-[0_0_12px_#fef08a]"
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
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-amber-500/30 via-rose-500/30 to-amber-300/30 blur-xl pointer-events-none" />
          <PhotoTransformer
            style="framed"
            caption={`${BRIDE_NAME} ❤️ ${GROOM_NAME}`}
            subCaption="Walking Hand in Hand Into Our Forever"
            className="shadow-2xl"
          />
        </motion.div>

        {/* Final Emotional Quote Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-2xl bg-stone-900/80 backdrop-blur-xl border border-amber-500/30 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-3 sm:space-y-4 text-center"
        >
          <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400/40 mx-auto" />
          <blockquote className="font-serif italic text-base sm:text-xl text-amber-100 leading-relaxed">
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
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-amber-400 drop-shadow-md break-words">
            {BRIDE_NAME} <span className="text-rose-400 inline-block animate-pulse">❤️</span> {GROOM_NAME}
          </h2>

          <p className="text-lg sm:text-2xl font-serif font-light text-amber-200/90 tracking-widest italic">
            25 • 26 November 2026
          </p>

          <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs font-mono text-amber-400/80 uppercase tracking-widest pt-2 sm:pt-4">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 animate-spin" />
            <span>12, SilverPark society, Palace Road, Mahavirnagar, Himmagtnagar</span>
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 animate-spin" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
