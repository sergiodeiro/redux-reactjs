import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../components/todo/todo'
import About from '../components/about/about'

export default props => (
    <Router history={hashHistory}>
        <Router path="/todos" component={Todo} />
        <Router path="/about" component={About} />
        <Redirect  from="*" to="todos" />
    </Router>
)