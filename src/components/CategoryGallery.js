import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CategoryGallery.css';

// Import all photos (001-163)
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
import photo141 from '../assets/images/portfolio-141.jpg';
import photo142 from '../assets/images/portfolio-142.jpg';
import photo143 from '../assets/images/portfolio-143.jpg';
import photo144 from '../assets/images/portfolio-144.jpg';
import photo145 from '../assets/images/portfolio-145.jpg';
import photo146 from '../assets/images/portfolio-146.jpg';
import photo147 from '../assets/images/portfolio-147.jpg';
import photo148 from '../assets/images/portfolio-148.jpg';
import photo149 from '../assets/images/portfolio-149.jpg';
import photo150 from '../assets/images/portfolio-150.jpg';
import photo151 from '../assets/images/portfolio-151.jpg';
import photo152 from '../assets/images/portfolio-152.jpg';
import photo153 from '../assets/images/portfolio-153.jpg';
import photo154 from '../assets/images/portfolio-154.jpg';
import photo155 from '../assets/images/portfolio-155.jpg';
import photo156 from '../assets/images/portfolio-156.jpg';
import photo157 from '../assets/images/portfolio-157.jpg';
import photo158 from '../assets/images/portfolio-158.jpg';
import photo159 from '../assets/images/portfolio-159.jpg';
import photo160 from '../assets/images/portfolio-160.jpg';
import photo161 from '../assets/images/portfolio-161.jpg';
import photo162 from '../assets/images/portfolio-162.jpg';
import photo163 from '../assets/images/portfolio-163.jpg';

