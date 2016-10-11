import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './components/Layout'
import Search from './components/Search'

render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Search} />

    </Route>

  </Router>,
  document.getElementById('root')
);
