import React, { Component } from 'react'

export class Player extends Component {

    render() {
        return (
            <div className="container center column mx">
            <p>{this.props.content}</p>
            <audio ref={this.props.id} id={this.props.id} controls autoPlay src={this.props.src}  type="audio/mp3"></audio>
        </div>
        )
    }
}

export default Player
