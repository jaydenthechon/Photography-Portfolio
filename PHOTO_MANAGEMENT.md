# Photo Management Guide

## Overview

Your photography portfolio now automatically generates gallery data from your photo folders! This means you can simply add photos to the appropriate category folder and regenerate the data files.

## Photo Folder Structure

All photos should be placed in:
```
src/assets/images/photos/<category-name>/
```

### Current Categories

1. **Landscapes** - Breathtaking views and natural scenery (31 photos)
2. **People** - Capturing personality and emotion (34 photos)
3. **events** - Capturing special moments and celebrations (14 photos)
4. **still life** - Beautiful compositions and details (7 photos)
5. **street** - Urban life and candid moments (90 photos)
6. **miscellaneous** - Various photography projects (11 photos)

**Total: 187 photos across 6 categories**

## Adding New Photos

### Step 1: Add photos to category folders

Simply drag and drop your photos into the appropriate category folder:
```bash
src/assets/images/photos/Landscapes/
src/assets/images/photos/People/
src/assets/images/photos/events/
src/assets/images/photos/still life/
src/assets/images/photos/street/
src/assets/images/photos/untitled folder/  (for miscellaneous)
```

Supported image formats: `.jpg`, `.jpeg`, `.png`, `.webp`

### Step 2: Regenerate gallery data

Run the scan-photos script to automatically generate all data files:

```bash
npm run scan-photos
```

This will:
- Scan all photos in each category folder
- Generate data files for each category (`src/data/landscapes.js`, etc.)
- Update `src/data/index.js` with category information
- Update photo counts automatically

### Step 3: View your changes

Start the development server (if not already running):
```bash
npm start
```

The website will automatically update with your new photos!

## Adding a New Category

To add a completely new category:

1. **Create a new folder** in `src/assets/images/photos/`
   ```bash
   mkdir "src/assets/images/photos/My New Category"
   ```

2. **Update the scan-photos script** at `scripts/scan-photos.js`
   
   Add your category metadata to the `categoryMetadata` object:
   ```javascript
   const categoryMetadata = {
     // ... existing categories ...
     'My New Category': {
       title: 'My New Category',
       description: 'Description of this category',
       key: 'myNewCategory'  // camelCase key for JavaScript
     }
   };
   ```

3. **Add photos** to your new folder

4. **Run the scanner**:
   ```bash
   npm run scan-photos
   ```

5. The new category will automatically appear on your website!

## Deployment

Before deploying to GitHub Pages, the photos will be automatically scanned:

```bash
npm run deploy
```

This automatically runs:
1. `npm run scan-photos` - Regenerates all data files
2. `npm run build` - Builds the production version
3. `gh-pages -d build` - Deploys to GitHub Pages

## Customizing Category Metadata

Edit the `categoryMetadata` object in `scripts/scan-photos.js` to change:
- Category titles
- Descriptions
- JavaScript variable names (keys)

```javascript
const categoryMetadata = {
  'Folder Name': {
    title: 'Display Title',        // Shown on website
    description: 'Category description',  // Shown on cards
    key: 'javascriptKey'           // Used in code (camelCase)
  }
};
```

## File Naming

- Photos can have any name
- They will be automatically sorted alphabetically
- Consider using numbered prefixes for specific ordering:
  - `001-photo.jpg`
  - `002-photo.jpg`
  - etc.

## Benefits of This System

✅ **No manual imports** - Just add photos and run the scanner  
✅ **Automatic counting** - Photo counts update automatically  
✅ **Category management** - Easy to add, remove, or reorganize categories  
✅ **Consistent structure** - All data files generated from the same template  
✅ **Pre-deployment scanning** - Never forget to regenerate before deploying  

## Troubleshooting

### Photos not showing up?

1. Make sure they're in a recognized category folder
2. Check file extension (should be `.jpg`, `.jpeg`, `.png`, or `.webp`)
3. Run `npm run scan-photos` to regenerate data files
4. Restart the dev server if it's running

### Category metadata not found?

The scanner will show a warning: `⚠️  No metadata for "folder-name", skipping...`

Solution: Add the category to `categoryMetadata` in `scripts/scan-photos.js`

### Build errors?

1. Stop the development server
2. Run `npm run scan-photos`
3. Restart with `npm start`

## Technical Details

The photo scanning system:
- Reads all image files from category folders
- Generates ES6 import statements for each photo
- Creates arrays of images for each category
- Exports data in a format compatible with React
- Automatically updates the main index file with all categories

Generated files are located in `src/data/`:
- `landscapes.js`
- `people.js`
- `events.js`
- `stillLife.js`
- `street.js`
- `miscellaneous.js`
- `index.js` (master file combining all categories)
