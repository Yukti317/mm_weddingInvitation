import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Bookmark, Star } from 'lucide-react';
import { COUPLE_PHOTOS } from '../data/couplePhotos';
import img1 from '../../assets/img/img6.jpeg';
import img2 from '../../assets/img/img2.jpeg';
import img3 from '../../assets/img/img3.jpeg';
import img4 from '../../assets/img/img4.jpeg';
import img5 from '../../assets/img/img9.jpeg';
import img6 from '../../assets/img/img1.jpeg';
import img7 from '../../assets/img/img7.jpeg';
import img10 from '../../assets/img/img10.jpeg';
import img11 from '../../assets/img/img11.jpeg';

export type ArtisticStyle =
  | 'vector'
  | 'watercolor'
  | 'magazine'
  | 'polaroid'
  | 'scrapbook'
  | 'sketch'
  | 'lineart'
  | 'framed';

  const STYLE_IMAGES: Record<ArtisticStyle, string> = {
  watercolor: img1,
  magazine: img2,
  polaroid: img3,
  scrapbook: img4,
  sketch: img5,
  lineart: img6,
  vector: img10,
  framed:img11
};
interface PhotoTransformerProps {
  style: ArtisticStyle;
  caption?: string;
  subCaption?: string;
  className?: string;
  interactive?: boolean;
  image?: string;
}

