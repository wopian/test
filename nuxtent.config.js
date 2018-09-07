module.exports = {
  content: {
    permalink: ':year/:slug',
    page: '/_post',
    generate: [ // for static build
      'get', 'getAll'
    ],
    isPost: true
  }
}
