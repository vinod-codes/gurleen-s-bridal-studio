import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';

cloudinary.config({
  cloud_name: 'w1ahlvct',
  api_key: '663676253523118',
  api_secret: 'q_VmvlmLPcCOPRnCSsFfsIpyIU0'
});

const dir = 'c:/Users/vinod/Desktop/gurleen-s-bridal-studio/unzipped_images';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg'));

async function uploadAndReplace() {
  const mapping = {};
  console.log(`Uploading ${files.length} images...`);
  for (const file of files) {
    const id = file.split('_')[0]; // e.g. "466970031"
    const filePath = path.join(dir, file);
    
    console.log(`Uploading ${file}...`);
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'gurleen-bridal',
      public_id: id
    });
    
    mapping[id] = result.secure_url;
    console.log(`Uploaded ${id}: ${result.secure_url}`);
  }
  
  // Now rewrite src/lib/images.ts
  const tsPath = 'c:/Users/vinod/Desktop/gurleen-s-bridal-studio/src/lib/images.ts';
  let tsContent = fs.readFileSync(tsPath, 'utf8');
  
  // Replace the import statements with const declarations
  for (const id in mapping) {
    const url = mapping[id];
    // Find matching import, e.g. import img703298 from "@/assets/bridal/703298286.jpg.asset.json";
    const prefix = id.substring(0, 6); // Wait, "img703298" for "703298286". 
    // The imports are named like img<first 6 chars of id>. Let's do a regex to find and replace.
    // E.g. /import (\w+) from ".*?\/(\d+)\.jpg\.asset\.json";/g
    const regex = new RegExp(`import (\\w+) from ".*?\\/${id}\\.jpg\\.asset\\.json";`, 'g');
    tsContent = tsContent.replace(regex, `const $1 = { url: "${url}" };`);
  }
  
  fs.writeFileSync(tsPath, tsContent);
  console.log('Successfully updated src/lib/images.ts');
}

uploadAndReplace().catch(console.error);
