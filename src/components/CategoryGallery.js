import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CategoryGallery.css';

// Street Photography
import street1 from '../assets/images/portfolio-001.jpg';
import street2 from '../assets/images/portfolio-002.jpg';
import street3 from '../assets/images/portfolio-003.jpg';
import street4 from '../assets/images/portfolio-004.jpg';
import street5 from '../assets/images/portfolio-006.jpg';
import street6 from '../assets/images/portfolio-010.jpg';
import street7 from '../assets/images/portfolio-011.jpg';
import street8 from '../assets/images/portfolio-012.jpg';
import street9 from '../assets/images/portfolio-013.jpg';
import street10 from '../assets/images/portfolio-050.jpg';
import street11 from '../assets/images/portfolio-051.jpg';
import street12 from '../assets/images/portfolio-053.jpg';
import street13 from '../assets/images/portfolio-056.jpg';
import street14 from '../assets/images/portfolio-057.jpg';
import street15 from '../assets/images/portfolio-058.jpg';
import street16 from '../assets/images/portfolio-059.jpg';
import street17 from '../assets/images/portfolio-060.jpg';
import street18 from '../assets/images/portfolio-061.jpg';
import street19 from '../assets/images/portfolio-062.jpg';
import street20 from '../assets/images/portfolio-063.jpg';
import street21 from '../assets/images/portfolio-064.jpg';
import street22 from '../assets/images/portfolio-065.jpg';
import street23 from '../assets/images/portfolio-071.jpg';
import street24 from '../assets/images/portfolio-072.jpg';
import street25 from '../assets/images/portfolio-073.jpg';
import street26 from '../assets/images/portfolio-074.jpg';
import street27 from '../assets/images/portfolio-075.jpg';
import street28 from '../assets/images/portfolio-076.jpg';
import street29 from '../assets/images/portfolio-089.jpg';
import street30 from '../assets/images/portfolio-090.jpg';
import street31 from '../assets/images/portfolio-091.jpg';
import street32 from '../assets/images/portfolio-094.jpg';
import street33 from '../assets/images/portfolio-095.jpg';
import street34 from '../assets/images/portfolio-096.jpg';
import street35 from '../assets/images/portfolio-097.jpg';
import street36 from '../assets/images/portfolio-098.jpg';
import street37 from '../assets/images/portfolio-099.jpg';
import street38 from '../assets/images/portfolio-100.jpg';
import street39 from '../assets/images/portfolio-101.jpg';
import street40 from '../assets/images/portfolio-102.jpg';
import street41 from '../assets/images/portfolio-103.jpg';
import street42 from '../assets/images/portfolio-107.jpg';
import street43 from '../assets/images/portfolio-108.jpg';
import street44 from '../assets/images/portfolio-114.jpg';
import street45 from '../assets/images/portfolio-115.jpg';
import street46 from '../assets/images/portfolio-116.jpg';
import street47 from '../assets/images/portfolio-117.jpg';
import street48 from '../assets/images/portfolio-118.jpg';
import street49 from '../assets/images/portfolio-119.jpg';
import street50 from '../assets/images/portfolio-136.jpg';
import street51 from '../assets/images/portfolio-137.jpg';
import street52 from '../assets/images/portfolio-138.jpg';
import street53 from '../assets/images/portfolio-141.jpg';
import street54 from '../assets/images/portfolio-142.jpg';
import street55 from '../assets/images/portfolio-143.jpg';
import street56 from '../assets/images/portfolio-144.jpg';
import street57 from '../assets/images/portfolio-145.jpg';
import street58 from '../assets/images/portfolio-146.jpg';
import street59 from '../assets/images/portfolio-147.jpg';
import street60 from '../assets/images/portfolio-148.jpg';
import street61 from '../assets/images/portfolio-149.jpg';
import street62 from '../assets/images/portfolio-150.jpg';
import street63 from '../assets/images/portfolio-151.jpg';
import street64 from '../assets/images/portfolio-152.jpg';
import street65 from '../assets/images/portfolio-153.jpg';
import street67 from '../assets/images/portfolio-154.jpg';
import street68 from '../assets/images/portfolio-155.jpg';
import street69 from '../assets/images/portfolio-156.jpg';
import street70 from '../assets/images/portfolio-157.jpg';
import street71 from '../assets/images/portfolio-158.jpg';
import street72 from '../assets/images/portfolio-159.jpg';

