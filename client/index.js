import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import {ThemeProvider} from 'styled-components'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))
