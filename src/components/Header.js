import React from 'react'

const Header = props => {
    return (
        <div className={props.className}>
            <h2>{props.currentSong}</h2>
        </div>
    )
}

export default Header
