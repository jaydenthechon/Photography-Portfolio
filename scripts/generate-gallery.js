#!/usr/bin/env node
/*
  Generates optimized images and a manifest for the gallery.
  - Read originals from src/gallery-originals/<category>/
  - Output optimized WebP images into src/assets/images/<category>/
  - Create src/assets/images/manifest.js with static imports and labeled entries
*/

const fs = require('fs');
const path = require('path');
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.warn('\n[gallery] sharp is not installed yet. Run `npm i sharp` and retry.');
  process.exit(0);
}

const categories = [
  'landscape',
  'event',
  'nature',
  'street',
  'graduation',
  'portraiture',
  'food',
];

const categoryTitles = {
  landscape: 'Landscapes',
  event: 'Events',
  nature: 'Nature',
  street: 'Street',
  graduation: 'Graduation',
  portraiture: 'Portraiture',
  food: 'Food',
};

const descriptions = {
  landscape: 'Breathtaking views and natural scenery',
  event: 'Capturing special moments and celebrations',
  nature: 'Wildlife and natural beauty up close',
  street: 'Urban life and candid moments',
  graduation: 'Celebrating academic achievements',
  portraiture: 'Capturing personality and emotion',
  food: 'Culinary artistry and delicious moments',
};

const ROOT = process.cwd();
const originalsRoot = path.join(ROOT, 'src', 'gallery-originals');
const outputRoot = path.join(ROOT, 'src', 'assets', 'images');

const allowedExt = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function toTitle(filenameBase) {
  return filenameBase
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

async function processCategory(cat) {
  const origDir = path.join(originalsRoot, cat);
  const outDir = path.join(outputRoot, cat);
  ensureDir(outDir);

  let files = [];
  if (fs.existsSync(origDir)) {
    files = fs
      .readdirSync(origDir)
      .filter((f) => allowedExt.has(path.extname(f).toLowerCase()));
  }

  const entries = [];
  let importLines = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const base = path.parse(file).name;
    const title = toTitle(base);
    const inputPath = path.join(origDir, file);
    const outFile = base + '.webp';
    const outputPath = path.join(outDir, outFile);

    try {
      // Optimize and convert to WebP
      await sharp(inputPath)
        .rotate()
        .resize({ width: 2000, withoutEnlargement: true })
        .webp({ quality: 78 })
        .toFile(outputPath);
    } catch (err) {
      console.warn(`[gallery] Skipped ${file}: ${err.message}`);
      continue;
    }

    const varName = `${cat}_${base}`.replace(/[^a-zA-Z0-9_]/g, '_');
    const importPath = `./${cat}/${outFile}`;
    importLines.push(`import ${varName} from '${importPath}';`);

    entries.push({ varName, title });
  }

  return { importLines, entries };
}

(async function main() {
  ensureDir(outputRoot);

  const perCategory = {};
  let allImportLines = [];

  for (const cat of categories) {
    const { importLines, entries } = await processCategory(cat);
    allImportLines = allImportLines.concat(importLines);
    perCategory[cat] = entries;
  }

  // Build manifest.js with static imports
  const manifestPath = path.join(outputRoot, 'manifest.js');
  const header = `// AUTO-GENERATED FILE. Do not edit by hand.\n// Run: npm run gallery:build\n`;

  const galleryEntries = categories
    .map((cat) => {
      const arr = (perCategory[cat] || [])
        .map((e, idx) => `    { id: ${idx + 1}, src: ${e.varName}, title: ${JSON.stringify(e.title)} }`)
        .join(',\n');
      return `  ${cat}: [\n${arr}\n  ]`;
    })
    .join(',\n');

  const homeSamples = categories
    .map((cat) => `  ${cat}: gallery.${cat}.slice(0, 3)`) // first 3 per category
    .join(',\n');

  const content = `${header}
${allImportLines.join('\n')}

export const categoryTitles = ${JSON.stringify(categoryTitles, null, 2)};
export const categoryDescriptions = ${JSON.stringify(descriptions, null, 2)};

export const gallery = {
${galleryEntries}
};

export const homeSamples = {
${homeSamples}
};
`;

  fs.writeFileSync(manifestPath, content, 'utf8');
  console.log(`[gallery] Wrote manifest: ${path.relative(ROOT, manifestPath)}`);
})();
