import React, { useState, useEffect } from 'react';
import AudioPlayer from './AudioPlayer';
import '../styles/PresenteAvancado.css';

const PresenteAvancado = ({ onClick, animating }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [playSound, setPlaySound] = useState(false);
  const [bounce, setBounce] = useState(false);

  // Efeito de pulsação
  useEffect(() => {
    const interval = setInterval(() => {
      setBounce(prev => !prev);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  
  const handleClick = () => {
    if (!animating) {
      setPlaySound(true);
      onClick();
    }
  };

  return (
    <div 
      className={`presente-avancado ${animating ? 'animating' : ''} ${bounce ? 'bounce' : ''} ${isHovering ? 'hovering' : ''}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="tampa"></div>
      <div className="caixa"></div>
      <div className="fita-vertical"></div>
      <div className="fita-horizontal"></div>
      <div className="laco-1"></div>
      <div className="laco-2"></div>
      <div className="brilho"></div>
      <div className="texto-clique">Clique Aqui</div>
      
      {/* Som de abertura do presente */}
      <AudioPlayer 
        src="https://cdn.pixabay.com/download/audio/2021/08/04/audio_bb630cc098.mp3?filename=gift-unwrap-21376.mp3" 
        play={playSound} 
        volume={0.4}
      />
    </div>
  );
};

export default PresenteAvancado;