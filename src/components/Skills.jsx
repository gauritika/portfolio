import { motion } from 'framer-motion';
import {
  SiPython, SiCplusplus, SiMysql,
  SiHtml5,
  SiFastapi,
  SiGit, SiGithub, SiStreamlit, SiFirebase,
  SiLangchain, SiOpenai,
} from 'react-icons/si';
import { FaDatabase, FaCode, FaBrain, FaRobot, FaProjectDiagram, FaNetworkWired, FaCss3Alt } from 'react-icons/fa';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const skills = [
  // Languages
  { icon: <SiCplusplus />,      name: 'C++',            color: '#00599C' },
  { icon: <SiPython />,         name: 'Python',         color: '#3776AB' },
  { icon: <FaDatabase />,       name: 'SQL',            color: '#4479A1' },

  // Frontend
  { icon: <SiHtml5 />,          name: 'HTML5',          color: '#E34F26' },
  { icon: <FaCss3Alt />,         name: 'CSS3',           color: '#1572B6' },

  // Backend
  { icon: <SiFastapi />,        name: 'FastAPI',        color: '#009688' },
  { icon: <FaCode />,           name: 'REST APIs',      color: '#6c3ce0' },

  // AI & ML
  { icon: <SiLangchain />,      name: 'LangChain',      color: '#1C3C3C' },
  { icon: <FaRobot />,          name: 'LangGraph',      color: '#a855f7' },
  { icon: <FaBrain />,          name: 'RAG',            color: '#ff6b6b' },
  { icon: <SiOpenai />,         name: 'Agentic AI',     color: '#412991' },
  { icon: <FaBrain />,          name: 'Generative AI',  color: '#10b981' },
  { icon: <FaProjectDiagram />, name: 'Vector DBs',     color: '#3b82f6' },

  // Tools & Platforms
  { icon: <SiGit />,            name: 'Git',            color: '#F05032' },
  { icon: <SiGithub />,         name: 'GitHub',         color: '#e2e8f0' },
  { icon: <SiMysql />,          name: 'MySQL',          color: '#4479A1' },
  { icon: <SiStreamlit />,      name: 'Streamlit',      color: '#FF4B4B' },
  { icon: <SiFirebase />,       name: 'Firebase',       color: '#FFCA28' },

  // Core Concepts
  { icon: <FaCode />,           name: 'DSA',            color: '#818cf8' },
  { icon: <FaNetworkWired />,   name: 'Networks',       color: '#06b6d4' },
];

const iconItem = {
  hidden: { opacity: 0, scale: 0.6, y: 20 },
  visible: (i) => ({
    opacity: 1, scale: 1, y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <motion.h2 className="section-title" {...fadeUp()}>Skills</motion.h2>
        <motion.p className="section-subtitle" {...fadeUp(0.1)}>The tools I wield to build intelligent systems.</motion.p>
        <motion.div
          className="skills-icon-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              className="skill-icon-card glass"
              custom={i}
              variants={iconItem}
              whileHover={{ y: -8, scale: 1.1, boxShadow: `0 12px 40px ${s.color}33` }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="skill-icon" style={{ color: s.color }}>{s.icon}</span>
              <span className="skill-name">{s.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
