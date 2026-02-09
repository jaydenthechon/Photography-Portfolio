// Still Life
import stillLife1 from '../assets/images/photos/still life/portfolio-231.jpg';
import stillLife2 from '../assets/images/photos/still life/portfolio-232.jpg';
import stillLife3 from '../assets/images/photos/still life/portfolio-251.jpg';
import stillLife4 from '../assets/images/photos/still life/portfolio-262.jpg';
import stillLife5 from '../assets/images/photos/still life/portfolio-324.jpg';
import stillLife6 from '../assets/images/photos/still life/portfolio-335.jpg';
import stillLife7 from '../assets/images/photos/still life/portfolio-339.jpg';

export const stillLifeImages = [stillLife1, stillLife2, stillLife3, stillLife4, stillLife5, stillLife6, stillLife7];

export const stillLifeData = stillLifeImages.map((src, index) => ({
  id: index + 1,
  src,
  title: `Still Life ${index + 1}`
}));