// Portraiture
import portraiture1 from '../assets/images/portfolio-005.jpg';
import portraiture2 from '../assets/images/portfolio-052.jpg';
import portraiture3 from '../assets/images/portfolio-054.jpg';
import portraiture4 from '../assets/images/portfolio-055.jpg';
import portraiture5 from '../assets/images/portfolio-078.jpg';
import portraiture6 from '../assets/images/portfolio-079.jpg';
import portraiture7 from '../assets/images/portfolio-080.jpg';
import portraiture8 from '../assets/images/portfolio-081.jpg';
import portraiture9 from '../assets/images/portfolio-082.jpg';
import portraiture10 from '../assets/images/portfolio-083.jpg';
import portraiture11 from '../assets/images/portfolio-084.jpg';
import portraiture12 from '../assets/images/portfolio-085.jpg';
import portraiture13 from '../assets/images/portfolio-086.jpg';
import portraiture14 from '../assets/images/portfolio-088.jpg';
import portraiture15 from '../assets/images/portfolio-093.jpg';
import portraiture16 from '../assets/images/portfolio-104.jpg';
import portraiture17 from '../assets/images/portfolio-105.jpg';
import portraiture18 from '../assets/images/portfolio-106.jpg';
import portraiture19 from '../assets/images/portfolio-109.jpg';
import portraiture20 from '../assets/images/portfolio-110.jpg';
import portraiture21 from '../assets/images/portfolio-135.jpg';
import portraiture22 from '../assets/images/portfolio-139.jpg';
import portraiture23 from '../assets/images/portfolio-140.jpg';
import portraiture24 from '../assets/images/portfolio-163.jpg';

// Nature
import nature1 from '../assets/images/portfolio-007.jpg';
import nature2 from '../assets/images/portfolio-008.jpg';
import nature3 from '../assets/images/portfolio-009.jpg';
import nature4 from '../assets/images/portfolio-066.jpg';
import nature5 from '../assets/images/portfolio-067.jpg';
import nature6 from '../assets/images/portfolio-068.jpg';
import nature7 from '../assets/images/portfolio-069.jpg';
import nature8 from '../assets/images/portfolio-070.jpg';
import nature9 from '../assets/images/portfolio-077.jpg';
import nature10 from '../assets/images/portfolio-087.jpg';
import nature11 from '../assets/images/portfolio-112.jpg';
import nature12 from '../assets/images/portfolio-120.jpg';
import nature13 from '../assets/images/portfolio-121.jpg';
import nature14 from '../assets/images/portfolio-122.jpg';
import nature15 from '../assets/images/portfolio-123.jpg';
import nature16 from '../assets/images/portfolio-124.jpg';
import nature17 from '../assets/images/portfolio-125.jpg';
import nature18 from '../assets/images/portfolio-126.jpg';
import nature19 from '../assets/images/portfolio-127.jpg';
import nature20 from '../assets/images/portfolio-128.jpg';
import nature21 from '../assets/images/portfolio-129.jpg';
import nature22 from '../assets/images/portfolio-130.jpg';
import nature23 from '../assets/images/portfolio-131.jpg';
import nature24 from '../assets/images/portfolio-160.jpg';
import nature25 from '../assets/images/portfolio-161.jpg';
import nature26 from '../assets/images/portfolio-162.jpg';

