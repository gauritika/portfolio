import { motion } from 'framer-motion';
import { FaTrophy, FaCertificate } from 'react-icons/fa';

const fadeIn = (delay = 0, direction = 'left') => ({
  initial: { opacity: 0, x: direction === 'left' ? -60 : 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const achievements = [
  {
    title: 'Cisco BOOST Program 2026',
    desc: 'Selected for the Cisco BOOST Program focused on networking, cybersecurity, mentorship, and professional development.',
    type: 'achievement',
  },
  {
    title: 'Smart India Hackathon (SIH)',
    desc: 'Selected through institute-level screening rounds for the Smart India Hackathon.',
    type: 'achievement',
  },
];

const certifications = [
  { title: 'Hugging Face AI Agents Course' },
  { title: 'Cisco CCNA – Modules 1, 2 & 3' },
  { title: 'Cisco Python Essentials – Level 1' },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <motion.h2 className="section-title" {...fadeUp()}>Achievements & Certifications</motion.h2>
        <motion.p className="section-subtitle" {...fadeUp(0.1)}>Recognition and continuous learning.</motion.p>

        {/* Achievements Timeline */}
        <div className="timeline-center">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              className={`tl-item-center ${i % 2 === 0 ? 'tl-left' : 'tl-right'}`}
              {...fadeIn(i * 0.2, i % 2 === 0 ? 'left' : 'right')}
            >
              <div className="tl-card glass">
                <span className="tl-date"><FaTrophy style={{ marginRight: '0.4rem', verticalAlign: 'middle' }} /> Achievement</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <div className="tl-dot-center" />
            </motion.div>
          ))}
        </div>

        {/* Certifications Grid */}
        <motion.div className="certs-grid" {...fadeUp(0.3)}>
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              className="glass cert-card"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaCertificate className="cert-icon" />
              <span>{cert.title}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
