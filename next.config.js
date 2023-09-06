const NextFederationPlugin = require('@module-federation/nextjs-mf')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {

    config.plugins.push(
      new NextFederationPlugin({
        name: 'next_core_mf',
        filename: "static/chunks/remoteEntry.js",
        remotes: {},
        exposes: {
          './Button': './src/components/Button/index.tsx',
        },
        shared: {},
      })
    )
    return config
  }
}

module.exports = nextConfig
