import { motion } from 'framer-motion';
import { FaRocket, FaEnvelope, FaEye } from 'react-icons/fa';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import HeroSnow from './HeroSnow';
import { useSound } from '../context/SoundContext';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function Hero() {
  const { playHover, playClick } = useSound();

  return (
    <section id="about" className="hero section-padding">
      <HeroSnow />
      <div className="container hero-inner">
        <motion.div className="hero-avatar-wrapper" {...fadeUp(0)}>
          <img src="/my-photo.png" alt="Ritika Gaur" className="hero-avatar-img" />
        </motion.div>

        <motion.h1 className="hero-name" {...fadeUp(0.15)}>
          Ritika Gaur
        </motion.h1>

        <motion.h2 className="hero-designation" {...fadeUp(0.15)}>
          CSE Undergrad | AI &amp; ML Enthusiast
        </motion.h2>

        <motion.div className="hero-badge" {...fadeUp(0.25)}>
          <span className="pulse-dot" /> Open to Opportunities
        </motion.div>

        <motion.p className="tagline" {...fadeUp(0.35)}>
          I build intelligent systems using machine learning, agentic AI, and modern web technologies. From predictive models to RAG-powered workflows — I turn ideas into real-world impact.
        </motion.p>

        <motion.div className="hero-actions" {...fadeUp(0.45)}>
          <a href="#projects" className="btn btn-glow" onMouseEnter={playHover} onClick={playClick}><FaRocket /> View Projects</a>
          <a href="/Ritika_Gaur_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" onMouseEnter={playHover} onClick={playClick}><FaEye /> View Resume</a>
          <a href="#contact" className="btn btn-ghost" onMouseEnter={playHover} onClick={playClick}><FaEnvelope /> Get in Touch</a>
        </motion.div>

        <motion.div className="hero-socials" {...fadeUp(0.5)}>
          <a href="https://www.linkedin.com/in/ritika-gaur-b91ab12a6/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" onMouseEnter={playHover} onClick={playClick}><FaLinkedin /></a>
          <a href="https://github.com/gauritika" target="_blank" rel="noopener noreferrer" aria-label="GitHub" onMouseEnter={playHover} onClick={playClick}><FaGithub /></a>
          <a href="https://leetcode.com/u/ritikagaur" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" onMouseEnter={playHover} onClick={playClick}><SiLeetcode /></a>
        </motion.div>
      </div>
    </section>
  );
}
