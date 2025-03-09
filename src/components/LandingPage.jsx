import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PresenteAvancado from './PresenteAvancado';
import MargaridaInterativa from './MargaridaInterativa';
import '../styles/LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const [animating, setAnimating] = useState(false);
  const [margaridas, setMargaridas] = useState([]);
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    // Gerar algumas margaridas para decorar a landing page
    const novasMargaridas = [];
    for (let i = 0; i < 5; i++) {
      novasMargaridas.push({
        id: i,
        size: Math.random() * 30 + 20,
        left: Math.random() * 100,
        top: Math.random() * 100,
      });
    }
    setMargaridas(novasMargaridas);
    
    // Animação de entrada
    setTimeout(() => {
      setLoaded(true);
    }, 300);
  }, []);
  
  const handlePresenteClick = () => {
    setAnimating(true);
    setTimeout(() => {
      navigate('/homenagem');
    }, 1500);
  };

  return (
    <div className="landing-page">
      <div className={`landing-container ${loaded ? 'loaded' : ''}`}>
        <h1>Um presente especial para você</h1>
        <p>Clique no presente para abrir</p>
        <div className="presente-container">
          <PresenteAvancado onClick={handlePresenteClick} animating={animating} />
        </div>
      </div>
      
      {/* Margaridas decorativas na landing page */}
      {margaridas.map((flor) => (
        <MargaridaInterativa
          key={flor.id}
          size={flor.size}
          style={{
            position: 'absolute',
            left: `${flor.left}%`,
            top: `${flor.top}%`,
          }}
        />
      ))}
    </div>
  );
};

export default LandingPage;