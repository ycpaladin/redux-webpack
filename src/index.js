import React from 'react'
import { render } from 'react-dom'
// import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from  './configureStore'
// import inputApp from './reducers'


import  '!style!css!bootstrap/dist/css/bootstrap.min.css'

let store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#app")
);