/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts'],
  images: {
    domains: ['picsum.photos', 'osa-open-api.herokuapp.com'],
  },
}

module.exports = nextConfig
