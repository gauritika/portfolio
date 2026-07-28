import { createContext, useContext, useState } from 'react';
import useSoundEffects from '../hooks/useSoundEffects';

const SoundContext = createContext(null);

export function SoundProvider({ children }) {
  const sounds = useSoundEffects();
  const [muted, setMuted] = useState(false);

  const wrappedSounds = {
    playClick: () => !muted && sounds.playClick(),
    playHover: () => !muted && sounds.playHover(),
    playSuccess: () => !muted && sounds.playSuccess(),
    playWhoosh: () => !muted && sounds.playWhoosh(),
    muted,
    toggleMute: () => setMuted((m) => !m),
  };

  return (
    <SoundContext.Provider value={wrappedSounds}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  return useContext(SoundContext);
}
