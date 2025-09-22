/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  output: 'export',                  // enable static export
  basePath: '/jiya-portfolio',       // repo name
  assetPrefix: '/jiya-portfolio',    // ensures CSS/JS load correctly
}

export default nextConfig
