'use strict'
process.env.NODE_ENV = 'development'
const webpack = require('webpack')
const middleware = require('webpack-dev-middleware')
const webpackDevConfig = require('../config/webpack.dev.config')
const config = require('../config/index')

const compiler = webpack(webpackDevConfig)
const express = require('express')
const app = express()

app.use(middleware(compiler, {
    noInfo: true,
    //绑定中间件的公共路径,与webpack配置的路径相同
    publicPath: webpackDevConfig.output.publicPath,
    quiet: true  //向控制台显示任何内容 
}))

app.use(require('webpack-hot-middleware')(compiler))

app.listen(config.dev.port, config.dev.host, () => console.log(`listening on port ${config.dev.port}!`))
