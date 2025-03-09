import React, { useEffect, useState } from 'react';
import Margarida from './Margarida';
import '../styles/Homenagem.css';

const Homenagem = () => {
  const [showContent, setShowContent] = useState(false);
  const [margaridas, setMargaridas] = useState([]);

  useEffect(() => {
    // Animação para mostrar o conteúdo
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    // Gerar margaridas aleatórias
    const novasMargaridas = [];
    for (let i = 0; i < 20; i++) {
      novasMargaridas.push({
        id: i,
        size: Math.random() * 30 + 30,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 2,
        duration: Math.random() * 3 + 5
      });
    }
    setMargaridas(novasMargaridas);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="homenagem-container">
      <div className={`homenagem-content ${showContent ? 'visible' : ''}`}>
        <h1>Feliz Dia das Mulheres!</h1>
        
        <div className="mensagem">
          <p className="querida">Querida Esposa,</p>
          
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
          
          <p className="assinatura">
            Com todo meu amor e admiração,<br />
            Seu marido
          </p>
        </div>
      </div>

      {/* Margaridas decorativas */}
      {margaridas.map((flor) => (
        <Margarida
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

export default Homenagem;