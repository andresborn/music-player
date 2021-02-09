import React from 'react'
import Button from './Button.js'

const Player = props => {
    return (
        <div className="container center row mx">
            <Button icon={<i class="bi-stop-fill icon"></i>} onClick={props.onClick} />
            <Button icon={<i class="bi-play-fill icon"></i>} onClick={props.onClick} />
            <Button icon={<i class="bi-skip-forward-fill icon"></i>} onClick={props.onClick} />
        </div>
    )
}



export default Player
