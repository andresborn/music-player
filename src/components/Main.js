import React from 'react'
import Header from './Header'
import List from './List'
import Player from './Player'

const Main = () => {
    let songList;
    const requestSongs = async () => {
        const response = await fetch("https://assets.breatheco.de/apis/sound/songs");
        const songs = await response.json()
        songList = songs.map(song => `<li>${song.name}</li>`).join('')
        console.log(songList)
    }
    requestSongs()

    return (
        <div className="container center column mx my">
            <Header />
            <List>
                {}
            </List>
            <Player />
        </div>
    )
}

export default Main
