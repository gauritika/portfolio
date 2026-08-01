import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBrain, FaBriefcase, FaGraduationCap, FaCogs, FaFolderOpen, FaFileAlt, FaEnvelope } from 'react-icons/fa';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { useSound } from '../context/SoundContext';

const navItems = [
  { to: 'about',      icon: <FaBrain />,         label: 'About' },
  { to: 'education',  icon: <FaGraduationCap />,  label: 'Education' },
  { to: 'experience', icon: <FaBriefcase />,      label: 'Achievements' },
  { to: 'skills',     icon: <FaCogs />,           label: 'Skills' },
  { to: 'projects',   icon: <FaFolderOpen />,     label: 'Projects' },
  { to: 'resume',     icon: <FaFileAlt />,        label: 'Resume' },
  { to: 'contact',    icon: <FaEnvelope />,       label: 'Contact' },
];

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { playHover, playClick } = useSound();

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 992) setMobileOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <aside className={`sidebar${mobileOpen ? ' active' : ''}`}>
        <a href="#" className="logo">Ritika.</a>
        <nav className="sidebar-nav" aria-label="Main navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.to} className="nav-item">
                <Link
                  to={item.to}
                  spy smooth
                  duration={600}
                  offset={-350}
                  activeClass="active"
                  onMouseEnter={playHover}
                  onClick={() => { playClick(); setMobileOpen(false); }}
                >
                  {item.icon} <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="sidebar-socials">
          <a href="https://www.linkedin.com/in/ritika-gaur-b91ab12a6/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" onMouseEnter={playHover} onClick={playClick}><FaLinkedin /></a>
          <a href="https://github.com/gauritika" target="_blank" rel="noopener noreferrer" aria-label="GitHub" onMouseEnter={playHover} onClick={playClick}><FaGithub /></a>
          <a href="https://leetcode.com/u/ritikagaur" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" onMouseEnter={playHover} onClick={playClick}><SiLeetcode /></a>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="mobile-topbar">
        <a href="#" className="logo">Ritika.</a>
        <button className="hamburger" aria-label="Toggle menu" onClick={() => setMobileOpen(!mobileOpen)}>
          <span /><span /><span />
        </button>
      </header>
    </>
  );
}
