
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    plugins: [
      new VuetifyLoaderPlugin()
    ],
    devtool: 'source-map'
  },
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/.md$/)
      .use('markdown-loader')
      .loader('markdown-loader')
      .loader('text-loader')
  }
}