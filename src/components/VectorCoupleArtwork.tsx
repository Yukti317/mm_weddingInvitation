import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';

interface VectorCoupleArtworkProps {
  className?: string;
  showCaption?: boolean;
  caption?: string;
}

export const VectorCoupleArtwork: React.FC<VectorCoupleArtworkProps> = ({
  className = '',
  showCaption = true,
  caption = 'Mukti ❤️ Mihir',
}) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 via-indigo-950 to-stone-950 p-1 border-2 border-amber-500/40 shadow-2xl ${className}`}>
      {/* Background Night Sky & Palm Tree Ambient Silhouette */}
      <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-gradient-to-b from-stone-900 via-indigo-950 to-stone-950 flex flex-col justify-end">
        {/* Palm Tree Leaves Vector */}
        <svg
          className="absolute -top-6 left-1/2 -translate-x-1/2 w-full h-48 opacity-30 pointer-events-none"
          viewBox="0 0 400 200"
          fill="none"
        >
          <path
            d="M200,0 C150,60 80,80 0,100 C100,80 160,110 180,180 C190,120 220,100 300,120 C320,80 380,50 400,0 C320,40 260,30 200,0 Z"
            fill="#fef08a"
            opacity="0.2"
          />
        </svg>

        {/* Golden Fairy Light String */}
        <div className="absolute top-4 inset-x-0 flex justify-around px-6 z-10">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="w-2.5 h-2.5 rounded-full bg-amber-300 shadow-[0_0_10px_#fde047] animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>

        {/* Vector SVG Illustration of Mihir & Mukti */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-end">
          <svg
            viewBox="0 0 400 500"
            className="w-full h-full object-cover"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Vertical Blue/White Stripes Pattern for Mihir's Shirt */}
              <pattern
                id="mihirShirtStripes"
                width="12"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect width="6" height="20" fill="#f8fafc" />
                <rect x="6" width="6" height="20" fill="#cbd5e1" />
                <line x1="3" y1="0" x2="3" y2="20" stroke="#94a3b8" strokeWidth="1" />
              </pattern>

              {/* Vertical Light Blue Stripes Pattern for Mukti's Top */}
              <pattern
                id="muktiTopStripes"
                width="10"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect width="5" height="20" fill="#e0f2fe" />
                <rect x="5" width="5" height="20" fill="#bae6fd" />
                <line x1="2.5" y1="0" x2="2.5" y2="20" stroke="#38bdf8" strokeWidth="0.8" />
              </pattern>

              {/* Skin Tone Gradient */}
              <linearGradient id="skinGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f3c299" />
                <stop offset="100%" stopColor="#e5a775" />
              </linearGradient>

              {/* Golden Sunset Glow */}
              <radialGradient id="sunGlow" cx="50%" cy="40%" r="50%">
                <stop offset="0%" stopColor="#fde047" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Sunset Ambient Background */}
            <rect width="400" height="500" fill="url(#sunGlow)" />

            {/* Palm Tree Background Silhouette */}
            <path
              d="M190 280 Q200 120 220 20 Q120 80 40 100 Q150 120 180 280 Z"
              fill="#1e1b4b"
              opacity="0.4"
            />
            <path
              d="M210 280 Q220 100 350 40 Q280 110 360 180 Q250 150 210 280 Z"
              fill="#1e1b4b"
              opacity="0.3"
            />

            {/* --- MIHIR (GROOM) VECTOR - LEFT --- */}
            {/* Mihir Hair */}
            <path
              d="M120 145 C115 110, 165 95, 185 115 C195 130, 190 150, 180 155 Z"
              fill="#27272a"
            />

            {/* Mihir Face */}
            <path
              d="M130 140 C125 180, 175 185, 180 145 C180 130, 135 125, 130 140 Z"
              fill="url(#skinGradient)"
            />

            {/* Mihir Warm Smile & Eyes */}
            <path d="M142 165 Q155 178 168 165" stroke="#713f12" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <circle cx="145" cy="148" r="2.5" fill="#27272a" />
            <circle cx="165" cy="148" r="2.5" fill="#27272a" />
            {/* Eyebrows */}
            <path d="M138 142 Q145 138 150 142" stroke="#27272a" strokeWidth="2" fill="none" />
            <path d="M160 142 Q165 138 172 142" stroke="#27272a" strokeWidth="2" fill="none" />

            {/* Mihir Neck & Collar */}
            <path d="M145 175 L165 175 L168 190 L142 190 Z" fill="url(#skinGradient)" />

            {/* Mihir Striped Shirt Body */}
            <path
              d="M110 190 Q155 180 195 195 L200 380 Q150 390 105 380 Z"
              fill="url(#mihirShirtStripes)"
              stroke="#cbd5e1"
              strokeWidth="2"
            />
            {/* Collar V-Shape */}
            <path d="M140 190 L155 210 L170 190" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            {/* Buttons Line */}
            <line x1="155" y1="210" x2="155" y2="380" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 8" />

            {/* Mihir Jeans & Key Fob */}
            <path d="M105 380 Q150 390 200 380 L195 500 L100 500 Z" fill="#1e3a8a" />
            {/* Key Fob in Pocket */}
            <rect x="120" y="395" width="12" height="20" rx="3" fill="#000" stroke="#f59e0b" strokeWidth="1.5" />
            <circle cx="126" cy="400" r="2" fill="#38bdf8" />


            {/* --- MUKTI (BRIDE) VECTOR - RIGHT --- */}
            {/* Mukti Long Dark Hair */}
            <path
              d="M210 160 C200 120, 275 110, 280 160 C285 200, 275 260, 260 270 C240 250, 220 230, 210 160 Z"
              fill="#18181b"
            />

            {/* Mukti Face */}
            <path
              d="M220 155 C215 195, 265 200, 270 160 C270 140, 225 135, 220 155 Z"
              fill="url(#skinGradient)"
            />

            {/* Mukti Bright Smile & Makeup */}
            <path d="M232 180 Q245 193 258 180" stroke="#9f1239" strokeWidth="3" strokeLinecap="round" fill="none" />
            <circle cx="235" cy="162" r="2.5" fill="#18181b" />
            <circle cx="255" cy="162" r="2.5" fill="#18181b" />
            {/* Eyelashes */}
            <path d="M230 158 Q235 154 240 158" stroke="#18181b" strokeWidth="1.8" fill="none" />
            <path d="M250 158 Q255 154 260 158" stroke="#18181b" strokeWidth="1.8" fill="none" />

            {/* Mukti Neck & Off-Shoulder Collarbone */}
            <path d="M235 190 L255 190 L260 205 L230 205 Z" fill="url(#skinGradient)" />
            <path d="M215 205 Q245 215 275 205" stroke="#e5a775" strokeWidth="2" fill="none" />

            {/* Mukti Off-Shoulder Light Blue Striped Top */}
            <path
              d="M205 205 Q245 210 285 205 L290 350 Q245 360 200 350 Z"
              fill="url(#muktiTopStripes)"
              stroke="#38bdf8"
              strokeWidth="1.5"
            />
            {/* Off-Shoulder Sleeve Detail */}
            <path d="M205 205 C195 215, 200 240, 210 245" stroke="#bae6fd" strokeWidth="3" fill="none" />
            <path d="M285 205 C295 215, 290 240, 280 245" stroke="#bae6fd" strokeWidth="3" fill="none" />

            {/* Mukti Gold Wristwatch */}
            <rect x="282" y="320" width="8" height="12" rx="2" fill="#f59e0b" stroke="#fef08a" strokeWidth="1" />

            {/* Mukti Black Trousers */}
            <path d="M200 350 Q245 360 290 350 L285 500 L205 500 Z" fill="#09090b" />

            {/* Glowing Hearts Floating Between Them */}
            <g className="animate-bounce">
              <path
                d="M200 150 C195 140 185 140 185 150 C185 160 200 170 200 170 C200 170 215 160 215 150 C215 140 205 140 200 150 Z"
                fill="#f43f5e"
                opacity="0.9"
              />
            </g>
          </svg>
        </div>

        {/* Vector Illustrator Badge Overlay */}
        <div className="absolute top-3 left-3 bg-stone-900/90 backdrop-blur-md border border-amber-500/40 px-3 py-1 rounded-full flex items-center gap-1.5 text-[10px] font-mono text-amber-300 z-20 shadow-lg">
          <Sparkles className="w-3 h-3 text-amber-400 animate-spin" />
          <span>Vector Illustrator Edition</span>
        </div>
      </div>

      {showCaption && (
        <div className="p-4 text-center bg-stone-950/90 border-t border-amber-500/30 font-serif">
          <p className="text-xl font-bold text-amber-100 italic">{caption}</p>
          <p className="text-xs text-amber-400/80 uppercase tracking-widest mt-0.5">
            Mihir & Mukti • Vector Artwork
          </p>
        </div>
      )}
    </div>
  );
};
