import React from 'react'

const Header = props => {
    return (
        <div className="container center">
            <h1>{props.currentSong}</h1>
        </div>
    )
}

export default Header
