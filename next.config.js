/** @type {import('next').NextConfig} */
const withLinaria = require('next-with-linaria')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
}

module.exports = withLinaria(nextConfig)