export const PhotoTransformer: React.FC<PhotoTransformerProps> = ({
  style,
  caption,
  subCaption,
  className = '',
  interactive = true,
  image, // Optional image prop for custom image input
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const selectedImage = image || STYLE_IMAGES[style];

  // Map each artistic style to one of the 5 uploaded couple photos
  const getPhotoForStyle = (s: ArtisticStyle) => {
    switch (s) {
      case 'sketch':
      case 'lineart':
        return COUPLE_PHOTOS[0]; // B&W Joyful Hug
      case 'watercolor':
        return COUPLE_PHOTOS[1]; // Lakeside Gazebo
      case 'polaroid':
        return COUPLE_PHOTOS[2]; // Sunlit Stroll
      case 'magazine':
      case 'framed':
        return COUPLE_PHOTOS[3]; // Evening Royal Ethnic
      case 'scrapbook':
      case 'vector':
      default:
        return COUPLE_PHOTOS[4]; // Festive Tilak & Mehendi
    }
  };

  const photo = getPhotoForStyle(style);

  // High resolution SVG & Canvas stylized couple image representation
  // Rendered with artistic filters and layers based on selected style
  return (
    <div
      className={`relative group transition-all duration-700 ${className}`}
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
    >
      {/* Global SVG Filters for Artistic Transformations */}
      <svg className="hidden absolute w-0 h-0" aria-hidden="true">
        <defs>
          {/* Watercolor Filter */}
          <filter id="svg-watercolor" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" result="displaced" />
            <feColorMatrix type="saturate" values="1.3" result="saturated" />
            <feBlend mode="multiply" in="saturated" in2="SourceGraphic" />
          </filter>

          {/* Pencil Sketch Filter */}
          <filter id="svg-sketch" x="-10%" y="-10%" width="120%" height="120%">
            <feColorMatrix type="matrix" values="0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0 0 0 1 0" result="gray" />
            <feConvolveMatrix order="3" kernelMatrix="-1 -1 -1  -1 8 -1  -1 -1 -1" preserveAlpha="true" result="edges" />
            <feColorMatrix type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" result="inverted" />
            <feBlend mode="screen" in="inverted" in2="gray" />
          </filter>

          {/* Gold Line Art Filter */}
          <filter id="svg-lineart" x="-10%" y="-10%" width="120%" height="120%">
            <feColorMatrix type="matrix" values="0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0 0 0 1 0" result="mono" />
            <feComponentTransfer>
              <feFuncR type="linear" slope="2" intercept="-0.5" />
              <feFuncG type="linear" slope="2" intercept="-0.5" />
              <feFuncB type="linear" slope="2" intercept="-0.5" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>

      {/* STYLE 1: WATERCOLOR PAINTING */}
      {style === 'watercolor' && (
        <div className="relative p-6 bg-amber-50/90 rounded-2xl shadow-2xl border border-amber-200/60 overflow-hidden">
  {/* Paper texture overlay */}
  <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

  {/* Watercolor paint splash decorations */}
  <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-300/30 rounded-full blur-2xl" />
  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-amber-300/30 rounded-full blur-2xl" />

  <div className="relative isolate rounded-lg overflow-hidden border-4 border-white shadow-inner">
    <div className="relative aspect-[3/4] w-full overflow-hidden bg-rose-50">
      {/* Image with Watercolor Filter Effect */}
      <div
        className="w-full h-full bg-cover bg-center transition-transform duration-1000 scale-105 group-hover:scale-110"
        style={{
          backgroundImage: `url('${selectedImage}')`,
          filter: 'contrast(1.08) saturate(1.2) sepia(0.15)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-rose-950/25 via-transparent to-amber-200/15 mix-blend-multiply" />
      <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[radial-gradient(circle,#fbcfe8,transparent)]" />
    </div>
  </div>

  <div className="mt-4 text-center font-serif">
    <h4 className="text-xl font-bold text-amber-950 italic">{caption || 'Mukti ❤️ Mihir'}</h4>
    <p className="text-xs text-amber-800/80 uppercase tracking-widest mt-1">Watercolor Fine Art • 2026</p>
  </div>
</div>
      )}

      {/* STYLE 2: EDITORIAL MAGAZINE COVER */}
      {style === 'magazine' && (
        <div className="relative bg-zinc-950 rounded-2xl p-2 shadow-2xl border border-amber-500/30 overflow-hidden text-white">
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-zinc-900">
            {/* Magazine Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-100 group-hover:scale-105"
              style={{
                backgroundImage: `url('${selectedImage}')`,
                filter: 'contrast(1.15) brightness(1.02)',
              }}
            />
            
            {/* Editorial Vignette & Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60" />

            {/* Top Magazine Header */}
            <div className="absolute top-0 inset-x-0 p-3 sm:p-6 flex flex-col items-center justify-start text-center">
              <div className="flex items-center justify-between w-full text-[8px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.3em] font-mono text-amber-200/80 uppercase mb-1 border-b border-amber-500/30 pb-1">
                <span>LIMITED WEDDING EDITION</span>
                <span>VOL. 26 • NOV 2026</span>
              </div>
              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-amber-400 drop-shadow-md">
                L'AMOUR
              </h2>
              <p className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.4em] uppercase text-rose-200/90 font-light mt-0.5 sm:mt-1">
                THE CELEBRATION ISSUE
              </p>
            </div>

            {/* Side Cover Headlines */}
            <div className="absolute left-3 sm:left-6 bottom-16 sm:bottom-24 space-y-2 sm:space-y-3 max-w-[140px] sm:max-w-[200px]">
              <div className="border-l-2 border-amber-400 pl-2 sm:pl-3">
                <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-amber-300 font-semibold block">Exclusive Story</span>
                <h5 className="text-xs sm:text-sm font-serif font-bold leading-tight">MUKTI & MIHIR</h5>
                <p className="text-[9px] sm:text-[10px] text-zinc-300">Beginning Their Forever</p>
              </div>
              <div className="border-l-2 border-rose-400 pl-2 sm:pl-3">
                <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-rose-300 font-semibold block">Save The Date</span>
                <p className="text-[10px] sm:text-[11px] font-semibold text-amber-200">25 & 26 NOVEMBER 2026</p>
              </div>
            </div>

            {/* Bottom Barcode & Footer */}
            <div className="absolute bottom-2 sm:bottom-4 inset-x-3 sm:inset-x-6 flex items-end justify-between border-t border-amber-500/20 pt-2 sm:pt-3">
              <div>
                <p className="text-[8px] sm:text-[9px] tracking-widest text-amber-200/80 uppercase">Ahmedabad • Royal Palace</p>
                <p className="text-[10px] sm:text-[11px] font-serif italic text-white/90">A Love Story For The Ages</p>
              </div>
              {/* Fake Barcode */}
              <div className="hidden xs:flex gap-[2px] h-5 sm:h-6 items-center bg-white/90 p-1 rounded px-1.5 sm:px-2">
                {[2,4,1,3,2,1,4,2,3,1,2,4,1].map((w, i) => (
                  <div key={i} className="bg-black h-full" style={{ width: `${w}px` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STYLE 3: POLAROID HANGING ON FAIRY LIGHTS */}
      {style === 'polaroid' && (
        <div className="relative pt-8">
          {/* String Fairy Lights with Glowing Bulbs */}
          <div className="absolute top-0 inset-x-0 h-8 flex items-center justify-between z-20 px-4">
            <div className="w-full h-[2px] bg-amber-400/50 relative">
              {[15, 38, 62, 85].map((pos, idx) => (
                <div
                  key={idx}
                  className="absolute -top-1 w-3 h-3 bg-amber-200 rounded-full shadow-[0_0_10px_#fef08a] animate-pulse"
                  style={{ left: `${pos}%`, animationDelay: `${idx * 0.4}s` }}
                />
              ))}
            </div>
          </div>

          {/* Wooden Clothespeg */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-8 bg-amber-800 rounded-sm shadow-md border border-amber-900 z-30 flex flex-col justify-between items-center py-1">
            <div className="w-full h-[2px] bg-amber-300" />
            <div className="w-2 h-2 rounded-full border border-zinc-400" />
          </div>

          {/* Polaroid Card */}
          <motion.div
            animate={{ rotate: isHovered ? 0 : -2 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="bg-stone-50 p-4 pb-6 rounded shadow-xl border border-stone-200 max-w-sm mx-auto transform -rotate-1 group-hover:shadow-2xl transition-all"
          >
            <div className="aspect-[4/5] bg-zinc-900 rounded-sm overflow-hidden mb-4 relative">
{/* <img src={img1} alt="Couple" className="w-full h-full object-cover" /> */}
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('${selectedImage}')`,
                  filter: 'contrast(1.05) saturate(1.1) sepia(0.08)',
                }}
              />
              <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/50 backdrop-blur-md rounded text-[10px] text-amber-200 font-mono">
                25•11•2026
              </div>
            </div>

            <div className="text-center">
              <p className="font-serif italic text-stone-800 text-lg">{caption || 'Mukti ❤️ Mihir'}</p>
              <p className="text-xs font-mono text-stone-500 uppercase tracking-widest mt-1">
                {subCaption || 'Captured in Golden Hour'}
              </p>
            </div>
          </motion.div>
        </div>
      )}

      {/* STYLE 4: SCRAPBOOK MEMORIES */}
      {style === 'scrapbook' && (
        <div className="relative p-6 bg-[#f7f3e9] rounded-2xl shadow-xl border border-amber-900/10 overflow-hidden">
          {/* Washi Tape Accent */}
          <div className="absolute -top-3 left-10 w-24 h-8 bg-rose-200/60 backdrop-blur-sm -rotate-6 border-y border-dashed border-rose-300 z-20 shadow-sm" />
          <div className="absolute -bottom-3 right-10 w-28 h-8 bg-amber-200/60 backdrop-blur-sm rotate-3 border-y border-dashed border-amber-300 z-20 shadow-sm" />

          {/* Wax Stamp */}
         <div
  className="absolute top-2 right-2 sm:top-4 sm:right-4 w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12
             rounded-full bg-gradient-to-br from-rose-800 via-rose-900 to-rose-950
             border-2 border-amber-400/90
             shadow-[0_2px_8px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.15)]
             flex items-center justify-center z-20
             text-amber-200 font-serif font-bold
             text-[9px] xs:text-[10px] sm:text-xs
             tracking-wide leading-none text-center px-1"
>
  M ❤️ M
</div>

          <div className="bg-white p-3 rounded-lg shadow-md border border-stone-200 transform rotate-1">
            <div className="aspect-[4/5] overflow-hidden rounded relative">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('${selectedImage}')`,
                  filter: 'contrast(1.08) saturate(1.15) sepia(0.12)',
                }}
              />
            </div>

            {/* Pressed Marigold Flower Accent */}
            <div className="mt-3 flex items-center justify-between px-1">
              <div className="flex items-center gap-2 text-amber-800">
                <Sparkles className="w-4 h-4 text-amber-500 animate-spin" />
                <span className="font-serif text-sm font-semibold italic text-amber-950">
                  {caption || 'Our Forever Journey'}
                </span>
              </div>
              <span className="text-[10px] bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-mono">
                Page 26
              </span>
            </div>
          </div>
        </div>
      )}

      {/* STYLE 5: FINE PENCIL SKETCH */}
      {style === 'sketch' && (
        <div className="relative p-3.5 sm:p-5 bg-stone-100 rounded-3xl shadow-2xl border border-stone-200/80 overflow-hidden text-stone-900 transition-all">
          <div className="p-1 sm:p-1.5 bg-white rounded-2xl shadow-inner border border-stone-200">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-stone-200">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('${selectedImage}')`,
                  filter: 'grayscale(1) contrast(1.4) brightness(1.05)',
                }}
              />
              {/* Dotted Sketch Grid Overlay as in Reference */}
              <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:10px_10px] opacity-15 mix-blend-multiply pointer-events-none" />
            </div>
          </div>
          <div className="mt-3 sm:mt-4 text-center px-1">
            <p className="font-serif text-stone-900 text-base sm:text-xl font-bold italic tracking-tight break-words">
              {caption || 'Pure Joy & Embrace'}
            </p>
            <p className="text-[10px] sm:text-[11px] text-stone-500 font-mono uppercase tracking-[0.18em] sm:tracking-[0.25em] mt-1 break-words">
              {subCaption || 'Etched in love • Graphite Edition'}
            </p>
          </div>
        </div>
      )}

      {/* STYLE 6: MINIMALIST GOLD LINE ART */}
      {style === 'lineart' && (
        <div className="relative p-6 bg-gradient-to-b from-stone-900 via-neutral-950 to-black rounded-2xl shadow-2xl border border-amber-500/40 text-amber-200">
          <div className="p-2 border border-amber-500/20 rounded-xl bg-black/60">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-zinc-950">
              <div
                className="w-full h-full bg-cover bg-center opacity-85 transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('${selectedImage}')`,
                  filter: 'grayscale(0.9) contrast(1.3) sepia(0.3)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

              {/* Gold Line Overlay Graphic */}
              <div className="absolute inset-0 border-2 border-amber-400/40 rounded-lg m-3 pointer-events-none" />
              <div className="absolute bottom-4 inset-x-4 text-center">
                <p className="font-serif text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-400">
                  Mukti ❤️ Mihir
                </p>
                <div className="w-12 h-[1px] bg-amber-400/60 mx-auto my-2" />
                <p className="text-[10px] uppercase tracking-[0.3em] text-amber-300/80">
                  Continuous Line Art
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STYLE 7: VECTOR ILLUSTRATION */}
      {style === 'vector' && (
        <div className="relative p-5 bg-gradient-to-br from-[#7A1F35] via-[#5C1425] to-[#3B0A16] rounded-3xl shadow-2xl border-2 border-[#C9A45C] overflow-hidden text-white group">
          {/* Ornate Royal Corner Accents */}
          <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#C9A45C] z-20 pointer-events-none" />
          <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#C9A45C] z-20 pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#C9A45C] z-20 pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#C9A45C] z-20 pointer-events-none" />

          {/* Top Royal Vector Badge */}
          <div className="absolute top-4 left-4 z-20 bg-[#7A1F35]/90 backdrop-blur-md border border-[#C9A45C]/60 px-3 py-1 rounded-full flex items-center gap-1.5 text-[10px] font-mono text-[#C9A45C] shadow-xl">
            <Sparkles className="w-3 h-3 text-[#C9A45C] animate-spin" />
            <span className="tracking-widest uppercase">Digital Vector Illustrator</span>
          </div>

          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-stone-900 border border-[#C9A45C]/40">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('${selectedImage}')`,
                filter: 'saturate(1.25) contrast(1.15) brightness(1.03)',
              }}
            />
            {/* Royal Maroon Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#7A1F35] via-[#7A1F35]/30 to-transparent" />

            <div className="absolute bottom-4 inset-x-4 text-center text-white">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A45C] font-mono">
                Mihir ❤️ Mukti
              </span>
              <h3 className="text-2xl font-serif font-extrabold text-[#FFF9F0] drop-shadow-lg">
                {caption || 'Mukti & Mihir'}
              </h3>
              <p className="text-[11px] font-serif italic text-[#FFF9F0]/90 mt-0.5">
                {subCaption || 'Walking Hand in Hand Into Our Forever'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* STYLE 8: ROYAL FRAMED ARTWORK */}
      {style === 'framed' && (
        <div className="relative p-6 bg-gradient-to-br from-[#7A1F35] via-[#5C1425] to-[#3B0A16] rounded-2xl shadow-2xl border-4 border-[#C9A45C]">
          <div className="p-3 bg-[#3B0A16] rounded-lg shadow-inner border border-[#C9A45C]/40">
            <div className="relative aspect-[3/4] rounded overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('${selectedImage}')`,
                  filter: 'contrast(1.1) saturate(1.2)',
                }}
              />
              <div className="absolute inset-0 border-[6px] border-[#C9A45C]/40 rounded pointer-events-none" />
            </div>
          </div>
          <div className="mt-3 text-center text-[#FFF9F0]">
            <h4 className="font-serif font-bold text-lg text-[#C9A45C]">{caption || 'Royal Portrait'}</h4>
            <p className="text-xs text-[#FFF9F0]/90">{subCaption || 'The Grand Celebration'}</p>
          </div>
        </div>
      )}
    </div>
  );
};
