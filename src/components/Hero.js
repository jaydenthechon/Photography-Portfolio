import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AboutModal from './AboutModal';
import './Hero.css';
import { allImages } from '../data';

const Hero = () => {
  const [randomImages, setRandomImages] = useState([]);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Get all available images from all categories
    const allImagesList = Object.values(allImages).flat();

    // Get 3 random images
    const shuffled = [...allImagesList].sort(() => Math.random() - 0.5);
    setRandomImages(shuffled.slice(0, 3));
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        {randomImages.map((img, index) => (
          <div key={index} className="hero-image" style={{ backgroundImage: `url(${img})` }}></div>
        ))}
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Memento</h1>
        <p className="hero-subtitle">Through the Looking Glass</p>
        <div className="hero-buttons">
          <button className="hero-button primary" onClick={() => navigate('/collections')}>
            View Portfolio
          </button>
          <button className="hero-button secondary" onClick={() => setIsAboutModalOpen(true)}>
            About Me
          </button>
        </div>
      </div>
      <AboutModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
    </section>
  );
};

export default Hero;
