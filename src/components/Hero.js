import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Memento</h1>
        <p className="hero-subtitle">Through the Looking Glass</p>
        <button className="hero-button" onClick={() => {
          document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
        }}>
          View Portfolio
        </button>
      </div>
    </section>
  );
};

export default Hero;