// Graduation
import graduation1 from '../assets/images/portfolio-014.jpg';
import graduation2 from '../assets/images/portfolio-015.jpg';
import graduation3 from '../assets/images/portfolio-016.jpg';
import graduation4 from '../assets/images/portfolio-017.jpg';
import graduation5 from '../assets/images/portfolio-018.jpg';
import graduation6 from '../assets/images/portfolio-019.jpg';
import graduation7 from '../assets/images/portfolio-020.jpg';
import graduation8 from '../assets/images/portfolio-021.jpg';
import graduation9 from '../assets/images/portfolio-022.jpg';
import graduation10 from '../assets/images/portfolio-023.jpg';
import graduation11 from '../assets/images/portfolio-024.jpg';
import graduation12 from '../assets/images/portfolio-025.jpg';
import graduation13 from '../assets/images/portfolio-026.jpg';
import graduation14 from '../assets/images/portfolio-027.jpg';
import graduation15 from '../assets/images/portfolio-028.jpg';
import graduation16 from '../assets/images/portfolio-029.jpg';
import graduation17 from '../assets/images/portfolio-030.jpg';
import graduation18 from '../assets/images/portfolio-031.jpg';
import graduation19 from '../assets/images/portfolio-032.jpg';
import graduation20 from '../assets/images/portfolio-033.jpg';
import graduation21 from '../assets/images/portfolio-034.jpg';
import graduation22 from '../assets/images/portfolio-035.jpg';
import graduation23 from '../assets/images/portfolio-036.jpg';
import graduation24 from '../assets/images/portfolio-037.jpg';
import graduation25 from '../assets/images/portfolio-038.jpg';
import graduation26 from '../assets/images/portfolio-039.jpg';
import graduation27 from '../assets/images/portfolio-040.jpg';
import graduation28 from '../assets/images/portfolio-041.jpg';
import graduation29 from '../assets/images/portfolio-042.jpg';
import graduation30 from '../assets/images/portfolio-043.jpg';
import graduation31 from '../assets/images/portfolio-044.jpg';
import graduation32 from '../assets/images/portfolio-045.jpg';
import graduation33 from '../assets/images/portfolio-046.jpg';
import graduation34 from '../assets/images/portfolio-047.jpg';
import graduation35 from '../assets/images/portfolio-048.jpg';
import graduation36 from '../assets/images/portfolio-049.jpg';

// Events
import event1 from '../assets/images/portfolio-132.jpg';
import event2 from '../assets/images/portfolio-133.jpg';
import event3 from '../assets/images/portfolio-134.jpg';

