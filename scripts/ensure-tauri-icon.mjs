import { Buffer } from 'node:buffer';
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { stdout } from 'node:process';

const iconPath = resolve('src-tauri/icons/icon.ico');

if (!existsSync(iconPath)) {
  mkdirSync(dirname(iconPath), { recursive: true });

  const width = 32;
  const height = 32;
  const pixelRows = [];

  for (let y = height - 1; y >= 0; y -= 1) {
    const row = [];
    for (let x = 0; x < width; x += 1) {
      const inGlyph = x >= 8 && x <= 21 && y >= 7 && y <= 24 && (x < 17 || (y - 16) ** 2 + (x - 16) ** 2 < 80);
      const cutout = x >= 12 && x <= 15 && y >= 11 && y <= 20;
      const white = inGlyph && !cutout;
      row.push(white ? 255 : 235, white ? 255 : 99, white ? 255 : 37, 255);
    }
    pixelRows.push(...row);
  }

  const pixelData = Buffer.from(pixelRows);
  const maskStride = Math.ceil(width / 32) * 4;
  const andMask = Buffer.alloc(maskStride * height);
  const bitmapHeader = Buffer.alloc(40);
  bitmapHeader.writeUInt32LE(40, 0);
  bitmapHeader.writeInt32LE(width, 4);
  bitmapHeader.writeInt32LE(height * 2, 8);
  bitmapHeader.writeUInt16LE(1, 12);
  bitmapHeader.writeUInt16LE(32, 14);
  bitmapHeader.writeUInt32LE(0, 16);
  bitmapHeader.writeUInt32LE(pixelData.length + andMask.length, 20);

  const image = Buffer.concat([bitmapHeader, pixelData, andMask]);
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);

  const entry = Buffer.alloc(16);
  entry.writeUInt8(width, 0);
  entry.writeUInt8(height, 1);
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(image.length, 8);
  entry.writeUInt32LE(header.length + entry.length, 12);

  writeFileSync(iconPath, Buffer.concat([header, entry, image]));
  stdout.write(`Generated ${iconPath}\n`);
}
