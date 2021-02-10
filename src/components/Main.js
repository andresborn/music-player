import React, { Component } from "react";
import Header from "./Header";
import List from "./List";
import Player from "./Player";
import Button from "./Button";
export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
  }

  componentWillMount() {
    const requestSongs = async () => {
      const response = await fetch(
        "https://assets.breatheco.de/apis/sound/songs"
      );
      let songs = await response.json();
      let songArray = [];
      songs.forEach((song) => {
        const songID = song.id;
        const songName = song.name;
        const songURL = song.url;
        const songObj = { songID, songName, songURL };
        songArray.push(songObj);
      });
      this.setState({ songs: songArray });
    };
    requestSongs();
  }

  render() {
    return (
      <div className="container center column mx my">
        <Header />
        <List>
          {this.state.songs.map((song) => (
            <li key={song.songID}>{song.songName}</li>
          ))}
        </List>
        <Player />
        <div className="center row mx">
          <Button icon={<i className="bi-stop-fill icon"></i>} />
          <Button icon={<i className="bi-play-fill icon"></i>} />
          <Button icon={<i className="bi-skip-forward-fill icon"></i>} />
        </div>
      </div>
    );
  }
}

export default Main;
