// Graduation
import graduation1 from '../assets/images/photos/untitled folder/portfolio-216.jpg';
import graduation2 from '../assets/images/photos/untitled folder/portfolio-217.jpg';
import graduation3 from '../assets/images/photos/untitled folder/portfolio-218.jpg';
import graduation4 from '../assets/images/photos/untitled folder/portfolio-219.jpg';
import graduation5 from '../assets/images/photos/untitled folder/portfolio-220.jpg';
import graduation6 from '../assets/images/photos/untitled folder/portfolio-221.jpg';
import graduation7 from '../assets/images/photos/untitled folder/portfolio-222.jpg';
import graduation8 from '../assets/images/photos/untitled folder/portfolio-223.jpg';
import graduation9 from '../assets/images/photos/untitled folder/portfolio-224.jpg';
import graduation10 from '../assets/images/photos/untitled folder/portfolio-225.jpg';
import graduation11 from '../assets/images/photos/untitled folder/portfolio-226.jpg';

export const graduationImages = [graduation1, graduation2, graduation3, graduation4, graduation5, graduation6, graduation7, graduation8, graduation9, graduation10, graduation11];

export const graduationData = graduationImages.map((src, index) => ({
  id: index + 1,
  src,
  title: `Graduation ${index + 1}`
}));
