import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CategoryGallery.css';

// Import landscape photos (001-023)
import landscape1 from '../assets/images/portfolio-001.jpg';
import landscape2 from '../assets/images/portfolio-002.jpg';
import landscape3 from '../assets/images/portfolio-003.jpg';
import landscape4 from '../assets/images/portfolio-004.jpg';
import landscape5 from '../assets/images/portfolio-005.jpg';
import landscape6 from '../assets/images/portfolio-006.jpg';
import landscape7 from '../assets/images/portfolio-007.jpg';
import landscape8 from '../assets/images/portfolio-008.jpg';
import landscape9 from '../assets/images/portfolio-009.jpg';
import landscape10 from '../assets/images/portfolio-010.jpg';
import landscape11 from '../assets/images/portfolio-011.jpg';
import landscape12 from '../assets/images/portfolio-012.jpg';
import landscape13 from '../assets/images/portfolio-013.jpg';
import landscape14 from '../assets/images/portfolio-014.jpg';
import landscape15 from '../assets/images/portfolio-015.jpg';
import landscape16 from '../assets/images/portfolio-016.jpg';
import landscape17 from '../assets/images/portfolio-017.jpg';
import landscape18 from '../assets/images/portfolio-018.jpg';
import landscape19 from '../assets/images/portfolio-019.jpg';
import landscape20 from '../assets/images/portfolio-020.jpg';
import landscape21 from '../assets/images/portfolio-021.jpg';
import landscape22 from '../assets/images/portfolio-022.jpg';
import landscape23 from '../assets/images/portfolio-023.jpg';

// Import event photos (024-046)
import event1 from '../assets/images/portfolio-024.jpg';
import event2 from '../assets/images/portfolio-025.jpg';
import event3 from '../assets/images/portfolio-026.jpg';
import event4 from '../assets/images/portfolio-027.jpg';
import event5 from '../assets/images/portfolio-028.jpg';
import event6 from '../assets/images/portfolio-029.jpg';
import event7 from '../assets/images/portfolio-030.jpg';
import event8 from '../assets/images/portfolio-031.jpg';
import event9 from '../assets/images/portfolio-032.jpg';
import event10 from '../assets/images/portfolio-033.jpg';
import event11 from '../assets/images/portfolio-034.jpg';
import event12 from '../assets/images/portfolio-035.jpg';
import event13 from '../assets/images/portfolio-036.jpg';
import event14 from '../assets/images/portfolio-037.jpg';
import event15 from '../assets/images/portfolio-038.jpg';
import event16 from '../assets/images/portfolio-039.jpg';
import event17 from '../assets/images/portfolio-040.jpg';
import event18 from '../assets/images/portfolio-041.jpg';
import event19 from '../assets/images/portfolio-042.jpg';
import event20 from '../assets/images/portfolio-043.jpg';
import event21 from '../assets/images/portfolio-044.jpg';
import event22 from '../assets/images/portfolio-045.jpg';
import event23 from '../assets/images/portfolio-046.jpg';

// Import nature photos (047-069)
import nature1 from '../assets/images/portfolio-047.jpg';
import nature2 from '../assets/images/portfolio-048.jpg';
import nature3 from '../assets/images/portfolio-049.jpg';
import nature4 from '../assets/images/portfolio-050.jpg';
import nature5 from '../assets/images/portfolio-051.jpg';
import nature6 from '../assets/images/portfolio-052.jpg';
import nature7 from '../assets/images/portfolio-053.jpg';
import nature8 from '../assets/images/portfolio-054.jpg';
import nature9 from '../assets/images/portfolio-055.jpg';
import nature10 from '../assets/images/portfolio-056.jpg';
import nature11 from '../assets/images/portfolio-057.jpg';
import nature12 from '../assets/images/portfolio-058.jpg';
import nature13 from '../assets/images/portfolio-059.jpg';
import nature14 from '../assets/images/portfolio-060.jpg';
import nature15 from '../assets/images/portfolio-061.jpg';
import nature16 from '../assets/images/portfolio-062.jpg';
import nature17 from '../assets/images/portfolio-063.jpg';
import nature18 from '../assets/images/portfolio-064.jpg';
import nature19 from '../assets/images/portfolio-065.jpg';
import nature20 from '../assets/images/portfolio-066.jpg';
import nature21 from '../assets/images/portfolio-067.jpg';
import nature22 from '../assets/images/portfolio-068.jpg';
import nature23 from '../assets/images/portfolio-069.jpg';

