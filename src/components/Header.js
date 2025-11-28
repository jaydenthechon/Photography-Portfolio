import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <h1 className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          JaydentheChon
        </h1>
        <nav className="nav">
          <button onClick={() => scrollToSection('home')}>Home</button>
          <button onClick={() => scrollToSection('gallery')}>Gallery</button>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
