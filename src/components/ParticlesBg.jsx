import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesBg() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: false,
        particles: {
          number: { value: 70, density: { enable: true, width: 1920, height: 1080 } },
          color: { value: ['#a855f7', '#818cf8', '#3b82f6'] },
          opacity: { value: { min: 0.05, max: 0.15 } },
          size: { value: { min: 0.5, max: 2.5 } },
          move: { enable: true, speed: 0.3, direction: 'none', outModes: 'bounce' },
          links: { enable: true, distance: 130, color: '#818cf8', opacity: 0.03, width: 0.5 },
        },
        detectRetina: true,
      }}
    />
  );
}
