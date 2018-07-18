import React from 'react'
import { render } from 'react-dom'
// import React from 'react'
// import ReactDOM from 'react-dom'
// import { AppContainer } from 'react-hot-loader'
import App from './app'

const root = document.getElementById('root')
render(<App />, root)

// 模块热替换的 API
// if (module.hot) {
//   module.hot.accept(
//     () => {
//       render(APP)
//     }
//   )
// }
