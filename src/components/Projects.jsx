import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useSound } from '../context/SoundContext';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const projects = [
  {
    thumb: 'Pollination Activity Detector',
    title: 'Pollination Activity Detector',
    desc: 'End-to-end ML pipeline using XGBoost to classify pollination activity with 82% accuracy. Features real-time weather data via Open-Meteo API and an interactive Streamlit dashboard with geospatial visualization.',
    tags: ['Python', 'XGBoost', 'Streamlit', 'Open-Meteo API'],
  },
  {
    thumb: 'Bug Triage Agent',
    title: 'Bug Triage Agent',
    desc: 'Agentic AI workflow using LangGraph and FastAPI to automate software bug triage. Implements RAG for retrieving similar historical bugs and generates context-aware resolutions with human-in-the-loop approval for high-severity issues.',
    tags: ['FastAPI', 'LangGraph', 'OpenAI API', 'RAG', 'Pytest'],
  },
  {
    thumb: 'CuraID',
    title: 'CuraID — Healthcare Portal',
    desc: 'Healthcare portal enabling instant patient record access using RFID/NFC technology. Integrates Firebase for secure storage with real-time access to diagnoses, medications, allergies, and visit history.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'RFID/NFC'],
  },
];

export default function Projects() {
  const { playHover, playClick } = useSound();

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <motion.h2 className="section-title" {...fadeUp()}>Projects</motion.h2>
        <motion.p className="section-subtitle" {...fadeUp(0.1)}>From notebooks to production — selected works.</motion.p>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.div key={i} className="glass project-card" {...fadeUp(i * 0.15)}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="project-thumb"><span>{p.thumb}</span></div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
                <div className="proj-links">
                  <a href="#" onMouseEnter={playHover} onClick={playClick}><FaGithub /> Code</a>
                  <a href="#" onMouseEnter={playHover} onClick={playClick}><FaExternalLinkAlt /> Demo</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
