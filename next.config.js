/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/My-website',
  assetPrefix: '/My-website',
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  }
}

module.exports = nextConfig
