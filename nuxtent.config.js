module.exports = {
  content: {
    permalink: ':year/:slug',
    page: '/_year/_slug',
    generate: [ // for static build
      'get', 'getAll'
    ],
    isPost: true
  },
  api: {
    baseURL: 'http://localhost:3000',
    browserBaseURL: 'http://localhost:3000'
  }
}
