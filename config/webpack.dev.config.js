'use strict'
const { resolve } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const { dev } = require('../config/index')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.config')

const plugins = [
  // 美化 console 输出
  new webpack.NamedModulesPlugin(),
  // 开启全局的模块热替换（HMR）
  new webpack.HotModuleReplacementPlugin(),
]

if (dev.autoOpenBrowser) {
  // 编译完成在再浏览器打开项目
  plugins.push(new OpenBrowserPlugin({ url: `http://localhost:${dev.port}` }))
}

module.exports = merge(
  baseWebpackConfig,
  {
    mode: 'development',
    devtool: dev.devtool,
    // 服务配置
    // devServer: {
    //   hot: true,
    //   // hotOnly: true,
    //   // open: true,
    //   port: dev.port, // 服务端口
    //   inline: true,
    //   // 和上文output的"publicPath"值保持一致
    //   publicPath: '/',
    //   host: '0.0.0.0',
    //   disableHostCheck: true, // 解决非本机无法访问
    //   // 开启服务器的模块热替换（HMR）
    //   // 开启服务器输出文件的路径
    //   contentBase: resolve(__dirname, 'src'),
    // },
    output: {
      publicPath: dev.assetsPublicPath
    },
    // 入口配置
    entry: [
      'babel-polyfill',
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false',
      resolve(__dirname, '../src/index.tsx')
    ],
    module: {
      rules: []
    },
    plugins
  }
)

