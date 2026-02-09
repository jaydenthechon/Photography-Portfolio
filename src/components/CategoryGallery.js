import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CategoryGallery.css';
import { allImagesData, categoryInfo } from '../data';

const CategoryGallery = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const categoryTitles = Object.keys(categoryInfo).reduce((acc, key) => {
    acc[key] = categoryInfo[key].title;
    return acc;
  }, { all: 'All Photos' });

  // Get images for the selected category or all images if category is 'all'
  const images = category === 'all' 
    ? Object.values(allImagesData).flat() 
    : (allImagesData[category] || []);
  const categoryTitle = categoryTitles[category] || category;

  // Navigation functions wrapped in useCallback to fix ESLint warning
  const goToNext = useCallback(() => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length; // Wrap around to start
    setSelectedImage(images[nextIndex]);
  }, [images, selectedImage]);

  const goToPrev = useCallback(() => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + images.length) % images.length; // Wrap around to end
    setSelectedImage(images[prevIndex]);
  }, [images, selectedImage]);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrev();
    }
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
  }, [selectedImage, goToNext, goToPrev]);

  return (
    <section className="category-gallery">
      <div className="category-gallery-container">
        <button className="back-button" onClick={() => navigate('/')}>
          ← Back to Gallery
        </button>
        
        <div className="category-gallery-header">
          <h2 className="category-gallery-title">{categoryTitle}</h2>
          <p className="category-gallery-count">{images.length} Photos</p>
        </div>

        <div className="category-gallery-grid">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.src} alt="" />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div 
            className="lightbox-content" 
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              ×
            </button>
            <img src={selectedImage.src} alt="" />
          </div>
        </div>
      )}
    </section>
  );
};

export default CategoryGallery;
