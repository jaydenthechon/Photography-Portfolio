import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GalleryHome.css';
import { categories, totalPhotosCount } from '../data';

const GalleryHome = () => {
  const navigate = useNavigate();

  return (
    <section id="gallery" className="gallery-home">
      <div className="gallery-container">
        <h2 className="gallery-title">Portfolio</h2>
        <p className="gallery-description">Explore my photography collections</p>

        <div className="categories-list">
          {categories.map((category) => (
            <div key={category.name} className="category-card">
              <h3 className="category-title">{category.title}</h3>
              <p className="category-description">{category.description}</p>
              <p className="category-count">{category.count} Photos</p>
              <button 
                className="view-category-btn"
                onClick={() => navigate(`/gallery/${category.name}`)}
              >
                View Gallery →
              </button>
            </div>
          ))}
          
          <div className="category-card">
            <h3 className="category-title">All Photos</h3>
            <p className="category-description">Browse all photography from every collection</p>
            <p className="category-count">{totalPhotosCount} Photos</p>
            <button 
              className="view-category-btn"
              onClick={() => navigate('/gallery/all')}
            >
              View Gallery →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryHome;
