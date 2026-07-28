import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './index.css';
import ParticlesBg from './components/ParticlesBg';
import CursorTrail from './components/CursorTrail';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Loader from './components/Loader';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader setLoading={setIsLoading} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* Cursor trail effect */}
          <CursorTrail />

          {/* Nebula background layers */}
          <div className="nebula-bg" />
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
          <ParticlesBg />

          {/* Navigation */}
          <Sidebar />

          {/* Main content */}
          <main>
            <Hero />
            <div className="section-divider" />
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <Resume />
            <Contact />
          </main>

          <footer>
            <div className="container">
              <p>&copy; {new Date().getFullYear()} Ritika Gaur. Engineered with curiosity &amp; code.</p>
            </div>
          </footer>
        </>
      )}
    </>
  );
}
