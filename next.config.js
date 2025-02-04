/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  basePath: '/cloudy-portoflio',
  assetPrefix: '/cloud_portfolio/',  // <=== add this line
};

module.exports = nextConfig;