// Import street photos (070-092)
import street1 from '../assets/images/portfolio-070.jpg';
import street2 from '../assets/images/portfolio-071.jpg';
import street3 from '../assets/images/portfolio-072.jpg';
import street4 from '../assets/images/portfolio-073.jpg';
import street5 from '../assets/images/portfolio-074.jpg';
import street6 from '../assets/images/portfolio-075.jpg';
import street7 from '../assets/images/portfolio-076.jpg';
import street8 from '../assets/images/portfolio-077.jpg';
import street9 from '../assets/images/portfolio-078.jpg';
import street10 from '../assets/images/portfolio-079.jpg';
import street11 from '../assets/images/portfolio-080.jpg';
import street12 from '../assets/images/portfolio-081.jpg';
import street13 from '../assets/images/portfolio-082.jpg';
import street14 from '../assets/images/portfolio-083.jpg';
import street15 from '../assets/images/portfolio-084.jpg';
import street16 from '../assets/images/portfolio-085.jpg';
import street17 from '../assets/images/portfolio-086.jpg';
import street18 from '../assets/images/portfolio-087.jpg';
import street19 from '../assets/images/portfolio-088.jpg';
import street20 from '../assets/images/portfolio-089.jpg';
import street21 from '../assets/images/portfolio-090.jpg';
import street22 from '../assets/images/portfolio-091.jpg';
import street23 from '../assets/images/portfolio-092.jpg';

// Import graduation photos (093-115)
import graduation1 from '../assets/images/portfolio-093.jpg';
import graduation2 from '../assets/images/portfolio-094.jpg';
import graduation3 from '../assets/images/portfolio-095.jpg';
import graduation4 from '../assets/images/portfolio-096.jpg';
import graduation5 from '../assets/images/portfolio-097.jpg';
import graduation6 from '../assets/images/portfolio-098.jpg';
import graduation7 from '../assets/images/portfolio-099.jpg';
import graduation8 from '../assets/images/portfolio-100.jpg';
import graduation9 from '../assets/images/portfolio-101.jpg';
import graduation10 from '../assets/images/portfolio-102.jpg';
import graduation11 from '../assets/images/portfolio-103.jpg';
import graduation12 from '../assets/images/portfolio-104.jpg';
import graduation13 from '../assets/images/portfolio-105.jpg';
import graduation14 from '../assets/images/portfolio-106.jpg';
import graduation15 from '../assets/images/portfolio-107.jpg';
import graduation16 from '../assets/images/portfolio-108.jpg';
import graduation17 from '../assets/images/portfolio-109.jpg';
import graduation18 from '../assets/images/portfolio-110.jpg';
import graduation19 from '../assets/images/portfolio-111.jpg';
import graduation20 from '../assets/images/portfolio-112.jpg';
import graduation21 from '../assets/images/portfolio-113.jpg';
import graduation22 from '../assets/images/portfolio-114.jpg';
import graduation23 from '../assets/images/portfolio-115.jpg';

// Import portraiture photos (116-138)
import portraiture1 from '../assets/images/portfolio-116.jpg';
import portraiture2 from '../assets/images/portfolio-117.jpg';
import portraiture3 from '../assets/images/portfolio-118.jpg';
import portraiture4 from '../assets/images/portfolio-119.jpg';
import portraiture5 from '../assets/images/portfolio-120.jpg';
import portraiture6 from '../assets/images/portfolio-121.jpg';
import portraiture7 from '../assets/images/portfolio-122.jpg';
import portraiture8 from '../assets/images/portfolio-123.jpg';
import portraiture9 from '../assets/images/portfolio-124.jpg';
import portraiture10 from '../assets/images/portfolio-125.jpg';
import portraiture11 from '../assets/images/portfolio-126.jpg';
import portraiture12 from '../assets/images/portfolio-127.jpg';
import portraiture13 from '../assets/images/portfolio-128.jpg';
import portraiture14 from '../assets/images/portfolio-129.jpg';
import portraiture15 from '../assets/images/portfolio-130.jpg';
import portraiture16 from '../assets/images/portfolio-131.jpg';
import portraiture17 from '../assets/images/portfolio-132.jpg';
import portraiture18 from '../assets/images/portfolio-133.jpg';
import portraiture19 from '../assets/images/portfolio-134.jpg';
import portraiture20 from '../assets/images/portfolio-135.jpg';
import portraiture21 from '../assets/images/portfolio-136.jpg';
import portraiture22 from '../assets/images/portfolio-137.jpg';
import portraiture23 from '../assets/images/portfolio-138.jpg';

