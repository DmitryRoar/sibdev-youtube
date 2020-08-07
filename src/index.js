import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'
import * as serviceWorker from './serviceWorker'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, compose, applyMiddleware} from 'redux'
import {rootReducer} from './store/reducers/rootReducer'
import thunk from 'redux-thunk'
import { authRedirectMiddleware } from './middleware/authRedirect'

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk,
    authRedirectMiddleware
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)


serviceWorker.unregister()