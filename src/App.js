import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Collections from './components/Collections';
import CategoryGallery from './components/CategoryGallery';
import AboutPage from './components/AboutPage';
import Contact from './components/Contact';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';

// Component to handle scroll restoration
function ScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    // Disable automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Check if this is a page reload or back/forward navigation
    const navigationEntry = performance.getEntriesByType('navigation')[0];
    const isReload = navigationEntry && navigationEntry.type === 'reload';
    const isBackForward = navigationEntry && navigationEntry.type === 'back_forward';

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

    // Restore scroll position only on reload or back/forward
    if (isReload || isBackForward) {
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
    } else {
      // New navigation - scroll to top
      window.scrollTo(0, 0);
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
    <Router basename="/Photography-Portfolio">
      <ScrollRestoration />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/gallery/:category" element={<CategoryGallery />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