const CategoryGallery = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  // All images organized by category
  const allImages = {
    street: [
      { id: 1, src: street1, title: 'Street 1' },
      { id: 2, src: street2, title: 'Street 2' },
      { id: 3, src: street3, title: 'Street 3' },
      { id: 4, src: street4, title: 'Street 4' },
      { id: 5, src: street5, title: 'Street 5' },
      { id: 6, src: street6, title: 'Street 6' },
      { id: 7, src: street7, title: 'Street 7' },
      { id: 8, src: street8, title: 'Street 8' },
      { id: 9, src: street9, title: 'Street 9' },
      { id: 10, src: street10, title: 'Street 10' },
      { id: 11, src: street11, title: 'Street 11' },
      { id: 12, src: street12, title: 'Street 12' },
      { id: 13, src: street13, title: 'Street 13' },
      { id: 14, src: street14, title: 'Street 14' },
      { id: 15, src: street15, title: 'Street 15' },
      { id: 16, src: street16, title: 'Street 16' },
      { id: 17, src: street17, title: 'Street 17' },
      { id: 18, src: street18, title: 'Street 18' },
      { id: 19, src: street19, title: 'Street 19' },
      { id: 20, src: street20, title: 'Street 20' },
      { id: 21, src: street21, title: 'Street 21' },
      { id: 22, src: street22, title: 'Street 22' },
      { id: 23, src: street23, title: 'Street 23' },
      { id: 24, src: street24, title: 'Street 24' },
      { id: 25, src: street25, title: 'Street 25' },
      { id: 26, src: street26, title: 'Street 26' },
      { id: 27, src: street27, title: 'Street 27' },
      { id: 28, src: street28, title: 'Street 28' },
      { id: 29, src: street29, title: 'Street 29' },
      { id: 30, src: street30, title: 'Street 30' },
      { id: 31, src: street31, title: 'Street 31' },
      { id: 32, src: street32, title: 'Street 32' },
      { id: 33, src: street33, title: 'Street 33' },
      { id: 34, src: street34, title: 'Street 34' },
      { id: 35, src: street35, title: 'Street 35' },
      { id: 36, src: street36, title: 'Street 36' },
      { id: 37, src: street37, title: 'Street 37' },
      { id: 38, src: street38, title: 'Street 38' },
      { id: 39, src: street39, title: 'Street 39' },
      { id: 40, src: street40, title: 'Street 40' },
      { id: 41, src: street41, title: 'Street 41' },
      { id: 42, src: street42, title: 'Street 42' },
      { id: 43, src: street43, title: 'Street 43' },
      { id: 44, src: street44, title: 'Street 44' },
      { id: 45, src: street45, title: 'Street 45' },
      { id: 46, src: street46, title: 'Street 46' },
      { id: 47, src: street47, title: 'Street 47' },
      { id: 48, src: street48, title: 'Street 48' },
      { id: 49, src: street49, title: 'Street 49' },
      { id: 50, src: street50, title: 'Street 50' },
      { id: 51, src: street51, title: 'Street 51' },
      { id: 52, src: street52, title: 'Street 52' },
      { id: 53, src: street53, title: 'Street 53' },
      { id: 54, src: street54, title: 'Street 54' },
      { id: 55, src: street55, title: 'Street 55' },
      { id: 56, src: street56, title: 'Street 56' },
      { id: 57, src: street57, title: 'Street 57' },
      { id: 58, src: street58, title: 'Street 58' },
      { id: 59, src: street59, title: 'Street 59' },
      { id: 60, src: street60, title: 'Street 60' },
      { id: 61, src: street61, title: 'Street 61' },
      { id: 62, src: street62, title: 'Street 62' },
      { id: 63, src: street63, title: 'Street 63' },
      { id: 64, src: street64, title: 'Street 64' },
      { id: 65, src: street65, title: 'Street 65' },
      { id: 66, src: street67, title: 'Street 67' },
      { id: 67, src: street68, title: 'Street 68' },
      { id: 68, src: street69, title: 'Street 69' },
      { id: 69, src: street70, title: 'Street 70' },
      { id: 70, src: street71, title: 'Street 71' },
      { id: 71, src: street72, title: 'Street 72' }
    ],
    portraiture: [
      { id: 72, src: portraiture1, title: 'Portraiture 1' },
      { id: 73, src: portraiture2, title: 'Portraiture 2' },
      { id: 74, src: portraiture3, title: 'Portraiture 3' },
      { id: 75, src: portraiture4, title: 'Portraiture 4' },
      { id: 76, src: portraiture5, title: 'Portraiture 5' },
      { id: 77, src: portraiture6, title: 'Portraiture 6' },
      { id: 78, src: portraiture7, title: 'Portraiture 7' },
      { id: 79, src: portraiture8, title: 'Portraiture 8' },
      { id: 80, src: portraiture9, title: 'Portraiture 9' },
      { id: 81, src: portraiture10, title: 'Portraiture 10' },
      { id: 82, src: portraiture11, title: 'Portraiture 11' },
      { id: 83, src: portraiture12, title: 'Portraiture 12' },
      { id: 84, src: portraiture13, title: 'Portraiture 13' },
      { id: 85, src: portraiture14, title: 'Portraiture 14' },
      { id: 86, src: portraiture15, title: 'Portraiture 15' },
      { id: 87, src: portraiture16, title: 'Portraiture 16' },
      { id: 88, src: portraiture17, title: 'Portraiture 17' },
      { id: 89, src: portraiture18, title: 'Portraiture 18' },
      { id: 90, src: portraiture19, title: 'Portraiture 19' },
      { id: 91, src: portraiture20, title: 'Portraiture 20' },
      { id: 92, src: portraiture21, title: 'Portraiture 21' },
      { id: 93, src: portraiture22, title: 'Portraiture 22' },
      { id: 94, src: portraiture23, title: 'Portraiture 23' },
      { id: 95, src: portraiture24, title: 'Portraiture 24' }
    ],
    nature: [
      { id: 96, src: nature1, title: 'Nature 1' },
      { id: 97, src: nature2, title: 'Nature 2' },
      { id: 98, src: nature3, title: 'Nature 3' },
      { id: 99, src: nature4, title: 'Nature 4' },
      { id: 100, src: nature5, title: 'Nature 5' },
      { id: 101, src: nature6, title: 'Nature 6' },
      { id: 102, src: nature7, title: 'Nature 7' },
      { id: 103, src: nature8, title: 'Nature 8' },
      { id: 104, src: nature9, title: 'Nature 9' },
      { id: 105, src: nature10, title: 'Nature 10' },
      { id: 106, src: nature11, title: 'Nature 11' },
      { id: 107, src: nature12, title: 'Nature 12' },
      { id: 108, src: nature13, title: 'Nature 13' },
      { id: 109, src: nature14, title: 'Nature 14' },
      { id: 110, src: nature15, title: 'Nature 15' },
      { id: 111, src: nature16, title: 'Nature 16' },
      { id: 112, src: nature17, title: 'Nature 17' },
      { id: 113, src: nature18, title: 'Nature 18' },
      { id: 114, src: nature19, title: 'Nature 19' },
      { id: 115, src: nature20, title: 'Nature 20' },
      { id: 116, src: nature21, title: 'Nature 21' },
      { id: 117, src: nature22, title: 'Nature 22' },
      { id: 118, src: nature23, title: 'Nature 23' },
      { id: 119, src: nature24, title: 'Nature 24' },
      { id: 120, src: nature25, title: 'Nature 25' },
      { id: 121, src: nature26, title: 'Nature 26' }
    ],
    graduation: [
      { id: 122, src: graduation1, title: 'Graduation 1' },
      { id: 123, src: graduation2, title: 'Graduation 2' },
      { id: 124, src: graduation3, title: 'Graduation 3' },
      { id: 125, src: graduation4, title: 'Graduation 4' },
      { id: 126, src: graduation5, title: 'Graduation 5' },
      { id: 127, src: graduation6, title: 'Graduation 6' },
      { id: 128, src: graduation7, title: 'Graduation 7' },
      { id: 129, src: graduation8, title: 'Graduation 8' },
      { id: 130, src: graduation9, title: 'Graduation 9' },
      { id: 131, src: graduation10, title: 'Graduation 10' },
      { id: 132, src: graduation11, title: 'Graduation 11' },
      { id: 133, src: graduation12, title: 'Graduation 12' },
      { id: 134, src: graduation13, title: 'Graduation 13' },
      { id: 135, src: graduation14, title: 'Graduation 14' },
      { id: 136, src: graduation15, title: 'Graduation 15' },
      { id: 137, src: graduation16, title: 'Graduation 16' },
      { id: 138, src: graduation17, title: 'Graduation 17' },
      { id: 139, src: graduation18, title: 'Graduation 18' },
      { id: 140, src: graduation19, title: 'Graduation 19' },
      { id: 141, src: graduation20, title: 'Graduation 20' },
      { id: 142, src: graduation21, title: 'Graduation 21' },
      { id: 143, src: graduation22, title: 'Graduation 22' },
      { id: 144, src: graduation23, title: 'Graduation 23' },
      { id: 145, src: graduation24, title: 'Graduation 24' },
      { id: 146, src: graduation25, title: 'Graduation 25' },
      { id: 147, src: graduation26, title: 'Graduation 26' },
      { id: 148, src: graduation27, title: 'Graduation 27' },
      { id: 149, src: graduation28, title: 'Graduation 28' },
      { id: 150, src: graduation29, title: 'Graduation 29' },
      { id: 151, src: graduation30, title: 'Graduation 30' },
      { id: 152, src: graduation31, title: 'Graduation 31' },
      { id: 153, src: graduation32, title: 'Graduation 32' },
      { id: 154, src: graduation33, title: 'Graduation 33' },
      { id: 155, src: graduation34, title: 'Graduation 34' },
      { id: 156, src: graduation35, title: 'Graduation 35' },
      { id: 157, src: graduation36, title: 'Graduation 36' }
    ],
    events: [
      { id: 158, src: event1, title: 'Event 1' },
      { id: 159, src: event2, title: 'Event 2' },
      { id: 160, src: event3, title: 'Event 3' }
    ]
  };

  const categoryTitles = {
    street: 'Street Photography',
    portraiture: 'Portraiture',
    nature: 'Nature',
    graduation: 'Graduation',
    events: 'Events',
    all: 'All Photos'
  };

  // Get images for the selected category or all images if category is 'all'
  const images = category === 'all' 
    ? Object.values(allImages).flat() 
    : (allImages[category] || []);
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

export default CategoryGallery;
