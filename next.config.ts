import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
  images: {
    domains: [], // Para imagens externas
    formats: ['image/webp'], // Força webp
  },
};
