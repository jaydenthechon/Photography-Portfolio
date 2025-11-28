import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-image">
            <div className="about-image-placeholder">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p className="about-intro">
              Nature, Portraits, Events, Street Photography
            </p>
            <p>
                With 9 years of photography experience ranging from landscapes to portraiture and exploration of urban life, I aim to find beauty in the most mundane of moments. Those fleeting moments that pass by us in life, thats what I capture with just a few clicks.
            </p>
            <p>
              
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>1000+</h3>
                <p>Photos Taken</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <p>Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
