/**
 * Audio Engine for Mukti & Mihir Wedding Invitation
 * Plays "Ritviz - Liggi" style energetic wedding groove using Web Audio API Synth Engine
 * + support for external audio source, with beat pulse callbacks.
 */

type BeatCallback = (beatNumber: number, time: number) => void;

class WeddingAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private isMuted: boolean = false;
  private volume: number = 0.7;
  private bpm: number = 126;
  private timerId: number | null = null;
  private beatCount: number = 0;
  private beatCallbacks: Set<BeatCallback> = new Set();
  private audioEl: HTMLAudioElement | null = null;
  private masterGain: GainNode | null = null;

  constructor() {
    // Try creating fallback Audio element for Ritviz - Liggi
    if (typeof window !== 'undefined') {
      try {
     this.audioEl = new Audio('/assets/audio/Ishq_hai.mp3');
    //  this.audioEl = new Audio('assets/audio/Ritviz.mp3');
        this.audioEl.loop = true;
        this.audioEl.volume = this.volume;
      } catch {
        this.audioEl = null;
      }
    }
  }

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.value = this.isMuted ? 0 : this.volume;
        this.masterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public subscribeBeat(cb: BeatCallback): () => void {
    this.beatCallbacks.add(cb);
    return () => this.beatCallbacks.delete(cb);
  }

  private notifyBeat(beatNum: number, time: number) {
    this.beatCallbacks.forEach((cb) => {
      try {
        cb(beatNum, time);
      } catch (err) {
        console.error('Beat listener error', err);
      }
    });
  }

  public async start(): Promise<boolean> {
    this.initCtx();
    this.isPlaying = true;

    // Start background audio element if supported
    if (this.audioEl) {
      try {
        this.audioEl.muted = this.isMuted;
        this.audioEl.volume = this.volume;
        const playPromise = this.audioEl.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Audio element autoplay blocked, fall back to synth generator
            this.startSynthLoop();
          });
        }
      } catch {
        this.startSynthLoop();
      }
    } else {
      this.startSynthLoop();
    }

    this.startBeatClock();
    return true;
  }

  private startSynthLoop() {
    if (!this.ctx || !this.masterGain) return;
    // We run the synth scheduler to generate cheerful Indian electronic brass/groove notes
  }

  private startBeatClock() {
    if (this.timerId !== null) clearInterval(this.timerId);
    const intervalMs = (60 / this.bpm) * 1000;

    this.timerId = window.setInterval(() => {
      if (!this.isPlaying) return;
      this.beatCount++;
      const time = this.ctx ? this.ctx.currentTime : Date.now() / 1000;
      this.notifyBeat(this.beatCount, time);

      // Play rhythmic synth pulse if audio element isn't playing
      if (this.isPlaying && (!this.audioEl || this.audioEl.paused) && this.ctx && this.masterGain) {
        this.playBeatSynthNote(this.beatCount, time);
      }
    }, intervalMs);
  }

  private playBeatSynthNote(beat: number, time: number) {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    try {
      const step = (beat - 1) % 16;

      // Kick on 1, 5, 9, 13
      if (step % 4 === 0) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(140, time);
        osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.2);
        gain.gain.setValueAtTime(0.3 * this.volume, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.2);
        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(time);
        osc.stop(time + 0.2);
      }

      // Snare / Dholak snap on 5, 13
      if (step === 4 || step === 12) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(280, time);
        osc.frequency.exponentialRampToValueAtTime(80, time + 0.15);
        gain.gain.setValueAtTime(0.25 * this.volume, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.15);
        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(time);
        osc.stop(time + 0.15);
      }

      // Ritviz style vocal synth hook on beat 1, 3, 7, 10
      const synthScale = [440, 523.25, 587.33, 659.25, 783.99, 880]; // A minor pentatonic / Indian Bhairavi notes
      if (step === 0 || step === 2 || step === 6 || step === 10 || step === 14) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const freq = synthScale[step % synthScale.length];
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, time);
        gain.gain.setValueAtTime(0.12 * this.volume, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.25);
        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(time);
        osc.stop(time + 0.25);
      }
    } catch {
      // Ignore synth scheduling errors
    }
  }

  public pause() {
    this.isPlaying = false;
    if (this.audioEl) {
      try {
        this.audioEl.pause();
      } catch {
        // ignore
      }
    }
  }

  public togglePlay(): boolean {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.start();
    }
    return this.isPlaying;
  }

  public setMute(muted: boolean) {
    this.isMuted = muted;
    if (this.audioEl) {
      this.audioEl.muted = muted;
    }
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime);
    }
  }

  public toggleMute(): boolean {
    this.setMute(!this.isMuted);
    return this.isMuted;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public destroy() {
    this.pause();
    if (this.timerId) clearInterval(this.timerId);
    if (this.ctx) {
      this.ctx.close();
      this.ctx = null;
    }
  }
}

export const audioEngine = new WeddingAudioEngine();
