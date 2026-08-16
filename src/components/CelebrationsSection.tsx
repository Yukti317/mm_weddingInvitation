import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { gsap } from 'gsap';
import { Sun, Sparkles, Music, HeartHandshake, Calendar, Clock, MapPin, Shirt, CheckCircle } from 'lucide-react';
import { WEDDING_EVENTS } from '../data/weddingData';
import { triggerGoldenPetals, triggerRoseShower } from '../utils/confetti';

interface CelebrationsSectionProps {
  onOpenRsvp?: (eventId?: string) => void;
}

export const CelebrationsSection: React.FC<CelebrationsSectionProps> = ({ onOpenRsvp }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Subtle GSAP Floating Animation for Ceremony Cards
  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.to(card, {
          y: index % 2 === 0 ? -10 : 10,
          rotation: index % 2 === 0 ? 0.6 : -0.6,
          duration: 3.2 + index * 0.4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.2,
        });
      });
    });

    return () => ctx.revert();
  }, [activeTab]);

  const getEventIcon = (id: string) => {
    switch (id) {
      case 'haldi':
        return <Sun className="w-6 h-6 text-amber-400" />;
      case 'mehendi':
        return <Sparkles className="w-6 h-6 text-emerald-400" />;
      case 'sangeet':
        return <Music className="w-6 h-6 text-purple-400" />;
      case 'wedding':
        return <HeartHandshake className="w-6 h-6 text-rose-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  const triggerEventAnimation = (id: string) => {
    if (id === 'haldi') {
      triggerGoldenPetals();
    } else if (id === 'wedding') {
      triggerRoseShower();
    } else {
      triggerGoldenPetals();
    }
  };

  const generateGoogleCalendarLink = (title: string, dateStr: string, venue: string, details: string) => {
    const isWedding = title.includes('Wedding');
    const startIso = isWedding ? '20261126T180000' : '20261125T100000';
    const endIso = isWedding ? '20261126T235900' : '20261125T235900';

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      `Mukti & Mihir Wedding: ${title}`
    )}&dates=${startIso}/${endIso}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(
      venue
    )}`;
  };

  return (
    <section id="events" className="relative py-24 px-4 bg-stone-950 text-white overflow-hidden">
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-stone-900 border border-amber-500/30 text-amber-300 text-xs uppercase tracking-widest font-mono">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>25 & 26 November 2026</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-amber-300">
            Wedding Celebrations
          </h2>

          <p className="text-stone-300 text-sm sm:text-base font-serif italic">
            "Four unforgettable ceremonies filled with love, music, traditions, and joy."
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-1.5 sm:gap-3 flex-wrap">
          <button
            onClick={() => setActiveTab('all')}
            className={`min-h-[40px] px-4 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-serif font-semibold tracking-wider transition-all cursor-pointer touch-manipulation active:scale-95 ${
              activeTab === 'all'
                ? 'bg-amber-400 text-stone-950 font-bold shadow-lg shadow-amber-400/20'
                : 'bg-stone-900 text-stone-400 hover:text-amber-200 border border-stone-800'
            }`}
          >
            All Ceremonies
          </button>
          <button
            onClick={() => setActiveTab('nov25')}
            className={`min-h-[40px] px-4 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-serif font-semibold tracking-wider transition-all cursor-pointer touch-manipulation active:scale-95 ${
              activeTab === 'nov25'
                ? 'bg-amber-400 text-stone-950 font-bold shadow-lg shadow-amber-400/20'
                : 'bg-stone-900 text-stone-400 hover:text-amber-200 border border-stone-800'
            }`}
          >
            25 Nov (Haldi, Mehendi, Sangeet)
          </button>
          <button
            onClick={() => setActiveTab('nov26')}
            className={`min-h-[40px] px-4 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-serif font-semibold tracking-wider transition-all cursor-pointer touch-manipulation active:scale-95 ${
              activeTab === 'nov26'
                ? 'bg-amber-400 text-stone-950 font-bold shadow-lg shadow-amber-400/20'
                : 'bg-stone-900 text-stone-400 hover:text-amber-200 border border-stone-800'
            }`}
          >
            26 Nov (Royal Wedding)
          </button>
        </div>

        {/* Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {WEDDING_EVENTS.filter((evt) => {
            if (activeTab === 'nov25') return evt.date.includes('25');
            if (activeTab === 'nov26') return evt.date.includes('26');
            return true;
          }).map((evt, index) => (
            <motion.div
              key={evt.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onClick={() => triggerEventAnimation(evt.id)}
              className="relative group rounded-3xl bg-gradient-to-b from-stone-900/90 to-stone-950 border border-amber-500/30 p-5 sm:p-8 shadow-2xl overflow-hidden cursor-pointer transition-colors flex flex-col justify-between"
            >
              {/* Event Specific Animated Visual Background Accent */}
              {evt.id === 'haldi' && (
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl group-hover:bg-amber-400/20 transition-all pointer-events-none" />
              )}
              {evt.id === 'mehendi' && (
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all pointer-events-none" />
              )}
              {evt.id === 'sangeet' && (
                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/15 rounded-full blur-3xl group-hover:bg-purple-500/25 transition-all pointer-events-none" />
              )}
              {evt.id === 'wedding' && (
                <div className="absolute top-0 right-0 w-48 h-48 bg-rose-600/15 rounded-full blur-3xl group-hover:bg-rose-600/25 transition-all pointer-events-none" />
              )}

              <div className="space-y-4 sm:space-y-6 relative z-10">
                {/* Header Badge & Title */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] sm:text-xs font-mono text-amber-400 uppercase tracking-widest">
                      {evt.subTitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-100 mt-1">
                      {evt.title}
                    </h3>
                  </div>
                  <div className="p-2.5 sm:p-3 rounded-2xl bg-stone-800/80 border border-amber-500/20 shadow-md shrink-0">
                    {getEventIcon(evt.id)}
                  </div>
                </div>

                {/* Date & Time Info */}
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3 text-xs text-stone-300 font-serif bg-stone-950/60 p-3.5 sm:p-4 rounded-xl border border-stone-800">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <p className="text-[10px] text-stone-400 uppercase">Date</p>
                      <p className="font-semibold text-amber-200 text-xs sm:text-sm">{evt.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <p className="text-[10px] text-stone-400 uppercase">Time</p>
                      <p className="font-semibold text-amber-200 text-xs sm:text-sm">{evt.time}</p>
                    </div>
                  </div>
                </div>

                {/* Venue & Dress Code */}
                <div className="space-y-2 text-xs text-stone-300">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-stone-400 font-serif">Venue: </span>
                      <span className="font-semibold text-white">{evt.venue}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Shirt className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-stone-400 font-serif">Dress Code: </span>
                      <span className="text-amber-200 italic">{evt.dressCode}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-stone-400 leading-relaxed font-sans pt-2 border-t border-stone-800">
                  {evt.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 sm:mt-8 pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3 relative z-10">
                <a
                  href={generateGoogleCalendarLink(evt.title, evt.date, evt.venue, evt.description)}
                  target="_blank"
                  rel="noreferrer"
                  className="min-h-[44px] px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-amber-200 text-xs font-serif font-semibold border border-amber-500/20 hover:border-amber-400 transition-colors flex items-center justify-center gap-1.5 touch-manipulation active:scale-95"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>Add to Calendar</span>
                </a>

                {/* <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onOpenRsvp) onOpenRsvp(evt.id);
                  }}
                  className="min-h-[44px] px-5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-serif font-bold shadow-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer touch-manipulation active:scale-95"
                >
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>RSVP</span>
                </button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
