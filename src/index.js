import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import APP from './app'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(APP)

// 模块热替换的 API
if (module.hot) {
  module.hot.accept(
    () => {
      render(APP)
    }
  )
}
