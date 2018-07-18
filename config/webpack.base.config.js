'use strict'
const { resolve } = require('path')
// const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: resolve(__dirname, '..'),
  // context: resolve(__dirname, '../src'),
  // 输出配置
  output: {
    // 输出的打包文件
    filename: '[name].js',
    // 输出文件路劲
    path: resolve(__dirname, '../dist'),
    // 对于热替换（HMR）是必须的，让webpack知道在哪里载入热更新的模块（chunk）
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          'babel-loader',
          'awesome-typescript-loader'
        ],
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(js|jsx)$/i,
        use: ['babel-loader'],
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  plugins: [
    // dist目录下生成html模板文件
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../index.html'),
      // favicon: './assets/img/favicon.ico'
    }),
  ],
  /******** webpack 解析配置 ********/ 
  resolve: {
    /*** 设置自动解析的扩展 ***/
    extensions: ['.web.js', '.js', '.json', '.jsx', '.ts', '.tsx', '.less', '.css'],
    /*** 设置路径别名 ***/
    alias: {
      '@': resolve(__dirname, '../src/')
    }
  }
}