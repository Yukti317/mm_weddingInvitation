import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Mic2, Sparkles } from 'lucide-react';
import { BRIDE_NAME } from '../data/weddingData';
import father from '../../assets/img/papa.jpeg'
import mother from '../../assets/img/mom.jpeg'
import yukti from '../../assets/img/yukti.jpeg'
import pransi from '../../assets/img/pransi.jpeg'
import ba from '../../assets/img/ba.jpeg'
import dada from '../../assets/img/dada.jpeg'

interface FamilyMember {
  id: string;
  name: string;
  relation: string;
  intro: string; // the "announcer line" — typed out
  image: string;
  imagePosition?: string; // CSS object-position, e.g. 'center 15%' — nudge per-photo if a face crops awkwardly
}

// Static — edit this list directly, no form/db needed
// Tip: for full-body/sitting photos, lower the % (e.g. 'center 10%') to pull the frame up toward the face.
// For tight headshots, 'center' or 'center 30%' usually works fine.
const BRIDE_FAMILY: FamilyMember[] = [
  {
    id: 'f1',
    name: 'VipulKumar Mehta',
    relation: 'Father of the Bride',
    intro: 'The man who taught her how to stand tall and laugh loud.',
    image: father,
    imagePosition: 'center 15%',
  },
  {
    id: 'f2',
    name: 'Chetnaben Mehta',
    relation: 'Mother of the Bride',
    intro: 'Her first best friend, and the calm behind every storm.',
    image: mother,
    imagePosition: 'center 15%',
  },
  {
    id: 'f3',
    name: 'Yukti Mehta',
    relation: 'Sister',
    intro: 'Partner in mischief since the day she could walk.',
    image: yukti,
    imagePosition: 'center 10%',
  },
  {
    id: 'f4',
    name: 'Pransi Mehta',
    relation: 'Sister',
    intro: 'The one who always tells her the truth — kindly, always.',
    image: pransi,
    imagePosition: 'center 15%',
  },
  {
    id: 'f5',
    name: 'Ratilal Mehta',
    relation: 'Grandfather',
    intro: 'Storyteller, blessing-giver, the family\u2019s quiet anchor.',
    image: dada,
    imagePosition: 'center 15%',
  },
  {
    id: 'f6',
    name: 'Shantaben Mehta',
    relation: 'Grandmother',
    intro: 'Her recipes taste like home, no matter where home is.',
    image: ba,
    imagePosition: 'center 15%',
  },
];

// Typewriter effect — types out text once, triggered externally
const TypedLine: React.FC<{ text: string; start: boolean; speed?: number }> = ({
  text,
  start,
  speed = 28,
}) => {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    if (!start) return;
    setDisplayed('');
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [start, text, speed]);

  return (
    <span>
      {displayed}
      {start && displayed.length < text.length && (
        <span className="inline-block w-[2px] h-[1em] bg-amber-300 ml-0.5 align-middle animate-pulse" />
      )}
    </span>
  );
};

const FamilyRow: React.FC<{ member: FamilyMember; index: number }> = ({ member, index }) => {
  const fromLeft = index % 2 === 0;
  const [typing, setTyping] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      onViewportEnter={() => setTyping(true)}
      className={`flex flex-col sm:flex-row items-center gap-6 sm:gap-10 ${
        fromLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
      }`}
    >
      {/* Photo */}
      <div className="relative shrink-0">
        <div className="absolute -inset-3 rounded-full bg-amber-500/20 blur-xl" />
        <div className="relative w-32 h-32 sm:w-44 sm:h-44 aspect-square rounded-full border-2 border-amber-400/60 shadow-2xl bg-stone-900 overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: member.imagePosition || 'center 15%' }}
          />
        </div>
      </div>

      {/* Announcer text block */}
      <div className={`space-y-2 text-center sm:text-left ${fromLeft ? '' : 'sm:text-right'}`}>
        <div
          className={`inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-amber-400/80 ${
            fromLeft ? '' : 'sm:flex-row-reverse'
          }`}
        >
          <Mic2 className="w-3 h-3" />
          <span>Please welcome</span>
        </div>

        <h3 className="font-serif font-extrabold text-2xl sm:text-3xl text-amber-100">
          {member.name}
        </h3>

        <p className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-amber-300/70">
          {member.relation}
        </p>

        <p className="text-stone-300 font-serif italic text-sm sm:text-base leading-relaxed max-w-md min-h-[3em]">
          <TypedLine text={member.intro} start={typing} />
        </p>
      </div>
    </motion.div>
  );
};

export const BrideFamilySection: React.FC = () => {
  const [introTyping, setIntroTyping] = useState(false);

  return (
    <section
      id="bride-family"
      className="relative py-24 px-4 bg-stone-950 text-white overflow-hidden border-t border-amber-500/20"
    >
      {/* Ambient particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-amber-100/30"
            style={{
              width: `${1 + (i % 3)}px`,
              height: `${1 + (i % 3)}px`,
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
              opacity: 0.15 + (i % 5) * 0.08,
            }}
          />
        ))}
      </div>

      <div className="max-w-3xl mx-auto space-y-20 relative z-10">
        {/* Section Header — announcer opening line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIntroTyping(true)}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 max-w-xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900 border border-amber-500/30 text-amber-300 text-xs uppercase tracking-widest font-mono">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Meet the Family</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-amber-300">
            Before the Big Day
          </h2>

          <p className="text-stone-300 text-sm sm:text-base font-serif italic min-h-[2.5em]">
            <TypedLine
              text={`Allow us to introduce the people who raised ${BRIDE_NAME}...`}
              start={introTyping}
              speed={22}
            />
          </p>
        </motion.div>

        {/* Scroll-triggered family rows */}
        <div className="space-y-16 sm:space-y-24">
          {BRIDE_FAMILY.map((member, idx) => (
            <FamilyRow key={member.id} member={member} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};