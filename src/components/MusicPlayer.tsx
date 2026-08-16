import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, Play, Pause, Disc, Music, Sparkles } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface MusicPlayerProps {
  autoStarted?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoStarted = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [beatPulse, setBeatPulse] = useState(false);

  useEffect(() => {
    // Sync with audioEngine initial state
    setIsPlaying(audioEngine.getIsPlaying());
    setIsMuted(audioEngine.getIsMuted());

    // Subscribe to beat pulse
    const unsubscribe = audioEngine.subscribeBeat((beatNum) => {
      setBeatPulse(true);
      setTimeout(() => setBeatPulse(false), 120);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleTogglePlay = () => {
    const newState = audioEngine.togglePlay();
    setIsPlaying(newState);
  };

  const handleToggleMute = () => {
    const newMuted = audioEngine.toggleMute();
    setIsMuted(newMuted);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="fixed top-4 right-4 z-50 flex items-center gap-3 bg-stone-900/80 backdrop-blur-xl border border-amber-500/30 p-2 pr-4 rounded-full shadow-2xl text-amber-100"
    >
      {/* Rotating Vinyl Record Animation */}
      <div className="relative flex items-center justify-center">
        {/* Vinyl Disc Outer Glow synchronized with beat */}
        <div
          className={`absolute inset-0 rounded-full bg-amber-400/30 transition-transform duration-100 ${
            isPlaying && beatPulse ? 'scale-125 opacity-80 blur-sm' : 'scale-100 opacity-20'
          }`}
        />

        {/* Vinyl Record */}
        <motion.div
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{
            repeat: isPlaying ? Infinity : 0,
            duration: 3,
            ease: 'linear',
          }}
          className="relative w-10 h-10 rounded-full bg-zinc-950 border-2 border-amber-500/60 shadow-lg flex items-center justify-center overflow-hidden cursor-pointer"
          onClick={handleTogglePlay}
        >
          {/* Vinyl Grooves */}
          <div className="absolute inset-1 rounded-full border border-zinc-800" />
          <div className="absolute inset-2 rounded-full border border-zinc-800" />

          {/* Album Center Label */}
          <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-rose-700 via-amber-500 to-amber-300 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-950" />
          </div>
        </motion.div>

        {/* Tone Arm Needle Indicator */}
        <div
          className={`absolute -top-1 -right-1 w-4 h-4 transition-transform duration-300 origin-top-right ${
            isPlaying ? 'rotate-12' : '-rotate-45'
          }`}
        >
          <div className="w-0.5 h-3 bg-amber-400 shadow-sm rounded" />
        </div>
      </div>

      {/* Track info text */}
      <div className="hidden sm:flex flex-col cursor-pointer" onClick={handleTogglePlay}>
        <div className="flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
          <span className="text-xs font-serif font-bold tracking-wide text-amber-200">
            🎵💖
          </span>
        </div>
        <span className="text-[10px] text-amber-300/70 font-mono">
          {isPlaying ? '♪ Beat Synchronized' : 'Paused • Tap to Play'}
        </span>
      </div>

      {/* Control Buttons */}
      <div className="flex items-center gap-1.5 border-l border-amber-500/20 pl-2">
        <button
          onClick={handleTogglePlay}
          className="p-1.5 rounded-full hover:bg-amber-500/20 text-amber-200 transition-colors"
          title={isPlaying ? 'Pause Music' : 'Play Music'}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>

        <button
          onClick={handleToggleMute}
          className="p-1.5 rounded-full hover:bg-amber-500/20 text-amber-200 transition-colors"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
    </motion.div>
  );
};
