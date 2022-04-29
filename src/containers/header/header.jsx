import React from 'react';
import './header.css';
import hero from '../../assets/champillons-hero.jpg';

const header = () => {
  return (
    <div className="champ__header">
      <img src={hero} alt="Champillons Hero" />
    </div>
  );
};

export default header;
