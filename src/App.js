import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import GalleryHome from './components/GalleryHome';
import CategoryGallery from './components/CategoryGallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Component to handle scroll restoration
function ScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    // Disable automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Save scroll position to session storage periodically
    const saveScrollPosition = () => {
      const scrollData = {
        position: window.scrollY,
        path: location.pathname
      };
      sessionStorage.setItem(`scroll_${location.pathname}`, JSON.stringify(scrollData));
    };

    // Save on scroll with throttling
    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(saveScrollPosition, 100);
    };

    window.addEventListener('scroll', handleScroll);

    // Save before unload
    window.addEventListener('beforeunload', saveScrollPosition);

    // Restore scroll position on mount
    const savedData = sessionStorage.getItem(`scroll_${location.pathname}`);
    if (savedData) {
      try {
        const { position } = JSON.parse(savedData);
        // Use requestAnimationFrame to ensure DOM is ready
        requestAnimationFrame(() => {
          setTimeout(() => {
            window.scrollTo(0, position);
          }, 0);
        });
      } catch (e) {
        console.error('Error restoring scroll position:', e);
      }
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', saveScrollPosition);
      clearTimeout(scrollTimeout);
    };
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollRestoration />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <GalleryHome />
              <About />
              <Contact />
            </>
          } />
          <Route path="/gallery/:category" element={<CategoryGallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
