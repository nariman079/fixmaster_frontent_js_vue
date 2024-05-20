const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
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

