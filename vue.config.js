const { defineConfig } = require('@vue/cli-service')
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: 'robots.txt', to: '' },
        ],
      }),
    ],
  },
  transpileDependencies: true,
  outputDir:"/home/www/",
  devServer: {
    allowedHosts: [
      'localhost',
      'example.com',
      '192.168.1.1',
      'booking.fix-mst.ru'
    ],
  },
})

