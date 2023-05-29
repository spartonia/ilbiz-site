/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["drive.google.com", "doc-0c-1s-docs.googleusercontent.com"],
  },
};

module.exports = nextConfig;
