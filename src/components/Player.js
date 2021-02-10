import React from 'react'
import Button from './Button.js'

const Player = props => {
    return (
        <div className="container center column mx">
            <p>Audio</p>
            <audio src={props.src}></audio>
        </div>
    )
}



export default Player
