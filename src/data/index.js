import { streetPhotographyImages, streetPhotographyData } from './streetPhotography';
import { portraitureImages, portraitureData } from './portraiture';
import { natureImages, natureData } from './nature';
import { graduationImages, graduationData } from './graduation';
import { eventsImages, eventsData } from './events';

export const allImages = {
  street: streetPhotographyImages,
  portraiture: portraitureImages,
  nature: natureImages,
  graduation: graduationImages,
  events: eventsImages
};

export const allImagesData = {
  street: streetPhotographyData,
  portraiture: portraitureData,
  nature: natureData,
  graduation: graduationData,
  events: eventsData
};

export const categoryInfo = {
  street: {
    name: 'street',
    title: 'Street Photography',
    description: 'Urban life and candid moments',
    count: streetPhotographyImages.length
  },
  portraiture: {
    name: 'portraiture',
    title: 'Portraiture',
    description: 'Capturing personality and emotion',
    count: portraitureImages.length
  },
  nature: {
    name: 'nature',
    title: 'Nature',
    description: 'Wildlife and natural beauty up close',
    count: natureImages.length
  },
  graduation: {
    name: 'graduation',
    title: 'Graduation',
    description: 'Celebrating academic achievements',
    count: graduationImages.length
  },
  events: {
    name: 'events',
    title: 'Events',
    description: 'Capturing special moments and celebrations',
    count: eventsImages.length
  }
};

export const categories = Object.values(categoryInfo);
