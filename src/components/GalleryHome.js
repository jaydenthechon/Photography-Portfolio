import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GalleryHome.css';

const GalleryHome = () => {
  const navigate = useNavigate();

  // Import your images here
  // Example: import photo1 from '../assets/images/photo1.jpg';
  
  const categories = [
    {
      name: 'landscape',
      title: 'Landscapes',
      description: 'Breathtaking views and natural scenery',
      samples: [
        { id: 1, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', title: 'Mountain Vista' },
        { id: 2, src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800', title: 'Night Sky' },
        { id: 3, src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800', title: 'Desert Road' },
      ]
    },
    {
      name: 'event',
      title: 'Events',
      description: 'Capturing special moments and celebrations',
      samples: [
        { id: 4, src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800', title: 'Celebration' },
        { id: 5, src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800', title: 'Special Moment' },
        { id: 6, src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800', title: 'Gathering' },
      ]
    },
    {
      name: 'nature',
      title: 'Nature',
      description: 'Wildlife and natural beauty up close',
      samples: [
        { id: 7, src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800', title: 'Forest Path' },
        { id: 8, src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800', title: 'Green Foliage' },
        { id: 9, src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800', title: 'Misty Forest' },
      ]
    },
    {
      name: 'street',
      title: 'Street',
      description: 'Urban life and candid moments',
      samples: [
        { id: 10, src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800', title: 'City Life' },
        { id: 11, src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800', title: 'Architecture' },
        { id: 12, src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800', title: 'Street Scene' },
      ]
    },
    {
      name: 'graduation',
      title: 'Graduation',
      description: 'Celebrating academic achievements',
      samples: [
        { id: 13, src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800', title: 'Graduation Day' },
        { id: 14, src: 'https://images.unsplash.com/photo-1627556704423-7ea2a60a8bcf?w=800', title: 'Cap Toss' },
        { id: 15, src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800', title: 'Ceremony' },
      ]
    },
    {
      name: 'portraiture',
      title: 'Portraiture',
      description: 'Capturing personality and emotion',
      samples: [
        { id: 16, src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800', title: 'Portrait Study' },
        { id: 17, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800', title: 'Character' },
        { id: 18, src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800', title: 'Expression' },
      ]
    },
    {
      name: 'food',
      title: 'Food',
      description: 'Culinary artistry and delicious moments',
      samples: [
        { id: 19, src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800', title: 'Gourmet Dish' },
        { id: 20, src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800', title: 'Fresh Salad' },
        { id: 21, src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800', title: 'Pizza' },
      ]
    }
  ];

  return (
    <section id="gallery" className="gallery-home">
      <div className="gallery-container">
        <h2 className="gallery-title">Portfolio</h2>
        <p className="gallery-description">Explore my photography collections</p>

        {categories.map((category) => (
          <div key={category.name} className="category-section">
            <div className="category-header">
              <div>
                <h3 className="category-title">{category.title}</h3>
                <p className="category-description">{category.description}</p>
              </div>
              <button 
                className="view-all-btn"
                onClick={() => navigate(`/gallery/${category.name}`)}
              >
                View All →
              </button>
            </div>

            <div className="sample-grid">
              {category.samples.map((image, index) => (
                <div
                  key={image.id}
                  className="gallery-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => navigate(`/gallery/${category.name}`)}
                >
                  <img src={image.src} alt={image.title} />
                  <div className="gallery-item-overlay">
                    <h4>{image.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryHome;
