import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Navigation, Car, Building2, Sparkles, ExternalLink, Compass } from 'lucide-react';

export const VenueSection: React.FC = () => {
  const [isDriving, setIsDriving] = useState(false);

  const handleGetDirections = () => {
    setIsDriving(true);

    // Simulate car driving along roadmap animation before redirecting to Google Maps
    setTimeout(() => {
      window.open(
        'https://www.google.com/maps/dir//laxmi+party+plot+%26+banquet+hall.+A%2FC,+khed+tasiya+road,+Himatnagar,+Gujarat+383001/@23.6042698,72.9754075,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x395db8dcaf01d959:0xbcbb3146a2e8d60!2m2!1d72.9750766!2d23.6040649?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
        '_blank'
      );
      setIsDriving(false);
    }, 2800);
  };

  return (
    <section id="venue" className="relative py-24 px-4 bg-[#FFF9F0] text-[#332629] overflow-hidden border-t border-[#C9A45C]/30">
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF9F0] border border-[#C9A45C] text-[#7A1F35] text-xs uppercase tracking-widest font-mono shadow-sm">
            <Building2 className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span className="font-semibold">Wedding Destination</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-[#7A1F35]">
            The Venue
          </h2>

          <p className="text-[#332629] text-sm sm:text-base font-serif italic">
            "Laxmi Party Plot & Banquet Hall, Himatnagar, Gujarat"
          </p>
        </div>

        {/* Venue Luxury Display Card */}
        <div className="relative rounded-3xl bg-[#FFF9F0] border-2 border-[#C9A45C] p-5 sm:p-8 md:p-12 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Left: Venue Specs & Address */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="space-y-1.5 sm:space-y-2">
              <span className="text-[10px] sm:text-xs font-mono text-[#7A1F35] font-semibold uppercase tracking-widest">
                Heritage Luxury Lawn & Pavilion
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#7A1F35]">
                Laxmi party plot & banquet hall
              </h3>
              <p className="text-[#332629] text-xs sm:text-sm font-serif italic">
                khed tasiya road, Himatnagar, Gujarat 383001
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#332629] leading-relaxed font-sans border-t border-b border-[#C9A45C]/30 py-3 sm:py-4">
              A beautiful celebration of love, laughter, and togetherness awaits us. From joyful rituals to unforgettable moments, every corner will become a part of our story as we begin this beautiful journey together.
            </p>

            {/* Get Directions Button: 🍷 #7A1F35 + gold text */}
            <div className="pt-2">
              <button
                onClick={handleGetDirections}
                disabled={isDriving}
                className="w-full min-h-[48px] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#7A1F35] hover:bg-[#63182A] active:scale-95 text-[#C9A45C] border border-[#C9A45C]/50 font-serif font-bold text-xs sm:text-sm tracking-wider shadow-md transition-all hover:scale-[1.01] flex items-center justify-center gap-2 sm:gap-3 cursor-pointer touch-manipulation"
              >
                <Car className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A45C] shrink-0" />
                <span className="text-center">Get Directions (Interactive Route)</span>
                <Navigation className="w-4 h-4 text-[#C9A45C] shrink-0 hidden sm:inline" />
              </button>
            </div>
          </div>

          {/* Right: Venue Map Visual Representation */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border-2 border-[#C9A45C] shadow-lg bg-[#F8E8E5] aspect-[4/3] flex flex-col items-center justify-center text-center p-6 bg-[radial-gradient(#C9A45C_1px,transparent_1px)] [background-size:24px_24px]">
            <Compass className="w-12 h-12 text-[#C9A45C] mb-3 animate-pulse" />
            <h4 className="font-serif font-bold text-xl text-[#7A1F35]">
              Laxmi Party Plot & Banquet Hall
            </h4>

            <span className="mt-4 px-4 py-1.5 rounded-full bg-[#FFF9F0] border border-[#C9A45C] text-[#7A1F35] text-xs font-serif italic shadow-sm">
              Click "Get Directions" to start navigation
            </span>
          </div>
        </div>
      </div>

      {/* Driving Car Roadmap Animation Modal */}
      <AnimatePresence>
        {isDriving && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-lg bg-[#FFF9F0] border-2 border-[#C9A45C] rounded-3xl p-8 text-[#332629] shadow-2xl text-center space-y-6 overflow-hidden"
            >
              <Sparkles className="w-8 h-8 text-[#C9A45C] mx-auto animate-bounce" />
              <h3 className="font-serif text-2xl font-bold text-[#7A1F35]">
                Calculating Route To Mukti & Mihir's Wedding...
              </h3>
              <p className="text-xs text-[#332629] font-serif italic">
                Driving to Laxmi Party Plot & Banquet Hall, Himatnagar
              </p>

              {/* Roadmap Curve with Driving Car */}
              <div className="relative w-full h-24 bg-[#F8E8E5] rounded-2xl border border-[#C9A45C]/50 overflow-hidden flex items-center px-4">
                {/* Drawn Road Path Line */}
                <div className="w-full h-[3px] bg-dashed-line bg-[#C9A45C] relative">
                  {/* Driving Car Icon */}
                  <motion.div
                    initial={{ left: '0%' }}
                    animate={{ left: '85%' }}
                    transition={{ duration: 2.5, ease: 'easeInOut' }}
                    className="absolute -top-3.5 flex items-center gap-1 text-[#7A1F35]"
                  >
                    <Car className="w-7 h-7 text-[#7A1F35]" />
                  </motion.div>
                </div>

                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs font-serif font-bold text-[#7A1F35]">
                  <MapPin className="w-5 h-5 text-[#7A1F35] animate-bounce" />
                  <span>Venue</span>
                </div>
              </div>

              <p className="text-[11px] text-[#7A1F35] font-mono">
                Launching Google Maps in 1 second...
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
