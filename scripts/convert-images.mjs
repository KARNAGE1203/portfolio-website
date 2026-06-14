import { readdir, stat } from 'fs/promises'
import { join, extname, basename } from 'path'
import sharp from 'sharp'

const IMG_DIR = join(process.cwd(), 'public', 'img')
const SOURCE_EXTS = new Set(['.png', '.jpg', '.jpeg'])

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await walk(full)))
    } else {
      files.push(full)
    }
  }
  return files
}

const files = await walk(IMG_DIR)
let totalBefore = 0
let totalAfter = 0

for (const file of files) {
  const ext = extname(file).toLowerCase()
  if (!SOURCE_EXTS.has(ext)) continue

  const webpPath = join(file.slice(0, -ext.length) + '.webp')
  const srcStat = await stat(file)

  await sharp(file).webp({ quality: 80 }).toFile(webpPath)

  const destStat = await stat(webpPath)
  totalBefore += srcStat.size
  totalAfter += destStat.size

  console.log(
    `${basename(file)} -> ${basename(webpPath)}  ${(srcStat.size / 1024).toFixed(0)}KB -> ${(destStat.size / 1024).toFixed(0)}KB`
  )
}

console.log(`\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB`)
