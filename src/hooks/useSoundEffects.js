import { useCallback, useRef } from 'react';

/**
 * Custom hook that provides synthesized sci-fi sound effects
 * using the Web Audio API. No external audio files needed.
 */
export default function useSoundEffects() {
  const ctxRef = useRef(null);

  const getCtx = useCallback(() => {
    if (!ctxRef.current) {
      ctxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    return ctxRef.current;
  }, []);

  /** Soft blip — for nav clicks */
  const playClick = useCallback(() => {
    try {
      const ctx = getCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(900, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
      osc.connect(gain).connect(ctx.destination);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.12);
    } catch (e) { /* silently fail if audio not supported */ }
  }, [getCtx]);

  /** Very subtle tick — for button hovers */
  const playHover = useCallback(() => {
    try {
      const ctx = getCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, ctx.currentTime);
      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
      osc.connect(gain).connect(ctx.destination);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.06);
    } catch (e) {}
  }, [getCtx]);

  /** Success chime — for loader completion */
  const playSuccess = useCallback(() => {
    try {
      const ctx = getCtx();
      const notes = [523, 659, 784]; // C5, E5, G5 — a major chord arpeggio
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        const startTime = ctx.currentTime + i * 0.1;
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.06, startTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.4);
        osc.connect(gain).connect(ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + 0.4);
      });
    } catch (e) {}
  }, [getCtx]);

  /** Whoosh — for section transitions */
  const playWhoosh = useCallback(() => {
    try {
      const ctx = getCtx();
      const bufferSize = ctx.sampleRate * 0.15;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
      }
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(800, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(2000, ctx.currentTime + 0.1);
      filter.Q.setValueAtTime(2, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
      source.connect(filter).connect(gain).connect(ctx.destination);
      source.start(ctx.currentTime);
    } catch (e) {}
  }, [getCtx]);

  return { playClick, playHover, playSuccess, playWhoosh };
}
