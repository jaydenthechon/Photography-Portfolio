import React, { useState } from 'react';
import './Gallery.css';

// Import your images here
// Example: import photo1 from '../assets/images/photo1.jpg';
// import photo2 from '../assets/images/photo2.jpg';
// import photo3 from '../assets/images/photo3.jpg';
// ... add more imports as needed

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
            <img src={selectedImage.src} alt={selectedImage.title} />
            <h3>{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
