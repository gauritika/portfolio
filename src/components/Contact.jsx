import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane, FaCheck, FaSpinner } from 'react-icons/fa';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { useSound } from '../context/SoundContext';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent
  const { playHover, playClick, playSuccess } = useSound();

  const handleSubmit = (e) => {
    e.preventDefault();
    playClick();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      playSuccess();
      e.target.reset();
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <motion.h2 className="section-title" {...fadeUp()}>Get in Touch</motion.h2>
        <motion.p className="section-subtitle" {...fadeUp(0.1)}>Let's build something intelligent together.</motion.p>
        <div className="contact-grid">
          <motion.div className="contact-info-block" {...fadeUp(0.15)}>
            <h3>Let's Connect</h3>
            <p>Whether you have a project, a research idea, or just want to chat about AI — my inbox is always open.</p>
            <div className="c-item">
              <div className="icon-box"><FaEnvelope /></div>
              <div><h4>Email</h4><a href="mailto:gaurritika56@gmail.com">gaurritika56@gmail.com</a></div>
            </div>
            <div className="c-item">
              <div className="icon-box"><FaPhone /></div>
              <div><h4>Phone</h4><p>+91-8218094347</p></div>
            </div>
            <div className="c-item">
              <div className="icon-box"><FaMapMarkerAlt /></div>
              <div><h4>Location</h4><p>Bulandshahr, Uttar Pradesh</p></div>
            </div>
            <div className="c-socials">
              <a href="https://www.linkedin.com/in/ritika-gaur-b91ab12a6/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" onMouseEnter={playHover} onClick={playClick}><FaLinkedin /></a>
              <a href="https://github.com/gauritika" target="_blank" rel="noopener noreferrer" aria-label="GitHub" onMouseEnter={playHover} onClick={playClick}><FaGithub /></a>
              <a href="https://leetcode.com/u/ritikagaur" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" onMouseEnter={playHover} onClick={playClick}><SiLeetcode /></a>
            </div>
          </motion.div>

          <motion.form className="glass" onSubmit={handleSubmit} {...fadeUp(0.25)}>
            <div className="form-group"><label htmlFor="name">Name</label><input type="text" id="name" required placeholder="Your name" /></div>
            <div className="form-group"><label htmlFor="email">Email</label><input type="email" id="email" required placeholder="you@example.com" /></div>
            <div className="form-group"><label htmlFor="message">Message</label><textarea id="message" rows="5" required placeholder="Tell me about your idea..." /></div>
            <button
              type="submit"
              className="btn btn-glow submit-btn"
              disabled={status !== 'idle'}
              style={status === 'sent' ? { background: 'linear-gradient(135deg, #10b981, #059669)' } : {}}
              onMouseEnter={playHover}
            >
              {status === 'idle' && <><FaPaperPlane /> Send Message</>}
              {status === 'sending' && <><FaSpinner className="spin" /> Sending...</>}
              {status === 'sent' && <><FaCheck /> Sent!</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
