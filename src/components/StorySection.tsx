import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ChevronLeft, ChevronRight, Heart, Quote, BookOpen, MoveHorizontal } from 'lucide-react';
import { PhotoTransformer, ArtisticStyle } from './PhotoTransformer';
import { STORY_SCENES } from '../data/weddingData';

export const StorySection: React.FC = () => {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const activeScene = STORY_SCENES[activeSceneIndex];

  const triggerHaptic = () => {
    try {
      if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(12);
      }
    } catch {
      // Ignore if vibration is restricted or unsupported
    }
  };

  const handleNext = () => {
    triggerHaptic();
    setActiveSceneIndex((prev) => (prev + 1) % STORY_SCENES.length);
  };

  const handlePrev = () => {
    triggerHaptic();
    setActiveSceneIndex((prev) => (prev - 1 + STORY_SCENES.length) % STORY_SCENES.length);
  };

  const handleSelectScene = (idx: number) => {
    triggerHaptic();
    setActiveSceneIndex(idx);
  };

  return (
    <section id="our-story" className="relative py-24 px-4 bg-stone-950 text-white overflow-hidden border-t border-amber-500/20">
      {/* Background Cinematic Lighting */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-stone-900 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-stone-950 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900 border border-amber-500/30 text-amber-300 text-xs uppercase tracking-widest font-mono">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Love Story</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-amber-300">
            Our Story In 6 Art Forms
          </h2>

          <p className="text-stone-300 text-sm sm:text-base font-serif italic">
            "With every chapter, our picture transforms into a new artistic masterpiece."
          </p>
        </div>

        {/* Scene Selection Dots / Tabs - Touch Friendly */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-2xl mx-auto touch-none">
          {STORY_SCENES.map((scene, idx) => (
            <button
              key={scene.id}
              onClick={() => handleSelectScene(idx)}
              className={`min-h-[40px] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer active:scale-95 touch-manipulation flex items-center justify-center ${
                activeSceneIndex === idx
                  ? 'bg-amber-400 text-stone-950 font-bold shadow-lg shadow-amber-400/20 scale-105'
                  : 'bg-stone-900/90 text-stone-400 hover:text-amber-200 border border-stone-800 hover:border-amber-500/40'
              }`}
              aria-label={`Go to scene ${idx + 1}: ${scene.style}`}
            >
              0{idx + 1}. {scene.style.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Swipe Hint for Mobile Devices */}
        <div className="flex items-center justify-center gap-2 text-stone-400 text-[11px] font-mono sm:hidden">
          <MoveHorizontal className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>Swipe left or right to change scenes</span>
        </div>

        {/* Main Morphing Transformation Card Container with Swipe Drag Support */}
        <div className="relative bg-stone-900/70 backdrop-blur-xl border border-amber-500/30 rounded-3xl p-4 sm:p-8 md:p-10 shadow-2xl overflow-hidden select-none">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              const swipeThreshold = 40;
              if (info.offset.x < -swipeThreshold) {
                handleNext();
              } else if (info.offset.x > swipeThreshold) {
                handlePrev();
              }
            }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center cursor-grab active:cursor-grabbing touch-pan-y"
          >
            {/* Left Side: Photo Transformer Artwork */}
            <div className="lg:col-span-6 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScene.id}
                  initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="w-full max-w-[280px] xs:max-w-xs sm:max-w-sm mx-auto"
                >
                  <PhotoTransformer
                    style={activeScene.style as ArtisticStyle}
                    caption="Mukti ❤️ Mihir"
                    subCaption={activeScene.subtitle}
                    image={activeScene.image}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Side: Scene Story Text & Quote */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScene.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-amber-400 tracking-[0.3em] uppercase">
                      {activeScene.subtitle}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-serif font-bold text-amber-100">
                      {activeScene.title}
                    </h3>
                    <span className="inline-block text-xs font-semibold px-3 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      {activeScene.dateLabel}
                    </span>
                  </div>

                  <p className="text-stone-300 font-serif text-base leading-relaxed">
                    {activeScene.description}
                  </p>

                  {/* Romantic Quote Card */}
                  <div className="relative p-5 rounded-2xl bg-gradient-to-r from-stone-950 via-amber-950/20 to-stone-950 border border-amber-500/30">
                    <Quote className="absolute top-3 left-3 w-8 h-8 text-amber-500/20" />
                    <p className="relative z-10 font-serif italic text-amber-200 text-sm sm:text-base text-center">
                      {activeScene.quote}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Prev / Next Navigation Controls - Touch Friendly */}
              <div className="flex items-center justify-between pt-6 border-t border-stone-800/80">
                <button
                  onClick={handlePrev}
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center gap-2 text-xs font-serif font-semibold text-amber-300 hover:text-amber-100 px-5 py-2.5 rounded-full bg-stone-800 hover:bg-stone-700 active:scale-95 transition-all cursor-pointer border border-stone-700 touch-manipulation"
                  aria-label="Previous scene"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Previous Scene</span>
                  <span className="sm:hidden">Prev</span>
                </button>

                <div className="flex items-center gap-1.5">
                  {STORY_SCENES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelectScene(i)}
                      className={`h-2.5 rounded-full transition-all cursor-pointer min-w-[20px] min-h-[20px] flex items-center justify-center ${
                        activeSceneIndex === i ? 'w-6 bg-amber-400' : 'w-2.5 bg-stone-700 hover:bg-stone-500'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center gap-2 text-xs font-serif font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 active:scale-95 px-5 py-2.5 rounded-full transition-all cursor-pointer font-bold shadow-md shadow-amber-400/20 touch-manipulation"
                  aria-label="Next scene"
                >
                  <span className="hidden sm:inline">Next Scene</span>
                  <span className="sm:hidden">Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

