/** @type {import('next').NextConfig} */
const repo = 'one-god'
const isProd = process.env.NODE_ENV === 'production'


const nextConfig = {
  output: 'export', // tells Next to make a static site in /out
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig;
