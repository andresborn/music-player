import React, { useState, useRef, useEffect } from "react";
import Header from "./Header";
import List from "./List";
import Button from "./Button";

const Main = (props) => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);

  const audioEL = useRef();

  const requestSongs = async () => {
    const response = await fetch(
      "https://assets.breatheco.de/apis/sound/songs"
    );
    let songs = await response.json();
    let songArray = [];
    songs.forEach((song, i) => {
      const songIdx = i;
      const songName = song.name;
      const songURL = song.url;
      const songObj = { songIdx, songName, songURL };
      songArray.push(songObj);
    });
    setSongs(songArray);
  };
  requestSongs();

  const changeSong = (i) => {
    const music = songs[i].songURL;
    const musicURL = "https://assets.breatheco.de/apis/sound/" + music;
    console.log(musicURL);
    setCurrentSong(musicURL);
  };

  useEffect(() => {
    // We are monitoring currentSong, and if it changes, play the audio
    audioEL.current.play();
  }, [currentSong]);

  const play = () => {
      if (isPlaying) {
          
      } else {
          audioEL.current.play()
          setIsPlaying(true)
      }
  }
  
  const pause = () => {
      if (!isPlaying) {

      } else {
          audioEL.current.pause()
          setIsPlaying(false)
      }
  }

  return (
    <div className="container center column mx my">
      <Header currentSong="Lets Play some music!" />
      <List>
        {songs.map((song, i) => (
          <li
            key={song.songIdx}
            data-attribute={song.Idx}
            onClick={() => changeSong(i)}
          >
            {song.songName}
          </li>
        ))}
      </List>
      <div className="container center column mx">
        <audio ref={audioEL} src={currentSong} type="audio/mp3"></audio>
      </div>
      <div className="center row mx">
        <Button icon={<i className="bi-stop-fill icon"></i>} onClick={pause} />
        <Button icon={<i className="bi-play-fill icon"></i>} onClick={play} />
        <Button icon={<i className="bi-skip-forward-fill icon"></i>} />
      </div>
    </div>
  );
};

export default Main;
