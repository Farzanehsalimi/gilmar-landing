// scripts/optimize-images.mjs
// استفاده: node scripts/optimize-images.mjs public/images
import { readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.argv[2] ?? 'public/images';

for (const rel of readdirSync(root, { recursive: true })) {
  const file = path.join(root, String(rel));
  if (!/\.(png|jpe?g)$/i.test(file) || !statSync(file).isFile()) continue;
  const out = file.replace(/\.(png|jpe?g)$/i, '.webp');
  await sharp(file).webp({ quality: 85 }).toFile(out);
  console.log(`${file} → ${out}`);
}
