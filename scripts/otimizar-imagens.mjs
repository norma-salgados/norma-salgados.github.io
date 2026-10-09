// Gera as imagens otimizadas do site a partir dos originais.
// imagens-originais/salgados/*  →  public/images/salgados/*.webp
// imagens-originais/doces/*     →  public/images/doces/*.webp
// Máx. 800×600 (recorte 4:3 centralizado), WebP qualidade 80. Mantém o nome do arquivo.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const folders = ['salgados', 'doces'];

for (const folder of folders) {
  const srcDir = path.join('imagens-originais', folder);
  const outDir = path.join('public', 'images', folder);
  fs.mkdirSync(outDir, { recursive: true });

  for (const file of fs.readdirSync(srcDir)) {
    if (!/\.(jpe?g|png|webp)$/i.test(file)) continue;
    const out = path.join(outDir, `${path.parse(file).name}.webp`);
    const info = await sharp(path.join(srcDir, file))
      .resize({ width: 800, height: 600, fit: 'cover', withoutEnlargement: true })
      .flatten({ background: '#ffffff' })
      .webp({ quality: 80 })
      .toFile(out);
    console.log(`${out}  ${info.width}×${info.height}  ${Math.round(info.size / 1024)} KB`);
  }
}