// Import food photos (139-163)
import food1 from '../assets/images/portfolio-139.jpg';
import food2 from '../assets/images/portfolio-140.jpg';
import food3 from '../assets/images/portfolio-141.jpg';
import food4 from '../assets/images/portfolio-142.jpg';
import food5 from '../assets/images/portfolio-143.jpg';
import food6 from '../assets/images/portfolio-144.jpg';
import food7 from '../assets/images/portfolio-145.jpg';
import food8 from '../assets/images/portfolio-146.jpg';
import food9 from '../assets/images/portfolio-147.jpg';
import food10 from '../assets/images/portfolio-148.jpg';
import food11 from '../assets/images/portfolio-149.jpg';
import food12 from '../assets/images/portfolio-150.jpg';
import food13 from '../assets/images/portfolio-151.jpg';
import food14 from '../assets/images/portfolio-152.jpg';
import food15 from '../assets/images/portfolio-153.jpg';
import food16 from '../assets/images/portfolio-154.jpg';
import food17 from '../assets/images/portfolio-155.jpg';
import food18 from '../assets/images/portfolio-156.jpg';
import food19 from '../assets/images/portfolio-157.jpg';
import food20 from '../assets/images/portfolio-158.jpg';
import food21 from '../assets/images/portfolio-159.jpg';
import food22 from '../assets/images/portfolio-160.jpg';
import food23 from '../assets/images/portfolio-161.jpg';
import food24 from '../assets/images/portfolio-162.jpg';
import food25 from '../assets/images/portfolio-163.jpg';

