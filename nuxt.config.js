const { join } = require('path')
const { title, description, ...meta } = require('./meta.config')
const resolve = dir => join(__dirname, '..', dir)

module.exports = {
  env: {
    title,
    description,
    ...meta
  },
  head: {
    title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  build: {
    extend (config, { isClient, isServer }) {
      if (isServer) {
        config.resolve.alias['component'] = resolve('components')
        config.resolve.alias['style'] = resolve('styles')
      }

      if (isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    [ 'nuxtent' ]
  ],
  plugins: [
    { src: '~plugins/social.js', ssr: true }
  ],
  loading: { color: '#fe9117' }
}
