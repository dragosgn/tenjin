import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.js'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'
import {ThemeProvider} from 'styled-components'
import {AppContainer} from "react-hot-loader"
import {render} from 'react-dom'

import writerReducer from "./reducers/writer"


const rootReducer = combineReducers({
  form: formReducer.plugin({
    writer: writerReducer
  })
})

const theme = {
  // colors
  brandBlue: ""
}

const store = createStore(reducer)

const renderApp = (Component) => {
  render(
    <AppContainer>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </AppContainer>
    , document.getElementById('root'))
}

renderApp(App)

if(module.hot){
  module.hot.accept("./components/App", () => {
    const NextApp = require("./components/App").default
    renderApp(NextApp)
  })
}
