import React, { useState, useEffect } from 'react';

const MargaridaInterativa = ({ size, style, className }) => {
  const defaultSize = size || 50;
  const petalColor = "#FFFFFF"; // branco
  const centerColor = "#FFEB3B"; // amarelo
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Efeito de rotação suave
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.2) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  // Reagir ao movimento do mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const rect = document.body.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calcular o desvio com base na distância do mouse do centro
      const offsetX = (mouseX - centerX) / centerX / 10;
      const offsetY = (mouseY - centerY) / centerY / 10;
      
      setPosition({ x: offsetX * 20, y: offsetY * 20 });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Aumentar o tamanho ao passar o mouse
  const handleMouseEnter = () => {
    setIsHovering(true);
    setScale(1.2);
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    setScale(1);
  };

  return (
    <div 
      className={`margarida-interativa ${className || ''}`}
      style={{
        position: 'absolute',
        width: `${defaultSize}px`,
        height: `${defaultSize}px`,
        transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
        ...style
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Centro da flor */}
      <div
        style={{
          position: 'absolute',
          width: `${defaultSize * 0.3}px`,
          height: `${defaultSize * 0.3}px`,
          backgroundColor: centerColor,
          borderRadius: '50%',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
          transition: 'all 0.3s ease',
          boxShadow: isHovering ? '0 0 10px rgba(255, 255, 100, 0.8)' : 'none'
        }}
      />
      
      {/* Pétalas */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: `${defaultSize * 0.25}px`,
            height: `${defaultSize * 0.4}px`,
            backgroundColor: petalColor,
            borderRadius: '50%',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) rotate(${i * 30 + rotation}deg) translateY(-${defaultSize * 0.2}px)`,
            transformOrigin: 'center bottom',
            zIndex: 1,
            transition: 'transform 0.5s ease',
            boxShadow: isHovering ? '0 0 5px rgba(255, 255, 255, 0.5)' : 'none'
          }}
        />
      ))}
    </div>
  );
};

export default MargaridaInterativa;