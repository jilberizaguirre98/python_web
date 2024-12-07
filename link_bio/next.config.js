/** @type {import('next').NextConfig} */
const nextConfig = {
    future: {
      webpack5: true, // Fuerza Webpack 5
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.js$/,
        resolve: {
          fullySpecified: false,
        },
      });
      return config;
    },
  };
  
  module.exports = nextConfig;