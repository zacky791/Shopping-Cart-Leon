/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/product",
      },
    ];
  },
};

module.exports = nextConfig;
