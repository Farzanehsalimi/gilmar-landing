// scripts/to-webp.mjs
// استفاده: node scripts/to-webp.mjs input.(svg|png) output.webp [width]
import { readFileSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const [input, output, width] = process.argv.slice(2);
let source = input;

if (path.extname(input) === '.svg') {
  const match = readFileSync(input, 'utf8').match(/href="data:image\/png;base64,([^"]+)"/);
  if (match) source = Buffer.from(match[1], 'base64');
}

const image = sharp(source);
if (width) image.resize({ width: Number(width) });
await image.webp({ quality: 85 }).toFile(output);
