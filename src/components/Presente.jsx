import React from 'react';
import '../styles/Presente.css';

const Presente = ({ onClick, animating }) => {
  return (
    <div 
      className={`presente ${animating ? 'animating' : ''}`}
      onClick={!animating ? onClick : undefined}
    >
      <div className="tampa"></div>
      <div className="caixa"></div>
      <div className="fita-vertical"></div>
      <div className="fita-horizontal"></div>
      <div className="laco-1"></div>
      <div className="laco-2"></div>
      <div className="texto-clique">Clique Aqui</div>
    </div>
  );
};

export default Presente;