import React, { useEffect, useState, useRef } from 'react';
import MargaridaInterativa from './MargaridaInterativa';
import Confetti from './Confetti';
import AudioPlayer from './AudioPlayer';
import '../styles/HomenagemAvancada.css';
import fotoDoCalsa from '../assets/foto-casal.jpeg'

// Importe aqui sua foto - substitua pelo caminho real da imagem
// Exemplo para imagem na pasta public: process.env.PUBLIC_URL + '/foto-casal.jpg'
// Para importar uma imagem na pasta src/assets: import fotoDoCalsa from '../assets/foto-casal.jpg';

const FOTO_CASAL = fotoDoCalsa 


const HomenagemAvancada = () => {
  const [showContent, setShowContent] = useState(false);
  const [margaridas, setMargaridas] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);
  const [nome, setNome] = useState("Suzana");
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
    
    // Mostrar foto após mais um atraso
    const timer3 = setTimeout(() => {
      setShowPhoto(true);
    }, 2000);

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
      clearTimeout(timer3);
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

  // Personalizar o nome
  const handleNomeChange = (e) => {
    setNome(e.target.value);
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
        
        {/* Campo para personalizar o nome */}
        <div className="personalizacao">
          <label htmlFor="nome">Como você gostaria de ser chamada? </label>
          <input 
            type="text" 
            id="nome" 
            value={nome} 
            onChange={handleNomeChange} 
            placeholder="Digite seu nome"
          />
        </div>
        
        {/* Área da foto */}
        <div className={`foto-container ${showPhoto ? 'visible' : ''}`}>
          <div className="foto-frame">
            <div 
              className="foto-moldura"
              onClick={handlePhotoClick}
            >
              <img 
                src={FOTO_CASAL} 
                alt="Nós dois" 
                className="foto-casal"
              />
              <div className="foto-brilho"></div>
            </div>
            <div className="foto-legenda">
              Com você vivo meus melhores momentos! ♥
            </div>
          </div>
        </div>
        
        <div 
          className="mensagem" 
          ref={messageRef}
          onClick={handleMessageClick}
        >
          <p className="querida">Querida {nome},</p>
          
          <p>
            Em todos os caminhos que andei.
            Sempre encontrei flores pra lhe entregar.
          </p>
          
          <p>
            O meu amor por você é o que me faz querer me dedicar.

          </p>
          
          <p>
            Seu jeito me inspira e seu amor me completa,
            obrigado por ser exatamente quem você é.
          </p>
          
          <p>
            Como lindas flores estão nessa mensagem
            peço a Deus que meu amor floresça todos os dias por você.
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