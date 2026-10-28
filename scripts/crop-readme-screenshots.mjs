import fs from 'node:fs/promises';
import sharp from 'sharp';
const root = 'docs/images/';
const bounds = JSON.parse(await fs.readFile(root + 'landing-screenshot-bounds.json', 'utf8'));
const source = root + 'landing-full-page.png';
const metadata = await sharp(source).metadata();
for (const [index, section] of bounds.sections.entries()) {
  const top = index === 0 ? 0 : Math.round(section.top * metadata.height / bounds.height);
  const bottom = Math.round(section.bottom * metadata.height / bounds.height);
  const file = `${root}landing-${String(index + 1).padStart(2, '0')}-${section.id}.png`;
  await sharp(source).extract({left:0,top,width:metadata.width,height:bottom-top}).png().toFile(file);
  console.log(`${file}: ${metadata.width}x${bottom-top}`);
}
