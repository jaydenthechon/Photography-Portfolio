import React from 'react';
import './AboutPage.css';
// Import a background photo and profile photo - you can change these numbers to your preferred images
import backgroundPhoto from '../assets/images/portfolio-001.jpg';
import profilePhoto from '../assets/images/portfolio-072.jpg';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section with Background and Profile Photo */}
      <div className="about-hero" style={{ backgroundImage: `url(${backgroundPhoto})` }}>
        <div className="about-hero-overlay">
          <div className="profile-photo-container">
            <img src={profilePhoto} alt="Profile" className="profile-photo" />
          </div>
          <h1 className="about-hero-title">About Me</h1>
          <p className="about-hero-subtitle">Photographer & Visual Storyteller</p>
        </div>
      </div>

      <div className="about-page-container">
        {/* Who I Am Section */}
        <section className="about-section">
          <h2>Who I Am</h2>
          <p>
            I'm a passionate photographer with 9 years of experience capturing the world through my lens. 
            My work spans across multiple genres including nature, portraits, events, and street photography. 
            I aim to find beauty in the most mundane of moments - those fleeting instances that pass by us in life.
          </p>
          <p>
            With every click of the shutter, I strive to tell a story, preserve a memory, and reveal the 
            extraordinary in the ordinary. Photography is not just my profession, it's my way of seeing 
            and interpreting the world around me.
          </p>
        </section>

        {/* How I Started Section */}
        <section className="about-section">
          <h2>How I Started</h2>
          <p>
            My journey into photography began [add your story here]. What started as a casual hobby 
            quickly transformed into a deep passion and eventually a career. The camera became an extension 
            of my creative vision, allowing me to explore and document the world in ways I never imagined.
          </p>
          <p>
            Through years of experimentation, learning, and countless hours behind the lens, I developed 
            my unique style and approach to photography. Each project and assignment has taught me something 
            new, helping me grow both technically and artistically.
          </p>
        </section>

        {/* What I Currently Do Section */}
        <section className="about-section">
          <h2>What I Currently Do</h2>
          <p>
            Today, I specialize in nature photography, portraiture, event coverage, and street photography. 
            I've had the privilege of working with over 50 happy clients and have captured over 1000 memorable 
            moments throughout my career.
          </p>
          <p>
            Whether it's documenting life's special celebrations, capturing the raw energy of urban landscapes, 
            or revealing the quiet beauty of nature, I bring the same level of dedication and artistic vision 
            to every project. I'm always excited to take on new challenges and collaborate with clients who 
            share my passion for visual storytelling.
          </p>
        </section>

        {/* Gear Section */}
        <section className="about-section gear-section">
          <h2>My Gear</h2>
          
          <div className="gear-category">
            <h3>Camera Bodies</h3>
            <ul>
              <li>[Add your camera model here]</li>
              <li>[Add additional camera if you have one]</li>
            </ul>
          </div>

          <div className="gear-category">
            <h3>Lenses</h3>
            <ul>
              <li>[Add your primary lens]</li>
              <li>[Add your portrait lens]</li>
              <li>[Add your wide angle lens]</li>
              <li>[Add your telephoto lens]</li>
              <li>[Add any other lenses]</li>
            </ul>
          </div>

          <div className="gear-category">
            <h3>Accessories</h3>
            <ul>
              <li>[Add tripod, filters, lighting equipment, etc.]</li>
            </ul>
          </div>
        </section>

        {/* Stats Section */}
        <section className="about-stats-section">
          <div className="about-stat-card">
            <h3>1000+</h3>
            <p>Photos Taken</p>
          </div>
          <div className="about-stat-card">
            <h3>50+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="about-stat-card">
            <h3>10+</h3>
            <p>Awards Won</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
