import sharp from 'sharp'
import { readdir, stat } from 'fs/promises'
import { join, extname } from 'path'

const IMG_DIR = 'public/img'

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const e of entries) {
    const full = join(dir, e.name)
    if (e.isDirectory()) yield* walk(full)
    else yield full
  }
}

async function main() {
  let done = 0
  for await (const file of walk(IMG_DIR)) {
    if (!/\.(png|jpe?g)$/i.test(file)) continue
    const webp = file.replace(/\.(png|jpe?g)$/i, '.webp')
    try {
      await stat(webp)
    } catch {
      await sharp(file).webp({ quality: 85 }).toFile(webp)
      console.log('✓', webp)
      done++
    }
  }
  console.log(`\nDone — generated ${done} WebP file(s).`)
}

main().catch(console.error)
