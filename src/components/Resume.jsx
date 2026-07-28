import { motion } from 'framer-motion';
import { FaDownload, FaEye } from 'react-icons/fa';
import { useSound } from '../context/SoundContext';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const stats = [
  { num: '8.35', label: 'CGPA' },
  { num: '3+', label: 'Projects Built' },
  { num: '3', label: 'Certifications' },
];

export default function Resume() {
  const { playHover, playClick } = useSound();

  return (
    <section id="resume" className="section-padding">
      <div className="container">
        <motion.div className="glass resume-card" {...fadeUp()}>
          <h2>Dive Deeper Into My Journey</h2>
          <div className="resume-stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="stat-number">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
          <p>Download my full resume for a comprehensive overview of my skills, projects, and academic achievements.</p>
          
          <div className="resume-actions">
            <a href="/Ritika_Gaur_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" onMouseEnter={playHover} onClick={playClick}>
              <FaEye /> View Resume
            </a>
            <a href="/Ritika_Gaur_Resume.pdf" download="Ritika_Gaur_Resume.pdf" className="btn btn-glow" onMouseEnter={playHover} onClick={playClick}>
              <FaDownload /> Download
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
