# Gallery Structure Guide

## 📁 How It Works Now

Your photography portfolio now has **separate pages** for each category!

### 🏠 Home Page (/)
- Shows **3 sample photos** from each category
- Categories: Landscapes, Events, Urban
- Each category has a "View All →" button
- Clicking any photo or button takes you to the full category page

### 📸 Category Pages (/gallery/landscape, /gallery/event, /gallery/urban)
- Shows **ALL photos** in that category
- Has a "← Back to Gallery" button
- Clicking photos opens a lightbox view
- Each category can have as many photos as you want

---

## 🎨 How to Add Your Own Photos

### 1. Add Images to Folder
Place your photos in: `src/assets/images/`

### 2. Import Images

**In GalleryHome.js** (for the 3 sample photos):
```javascript
import landscape1 from '../assets/images/landscape1.jpg';
import event1 from '../assets/images/event1.jpg';
import urban1 from '../assets/images/urban1.jpg';
```

**In CategoryGallery.js** (for ALL photos in each category):
```javascript
import landscape1 from '../assets/images/landscape1.jpg';
import landscape2 from '../assets/images/landscape2.jpg';
// ... import all your photos
```

### 3. Update the Images Arrays

**GalleryHome.js** - Edit the `categories` array (around line 10):
```javascript
const categories = [
  {
    name: 'landscape',
    title: 'Landscapes',
    description: 'Breathtaking views and natural scenery',
    samples: [
      { id: 1, src: landscape1, title: 'My Mountain' },
      { id: 2, src: landscape2, title: 'Sunset Valley' },
      { id: 3, src: landscape3, title: 'Forest View' },
    ]
  },
  // ... other categories
];
```

**CategoryGallery.js** - Edit the `allImages` object (around line 13):
```javascript
const allImages = {
  landscape: [
    { id: 1, src: landscape1, title: 'My Mountain' },
    { id: 2, src: landscape2, title: 'Sunset Valley' },
    { id: 3, src: landscape3, title: 'Forest View' },
    { id: 4, src: landscape4, title: 'Rocky Peaks' },
    // Add as many as you want!
  ],
  event: [
    // Your event photos...
  ],
  urban: [
    // Your urban photos...
  ]
};
```

---

## 🎯 Navigation Flow

```
Home Page (/)
   |
   ├─ Hero Section
   ├─ Gallery Preview (3 photos per category)
   │    ├─ Landscapes → Click → /gallery/landscape (full page)
   │    ├─ Events → Click → /gallery/event (full page)
   │    └─ Urban → Click → /gallery/urban (full page)
   ├─ About Section
   └─ Contact Section

Category Page (/gallery/landscape)
   ├─ Back button → Returns to Home
   ├─ Full grid of all landscape photos
   └─ Click photo → Opens lightbox
```

---

## 📝 Files You Need to Edit

1. **GalleryHome.js** - The 3 sample photos for each category
2. **CategoryGallery.js** - ALL photos organized by category
3. Both files need image imports at the top!

---

## 🚀 Quick Start

1. Put 9+ photos in `src/assets/images/` (at least 3 per category)
2. Open `GalleryHome.js` and import 3 photos per category
3. Open `CategoryGallery.js` and import all your photos
4. Update the arrays with your imported images
5. Save and the app will auto-reload!

Your portfolio is now multi-page with proper routing! 🎉
