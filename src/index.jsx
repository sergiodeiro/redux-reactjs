import React from 'react'
import ReactDom from 'react-dom'
import Field from './field'
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'
import fieldReducer from './reducers/fieldReducer'

const reducers = combineReducers({
    field: fieldReducer
})

ReactDom.render(
    <Provider store={createStore(reducers)}>
            <Field />
    </Provider>
,document.getElementById('field'))