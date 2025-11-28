import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CategoryGallery.css';

const CategoryGallery = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  // Import your images here
  // Example: import photo1 from '../assets/images/photo1.jpg';

  // All images organized by category
  const allImages = {
    landscape: [
      { id: 1, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', title: 'Mountain Vista' },
      { id: 2, src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800', title: 'Night Sky' },
      { id: 3, src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800', title: 'Desert Road' },
      { id: 4, src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800', title: 'Misty Mountains' },
      { id: 5, src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800', title: 'Snow Peak' },
      { id: 6, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', title: 'Alpine View' },
    ],
    event: [
      { id: 7, src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800', title: 'Celebration' },
      { id: 8, src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800', title: 'Special Moment' },
      { id: 9, src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800', title: 'Gathering' },
      { id: 10, src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800', title: 'Party Time' },
      { id: 11, src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800', title: 'Wedding Day' },
      { id: 12, src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800', title: 'Concert' },
    ],
    nature: [
      { id: 13, src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800', title: 'Forest Path' },
      { id: 14, src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800', title: 'Green Foliage' },
      { id: 15, src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800', title: 'Misty Forest' },
      { id: 16, src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800', title: 'Pine Trees' },
      { id: 17, src: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800', title: 'Waterfall' },
      { id: 18, src: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800', title: 'Wildflowers' },
    ],
    street: [
      { id: 19, src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800', title: 'City Life' },
      { id: 20, src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800', title: 'Architecture' },
      { id: 21, src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800', title: 'Street Scene' },
      { id: 22, src: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800', title: 'Urban Night' },
      { id: 23, src: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800', title: 'City Streets' },
      { id: 24, src: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800', title: 'Downtown' },
    ],
    graduation: [
      { id: 25, src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800', title: 'Graduation Day' },
      { id: 26, src: 'https://images.unsplash.com/photo-1627556704423-7ea2a60a8bcf?w=800', title: 'Cap Toss' },
      { id: 27, src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800', title: 'Ceremony' },
      { id: 28, src: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=800', title: 'Diploma' },
      { id: 29, src: 'https://images.unsplash.com/photo-1622495831853-e09d6a98e4aa?w=800', title: 'Graduate Portrait' },
      { id: 30, src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800', title: 'Celebration Walk' },
    ],
    portraiture: [
      { id: 31, src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800', title: 'Portrait Study' },
      { id: 32, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800', title: 'Character' },
      { id: 33, src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800', title: 'Expression' },
      { id: 34, src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800', title: 'Male Portrait' },
      { id: 35, src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800', title: 'Studio Shot' },
      { id: 36, src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800', title: 'Professional' },
    ],
    food: [
      { id: 37, src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800', title: 'Gourmet Dish' },
      { id: 38, src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800', title: 'Fresh Salad' },
      { id: 39, src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800', title: 'Pizza' },
      { id: 40, src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800', title: 'Pasta' },
      { id: 41, src: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800', title: 'Breakfast' },
      { id: 42, src: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=800', title: 'Burger' },
    ]
  };

  const categoryTitles = {
    landscape: 'Landscapes',
    event: 'Events',
    nature: 'Nature',
    street: 'Street',
    graduation: 'Graduation',
    portraiture: 'Portraiture',
    food: 'Food'
  };

  const images = allImages[category] || [];
  const categoryTitle = categoryTitles[category] || category;

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
            <img src={selectedImage.src} alt={selectedImage.title} />
            <h3>{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default CategoryGallery;
