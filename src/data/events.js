// Events
import events1 from '../assets/images/photos/events/portfolio-189.jpg';
import events2 from '../assets/images/photos/events/portfolio-190.jpg';
import events3 from '../assets/images/photos/events/portfolio-191.jpg';
import events4 from '../assets/images/photos/events/portfolio-192.jpg';
import events5 from '../assets/images/photos/events/portfolio-193.jpg';
import events6 from '../assets/images/photos/events/portfolio-194.jpg';
import events7 from '../assets/images/photos/events/portfolio-195.jpg';
import events8 from '../assets/images/photos/events/portfolio-196.jpg';
import events9 from '../assets/images/photos/events/portfolio-197.jpg';
import events10 from '../assets/images/photos/events/portfolio-198.jpg';
import events11 from '../assets/images/photos/events/portfolio-199.jpg';
import events12 from '../assets/images/photos/events/portfolio-200.jpg';
import events13 from '../assets/images/photos/events/portfolio-296.jpg';
import events14 from '../assets/images/photos/events/portfolio-297.jpg';

export const eventsImages = [events1, events2, events3, events4, events5, events6, events7, events8, events9, events10, events11, events12, events13, events14];

export const eventsData = eventsImages.map((src, index) => ({
  id: index + 1,
  src,
  title: `Event ${index + 1}`
}));
