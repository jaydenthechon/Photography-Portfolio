import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutModal.css';
import { allImages } from '../data';

const AboutModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  // Use the first photo from People category as profile photo
  const profilePhoto = allImages.people && allImages.people.length > 0 ? allImages.people[0] : null;

  if (!isOpen) return null;

  const handleLearnMore = () => {
    onClose();
    navigate('/about');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-profile-photo">
          <img src={profilePhoto} alt="Profile" />
        </div>
        
        <h2>About Me</h2>
        
        <p className="modal-intro">
          I'm Jayden, a Boston based photographer with 9 years of experience capturing the world through my lens.
        </p>
        
        <p>
          My work spans across nature, portraits, events, and street photography. I aim to find beauty 
          in the most mundane of moments - those fleeting instances that pass by us in life. With every 
          click of the shutter, I strive to tell a story and preserve memories that last a lifetime.
        </p>
        
        <button className="modal-learn-more" onClick={handleLearnMore}>
          Learn More About Me →
        </button>
      </div>
    </div>
  );
};

export default AboutModal;
