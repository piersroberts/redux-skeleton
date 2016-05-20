import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'

import * as reducers from './reducers'

import App from './components/app'
import Home from './components/home'
import NoMatch from './components/nomatch'

const store = createStore(
  combineReducers({
  	...reducers,
    routing: routerReducer
  })
)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
      </Route>
      <Route path="*" component={NoMatch}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);