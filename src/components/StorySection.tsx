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
    <section id="our-story" className="relative py-24 px-4 bg-[#F8E8E5] text-[#332629] overflow-hidden border-t border-[#C9A45C]/30">
      {/* Background Subtle Ambience */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#FFF9F0]/60 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#FFF9F0]/60 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF9F0] border border-[#C9A45C] text-[#7A1F35] text-xs uppercase tracking-widest font-mono shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span className="font-semibold">Interactive Love Story</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold text-[#7A1F35]">
            Our Story In 6 Art Forms
          </h2>

          <p className="text-[#332629] text-sm sm:text-base font-serif italic">
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
                  ? 'bg-[#7A1F35] text-[#C9A45C] border border-[#C9A45C] font-bold shadow-md scale-105'
                  : 'bg-[#FFF9F0] text-[#332629] hover:text-[#7A1F35] border border-[#C9A45C]/50 hover:border-[#C9A45C]'
              }`}
              aria-label={`Go to scene ${idx + 1}: ${scene.style}`}
            >
              0{idx + 1}. {scene.style.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Swipe Hint for Mobile Devices */}
        <div className="flex items-center justify-center gap-2 text-[#332629]/70 text-[11px] font-mono sm:hidden">
          <MoveHorizontal className="w-3.5 h-3.5 text-[#C9A45C] animate-pulse" />
          <span>Swipe left or right to change scenes</span>
        </div>

        {/* Main Morphing Transformation Card Container with Swipe Drag Support */}
        <div className="relative bg-[#FFF9F0] border-2 border-[#C9A45C] rounded-3xl p-4 sm:p-8 md:p-10 shadow-xl overflow-hidden select-none">
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
                    <span className="text-xs font-mono text-[#7A1F35] font-semibold tracking-[0.3em] uppercase">
                      {activeScene.subtitle}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#7A1F35]">
                      {activeScene.title}
                    </h3>
                    <span className="inline-block text-xs font-semibold px-3 py-1 rounded bg-[#F8E8E5] text-[#7A1F35] border border-[#C9A45C]/40">
                      {activeScene.dateLabel}
                    </span>
                  </div>

                  <p className="text-[#332629] font-serif text-base leading-relaxed">
                    {activeScene.description}
                  </p>

                  {/* Romantic Quote Card */}
                  <div className="relative p-5 rounded-2xl bg-[#F8E8E5]/90 border border-[#C9A45C]">
                    <Quote className="absolute top-3 left-3 w-8 h-8 text-[#C9A45C]/30" />
                    <p className="relative z-10 font-serif italic text-[#7A1F35] text-sm sm:text-base text-center font-medium">
                      "{activeScene.quote}"
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Prev / Next Navigation Controls - Touch Friendly */}
              <div className="flex items-center justify-between pt-6 border-t border-[#C9A45C]/30">
                <button
                  onClick={handlePrev}
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center gap-2 text-xs font-serif font-semibold text-[#7A1F35] hover:text-[#63182A] px-5 py-2.5 rounded-full bg-[#FFF9F0] hover:bg-[#F8E8E5] active:scale-95 transition-all cursor-pointer border border-[#C9A45C] touch-manipulation"
                  aria-label="Previous scene"
                >
                  <ChevronLeft className="w-4 h-4 text-[#C9A45C]" />
                  <span className="hidden sm:inline">Previous Scene</span>
                  <span className="sm:hidden">Prev</span>
                </button>

                <div className="flex items-center gap-1.5">
                  {STORY_SCENES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelectScene(i)}
                      className={`h-2.5 rounded-full transition-all cursor-pointer min-w-[20px] min-h-[20px] flex items-center justify-center ${
                        activeSceneIndex === i ? 'w-6 bg-[#7A1F35]' : 'w-2.5 bg-[#C9A45C]/40 hover:bg-[#C9A45C]'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center gap-2 text-xs font-serif font-bold text-[#C9A45C] bg-[#7A1F35] hover:bg-[#63182A] active:scale-95 px-5 py-2.5 rounded-full transition-all cursor-pointer shadow-md touch-manipulation border border-[#C9A45C]/40"
                  aria-label="Next scene"
                >
                  <span className="hidden sm:inline">Next Scene</span>
                  <span className="sm:hidden">Next</span>
                  <ChevronRight className="w-4 h-4 text-[#C9A45C]" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

