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

export const natureImages = [
  nature1, nature2, nature3, nature4, nature5, nature6, nature7, nature8, nature9, nature10,
  nature11, nature12, nature13, nature14, nature15, nature16, nature17, nature18, nature19, nature20,
  nature21, nature22, nature23, nature24, nature25, nature26
];

export const natureData = natureImages.map((src, index) => ({
  id: index + 1,
  src,
  title: `Nature ${index + 1}`
}));
