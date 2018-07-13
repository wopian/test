const { title, description } = require('./meta.config')

module.exports = {
  env: {
    title,
    description
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
    extend (config, ctx) {
      if (ctx.isClient) {
        // config.resolve.alias['@'] = join('./', 'components')
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
  loading: { color: '#3B8070' }
}
