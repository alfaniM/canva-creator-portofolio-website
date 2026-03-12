// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  },

  // ─── Image optimisation (built-in Sharp) ───────────────────────────────────
  image: {
    // Default output format & quality for ALL optimised images
    // Sharp converts to WebP by default → ~30-80% smaller than JPEG/PNG
    // quality 80 = near-lossless perceptible quality, great file-size balance
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false, // allow large CMS uploads
      },
    },
    // Allow optimising images from these remote origins
    // (Unsplash CDN for dummy data + Netlify/GitHub for CMS uploads)
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '**.netlify.app' },
      { protocol: 'https', hostname: '**.netlify.com' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
      { protocol: 'https', hostname: 'media.githubusercontent.com' },
    ],
  },
});
