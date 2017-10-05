import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.js'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'
import {ThemeProvider} from 'styled-components'

import reducer from './reducers'


const rootReducer = combineReducers({
  form: formReducer.plugin({
    writer: writer
  })
})

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))
