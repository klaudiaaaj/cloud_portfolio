/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
};

if (process.env.NODE_ENV !== 'development') {
  nextConfig = {
    ...nextConfig,
    output: "export", 
    assetPrefix: '/cloud_portfolio/',  
    basePath: '/cloudy-portoflio',
  };
}

module.exports = nextConfig;