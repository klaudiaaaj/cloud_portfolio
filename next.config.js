const { linkedinIn, github } = require('fontawesome');

/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    linkedinInLink: 'https://www.linkedin.com/in/klaudia-janecka/', 
    githubLink: 'https://github.com/klaudiaaaj'
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