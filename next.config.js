/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["drive.google.com", "*.googleusercontent.com"],
  },
};

module.exports = nextConfig;
