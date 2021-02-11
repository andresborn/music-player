import React from 'react'

const Header = props => {
    return (
        <div className={props.className}>
            <h1>{props.currentSong}</h1>
        </div>
    )
}

export default Header
