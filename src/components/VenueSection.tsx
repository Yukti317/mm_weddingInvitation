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
    <section id="venue" className="relative py-24 px-4 bg-stone-950 text-white overflow-hidden border-t border-amber-500/20">
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900 border border-amber-500/30 text-amber-300 text-xs uppercase tracking-widest font-mono">
            <Building2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Wedding Destination</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-amber-300">
            The  Venue
          </h2>

          <p className="text-stone-300 text-sm sm:text-base font-serif italic">
            "laxmi party plot & banquet hall,Himmatnagar, Gujarat"
          </p>
        </div>

        {/* Venue Luxury Display Card */}
        <div className="relative rounded-3xl bg-stone-900/90 border border-amber-500/30 p-5 sm:p-8 md:p-12 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Left: Venue Specs & Address */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="space-y-1.5 sm:space-y-2">
              <span className="text-[10px] sm:text-xs font-mono text-amber-400 uppercase tracking-widest">
                Heritage Luxury Lawn & Pavilion
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-amber-100">
                Laxmi party plot & banquet hall
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm font-serif italic">
                khed tasiya road, Himatnagar, Gujarat 383001
              </p>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans border-t border-b border-stone-800 py-3 sm:py-4">
              A beautiful celebration of love, laughter, and togetherness awaits us. From joyful rituals to unforgettable moments, every corner will become a part of our story as we begin this beautiful journey together.

            </p>

            {/* <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3 text-xs font-serif text-amber-200">
              <div className="bg-stone-950/60 p-3 rounded-xl border border-stone-800">
                <span className="text-stone-400 block text-[10px] uppercase">Valet & Parking</span>
                <span className="font-semibold text-white">Complimentary Valet Service</span>
              </div>
              <div className="bg-stone-950/60 p-3 rounded-xl border border-stone-800">
                <span className="text-stone-400 block text-[10px] uppercase">Airport Distance</span>
                <span className="font-semibold text-white">25 mins from AMD Airport</span>
              </div>
            </div> */}

            {/* Get Directions Button */}
            <div className="pt-2">
              <button
                onClick={handleGetDirections}
                disabled={isDriving}
                className="w-full min-h-[48px] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 active:scale-95 text-stone-950 font-serif font-bold text-xs sm:text-sm tracking-wider shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 sm:gap-3 cursor-pointer touch-manipulation"
              >
                <Car className="w-4 h-4 sm:w-5 sm:h-5 text-stone-950 shrink-0" />
                <span className="text-center">Get Directions (Interactive Route)</span>
                <Navigation className="w-4 h-4 text-stone-950 shrink-0 hidden sm:inline" />
              </button>
            </div>
          </div>

          {/* Right: Venue Map Visual Representation */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-xl bg-stone-950 aspect-[4/3] flex flex-col items-center justify-center text-center p-6 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px]">
            <Compass className="w-12 h-12 text-amber-400 mb-3 animate-pulse" />
            <h4 className="font-serif font-bold text-xl text-amber-100">
              laxmi party plot & banquet hall            </h4>

            <span className="mt-4 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-serif italic">
              Click "Get Directions" to start navigation
            </span>
          </div>
        </div>
      </div>

      {/* Driving Car Roadmap Animation Modal */}
      <AnimatePresence>
        {isDriving && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/90 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-lg bg-stone-900 border-2 border-amber-400 rounded-3xl p-8 text-white shadow-2xl text-center space-y-6 overflow-hidden"
            >
              <Sparkles className="w-8 h-8 text-amber-400 mx-auto animate-bounce" />
              <h3 className="font-serif text-2xl font-bold text-amber-100">
                Calculating Route To Mukti & Mihir's Wedding...
              </h3>
              <p className="text-xs text-stone-300 font-serif italic">
                Driving from your location to Golden Palace Resort, Ahmedabad
              </p>

              {/* Roadmap Curve with Driving Car */}
              <div className="relative w-full h-24 bg-stone-950 rounded-2xl border border-amber-500/30 overflow-hidden flex items-center px-4">
                {/* Drawn Road Path Line */}
                <div className="w-full h-[3px] bg-dashed-line bg-amber-400/50 relative">
                  {/* Driving Car Icon */}
                  <motion.div
                    initial={{ left: '0%' }}
                    animate={{ left: '85%' }}
                    transition={{ duration: 2.5, ease: 'easeInOut' }}
                    className="absolute -top-3.5 flex items-center gap-1 text-amber-300"
                  >
                    <Car className="w-7 h-7 text-amber-400 drop-shadow-[0_0_10px_#fef08a]" />
                  </motion.div>
                </div>

                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs font-serif font-bold text-rose-300">
                  <MapPin className="w-5 h-5 text-rose-500 animate-bounce" />
                  <span>Venue</span>
                </div>
              </div>

              <p className="text-[11px] text-amber-400/80 font-mono">
                Launching Google Maps in 1 second...
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
