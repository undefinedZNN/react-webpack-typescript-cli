'use strict'
const path = require('path')

module.exports = {
  dev: {
    // Paths
    assetsPublicPath: '/',

    // Various Dev Server settings
    host: '0.0.0.0', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined

    // 编译完成后自动打开浏览器
    autoOpenBrowser: true,
  
    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-source-map',
  
    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
  },

  build: {
    // 摸版文件
    index: path.resolve(__dirname, '../dist/index.html'),
    // 静态资源路径
    assetsPublicPath: './',
  }
}
