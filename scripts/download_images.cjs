const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

const DATA_FILE = path.join(__dirname, '../src/data.ts');
const PUBLIC_IMG_DIR = path.join(__dirname, '../public/images');

if (!fs.existsSync(PUBLIC_IMG_DIR)) {
  fs.mkdirSync(PUBLIC_IMG_DIR, { recursive: true });
}

async function downloadAndOptimize(url, filename) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      
      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', async () => {
        const buffer = Buffer.concat(chunks);
        try {
          const outputPath = path.join(PUBLIC_IMG_DIR, filename);
          await sharp(buffer)
            .webp({ quality: 80 })
            .toFile(outputPath);
          console.log(`Saved optimized image: ${filename}`);
          resolve(outputPath);
        } catch (err) {
          reject(err);
        }
      });
    }).on('error', reject);
  });
}

function getFiles(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getFiles(fullPath, filesList);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      filesList.push(fullPath);
    }
  }
  return filesList;
}

async function run() {
  const SRC_DIR = path.join(__dirname, '../src');
  const files = getFiles(SRC_DIR);
  
  const urlRegex = /https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9_\-\/]+/g;
  const allUrls = new Set();
  const fileContents = {};
  
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    fileContents[file] = content;
    const matches = content.match(urlRegex) || [];
    for (const url of matches) {
      allUrls.add(url);
    }
  }
  
  const urls = Array.from(allUrls);
  console.log(`Found ${urls.length} unique images across ${files.length} files.`);
  
  const urlMap = {};
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    // Create a meaningful name if possible or just use index + 10 to avoid overwriting previous
    const filename = `optimized_v2_${i + 1}.webp`;
    
    try {
      await downloadAndOptimize(url, filename);
      urlMap[url] = `/images/${filename}`;
    } catch (err) {
      console.error(`Error processing ${url}:`, err);
    }
  }
  
  // Update all files
  for (const file of files) {
    let content = fileContents[file];
    let changed = false;
    for (const [url, localPath] of Object.entries(urlMap)) {
      if (content.includes(url)) {
        content = content.split(url).join(localPath);
        changed = true;
      }
    }
    if (changed) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated ${file} with local image paths.`);
    }
  }
}

run().catch(console.error);
