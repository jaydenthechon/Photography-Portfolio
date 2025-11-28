import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import GalleryHome from './components/GalleryHome';
import CategoryGallery from './components/CategoryGallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
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
