import React, { useEffect, useState } from 'react';
import '../styles/Confetti.css';

const Confetti = ({ count = 50 }) => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    // Gerar pétalas de margarida
    const newPetals = [];
    for (let i = 0; i < count; i++) {
      newPetals.push({
        id: i,
        x: Math.random() * 100, // posição horizontal aleatória
        delay: Math.random() * 10, // atraso aleatório
        duration: Math.random() * 5 + 5, // duração aleatória
        size: Math.random() * 15 + 10, // tamanho aleatório
        rotation: Math.random() * 360 // rotação aleatória
      });
    }
    setPetals(newPetals);
  }, [count]);

  return (
    <div className="confetti-container">
      {petals.map(petal => (
        <div
          key={petal.id}
          className="petal"
          style={{
            left: `${petal.x}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            width: `${petal.size}px`,
            height: `${petal.size * 0.3}px`,
            transform: `rotate(${petal.rotation}deg)`
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;