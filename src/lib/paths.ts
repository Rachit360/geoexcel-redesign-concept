// adds the base path when the site is deployed under a sub-folder (GitHub Pages)
export function url(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export const productUrl = (category: string, product: string) => url(`/products/${category}/${product}/`);
export const categoryUrl = (category: string) => url(`/products/${category}/`);
