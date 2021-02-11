import React from 'react'

const List = props => {
    return (
        <div className={props.className}>
            <ul className="list">{props.children}</ul>
        </div>
    )
}

export default List
