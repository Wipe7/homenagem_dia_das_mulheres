import React, { useEffect, useState, useRef } from 'react';
import MargaridaInterativa from './MargaridaInterativa';
import Confetti from './Confetti';
import AudioPlayer from './AudioPlayer';
import FotoCasal from './FotoCasal';
import '../styles/HomenagemAvancada.css';

const HomenagemAvancada = () => {
  const [showContent, setShowContent] = useState(false);
  const [margaridas, setMargaridas] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);
  const messageRef = useRef(null);

  useEffect(() => {
    // Animação para mostrar o conteúdo
    const timer1 = setTimeout(() => {
      setShowContent(true);
    }, 500);
    
    // Mostrar confete após pequeno atraso
    const timer2 = setTimeout(() => {
      setShowConfetti(true);
      setPlayMusic(true);
    }, 1000);
    
    // Mostrar foto imediatamente
    setShowPhoto(true);

    // Gerar margaridas interativas aleatórias
    const novasMargaridas = [];
    for (let i = 0; i < 15; i++) {
      novasMargaridas.push({
        id: i,
        size: Math.random() * 40 + 30,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 2,
        duration: Math.random() * 3 + 5
      });
    }
    setMargaridas(novasMargaridas);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Adicionar pequenos corações ao clicar
  const handleMessageClick = (e) => {
    if (messageRef.current) {
      const heart = document.createElement('div');
      heart.className = 'coracao';
      heart.style.left = (e.clientX - messageRef.current.getBoundingClientRect().left) + 'px';
      heart.style.top = (e.clientY - messageRef.current.getBoundingClientRect().top) + 'px';
      messageRef.current.appendChild(heart);
      
      // Remover o coração após a animação
      setTimeout(() => {
        heart.remove();
      }, 1000);
    }
  };

  // Adicionar pequenos corações ao clicar na foto
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
    <div className="homenagem-avancada-container">
      {/* Música de fundo */}
      <AudioPlayer 
        src="https://cdn.pixabay.com/download/audio/2022/05/16/audio_db6de6e437.mp3?filename=sweet-and-simple-114343.mp3" 
        play={playMusic} 
        loop={true} 
        volume={0.2}
      />
      
      {/* Efeito de pétalas caindo */}
      {showConfetti && <Confetti count={70} />}
      
      <div className={`homenagem-avancada-content ${showContent ? 'visible' : ''}`}>
        <h1>Feliz Dia das Mulheres!</h1>
        
        {/* Usar o novo componente de foto */}
        <FotoCasal />
        
        <div 
          className="mensagem" 
          ref={messageRef}
          onClick={handleMessageClick}
        >
          <p className="querida">Querida Amor,</p>
          
          <p>
            Em cada pétala de margarida, vejo reflexos da sua beleza.
            Em cada amanhecer, encontro a luz do seu sorriso.
          </p>
          
          <p>
            Neste dia especial, quero celebrar não apenas o dia das mulheres,
            mas celebrar você, que transforma meus dias e dá sentido à minha vida.
          </p>
          
          <p>
            Sua força me inspira, sua doçura me acalma, e seu amor me completa.
            Obrigado por ser exatamente quem você é.
          </p>
          
          <p>
            Como as margaridas que rodeiam esta mensagem, meu amor por você
            floresce todos os dias, renovando-se a cada amanhecer.
          </p>
          
          <p className="dica">
            (Clique em qualquer lugar desta mensagem para ver um efeito especial!)
          </p>
          
          <p className="assinatura">
            Com todo meu amor e admiração,<br />
            Seu marido
          </p>
        </div>
      </div>

      {/* Margaridas interativas */}
      {margaridas.map((flor) => (
        <MargaridaInterativa
          key={flor.id}
          size={flor.size}
          style={{
            left: `${flor.left}%`,
            top: `${flor.top}%`,
            animationDelay: `${flor.delay}s`,
            animationDuration: `${flor.duration}s`
          }}
          className="margarida-decorativa"
        />
      ))}
    </div>
  );
};

export default HomenagemAvancada;