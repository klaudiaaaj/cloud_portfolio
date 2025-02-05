import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export function getAssetUrl(path) {
  const basePath = process.env.NODE_ENV === 'development' ? '' : '/cloud_portfolio';
  return `${basePath}${path}`;
}