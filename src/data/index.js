import { streetImages, streetData } from './street';
import { peopleImages, peopleData } from './people';
import { landscapesImages, landscapesData } from './landscapes';
import { eventsImages, eventsData } from './events';
import { graduationImages, graduationData } from './graduation';
import { stillLifeImages, stillLifeData } from './stillLife';

export const allImages = {
  street: streetImages,
  people: peopleImages,
  landscapes: landscapesImages,
  events: eventsImages,
  graduation: graduationImages,
  stillLife: stillLifeImages
};

export const allImagesData = {
  street: streetData,
  people: peopleData,
  landscapes: landscapesData,
  events: eventsData,
  graduation: graduationData,
  stillLife: stillLifeData
};

export const categoryInfo = {
  street: {
    name: 'street',
    title: 'Street Photography',
    description: 'Urban life and candid moments',
    count: 90
  },
  people: {
    name: 'people',
    title: 'People',
    description: 'Capturing personality and emotion',
    count: 34
  },
  landscapes: {
    name: 'landscapes',
    title: 'Landscapes',
    description: 'Breathtaking views and natural scenery',
    count: 31
  },
  events: {
    name: 'events',
    title: 'Events',
    description: 'Capturing special moments and celebrations',
    count: 14
  },
  graduation: {
    name: 'graduation',
    title: 'Graduation',
    description: 'Celebrating academic achievements',
    count: 11
  },
  stillLife: {
    name: 'stillLife',
    title: 'Still Life',
    description: 'Beautiful compositions and details',
    count: 7
  }
};

export const categories = [
  {
    name: 'street',
    title: 'Street Photography',
    description: 'Urban life and candid moments',
    count: 90
  },
  {
    name: 'people',
    title: 'People',
    description: 'Capturing personality and emotion',
    count: 34
  },
  {
    name: 'landscapes',
    title: 'Landscapes',
    description: 'Breathtaking views and natural scenery',
    count: 31
  },
  {
    name: 'events',
    title: 'Events',
    description: 'Capturing special moments and celebrations',
    count: 14
  },
  {
    name: 'graduation',
    title: 'Graduation',
    description: 'Celebrating academic achievements',
    count: 11
  },
  {
    name: 'stillLife',
    title: 'Still Life',
    description: 'Beautiful compositions and details',
    count: 7
  }
];

export const totalPhotosCount = 187;
