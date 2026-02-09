// People
import people1 from '../assets/images/photos/People/main.jpg';
import people2 from '../assets/images/photos/People/portfolio-201.jpg';
import people3 from '../assets/images/photos/People/portfolio-202.jpg';
import people4 from '../assets/images/photos/People/portfolio-203.jpg';
import people5 from '../assets/images/photos/People/portfolio-206.jpg';
import people6 from '../assets/images/photos/People/portfolio-227.jpg';
import people7 from '../assets/images/photos/People/portfolio-228.jpg';
import people8 from '../assets/images/photos/People/portfolio-229.jpg';
import people9 from '../assets/images/photos/People/portfolio-230.jpg';
import people10 from '../assets/images/photos/People/portfolio-248.jpg';
import people11 from '../assets/images/photos/People/portfolio-249.jpg';
import people12 from '../assets/images/photos/People/portfolio-250.jpg';
import people13 from '../assets/images/photos/People/portfolio-252.jpg';
import people14 from '../assets/images/photos/People/portfolio-253.jpg';
import people15 from '../assets/images/photos/People/portfolio-254.jpg';
import people16 from '../assets/images/photos/People/portfolio-255.jpg';
import people17 from '../assets/images/photos/People/portfolio-256.jpg';
import people18 from '../assets/images/photos/People/portfolio-257.jpg';
import people19 from '../assets/images/photos/People/portfolio-258.jpg';
import people20 from '../assets/images/photos/People/portfolio-259.jpg';
import people21 from '../assets/images/photos/People/portfolio-261.jpg';
import people22 from '../assets/images/photos/People/portfolio-266.jpg';
import people23 from '../assets/images/photos/People/portfolio-267.jpg';
import people24 from '../assets/images/photos/People/portfolio-268.jpg';
import people25 from '../assets/images/photos/People/portfolio-269.jpg';
import people26 from '../assets/images/photos/People/portfolio-270.jpg';
import people27 from '../assets/images/photos/People/portfolio-282.jpg';
import people28 from '../assets/images/photos/People/portfolio-298.jpg';
import people29 from '../assets/images/photos/People/portfolio-301.jpg';
import people30 from '../assets/images/photos/People/portfolio-341.jpg';
import people31 from '../assets/images/photos/People/portfolio-342.jpg';
import people32 from '../assets/images/photos/People/portfolio-344.jpg';
import people33 from '../assets/images/photos/People/portfolio-345.jpg';
import people34 from '../assets/images/photos/People/portfolio-346.jpg';

export const peopleImages = [people1, people2, people3, people4, people5, people6, people7, people8, people9, people10, people11, people12, people13, people14, people15, people16, people17, people18, people19, people20, people21, people22, people23, people24, people25, people26, people27, people28, people29, people30, people31, people32, people33, people34];

export const peopleData = peopleImages.map((src, index) => ({
  id: index + 1,
  src,
  title: `People ${index + 1}`
}));
