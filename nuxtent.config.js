module.exports = {
  content: {
    permalink: ':year/:slug',
    page: '/_year/_slug',
    generate: [ // for static build
      'get', 'getAll'
    ],
    isPost: true
  }
}
