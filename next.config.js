const { linkedinIn, github } = require('fontawesome');

/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    linkedinInLink: 'https://www.linkedin.com/in/klaudia-janecka/', 
    githubLink: 'https://github.com/klaudiaaaj/klaudiajanecka', 
    web3FormsKey: 'a2d5cd21-d9b7-4b1c-80c0-01553da086a8'
    },
};

if (process.env.NODE_ENV !== 'development') {
  nextConfig = {
    ...nextConfig,
    output: "export", 
    assetPrefix: 'https://klaudiaaaj.github.io/cloud_portfolio/', 
    basePath:'/cloud_portfolio',
  };
}

module.exports = nextConfig;  