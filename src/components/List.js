import React from 'react'

const List = props => {
    return (
        <div className="container center column">
            <ul className="list">{props.children}</ul>
        </div>
    )
}

export default List
