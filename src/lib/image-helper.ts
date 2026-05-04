// Helper to handle both Vite and Next.js image imports
export const getImageSrc = (img: any): string => {
  if (typeof img === 'string') return img;
  if (img && typeof img === 'object' && 'src' in img) return img.src;
  return img;
};