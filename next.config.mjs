import { NextFederationPlugin } from '@module-federation/nextjs-mf'

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    config.output.publicPath = "auto"
    config.plugins.push(
      new NextFederationPlugin({
        // publicPath: "auto",
        name: 'mf_next',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          angularRemoteApp: `angularRemoteApp@https://d39c4uctwonyl2.cloudfront.net/build/remoteEntry.js` // substituir por url bucket
        },
        exposes: {},
        shared: {}
      })
    )
    return config
  },
  reactStrictMode: true
}

export default nextConfig
