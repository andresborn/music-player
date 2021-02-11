import React from 'react'

const Button = props => {
    return (
        <button className="button bg-grey text-white" onClick={props.onClick}>
            {props.icon}
        </button>
    )
}

export default Button
