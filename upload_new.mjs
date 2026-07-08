import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';

cloudinary.config({
  cloud_name: 'w1ahlvct',
  api_key: '663676253523118',
  api_secret: 'q_VmvlmLPcCOPRnCSsFfsIpyIU0'
});

const dir = 'c:/Users/vinod/Desktop/gurleen-s-bridal-studio/extracted_images';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg'));

async function uploadNew() {
  const results = [];
  console.log(`Uploading ${files.length} new images to Cloudinary...`);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const publicId = path.basename(file, '.jpg');
    console.log(`Uploading ${file}...`);
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'gurleen-bridal/new',
      public_id: publicId,
      overwrite: true
    });
    results.push({ file, url: result.secure_url });
    console.log(`✓ ${publicId}: ${result.secure_url}`);
  }
  console.log('\n--- ALL URLS ---');
  results.forEach(r => console.log(r.url));
  return results;
}

uploadNew().catch(console.error);
