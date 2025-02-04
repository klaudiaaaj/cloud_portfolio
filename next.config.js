/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
};

if (process.env.NODE_ENV !== 'development') {
  nextConfig = {
    ...nextConfig,
    output: "export", 
    assetPrefix: 'https://klaudiaaaj.github.io/cloud_portfolio/',  
  };
}

module.exports = nextConfig;