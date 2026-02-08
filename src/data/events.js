// Events
import event1 from '../assets/images/portfolio-132.jpg';
import event2 from '../assets/images/portfolio-133.jpg';
import event3 from '../assets/images/portfolio-134.jpg';

export const eventsImages = [event1, event2, event3];

export const eventsData = eventsImages.map((src, index) => ({
  id: index + 1,
  src,
  title: `Event ${index + 1}`
}));
