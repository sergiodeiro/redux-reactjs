import React from 'react'

export const Condicion = props => {
    if(props.test) {
        return props.children
    } else {
        return false
    }
}

export const Url = 'http://localhost:3003/api/todos'