import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useSound } from '../context/SoundContext';

export default function Loader({ setLoading }) {
  const [progress, setProgress] = useState(0);
  const { playSuccess } = useSound();

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          playSuccess(); // trigger the success chime
          setTimeout(() => setLoading(false), 400); // Small delay at 100% before fading out
          return 100;
        }
        return Math.min(prev + Math.floor(Math.random() * 10) + 2, 100); // Clamped to 100
      });
    }, 150);

    return () => clearInterval(interval);
  }, [setLoading]);

  return (
    <motion.div
      className="loader-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="loader-content">
        <div className="loader-orb">
          <div className="loader-orb-inner" />
          <div className="loader-orb-ring ring-1" />
          <div className="loader-orb-ring ring-2" />
        </div>
        
        <div className="loader-text-wrap">
          <span className="loader-text-animated">Loading Portfolio</span>
          <span className="loader-dots">...</span>
        </div>
        
        <div className="loader-progress">
          <div className="loader-progress-bar" style={{ width: `${progress}%` }} />
        </div>
        <div className="loader-percentage">{progress}%</div>
      </div>
      
      {/* Background Particles for Loader */}
      <div className="loader-bg-glow glow-1" />
      <div className="loader-bg-glow glow-2" />
    </motion.div>
  );
}
