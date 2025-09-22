/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',          // required for static export
  basePath: '/jiya-portfolio',   // your repo name
  assetPrefix: '/jiya-portfolio', // ensures CSS/JS load correctly
}

export default nextConfig
