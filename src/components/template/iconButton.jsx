import React from 'react'
import {Condicion as If} from '../utils/util'

export default props => (
        <If test={!props.hide}>
            <button className={'btn btn-'+ props.style}
             onClick={props.onClick}>
                 <i className={'fa fa-' + props.icon }></i>
            </button>
        </If>
)