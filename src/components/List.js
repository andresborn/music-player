import React from 'react'

const List = props => {
    return (
        <div className="container center column">
            <ul>{props.children}</ul>
        </div>
    )
}

export default List
