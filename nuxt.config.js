console.log(process.env.BASE_URL);
const baseUrl = process.env.BASE_URL || '';
module.exports = {
  head: {
    titleTemplate: '%s - PyCon JP 2018',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: 'Meta description' },
      { hid: 'keywords', name: 'keywords', content: 'PyConJP2018,python,カンファレンス' },
      { property: 'og:locale', content: 'ja_JP' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'PyCon JP 2018 in Tokyo | Sep 17th &ndash; Sep 18th' },
      { property: 'og:description', content: 'Meta description' },
      { property: 'og:url', content: 'http://' },
      { property: 'og:image', content: baseUrl + '/common/ogp_image.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: baseUrl + '/common/favicon.ico'}
    ]
  },
  build: {
    vendor: ['uikit']
  },
  css: [
    { src: '~assets/css/main.sass', lang: 'sass' },
  ],
  router: {
    middleware: 'i18n'
  },
  plugins: ['~/plugins/i18n.js'],
  generate: {
    minify: {
      collapseWhitespace: false
    },
    routes: ['/', 'code-of-conduct', 'en', 'en/code-of-conduct']
  },
  env: {
    baseUrl: baseUrl
  }
}
