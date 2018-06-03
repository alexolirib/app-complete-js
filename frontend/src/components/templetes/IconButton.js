import React from 'react';
import If from './If'
    
const IconButton = (props) =>(
    <If test = {!props.hide}>
        <button className={`btn btn-${props.styles}`} type="submit"
        onClick={props.onClick}>
                <i className={`fa fa-${props.icon}`}></i>
        </button>
    </If>
)

export default IconButton;