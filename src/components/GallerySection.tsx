import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, X, Sparkles, MapPin, Calendar, Heart, ZoomIn, ChevronLeft, ChevronRight, MoveHorizontal } from 'lucide-react';
import { PhotoTransformer, ArtisticStyle } from './PhotoTransformer';
import { GALLERY_ITEMS } from '../data/weddingData';

export const GallerySection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedItem = selectedIndex !== null ? GALLERY_ITEMS[selectedIndex] : null;

  const triggerHaptic = () => {
    try {
      if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(12);
      }
    } catch {
      // Ignore vibration errors
    }
  };

  const handleOpenModal = (idx: number) => {
    triggerHaptic();
    setSelectedIndex(idx);
  };

  const handleCloseModal = () => {
    triggerHaptic();
    setSelectedIndex(null);
  };

  const handleNextPhoto = () => {
    triggerHaptic();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! + 1) % GALLERY_ITEMS.length);
    }
  };

  const handlePrevPhoto = () => {
    triggerHaptic();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') handleCloseModal();
      if (e.key === 'ArrowRight') handleNextPhoto();
      if (e.key === 'ArrowLeft') handlePrevPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <section id="gallery" className="relative py-24 px-4 bg-[#FFF9F0] text-[#332629] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C9A45C]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF9F0] border border-[#C9A45C] text-[#7A1F35] text-xs uppercase tracking-widest font-mono shadow-sm">
            <Camera className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span className="font-semibold">Interactive Memory Wall</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-[#7A1F35]">
            Treasured Gallery
          </h2>

          <p className="text-[#332629] text-sm sm:text-base font-serif italic">
            "Floating Polaroids, film strips, magazine spreads, and artistic frames of our love."
          </p>
        </div>

        {/* Gallery Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => handleOpenModal(idx)}
              className="cursor-pointer group relative touch-manipulation active:scale-[0.98] transition-transform duration-200"
            >
              <div className="relative transform group-hover:scale-102 transition-transform duration-500">
                <PhotoTransformer
                  style={item.style as ArtisticStyle}
                  caption={item.title}
                  subCaption={`${item.category} • ${item.date}`}
                />

                {/* Always-visible subtle touch badge on mobile & hover overlay on desktop */}
                <div className="absolute top-3 right-3 sm:inset-0 bg-[#FFF9F0]/90 sm:bg-[#FFF9F0]/85 sm:opacity-0 group-hover:opacity-100 transition-opacity rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 px-3 py-1.5 sm:px-0 sm:py-0 text-[#7A1F35] font-serif font-bold text-xs sm:text-sm backdrop-blur-md border border-[#C9A45C] shadow-md">
                  <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A45C]" />
                  <span className="sm:inline font-semibold">View Details</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal with Swipe Support */}
      <AnimatePresence>
        {selectedItem && selectedIndex !== null && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/60 backdrop-blur-md overflow-y-auto overflow-x-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Photo Gallery Lightbox"
          >
            {/* Backdrop click to close */}
            <div 
              className="fixed inset-0"
              onClick={handleCloseModal} 
              aria-label="Close modal overlay"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative z-10 w-full max-w-[min(94vw,520px)] bg-[#FFF9F0] border-2 border-[#C9A45C] rounded-3xl p-4 sm:p-6 md:p-8 text-[#332629] shadow-2xl overflow-y-auto max-h-[92vh] overflow-x-hidden space-y-4 sm:space-y-6 select-none my-auto"
            >
              {/* Close Button - Touch Target >= 44px */}
              <button
                onClick={handleCloseModal}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-40 min-w-[44px] min-h-[44px] p-2.5 rounded-full bg-[#7A1F35] hover:bg-[#63182A] active:scale-95 text-[#C9A45C] transition-all flex items-center justify-center border border-[#C9A45C]/40 touch-manipulation cursor-pointer shadow-md"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Mobile Swipe Hint */}
              <div className="flex items-center justify-center gap-2 text-[#332629]/70 text-[11px] sm:text-xs font-mono pt-1 sm:hidden">
                <MoveHorizontal className="w-3.5 h-3.5 text-[#C9A45C] animate-pulse" />
                <span>Swipe left/right to browse gallery</span>
              </div>

              {/* Lightbox Photo View Container with Responsive Floating Nav Arrows */}
              <div className="relative flex items-center justify-center w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[420px] mx-auto py-1 sm:py-2">
                {/* Floating Previous Arrow Button */}
                <button
                  onClick={(e) => { e.stopPropagation(); handlePrevPhoto(); }}
                  className="absolute -left-1 sm:-left-5 md:-left-7 z-30 min-w-[44px] min-h-[44px] w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#7A1F35] hover:bg-[#63182A] active:scale-90 text-[#C9A45C] border border-[#C9A45C] shadow-md flex items-center justify-center touch-manipulation cursor-pointer transition-all group shrink-0"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                </button>

                {/* Draggable / Swipable Photo Card */}
                <motion.div
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -40) {
                      handleNextPhoto();
                    } else if (info.offset.x > 40) {
                      handlePrevPhoto();
                    }
                  }}
                  className="w-full max-w-[260px] xs:max-w-[290px] sm:max-w-[350px] mx-auto cursor-grab active:cursor-grabbing touch-pan-y"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedItem.id}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                    >
                      <PhotoTransformer
                        style={selectedItem.style as ArtisticStyle}
                        caption={selectedItem.title}
                        subCaption={selectedItem.category}
                      />
                    </motion.div>
                  </AnimatePresence>
                </motion.div>

                {/* Floating Next Arrow Button */}
                <button
                  onClick={(e) => { e.stopPropagation(); handleNextPhoto(); }}
                  className="absolute -right-1 sm:-right-5 md:-right-7 z-30 min-w-[44px] min-h-[44px] w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#7A1F35] hover:bg-[#63182A] active:scale-90 text-[#C9A45C] border border-[#C9A45C] shadow-md flex items-center justify-center touch-manipulation cursor-pointer transition-all group shrink-0"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* Photo Metadata Details */}
              <div className="space-y-3 text-center border-t border-[#C9A45C]/30 pt-4 px-1">
                <div className="flex items-center justify-between text-xs sm:text-sm font-mono text-[#332629]">
                  <span>Photo {selectedIndex + 1} of {GALLERY_ITEMS.length}</span>
                  <span className="text-[#7A1F35] font-bold uppercase tracking-wider text-[11px] sm:text-xs">{selectedItem.style}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#7A1F35] break-words leading-tight">
                  {selectedItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#332629] font-serif italic max-w-md mx-auto">
                  "{selectedItem.caption}"
                </p>

                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-mono text-[#7A1F35] pt-1 font-semibold">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C9A45C] shrink-0" />
                    <span>{selectedItem.location}</span>
                  </span>
                  <span className="hidden xs:inline">•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#C9A45C] shrink-0" />
                    <span>{selectedItem.date}</span>
                  </span>
                </div>

                {/* Quick Dots Pagination */}
                <div className="flex items-center justify-center gap-1 pt-2">
                  {GALLERY_ITEMS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { triggerHaptic(); setSelectedIndex(i); }}
                      className="min-h-[36px] min-w-[32px] sm:min-w-[36px] flex items-center justify-center transition-all cursor-pointer touch-manipulation"
                      aria-label={`Go to photo ${i + 1}`}
                    >
                      <span className={`h-2 rounded-full transition-all ${
                        selectedIndex === i ? 'w-6 bg-[#7A1F35]' : 'w-2 bg-[#C9A45C]/40 hover:bg-[#C9A45C]'
                      }`} />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

