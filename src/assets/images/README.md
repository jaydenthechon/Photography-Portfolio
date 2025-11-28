# How to Add Your Photos

## Step 1: Add Your Images Here
Place your photo files in this folder. Supported formats:
- `.jpg` / `.jpeg`
- `.png`
- `.webp`

Example file names:
- `photo1.jpg`
- `landscape1.jpg`
- `event-wedding.jpg`
- etc.

## Step 2: Import Images in Gallery.js

Open `/src/components/Gallery.js` and add imports at the top:

```javascript
import photo1 from '../assets/images/photo1.jpg';
import photo2 from '../assets/images/photo2.jpg';
import photo3 from '../assets/images/photo3.jpg';
// Add more as needed
```

## Step 3: Update the Images Array

Replace the Unsplash URLs with your imported images:

```javascript
const images = [
  { id: 1, src: photo1, category: 'landscape', title: 'Your Photo Title' },
  { id: 2, src: photo2, category: 'event', title: 'Another Photo' },
  { id: 3, src: photo3, category: 'urban', title: 'City Photo' },
  // Add more photos...
];
```

## Categories Available:
- `landscape`
- `event`
- `urban`

You can add more categories by updating the `categories` array in Gallery.js!
