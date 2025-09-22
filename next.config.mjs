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
  basePath: '/Jiya-Portfolio',   // your repo name
  assetPrefix: '/Jiya-Portfolio', // ensures CSS/JS load correctly
}

export default nextConfig
