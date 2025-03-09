import React from 'react';

const Margarida = ({ size, style, className }) => {
  const defaultSize = size || 50;
  const petalColor = "#FFFFFF"; // branco
  const centerColor = "#FFEB3B"; // amarelo

  return (
    <div 
      className={`margarida ${className || ''}`}
      style={{
        position: 'absolute',
        width: `${defaultSize}px`,
        height: `${defaultSize}px`,
        ...style
      }}
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
          zIndex: 2
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
            transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-${defaultSize * 0.2}px)`,
            transformOrigin: 'center bottom',
            zIndex: 1
          }}
        />
      ))}

      {/* Caule (opcional) */}
      <div
        style={{
          position: 'absolute',
          width: `${defaultSize * 0.05}px`,
          height: `${defaultSize * 0.7}px`,
          backgroundColor: '#4CAF50',
          bottom: `-${defaultSize * 0.5}px`,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 0
        }}
      />
    </div>
  );
};

export default Margarida;