import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, ChevronDown } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';
import { triggerGoldenPetals } from '../utils/confetti';

interface OpeningEnvelopeProps {
  onOpened: () => void;
}

export const OpeningEnvelope: React.FC<OpeningEnvelopeProps> = ({ onOpened }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [sealBroken, setSealBroken] = useState(false);
  const [cardUnfolded, setCardUnfolded] = useState(false);

  const handleOpenEnvelope = async () => {
    if (isOpening) return;
    setIsOpening(true);

    // Break seal animation
    setSealBroken(true);

    // Start background music seamlessly on user tap
    audioEngine.start();

    // Trigger golden petal rain
    triggerGoldenPetals();

    // Sequence envelope fold opening
    setTimeout(() => {
      setCardUnfolded(true);
    }, 900);

    // Complete sequence & notify parent after animation
    setTimeout(() => {
      onOpened();
    }, 4500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-stone-950 via-neutral-900 to-stone-950 p-4 overflow-hidden select-none">
      {/* Background Starry Night Sky with Floating Flowers */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#fde047_1px,transparent_1px)] [background-size:32px_32px]" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: 0.2,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute w-1.5 h-1.5 bg-amber-200 rounded-full blur-[1px]"
          />
        ))}
      </div>

      <div className="relative w-full max-w-lg perspective-1000 my-auto">
        {/* Main 3D Envelope Container */}
        <AnimatePresence>
          {!cardUnfolded && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.1, y: -100 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative w-full bg-[#fdfbf7] rounded-2xl shadow-2xl border-2 border-amber-300/80 p-5 sm:p-8 text-stone-900 overflow-hidden cursor-pointer group touch-manipulation active:scale-[0.99]"
              onClick={handleOpenEnvelope}
            >
              {/* Envelope Flap Accent */}
              <div className="absolute top-0 inset-x-0 h-28 sm:h-32 bg-gradient-to-b from-amber-100/80 via-[#f7f3e9] to-transparent clip-path-triangle border-b border-amber-300/40" />

              {/* Envelope Texture Lines */}
              <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center justify-center min-h-[280px] sm:min-h-[320px] text-center space-y-4 sm:space-y-6">
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] font-serif text-amber-800/80">
                  Wedding Invitation
                </p>

                {/* Wax Seal */}
                <div className="relative my-2 sm:my-4">
                  {/* Outer Glow */}
                  <div className="absolute -inset-4 rounded-full bg-amber-400/20 blur-md group-hover:bg-amber-400/40 transition-all" />

                  {/* Golden Wax Seal Badge */}
                  <motion.div
                    animate={sealBroken ? { scale: [1, 1.2, 0], rotate: [0, 15, 90] } : { scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 border-4 border-amber-300 shadow-2xl flex items-center justify-center text-amber-100 font-serif font-bold text-xl sm:text-2xl tracking-wider cursor-pointer transform group-hover:scale-105 transition-transform"
                  >
                    <div className="absolute inset-1 rounded-full border border-amber-400/50" />
                    <span className="drop-shadow-md">M ❤️ M</span>
                  </motion.div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-900">
                    Mukti & Mihir
                  </h3>
                  <p className="text-[11px] sm:text-xs text-amber-900/80 font-serif italic">
                    Tap the Golden Wax Seal to Open
                  </p>
                </div>

                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="flex items-center gap-1 text-[11px] sm:text-xs text-amber-700 font-medium pt-1 sm:pt-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Tap anywhere to begin experience</span>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Unfolding Invitation Card */}
        <AnimatePresence>
          {cardUnfolded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, type: 'spring' }}
              className="relative w-full max-h-[88vh] overflow-y-auto bg-gradient-to-b from-[#fffdfa] via-[#f7f2e6] to-[#f5eee0] rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border-2 border-amber-400/70 text-stone-900 text-center space-y-5 sm:space-y-6"
            >
              {/* Ornate Gold Border Corners */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-amber-500" />
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-amber-500" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-amber-500" />
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-amber-500" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-2 pt-2"
              >
                <p className="text-[10px] sm:text-xs font-serif uppercase tracking-[0.25em] sm:tracking-[0.3em] text-amber-800">
                  Together with their families
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-900 via-amber-800 to-stone-900 drop-shadow-sm">
                  Mukti ❤️ Mihir
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="space-y-2 sm:space-y-3 font-serif py-3 sm:py-4 border-y border-amber-300/40"
              >
                <p className="text-xs sm:text-sm md:text-base text-stone-700 italic">
                  Request the honour of your presence
                </p>
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-amber-900 font-semibold">
                  To celebrate the beginning of their forever
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 }}
                className="inline-block bg-gradient-to-r from-amber-700 via-amber-800 to-stone-900 text-amber-100 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-lg font-serif font-bold text-base sm:text-lg tracking-wider"
              >
                25 & 26 November 2026
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="text-[11px] sm:text-xs font-mono text-amber-800/80 animate-pulse pt-1"
              >
                Entering Experience...
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
