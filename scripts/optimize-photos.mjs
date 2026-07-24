/**
 * Photo optimizer — drop raw photos into /photos-inbox, run:
 *
 *   npm run photos
 *
 * Each photo is resized to max 2000px wide, converted to .webp (~80 quality),
 * and written to /public/gallery with its original (kebab-cased) name.
 * Originals in /photos-inbox are left untouched so you can re-run safely.
 */
import sharp from 'sharp'
import { readdir, mkdir } from 'node:fs/promises'
import path from 'node:path'

const INBOX = 'photos-inbox'
const OUT = path.join('public', 'gallery')
const MAX_WIDTH = 2000
const QUALITY = 80
const EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.heic', '.avif', '.tiff'])

const kebab = (name) =>
  name
    .normalize('NFKD')
    .replace(/[^\w\s.-]/g, '')
    .trim()
    .replace(/[\s_]+/g, '-')
    .toLowerCase()

await mkdir(OUT, { recursive: true })

const files = (await readdir(INBOX)).filter((f) => EXTS.has(path.extname(f).toLowerCase()))

if (files.length === 0) {
  console.log(`No photos found in /${INBOX}. Drop your raw images there and re-run.`)
  process.exit(0)
}

let done = 0
for (const file of files) {
  const base = kebab(path.basename(file, path.extname(file)))
  const dest = path.join(OUT, `${base}.webp`)
  try {
    const img = sharp(path.join(INBOX, file)).rotate() // .rotate() applies EXIF orientation
    const meta = await img.metadata()
    const { size } = await img
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(dest)
    done++
    console.log(
      `✓ ${file}  →  /gallery/${base}.webp  (${meta.width}px → ≤${MAX_WIDTH}px, ${(size / 1024).toFixed(0)} KB)`
    )
  } catch (err) {
    console.error(`✗ ${file}: ${err.message}`)
  }
}

console.log(`\n${done}/${files.length} photos optimized into /public/gallery.`)
