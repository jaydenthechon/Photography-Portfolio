import React from 'react';
import './AboutPage.css';
// Import a background photo and profile photo - you can change these numbers to your preferred images
import backgroundPhoto from '../assets/images/portfolio-075.jpg';
import profilePhoto from '../assets/images/portfolio-088.jpg';

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
            Hello! I'm Jayden, a Boston based photographer, student, and software developer with a passion for capturing the world through my lens.
          </p>
          <p>
            
          </p>
        </section>

        {/* How I Started Section */}
        <section className="about-section">
          <h2>How I Started</h2>
          <p>
            I remember picking up my dad's camera when I was 12 years old. As a 12 year old I wasn't allowed to touch dad's expensive camera so naturally that made me want to play with it even more. I started by sneaking the camera out from the bag when my dad was at work and taking photos of my room: the carpet, the bathroom doorkknob, it was all fair game. After doing this for a bit but realizing how bad my photos were, I went on youtube and found videos on how to take photos properly. 9 years later, here I am.
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
            Today, I specialize in nature photography, portraiture, event coverage, and street photography. Being in Boston, I'm a little limited to street photography since its the most accesible however my favorite is nature and landscapes. Something about the quiet immense power of the natural world draws me into its embrace.
            
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
              <li>Fujifilm XT-3</li>
              <li>Nikon Coolpix S8100</li>
            </ul>
          </div>

          <div className="gear-category">
            <h3>Lenses</h3>
            <ul>
              <li>Sigma Art 17-40mm f/1.8</li>
              <li>Sigma 56mm f/1.4</li>
              <li>Fujifilm XF 60mm f/2.4</li>
            </ul>
          </div>
        </section>

        {/* Stats Section */}
      </div>
    </div>
  );
};

export default AboutPage;
