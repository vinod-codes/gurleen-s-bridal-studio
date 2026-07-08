import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'w1ahlvct',
  api_key: '663676253523118',
  api_secret: 'q_VmvlmLPcCOPRnCSsFfsIpyIU0'
});

const heroPath = 'C:/Users/vinod/.gemini/antigravity-ide/brain/fc4d77fb-5a4d-4ebd-b196-20cc7567f112/gkp_hero_bridal_1783522270833.png';

const result = await cloudinary.uploader.upload(heroPath, {
  folder: 'gurleen-bridal/hero',
  public_id: 'hero_editorial_bride',
  overwrite: true,
});

console.log('URL:', result.secure_url);
