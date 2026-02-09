import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Collections.css';
import { categories, allImages, totalPhotosCount } from '../data';

const Collections = () => {
  const navigate = useNavigate();
  const [categoryExamples, setCategoryExamples] = useState({});

  useEffect(() => {
    // Randomly select one image from each category
    const getRandomImage = (images) => {
      return images[Math.floor(Math.random() * images.length)];
    };

    const examples = {};
    Object.keys(allImages).forEach(categoryKey => {
      if (allImages[categoryKey] && allImages[categoryKey].length > 0) {
        examples[categoryKey] = getRandomImage(allImages[categoryKey]);
      }
    });
    // Add a random image for the "all" category
    const firstCategory = Object.keys(allImages)[0];
    if (firstCategory && allImages[firstCategory].length > 0) {
      examples.all = getRandomImage(allImages[firstCategory]);
    }
    setCategoryExamples(examples);
  }, []);

  return (
    <section className="collections">
      <div className="collections-container">
        <h2 className="collections-title">Collections</h2>
        <p className="collections-description">Explore my photography collections</p>

        <div className="categories-list">
          {categories.map((category) => (
            <div 
              key={category.name} 
              className="category-card"
              onClick={() => navigate(`/gallery/${category.name}`)}
            >
              <div className="category-image">
                <img src={categoryExamples[category.name]} alt={category.title} />
              </div>
              <div className="category-info">
                <h3 className="category-title">{category.title}</h3>
                <p className="category-description">{category.description}</p>
                <p className="category-count">{category.count} Photos</p>
              </div>
            </div>
          ))}
          
          <div 
            className="category-card"
            onClick={() => navigate('/gallery/all')}
          >
            <div className="category-image">
              <img src={categoryExamples.all} alt="All Photos" />
            </div>
            <div className="category-info">
              <h3 className="category-title">All Photos</h3>
              <p className="category-description">Browse all photography from every collection</p>
              <p className="category-count">{totalPhotosCount} Photos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
