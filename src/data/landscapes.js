// Landscapes
import landscapes1 from '../assets/images/photos/Landscapes/main.jpg';
import landscapes2 from '../assets/images/photos/Landscapes/main1.jpg';
import landscapes3 from '../assets/images/photos/Landscapes/portfolio-184.jpg';
import landscapes4 from '../assets/images/photos/Landscapes/portfolio-185.jpg';
import landscapes5 from '../assets/images/photos/Landscapes/portfolio-186.jpg';
import landscapes6 from '../assets/images/photos/Landscapes/portfolio-187.jpg';
import landscapes7 from '../assets/images/photos/Landscapes/portfolio-188.jpg';
import landscapes8 from '../assets/images/photos/Landscapes/portfolio-204.jpg';
import landscapes9 from '../assets/images/photos/Landscapes/portfolio-209.jpg';
import landscapes10 from '../assets/images/photos/Landscapes/portfolio-210.jpg';
import landscapes11 from '../assets/images/photos/Landscapes/portfolio-236.jpg';
import landscapes12 from '../assets/images/photos/Landscapes/portfolio-237.jpg';
import landscapes13 from '../assets/images/photos/Landscapes/portfolio-238.jpg';
import landscapes14 from '../assets/images/photos/Landscapes/portfolio-239.jpg';
import landscapes15 from '../assets/images/photos/Landscapes/portfolio-240.jpg';
import landscapes16 from '../assets/images/photos/Landscapes/portfolio-243.jpg';
import landscapes17 from '../assets/images/photos/Landscapes/portfolio-245.jpg';
import landscapes18 from '../assets/images/photos/Landscapes/portfolio-260.jpg';
import landscapes19 from '../assets/images/photos/Landscapes/portfolio-263.jpg';
import landscapes20 from '../assets/images/photos/Landscapes/portfolio-264.jpg';
import landscapes21 from '../assets/images/photos/Landscapes/portfolio-265.jpg';
import landscapes22 from '../assets/images/photos/Landscapes/portfolio-290.jpg';
import landscapes23 from '../assets/images/photos/Landscapes/portfolio-291.jpg';
import landscapes24 from '../assets/images/photos/Landscapes/portfolio-292.jpg';
import landscapes25 from '../assets/images/photos/Landscapes/portfolio-293.jpg';
import landscapes26 from '../assets/images/photos/Landscapes/portfolio-294.jpg';
import landscapes27 from '../assets/images/photos/Landscapes/portfolio-295.jpg';
import landscapes28 from '../assets/images/photos/Landscapes/portfolio-305.jpg';
import landscapes29 from '../assets/images/photos/Landscapes/portfolio-332.jpg';
import landscapes30 from '../assets/images/photos/Landscapes/portfolio-338.jpg';
import landscapes31 from '../assets/images/photos/Landscapes/portfolio-340.jpg';

export const landscapesImages = [landscapes1, landscapes2, landscapes3, landscapes4, landscapes5, landscapes6, landscapes7, landscapes8, landscapes9, landscapes10, landscapes11, landscapes12, landscapes13, landscapes14, landscapes15, landscapes16, landscapes17, landscapes18, landscapes19, landscapes20, landscapes21, landscapes22, landscapes23, landscapes24, landscapes25, landscapes26, landscapes27, landscapes28, landscapes29, landscapes30, landscapes31];

export const landscapesData = landscapesImages.map((src, index) => ({
  id: index + 1,
  src,
  title: `Landscape ${index + 1}`
}));
