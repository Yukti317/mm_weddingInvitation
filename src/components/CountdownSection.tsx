import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Clock, Heart, Flower2 } from 'lucide-react';
import { EVENT_DATES, BRIDE_NAME, GROOM_NAME } from '../data/weddingData';

export const CountdownSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(EVENT_DATES.targetDateIso).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 px-4 bg-[#F8E8E5] text-[#332629] overflow-hidden border-t border-b border-[#C9A45C]/30">
      {/* Blooming Flower Background Ornaments */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 text-[#C9A45C]/15 pointer-events-none animate-spin-slow">
        <Flower2 className="w-64 h-64" />
      </div>
      <div className="absolute top-1/2 right-10 -translate-y-1/2 text-[#7A1F35]/10 pointer-events-none animate-spin-slow">
        <Flower2 className="w-64 h-64" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF9F0] border border-[#C9A45C] text-[#7A1F35] text-xs uppercase tracking-widest font-mono shadow-sm">
            <Clock className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span className="font-semibold">Counting Down The Moments</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#7A1F35]">
            Counting Down To {BRIDE_NAME} & {GROOM_NAME}'s Forever
          </h2>

          <p className="text-xs sm:text-sm font-serif italic text-[#332629]/90">
            25 & 26 November 2026 • Laxmi Party Plot, Himatnagar
          </p>
        </div>

        {/* Glassmorphic Countdown Display */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-4 sm:p-6 rounded-2xl bg-[#FFF9F0] border-2 border-[#C9A45C] shadow-lg flex flex-col items-center justify-center space-y-1 sm:space-y-2 group hover:border-[#7A1F35] transition-all"
            >
              <div className="absolute top-2 right-2 text-[#C9A45C]/50 group-hover:text-[#C9A45C] transition-colors">
                <Flower2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>

              <span className="text-3xl sm:text-5xl md:text-6xl font-serif font-extrabold text-[#7A1F35]">
                {String(item.value).padStart(2, '0')}
              </span>

              <span className="text-[10px] sm:text-xs uppercase font-mono tracking-widest text-[#332629] font-medium">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Milestone Note */}
        <div className="inline-flex items-center gap-2 text-xs font-serif italic text-[#7A1F35] bg-[#FFF9F0] px-6 py-2 rounded-full border border-[#C9A45C] shadow-sm font-medium">
          <Sparkles className="w-4 h-4 text-[#C9A45C] animate-pulse" />
          <span>Every second brings us closer to the sacred wedding bells</span>
        </div>
      </div>
    </section>
  );
};
