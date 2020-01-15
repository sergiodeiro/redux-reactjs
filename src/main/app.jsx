import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../components/template/custom.css'

import React from 'react'
import Menu from '../components/template/menu'
import Routes from './router'

export default props => (
    <div className="container">
        <Menu />
        <Routes />
    </div>
)