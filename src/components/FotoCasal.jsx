import React, { useState } from 'react';
import '../styles/FotoCasal.css';

// Substitua este URL pela sua foto ou importe diretamente
const FOTO_URL = "https://placehold.co/400x300/ffb6c1/ffffff?text=Foto+do+Casal";

const FotoCasal = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const handlePhotoClick = (e) => {
    // Criar um coração no local do clique
    const heart = document.createElement('div');
    heart.className = 'coracao-foto';
    heart.style.left = `${e.nativeEvent.offsetX}px`;
    heart.style.top = `${e.nativeEvent.offsetY}px`;
    e.currentTarget.appendChild(heart);
    
    // Remover o coração após a animação
    setTimeout(() => {
      heart.remove();
    }, 1000);
  };
  
  return (
    <div className="foto-container">
      <div className="foto-frame">
        <div 
          className="foto-moldura" 
          onClick={handlePhotoClick}
        >
          <img 
            src={FOTO_URL} 
            alt="Foto do casal" 
            className={`foto-casal ${isLoaded ? 'loaded' : ''}`}
            onLoad={() => setIsLoaded(true)}
          />
          {isLoaded && <div className="foto-brilho"></div>}
          {!isLoaded && (
            <div className="foto-loading">
              Carregando foto...
            </div>
          )}
        </div>
        {isLoaded && (
          <div className="foto-legenda">
            Nosso amor é como uma margarida: simples, bonito e duradouro ♥
          </div>
        )}
      </div>
    </div>
  );
};

export default FotoCasal;