/** @type {import('next').NextConfig} */
const path = require('path')
console.log(path.join(__dirname, 'src/styles'))
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts'],
  images: {
    domains: ['picsum.photos', 'osa-open-api.herokuapp.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
}

module.exports = nextConfig