const CategoryGallery = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  // All images organized by category
  const allImages = {
    landscape: [
      { id: 1, src: landscape1, title: 'Mountain Vista' },
      { id: 2, src: landscape2, title: 'Golden Sunrise' },
      { id: 3, src: landscape3, title: 'Desert Dunes' },
      { id: 4, src: landscape4, title: 'Coastal Cliffs' },
      { id: 5, src: landscape5, title: 'Forest Valley' },
      { id: 6, src: landscape6, title: 'Alpine Lake' },
      { id: 7, src: landscape7, title: 'Rolling Hills' },
      { id: 8, src: landscape8, title: 'Canyon Views' },
      { id: 9, src: landscape9, title: 'Misty Mountains' },
      { id: 10, src: landscape10, title: 'Prairie Sunset' },
      { id: 11, src: landscape11, title: 'Rock Formations' },
      { id: 12, src: landscape12, title: 'Coastal Storm' },
      { id: 13, src: landscape13, title: 'Mountain Reflection' },
      { id: 14, src: landscape14, title: 'Desert Bloom' },
      { id: 15, src: landscape15, title: 'Vineyard Landscape' },
      { id: 16, src: landscape16, title: 'Glacial Valley' },
      { id: 17, src: landscape17, title: 'Autumn Colors' },
      { id: 18, src: landscape18, title: 'Waterfall Cascade' },
      { id: 19, src: landscape19, title: 'Lighthouse Point' },
      { id: 20, src: landscape20, title: 'Dawn Breaking' },
      { id: 21, src: landscape21, title: 'River Bend' },
      { id: 22, src: landscape22, title: 'Storm Clouds' },
      { id: 23, src: landscape23, title: 'Golden Hour' }
    ],
    event: [
      { id: 24, src: event1, title: 'Music Concert' },
      { id: 25, src: event2, title: 'Wedding Celebration' },
      { id: 26, src: event3, title: 'Corporate Gathering' },
      { id: 27, src: event4, title: 'Birthday Party' },
      { id: 28, src: event5, title: 'Festival Dance' },
      { id: 29, src: event6, title: 'Award Ceremony' },
      { id: 30, src: event7, title: 'Conference Speaker' },
      { id: 31, src: event8, title: 'Art Exhibition' },
      { id: 32, src: event9, title: 'Charity Gala' },
      { id: 33, src: event10, title: 'Product Launch' },
      { id: 34, src: event11, title: 'Sports Event' },
      { id: 35, src: event12, title: 'Cultural Festival' },
      { id: 36, src: event13, title: 'Fashion Show' },
      { id: 37, src: event14, title: 'Community Fair' },
      { id: 38, src: event15, title: 'Live Performance' },
      { id: 39, src: event16, title: 'Trade Show' },
      { id: 40, src: event17, title: 'Holiday Celebration' },
      { id: 41, src: event18, title: 'Networking Event' },
      { id: 42, src: event19, title: 'Concert Hall' },
      { id: 43, src: event20, title: 'Theatre Opening' },
      { id: 44, src: event21, title: 'Outdoor Festival' },
      { id: 45, src: event22, title: 'Gallery Opening' },
      { id: 46, src: event23, title: 'Special Occasion' }
    ],
    nature: [
      { id: 47, src: nature1, title: 'Forest Path' },
      { id: 48, src: nature2, title: 'Ocean Waves' },
      { id: 49, src: nature3, title: 'Butterfly Garden' },
      { id: 50, src: nature4, title: 'Mountain Stream' },
      { id: 51, src: nature5, title: 'Wildflower Meadow' },
      { id: 52, src: nature6, title: 'Eagle Soaring' },
      { id: 53, src: nature7, title: 'Morning Dew' },
      { id: 54, src: nature8, title: 'Tree Canopy' },
      { id: 55, src: nature9, title: 'Coral Reef' },
      { id: 56, src: nature10, title: 'Desert Cactus' },
      { id: 57, src: nature11, title: 'Snowy Peaks' },
      { id: 58, src: nature12, title: 'Tropical Beach' },
      { id: 59, src: nature13, title: 'Bird in Flight' },
      { id: 60, src: nature14, title: 'Mushroom Grove' },
      { id: 61, src: nature15, title: 'River Rapids' },
      { id: 62, src: nature16, title: 'Sunset Sky' },
      { id: 63, src: nature17, title: 'Animal Portrait' },
      { id: 64, src: nature18, title: 'Frozen Lake' },
      { id: 65, src: nature19, title: 'Spring Blossoms' },
      { id: 66, src: nature20, title: 'Starry Night' },
      { id: 67, src: nature21, title: 'Cave Entrance' },
      { id: 68, src: nature22, title: 'Rainbow Arc' },
      { id: 69, src: nature23, title: 'Natural Wonder' }
    ],
    street: [
      { id: 70, src: street1, title: 'City Life' },
      { id: 71, src: street2, title: 'Urban Explorer' },
      { id: 72, src: street3, title: 'Street Vendor' },
      { id: 73, src: street4, title: 'Neon Nights' },
      { id: 74, src: street5, title: 'Morning Commute' },
      { id: 75, src: street6, title: 'Alley Art' },
      { id: 76, src: street7, title: 'Busy Intersection' },
      { id: 77, src: street8, title: 'Market Scene' },
      { id: 78, src: street9, title: 'Subway Platform' },
      { id: 79, src: street10, title: 'Window Shopping' },
      { id: 80, src: street11, title: 'Street Musician' },
      { id: 81, src: street12, title: 'Urban Shadows' },
      { id: 82, src: street13, title: 'Crosswalk Rush' },
      { id: 83, src: street14, title: 'Cafe Culture' },
      { id: 84, src: street15, title: 'Bicycle Lane' },
      { id: 85, src: street16, title: 'Public Square' },
      { id: 86, src: street17, title: 'Construction Site' },
      { id: 87, src: street18, title: 'Bus Stop' },
      { id: 88, src: street19, title: 'Street Festival' },
      { id: 89, src: street20, title: 'Urban Wildlife' },
      { id: 90, src: street21, title: 'Night Lights' },
      { id: 91, src: street22, title: 'Old and New' },
      { id: 92, src: street23, title: 'City Character' }
    ],
    graduation: [
      { id: 93, src: graduation1, title: 'Graduation Day' },
      { id: 94, src: graduation2, title: 'Achievement Moment' },
      { id: 95, src: graduation3, title: 'Cap Toss' },
      { id: 96, src: graduation4, title: 'Proud Family' },
      { id: 97, src: graduation5, title: 'Diploma Handshake' },
      { id: 98, src: graduation6, title: 'Academic Success' },
      { id: 99, src: graduation7, title: 'Commencement Speech' },
      { id: 100, src: graduation8, title: 'Honor Society' },
      { id: 101, src: graduation9, title: 'Class Photo' },
      { id: 102, src: graduation10, title: 'School Spirit' },
      { id: 103, src: graduation11, title: 'Graduate Portrait' },
      { id: 104, src: graduation12, title: 'Celebration Hug' },
      { id: 105, src: graduation13, title: 'Future Ready' },
      { id: 106, src: graduation14, title: 'Academic Honor' },
      { id: 107, src: graduation15, title: 'Milestone Memory' },
      { id: 108, src: graduation16, title: 'Scholarly Achievement' },
      { id: 109, src: graduation17, title: 'New Beginning' },
      { id: 110, src: graduation18, title: 'Educational Journey' },
      { id: 111, src: graduation19, title: 'Success Story' },
      { id: 112, src: graduation20, title: 'Proud Moment' },
      { id: 113, src: graduation21, title: 'Academic Excellence' },
      { id: 114, src: graduation22, title: 'Graduation Ceremony' },
      { id: 115, src: graduation23, title: 'Bright Future' }
    ],
    portraiture: [
      { id: 116, src: portraiture1, title: 'Classic Portrait' },
      { id: 117, src: portraiture2, title: 'Professional Headshot' },
      { id: 118, src: portraiture3, title: 'Natural Light' },
      { id: 119, src: portraiture4, title: 'Character Study' },
      { id: 120, src: portraiture5, title: 'Studio Session' },
      { id: 121, src: portraiture6, title: 'Environmental Portrait' },
      { id: 122, src: portraiture7, title: 'Artistic Vision' },
      { id: 123, src: portraiture8, title: 'Candid Moment' },
      { id: 124, src: portraiture9, title: 'Fashion Portrait' },
      { id: 125, src: portraiture10, title: 'Creative Lighting' },
      { id: 126, src: portraiture11, title: 'Business Portrait' },
      { id: 127, src: portraiture12, title: 'Lifestyle Shot' },
      { id: 128, src: portraiture13, title: 'Senior Portrait' },
      { id: 129, src: portraiture14, title: 'Family Portrait' },
      { id: 130, src: portraiture15, title: 'Dramatic Light' },
      { id: 131, src: portraiture16, title: 'Street Portrait' },
      { id: 132, src: portraiture17, title: 'Model Session' },
      { id: 133, src: portraiture18, title: 'Personal Branding' },
      { id: 134, src: portraiture19, title: 'Actor Headshot' },
      { id: 135, src: portraiture20, title: 'Creative Expression' },
      { id: 136, src: portraiture21, title: 'Professional Image' },
      { id: 137, src: portraiture22, title: 'Personality Portrait' },
      { id: 138, src: portraiture23, title: 'Timeless Style' }
    ],
    food: [
      { id: 139, src: food1, title: 'Gourmet Dish' },
      { id: 140, src: food2, title: 'Fresh Ingredients' },
      { id: 141, src: food3, title: 'Artisan Bread' },
      { id: 142, src: food4, title: 'Fine Dining' },
      { id: 143, src: food5, title: 'Farm to Table' },
      { id: 144, src: food6, title: 'Dessert Perfection' },
      { id: 145, src: food7, title: 'Chef Creation' },
      { id: 146, src: food8, title: 'Seasonal Menu' },
      { id: 147, src: food9, title: 'Local Cuisine' },
      { id: 148, src: food10, title: 'Culinary Art' },
      { id: 149, src: food11, title: 'Market Fresh' },
      { id: 150, src: food12, title: 'Comfort Food' },
      { id: 151, src: food13, title: 'Organic Harvest' },
      { id: 152, src: food14, title: 'Street Food' },
      { id: 153, src: food15, title: 'Wine Pairing' },
      { id: 154, src: food16, title: 'Breakfast Special' },
      { id: 155, src: food17, title: 'Healthy Choice' },
      { id: 156, src: food18, title: 'Traditional Recipe' },
      { id: 157, src: food19, title: 'Modern Cuisine' },
      { id: 158, src: food20, title: 'Sweet Treats' },
      { id: 159, src: food21, title: 'Fusion Flavors' },
      { id: 160, src: food22, title: 'Kitchen Magic' },
      { id: 161, src: food23, title: 'Food Styling' },
      { id: 162, src: food24, title: 'Dinner Party' },
      { id: 163, src: food25, title: 'Culinary Journey' }
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
