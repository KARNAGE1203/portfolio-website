export function toWebp(src) {
  return /\.(png|jpe?g)$/i.test(src) ? src.replace(/\.(png|jpe?g)$/i, '.webp') : src
}
