#!/usr/bin/env node
/**
 * Scans the photos folder and generates data files for each category
 * Automatically imports all images from assets/images/photos/<category>/
 */

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const photosRoot = path.join(ROOT, 'src', 'assets', 'images', 'photos');
const dataRoot = path.join(ROOT, 'src', 'data');

// Category metadata
const categoryMetadata = {
  'Landscapes': {
    title: 'Landscapes',
    description: 'Breathtaking views and natural scenery',
    key: 'landscapes'
  },
  'People': {
    title: 'People',
    description: 'Capturing personality and emotion',
    key: 'people'
  },
  'events': {
    title: 'Events',
    description: 'Capturing special moments and celebrations',
    key: 'events'
  },
  'still life': {
    title: 'Still Life',
    description: 'Beautiful compositions and details',
    key: 'stillLife'
  },
  'street': {
    title: 'Street Photography',
    description: 'Urban life and candid moments',
    key: 'street'
  },
  'untitled folder': {
    title: 'Graduation',
    description: 'Celebrating academic achievements',
    key: 'graduation'
  }
};

// Desired category order for the gallery
const categoryOrder = ['street', 'people', 'landscapes', 'events', 'graduation', 'stillLife'];

function sortCategoriesByOrder(categoriesData) {
  return categoriesData.sort((a, b) => {
    const indexA = categoryOrder.indexOf(a.key);
    const indexB = categoryOrder.indexOf(b.key);
    
    // If both are in the order array, sort by their position
    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }
    // If only A is in the order array, it comes first
    if (indexA !== -1) return -1;
    // If only B is in the order array, it comes first
    if (indexB !== -1) return 1;
    // If neither is in the order array, maintain original order
    return 0;
  });
}

function getAllImages(categoryPath) {
  if (!fs.existsSync(categoryPath)) {
    return [];
  }
  
  const files = fs.readdirSync(categoryPath);
  return files
    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .sort()
    .map(file => file);
}

function generateCategoryDataFile(categoryFolder, metadata) {
  const categoryPath = path.join(photosRoot, categoryFolder);
  const images = getAllImages(categoryPath);
  
  if (images.length === 0) {
    console.log(`⚠️  No images found in ${categoryFolder}`);
    return null;
  }

  const { title, key } = metadata;
  const imagesVarName = `${key}Images`;
  const dataVarName = `${key}Data`;
  
  // Generate import statements
  const imports = images.map((img, index) => {
    const importPath = `../assets/images/photos/${categoryFolder}/${img}`;
    return `import ${key}${index + 1} from '${importPath}';`;
  }).join('\n');
  
  // Generate images array
  const imagesArray = images.map((_, index) => `${key}${index + 1}`).join(', ');
  
  // Generate file content
  const content = `// ${title}
${imports}

export const ${imagesVarName} = [${imagesArray}];

export const ${dataVarName} = ${imagesVarName}.map((src, index) => ({
  id: index + 1,
  src,
  title: \`${title.replace(/s$/, '')} \${index + 1}\`
}));
`;

  return { key, content, count: images.length, title, description: metadata.description };
}

function generateIndexFile(categoriesData) {
  const imports = categoriesData.map(cat => 
    `import { ${cat.key}Images, ${cat.key}Data } from './${cat.key}';`
  ).join('\n');
  
  const allImagesObj = categoriesData.map(cat => 
    `  ${cat.key}: ${cat.key}Images`
  ).join(',\n');
  
  const allDataObj = categoriesData.map(cat => 
    `  ${cat.key}: ${cat.key}Data`
  ).join(',\n');
  
  const categoryInfoObj = categoriesData.map(cat => 
    `  ${cat.key}: {
    name: '${cat.key}',
    title: '${cat.title}',
    description: '${cat.description}',
    count: ${cat.count}
  }`
  ).join(',\n');
  
  const categoriesArray = categoriesData.map(cat =>
    `  {
    name: '${cat.key}',
    title: '${cat.title}',
    description: '${cat.description}',
    count: ${cat.count}
  }`
  ).join(',\n');
  
  const totalCount = categoriesData.reduce((sum, cat) => sum + cat.count, 0);
  
  const content = `${imports}

export const allImages = {
${allImagesObj}
};

export const allImagesData = {
${allDataObj}
};

export const categoryInfo = {
${categoryInfoObj}
};

export const categories = [
${categoriesArray}
];

export const totalPhotosCount = ${totalCount};
`;

  return content;
}

function main() {
  console.log('🔍 Scanning photos directory...\n');
  
  // Get all category folders
  const folders = fs.readdirSync(photosRoot)
    .filter(item => {
      const itemPath = path.join(photosRoot, item);
      return fs.statSync(itemPath).isDirectory() && !item.startsWith('.');
    });
  
  console.log(`Found ${folders.length} categories:\n`);
  
  const categoriesData = [];
  
  // Generate data file for each category
  folders.forEach(folder => {
    const metadata = categoryMetadata[folder];
    if (!metadata) {
      console.log(`⚠️  No metadata for "${folder}", skipping...`);
      return;
    }
    
    const result = generateCategoryDataFile(folder, metadata);
    if (result) {
      const { key, content, count, title, description } = result;
      
      // Write category data file
      const filePath = path.join(dataRoot, `${key}.js`);
      fs.writeFileSync(filePath, content, 'utf8');
      
      console.log(`✅ ${title}: ${count} images → data/${key}.js`);
      categoriesData.push({ key, title, description, count });
    }
  });
  
  // Generate index file
  if (categoriesData.length > 0) {
    // Sort categories in the desired order
    const sortedCategories = sortCategoriesByOrder(categoriesData);
    const indexContent = generateIndexFile(sortedCategories);
    const indexPath = path.join(dataRoot, 'index.js');
    fs.writeFileSync(indexPath, indexContent, 'utf8');
    
    console.log(`\n✅ Generated data/index.js with ${categoriesData.length} categories`);
    
    const totalPhotos = categoriesData.reduce((sum, cat) => sum + cat.count, 0);
    console.log(`\n📊 Total: ${totalPhotos} photos across ${categoriesData.length} categories`);
  } else {
    console.log('\n❌ No categories processed');
  }
}

main();
