import React from 'react'
import Header from './Header'
import List from './List'
import Player from './Player'

const Main = () => {
    return (
        <div className="container center column mx my">
            <Header />
            <List />
            <Player />
        </div>
    )
}

export default Main