const CategoryGallery = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  // All images organized by category
  // TODO: Customize your categories and titles below
  const allImages = {
    category1: [
      { id: 1, src: photo1, title: 'Photo 1' },
      { id: 2, src: photo2, title: 'Photo 2' },
      { id: 3, src: photo3, title: 'Photo 3' },
      { id: 4, src: photo4, title: 'Photo 4' },
      { id: 5, src: photo5, title: 'Photo 5' },
      { id: 6, src: photo6, title: 'Photo 6' },
      { id: 7, src: photo7, title: 'Photo 7' },
      { id: 8, src: photo8, title: 'Photo 8' },
      { id: 9, src: photo9, title: 'Photo 9' },
      { id: 10, src: photo10, title: 'Photo 10' },
      { id: 11, src: photo11, title: 'Photo 11' },
      { id: 12, src: photo12, title: 'Photo 12' },
      { id: 13, src: photo13, title: 'Photo 13' },
      { id: 14, src: photo14, title: 'Photo 14' },
      { id: 15, src: photo15, title: 'Photo 15' },
      { id: 16, src: photo16, title: 'Photo 16' },
      { id: 17, src: photo17, title: 'Photo 17' },
      { id: 18, src: photo18, title: 'Photo 18' },
      { id: 19, src: photo19, title: 'Photo 19' },
      { id: 20, src: photo20, title: 'Photo 20' },
      { id: 21, src: photo21, title: 'Photo 21' },
      { id: 22, src: photo22, title: 'Photo 22' },
      { id: 23, src: photo23, title: 'Photo 23' }
    ],
    category2: [
      { id: 24, src: photo24, title: 'Photo 24' },
      { id: 25, src: photo25, title: 'Photo 25' },
      { id: 26, src: photo26, title: 'Photo 26' },
      { id: 27, src: photo27, title: 'Photo 27' },
      { id: 28, src: photo28, title: 'Photo 28' },
      { id: 29, src: photo29, title: 'Photo 29' },
      { id: 30, src: photo30, title: 'Photo 30' },
      { id: 31, src: photo31, title: 'Photo 31' },
      { id: 32, src: photo32, title: 'Photo 32' },
      { id: 33, src: photo33, title: 'Photo 33' },
      { id: 34, src: photo34, title: 'Photo 34' },
      { id: 35, src: photo35, title: 'Photo 35' },
      { id: 36, src: photo36, title: 'Photo 36' },
      { id: 37, src: photo37, title: 'Photo 37' },
      { id: 38, src: photo38, title: 'Photo 38' },
      { id: 39, src: photo39, title: 'Photo 39' },
      { id: 40, src: photo40, title: 'Photo 40' },
      { id: 41, src: photo41, title: 'Photo 41' },
      { id: 42, src: photo42, title: 'Photo 42' },
      { id: 43, src: photo43, title: 'Photo 43' },
      { id: 44, src: photo44, title: 'Photo 44' },
      { id: 45, src: photo45, title: 'Photo 45' },
      { id: 46, src: photo46, title: 'Photo 46' }
    ],
    category3: [
      { id: 47, src: photo47, title: 'Photo 47' },
      { id: 48, src: photo48, title: 'Photo 48' },
      { id: 49, src: photo49, title: 'Photo 49' },
      { id: 50, src: photo50, title: 'Photo 50' },
      { id: 51, src: photo51, title: 'Photo 51' },
      { id: 52, src: photo52, title: 'Photo 52' },
      { id: 53, src: photo53, title: 'Photo 53' },
      { id: 54, src: photo54, title: 'Photo 54' },
      { id: 55, src: photo55, title: 'Photo 55' },
      { id: 56, src: photo56, title: 'Photo 56' },
      { id: 57, src: photo57, title: 'Photo 57' },
      { id: 58, src: photo58, title: 'Photo 58' },
      { id: 59, src: photo59, title: 'Photo 59' },
      { id: 60, src: photo60, title: 'Photo 60' },
      { id: 61, src: photo61, title: 'Photo 61' },
      { id: 62, src: photo62, title: 'Photo 62' },
      { id: 63, src: photo63, title: 'Photo 63' },
      { id: 64, src: photo64, title: 'Photo 64' },
      { id: 65, src: photo65, title: 'Photo 65' },
      { id: 66, src: photo66, title: 'Photo 66' },
      { id: 67, src: photo67, title: 'Photo 67' },
      { id: 68, src: photo68, title: 'Photo 68' },
      { id: 69, src: photo69, title: 'Photo 69' }
    ],
    category4: [
      { id: 70, src: photo70, title: 'Photo 70' },
      { id: 71, src: photo71, title: 'Photo 71' },
      { id: 72, src: photo72, title: 'Photo 72' },
      { id: 73, src: photo73, title: 'Photo 73' },
      { id: 74, src: photo74, title: 'Photo 74' },
      { id: 75, src: photo75, title: 'Photo 75' },
      { id: 76, src: photo76, title: 'Photo 76' },
      { id: 77, src: photo77, title: 'Photo 77' },
      { id: 78, src: photo78, title: 'Photo 78' },
      { id: 79, src: photo79, title: 'Photo 79' },
      { id: 80, src: photo80, title: 'Photo 80' },
      { id: 81, src: photo81, title: 'Photo 81' },
      { id: 82, src: photo82, title: 'Photo 82' },
      { id: 83, src: photo83, title: 'Photo 83' },
      { id: 84, src: photo84, title: 'Photo 84' },
      { id: 85, src: photo85, title: 'Photo 85' },
      { id: 86, src: photo86, title: 'Photo 86' },
      { id: 87, src: photo87, title: 'Photo 87' },
      { id: 88, src: photo88, title: 'Photo 88' },
      { id: 89, src: photo89, title: 'Photo 89' },
      { id: 90, src: photo90, title: 'Photo 90' },
      { id: 91, src: photo91, title: 'Photo 91' },
      { id: 92, src: photo92, title: 'Photo 92' }
    ],
    category5: [
      { id: 93, src: photo93, title: 'Photo 93' },
      { id: 94, src: photo94, title: 'Photo 94' },
      { id: 95, src: photo95, title: 'Photo 95' },
      { id: 96, src: photo96, title: 'Photo 96' },
      { id: 97, src: photo97, title: 'Photo 97' },
      { id: 98, src: photo98, title: 'Photo 98' },
      { id: 99, src: photo99, title: 'Photo 99' },
      { id: 100, src: photo100, title: 'Photo 100' },
      { id: 101, src: photo101, title: 'Photo 101' },
      { id: 102, src: photo102, title: 'Photo 102' },
      { id: 103, src: photo103, title: 'Photo 103' },
      { id: 104, src: photo104, title: 'Photo 104' },
      { id: 105, src: photo105, title: 'Photo 105' },
      { id: 106, src: photo106, title: 'Photo 106' },
      { id: 107, src: photo107, title: 'Photo 107' },
      { id: 108, src: photo108, title: 'Photo 108' },
      { id: 109, src: photo109, title: 'Photo 109' },
      { id: 110, src: photo110, title: 'Photo 110' },
      { id: 111, src: photo111, title: 'Photo 111' },
      { id: 112, src: photo112, title: 'Photo 112' },
      { id: 113, src: photo113, title: 'Photo 113' },
      { id: 114, src: photo114, title: 'Photo 114' },
      { id: 115, src: photo115, title: 'Photo 115' }
    ],
    category6: [
      { id: 116, src: photo116, title: 'Photo 116' },
      { id: 117, src: photo117, title: 'Photo 117' },
      { id: 118, src: photo118, title: 'Photo 118' },
      { id: 119, src: photo119, title: 'Photo 119' },
      { id: 120, src: photo120, title: 'Photo 120' },
      { id: 121, src: photo121, title: 'Photo 121' },
      { id: 122, src: photo122, title: 'Photo 122' },
      { id: 123, src: photo123, title: 'Photo 123' },
      { id: 124, src: photo124, title: 'Photo 124' },
      { id: 125, src: photo125, title: 'Photo 125' },
      { id: 126, src: photo126, title: 'Photo 126' },
      { id: 127, src: photo127, title: 'Photo 127' },
      { id: 128, src: photo128, title: 'Photo 128' },
      { id: 129, src: photo129, title: 'Photo 129' },
      { id: 130, src: photo130, title: 'Photo 130' },
      { id: 131, src: photo131, title: 'Photo 131' },
      { id: 132, src: photo132, title: 'Photo 132' },
      { id: 133, src: photo133, title: 'Photo 133' },
      { id: 134, src: photo134, title: 'Photo 134' },
      { id: 135, src: photo135, title: 'Photo 135' },
      { id: 136, src: photo136, title: 'Photo 136' },
      { id: 137, src: photo137, title: 'Photo 137' },
      { id: 138, src: photo138, title: 'Photo 138' }
    ],
    category7: [
      { id: 139, src: photo139, title: 'Photo 139' },
      { id: 140, src: photo140, title: 'Photo 140' },
      { id: 141, src: photo141, title: 'Photo 141' },
      { id: 142, src: photo142, title: 'Photo 142' },
      { id: 143, src: photo143, title: 'Photo 143' },
      { id: 144, src: photo144, title: 'Photo 144' },
      { id: 145, src: photo145, title: 'Photo 145' },
      { id: 146, src: photo146, title: 'Photo 146' },
      { id: 147, src: photo147, title: 'Photo 147' },
      { id: 148, src: photo148, title: 'Photo 148' },
      { id: 149, src: photo149, title: 'Photo 149' },
      { id: 150, src: photo150, title: 'Photo 150' },
      { id: 151, src: photo151, title: 'Photo 151' },
      { id: 152, src: photo152, title: 'Photo 152' },
      { id: 153, src: photo153, title: 'Photo 153' },
      { id: 154, src: photo154, title: 'Photo 154' },
      { id: 155, src: photo155, title: 'Photo 155' },
      { id: 156, src: photo156, title: 'Photo 156' },
      { id: 157, src: photo157, title: 'Photo 157' },
      { id: 158, src: photo158, title: 'Photo 158' },
      { id: 159, src: photo159, title: 'Photo 159' },
      { id: 160, src: photo160, title: 'Photo 160' },
      { id: 161, src: photo161, title: 'Photo 161' },
      { id: 162, src: photo162, title: 'Photo 162' },
      { id: 163, src: photo163, title: 'Photo 163' }
    ]
  };

  const categoryTitles = {
    category1: 'Category 1',
    category2: 'Category 2',
    category3: 'Category 3',
    category4: 'Category 4',
    category5: 'Category 5',
    category6: 'Category 6',
    category7: 'Category 7',
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
