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

export const portraitureImages = [
  portraiture1, portraiture2, portraiture3, portraiture4, portraiture5, portraiture6, portraiture7,
  portraiture8, portraiture9, portraiture10, portraiture11, portraiture12, portraiture13, portraiture14,
  portraiture15, portraiture16, portraiture17, portraiture18, portraiture19, portraiture20, portraiture21,
  portraiture22, portraiture23, portraiture24
];

export const portraitureData = portraitureImages.map((src, index) => ({
  id: index + 1,
  src,
  title: `Portraiture ${index + 1}`
}));
