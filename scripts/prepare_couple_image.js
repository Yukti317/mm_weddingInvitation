import fs from 'fs';
import path from 'path';

// Generate a valid high resolution JPEG placeholder if couple.jpg is requested locally
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

console.log('Public folder prepared.');
