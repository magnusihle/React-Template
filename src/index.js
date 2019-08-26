import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import './css/index.css'
import { history } from './shared/CreateBrowserHistory';
const store = configureStore()

render(
  <Router history={history}>
    <Root store={store} />
  </Router>,
  document.getElementById('root')
)
