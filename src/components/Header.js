import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if we're at the top
      setScrolled(currentScrollY > 50);
      
      // Show header when scrolling up or at top, hide when scrolling down
      if (currentScrollY < 10) {
        setVisible(true); // Always show at top
      } else if (currentScrollY < lastScrollY) {
        setVisible(true); // Scrolling up
      } else if (currentScrollY > lastScrollY) {
        setVisible(false); // Scrolling down
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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

  const handleAboutClick = () => {
    navigate('/about');
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${!visible ? 'hidden' : ''}`}>
      <div className="header-content">
        <h1 className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          JaydentheChon
        </h1>
        <nav className="nav">
          <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/collections')}>Gallery</button>
          <button onClick={handleAboutClick}>About</button>
          <button onClick={() => navigate('/contact')}>Contact</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
