import type { ImageMetadata } from 'astro';

const products = import.meta.glob<{ default: ImageMetadata }>('../assets/products/*.jpg', { eager: true });
const certs = import.meta.glob<{ default: ImageMetadata }>('../assets/certs/*.jpg', { eager: true });
const photos = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.jpg', { eager: true });

function pick(map: Record<string, { default: ImageMetadata }>, dir: string, name: string) {
  const hit = map[`../assets/${dir}/${name}.jpg`];
  if (!hit) throw new Error(`Image not found: ${dir}/${name}.jpg`);
  return hit.default;
}

export const productImage = (name: string) => pick(products, 'products', name);
export const photo = (name: string) => pick(photos, 'photos', name);
export const certImage = (name: string) => pick(certs, 'certs', name);
