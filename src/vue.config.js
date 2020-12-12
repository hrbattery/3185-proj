const path = require('path');
const webpack = require('webpack')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    plugins: [
      new VuetifyLoaderPlugin(),
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 5, 
        minChunkSize: 100
      })
    ],
    devtool: 'source-map'
  },
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/.md$/)
      .use('markdown-loader')
      .loader('markdown-loader')
      .loader('text-loader');
    config
      .plugin('html')
      .tap(args => {
        args[0].title= 'Introduction to Computer Vision'
        return args
      })
  }
}