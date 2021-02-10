import React, { Component } from "react";
import Header from "./Header";
import List from "./List";
import Player from "./Player";
import Button from "./Button";
export class Main extends Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef()
    this.changeSong = this.changeSong.bind(this)
    this.state = {
      songs: [],
      currentSong: ""
    };
  }

  componentWillMount() {
    const requestSongs = async () => {
      const response = await fetch(
        "https://assets.breatheco.de/apis/sound/songs"
      );
      let songs = await response.json();
      let songArray = [];
      songs.forEach((song,i) => {
        const songIdx = i;
        const songName = song.name;
        const songURL = song.url;
        const songObj = { songIdx, songName, songURL };
        songArray.push(songObj);
      });
      this.setState({ songs: songArray });
      console.log(this.state.songs[7].songIdx)
    };
    requestSongs();
  }

  changeSong(i) {
    const music = this.state.songs[i].songURL
    const musicURL = "https://assets.breatheco.de/apis/sound/" + music
    console.log(musicURL)
    this.setState({currentSong: musicURL})
    const audioDOM = this.audio.current;
    audioDOM.play()
  }

  render() {
    return (
      <div className="container center column mx my">
        <Header currentSong="Lets Play some music!"/>
        <List>
          {this.state.songs.map((song, i) => (
            <li
            key={song.songIdx} 
            data-attribute={song.Idx}
            onClick={() => this.changeSong(i)}
            >
            {song.songName}
            </li>
          ))}
        </List>
        <Player ref={this.audio} src={this.state.currentSong} content={this.state.currentSong}/>
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
