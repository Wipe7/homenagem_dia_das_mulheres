import React, { useEffect, useRef } from 'react';

const AudioPlayer = ({ src, autoPlay = false, loop = false, volume = 0.5, play = false }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (play && audioRef.current) {
      audioRef.current.play().catch(e => {
        console.log("Reprodução automática de áudio bloqueada pelo navegador", e);
      });
    }
  }, [play]);

  return (
    <audio 
      ref={audioRef}
      src={src} 
      autoPlay={autoPlay}
      loop={loop}
      style={{ display: 'none' }} 
    />
  );
};

export default AudioPlayer;