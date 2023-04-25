const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,

  webpack(config, { isServer, dev }) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };
    config.optimization.minimizer.forEach((minimizer) => {
      if (minimizer.constructor.name === "TerserPlugin") {
        // 禁用console.log的过滤
        minimizer.options.terserOptions.compress.drop_console = false;
      }
    });
    return config;
  },
};

module.exports = nextConfig;
