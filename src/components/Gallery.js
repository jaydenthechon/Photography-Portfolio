import React, { useState, useEffect } from 'react';
import './Gallery.css';

// Import your images here
// Example: import photo1 from '../assets/images/photo1.jpg';
// import photo2 from '../assets/images/photo2.jpg';
// import photo3 from '../assets/images/photo3.jpg';
// ... add more imports as needed

import photo1 from '../assets/images/portfolio-001.jpg';
import photo2 from '../assets/images/portfolio-002.jpg';
import photo3 from '../assets/images/portfolio-003.jpg';
import photo4 from '../assets/images/portfolio-004.jpg';
import photo5 from '../assets/images/portfolio-005.jpg';
import photo6 from '../assets/images/portfolio-006.jpg';
import photo7 from '../assets/images/portfolio-007.jpg';
import photo8 from '../assets/images/portfolio-008.jpg';
import photo9 from '../assets/images/portfolio-009.jpg';
import photo10 from '../assets/images/portfolio-010.jpg';
import photo11 from '../assets/images/portfolio-011.jpg';
import photo12 from '../assets/images/portfolio-012.jpg';
import photo13 from '../assets/images/portfolio-013.jpg';
import photo14 from '../assets/images/portfolio-014.jpg';
import photo15 from '../assets/images/portfolio-015.jpg';
import photo16 from '../assets/images/portfolio-016.jpg';
import photo17 from '../assets/images/portfolio-017.jpg';
import photo18 from '../assets/images/portfolio-018.jpg';
import photo19 from '../assets/images/portfolio-019.jpg';
import photo20 from '../assets/images/portfolio-020.jpg';
import photo21 from '../assets/images/portfolio-021.jpg';
import photo22 from '../assets/images/portfolio-022.jpg';
import photo23 from '../assets/images/portfolio-023.jpg';
import photo24 from '../assets/images/portfolio-024.jpg';
import photo25 from '../assets/images/portfolio-025.jpg';
import photo26 from '../assets/images/portfolio-026.jpg';
import photo27 from '../assets/images/portfolio-027.jpg';
import photo28 from '../assets/images/portfolio-028.jpg';
import photo29 from '../assets/images/portfolio-029.jpg';
import photo30 from '../assets/images/portfolio-030.jpg';
import photo31 from '../assets/images/portfolio-031.jpg';
import photo32 from '../assets/images/portfolio-032.jpg';
import photo33 from '../assets/images/portfolio-033.jpg';
import photo34 from '../assets/images/portfolio-034.jpg';
import photo35 from '../assets/images/portfolio-035.jpg';   
import photo36 from '../assets/images/portfolio-036.jpg';
import photo37 from '../assets/images/portfolio-037.jpg'; 
import photo38 from '../assets/images/portfolio-038.jpg';
import photo39 from '../assets/images/portfolio-039.jpg';
import photo40 from '../assets/images/portfolio-040.jpg';
import photo41 from '../assets/images/portfolio-041.jpg';
import photo42 from '../assets/images/portfolio-042.jpg';
import photo43 from '../assets/images/portfolio-043.jpg';
import photo44 from '../assets/images/portfolio-044.jpg';
import photo45 from '../assets/images/portfolio-045.jpg';
import photo46 from '../assets/images/portfolio-046.jpg';
import photo47 from '../assets/images/portfolio-047.jpg';
import photo48 from '../assets/images/portfolio-048.jpg';
import photo49 from '../assets/images/portfolio-049.jpg';
import photo50 from '../assets/images/portfolio-050.jpg';
import photo51 from '../assets/images/portfolio-051.jpg';
import photo52 from '../assets/images/portfolio-052.jpg';
import photo53 from '../assets/images/portfolio-053.jpg';
import photo54 from '../assets/images/portfolio-054.jpg';
import photo55 from '../assets/images/portfolio-055.jpg';
import photo56 from '../assets/images/portfolio-056.jpg';
import photo57 from '../assets/images/portfolio-057.jpg';
import photo58 from '../assets/images/portfolio-058.jpg';
import photo59 from '../assets/images/portfolio-059.jpg';
import photo60 from '../assets/images/portfolio-060.jpg';
import photo61 from '../assets/images/portfolio-061.jpg';
import photo62 from '../assets/images/portfolio-062.jpg';
import photo63 from '../assets/images/portfolio-063.jpg';
import photo64 from '../assets/images/portfolio-064.jpg';
import photo65 from '../assets/images/portfolio-065.jpg';
import photo66 from '../assets/images/portfolio-066.jpg';
import photo67 from '../assets/images/portfolio-067.jpg';
import photo68 from '../assets/images/portfolio-068.jpg';
import photo69 from '../assets/images/portfolio-069.jpg';
import photo70 from '../assets/images/portfolio-070.jpg';
import photo71 from '../assets/images/portfolio-071.jpg';
import photo72 from '../assets/images/portfolio-072.jpg';
import photo73 from '../assets/images/portfolio-073.jpg';
import photo74 from '../assets/images/portfolio-074.jpg';
import photo75 from '../assets/images/portfolio-075.jpg';       
import photo76 from '../assets/images/portfolio-076.jpg';
import photo77 from '../assets/images/portfolio-077.jpg';
import photo78 from '../assets/images/portfolio-078.jpg';
import photo79 from '../assets/images/portfolio-079.jpg';
import photo80 from '../assets/images/portfolio-080.jpg';   
import photo81 from '../assets/images/portfolio-081.jpg';
import photo82 from '../assets/images/portfolio-082.jpg';
import photo83 from '../assets/images/portfolio-083.jpg';
import photo84 from '../assets/images/portfolio-084.jpg';
import photo85 from '../assets/images/portfolio-085.jpg';
import photo86 from '../assets/images/portfolio-086.jpg';
import photo87 from '../assets/images/portfolio-087.jpg';
import photo88 from '../assets/images/portfolio-088.jpg';
import photo89 from '../assets/images/portfolio-089.jpg';
import photo90 from '../assets/images/portfolio-090.jpg';
import photo91 from '../assets/images/portfolio-091.jpg';
import photo92 from '../assets/images/portfolio-092.jpg';
import photo93 from '../assets/images/portfolio-093.jpg';
import photo94 from '../assets/images/portfolio-094.jpg';
import photo95 from '../assets/images/portfolio-095.jpg';
import photo96 from '../assets/images/portfolio-096.jpg';
import photo97 from '../assets/images/portfolio-097.jpg';
import photo98 from '../assets/images/portfolio-098.jpg';
import photo99 from '../assets/images/portfolio-099.jpg';
import photo100 from '../assets/images/portfolio-100.jpg';
import photo101 from '../assets/images/portfolio-101.jpg';
import photo102 from '../assets/images/portfolio-102.jpg';
import photo103 from '../assets/images/portfolio-103.jpg';
import photo104 from '../assets/images/portfolio-104.jpg';
import photo105 from '../assets/images/portfolio-105.jpg';
import photo106 from '../assets/images/portfolio-106.jpg';
import photo107 from '../assets/images/portfolio-107.jpg';
import photo108 from '../assets/images/portfolio-108.jpg';
import photo109 from '../assets/images/portfolio-109.jpg';
import photo110 from '../assets/images/portfolio-110.jpg';
import photo111 from '../assets/images/portfolio-111.jpg';
import photo112 from '../assets/images/portfolio-112.jpg';
import photo113 from '../assets/images/portfolio-113.jpg';
import photo114 from '../assets/images/portfolio-114.jpg';
import photo115 from '../assets/images/portfolio-115.jpg';
import photo116 from '../assets/images/portfolio-116.jpg';
import photo117 from '../assets/images/portfolio-117.jpg';
import photo118 from '../assets/images/portfolio-118.jpg';
import photo119 from '../assets/images/portfolio-119.jpg';
import photo120 from '../assets/images/portfolio-120.jpg';
import photo121 from '../assets/images/portfolio-121.jpg';
import photo122 from '../assets/images/portfolio-122.jpg';
import photo123 from '../assets/images/portfolio-123.jpg';
import photo124 from '../assets/images/portfolio-124.jpg';
import photo125 from '../assets/images/portfolio-125.jpg';   
import photo126 from '../assets/images/portfolio-126.jpg';
import photo127 from '../assets/images/portfolio-127.jpg'; 
import photo128 from '../assets/images/portfolio-128.jpg';
import photo129 from '../assets/images/portfolio-129.jpg';
import photo130 from '../assets/images/portfolio-130.jpg';  
import photo131 from '../assets/images/portfolio-131.jpg';
import photo132 from '../assets/images/portfolio-132.jpg';
import photo133 from '../assets/images/portfolio-133.jpg';
import photo134 from '../assets/images/portfolio-134.jpg';
import photo135 from '../assets/images/portfolio-135.jpg';
import photo136 from '../assets/images/portfolio-136.jpg';
import photo137 from '../assets/images/portfolio-137.jpg';
import photo138 from '../assets/images/portfolio-138.jpg';
import photo139 from '../assets/images/portfolio-139.jpg';
import photo140 from '../assets/images/portfolio-140.jpg';
import  photo141 from '../assets/images/portfolio-141.jpg';
import  photo142 from '../assets/images/portfolio-142.jpg';
import  photo143 from '../assets/images/portfolio-143.jpg';
import  photo144 from '../assets/images/portfolio-144.jpg';
import  photo145 from '../assets/images/portfolio-145.jpg';
import  photo146 from '../assets/images/portfolio-146.jpg';
import  photo147 from '../assets/images/portfolio-147.jpg';
import  photo148 from '../assets/images/portfolio-148.jpg';
import  photo149 from '../assets/images/portfolio-149.jpg';
import  photo150 from '../assets/images/portfolio-150.jpg';
import  photo151 from '../assets/images/portfolio-151.jpg';
import  photo152 from '../assets/images/portfolio-152.jpg';
import  photo153 from '../assets/images/portfolio-153.jpg';
import  photo154 from '../assets/images/portfolio-154.jpg';
import  photo155 from '../assets/images/portfolio-155.jpg';
import  photo156 from '../assets/images/portfolio-156.jpg';
import  photo157 from '../assets/images/portfolio-157.jpg';
import  photo158 from '../assets/images/portfolio-158.jpg';
import  photo159 from '../assets/images/portfolio-159.jpg';
import  photo160 from '../assets/images/portfolio-160.jpg';
import  photo161 from '../assets/images/portfolio-161.jpg'; 
import  photo162 from '../assets/images/portfolio-162.jpg';
import  photo163 from '../assets/images/portfolio-163.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  // Replace the src values with your imported images
  // Example: { id: 1, src: photo1, category: 'landscape', title: 'Your Photo Title' }
  const images = [
    // INSTRUCTIONS: 
    // 1. Add your photos to: src/assets/images/
    // 2. Import them at the top of this file
    // 3. Replace the src URLs below with your imported image variables
    // 4. Update the category and title for each photo
    
    { id: 1, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', category: 'landscape', title: 'Mountain Vista' },
    { id: 2, src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800', category: 'event', title: 'Forest Path' },
    { id: 3, src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800', category: 'landscape', title: 'Night Sky' },
    { id: 4, src: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800', category: 'urban', title: 'City Lights' },
    { id: 5, src: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=800', category: 'event', title: 'Lake Reflection' },
    { id: 6, src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800', category: 'event', title: 'Beach Sunset' },
    { id: 7, src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800', category: 'urban', title: 'Downtown' },
    { id: 8, src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800', category: 'landscape', title: 'Desert Road' },
    { id: 9, src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800', category: 'event', title: 'Pine Forest' },
  ];

  const categories = ['all', 'landscape', 'event', 'urban'];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  // Navigation functions
  const goToNext = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length; // Wrap around to start
    setSelectedImage(filteredImages[nextIndex]);
  };

  const goToPrev = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length; // Wrap around to end
    setSelectedImage(filteredImages[prevIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, filteredImages]);

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <h2 className="gallery-title">Portfolio</h2>
        <p className="gallery-description">Curated photos</p>
        
        <div className="filter-buttons">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.src} alt={image.title} />
              <div className="gallery-item-overlay">
                <h3>{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              ×
            </button>
            <button className="lightbox-nav prev" onClick={goToPrev}>
              ‹
            </button>
            <button className="lightbox-nav next" onClick={goToNext}>
              ›
            </button>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <h3>{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
