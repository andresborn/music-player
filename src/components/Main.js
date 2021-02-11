import React, { useState, useRef, useEffect } from "react";
import Header from "./Header";
import List from "./List";
import Button from "./Button";

const Main = (props) => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);

  const audioEL = useRef();

  useEffect(() => {
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
  }, []);

  const apiURL = "https://assets.breatheco.de/apis/sound/";

  const changeSong = (i) => {
    setCurrentSong(songs[i]);
  };

  useEffect(() => {
    // We are monitoring currentSong, and if it changes, play the audio
    audioEL.current.play();
  }, [currentSong]);

  const play = () => {
    audioEL.current.play();
    setIsPlaying(true);
  };

  const pause = () => {
    audioEL.current.pause();
    setIsPlaying(false);
  };

  const forward = () => {
    const next = songs.filter((song, i) => {
      if (currentSong.songIdx === 21) {
        return song.songIdx === 0;
      } else {
        if (song.songIdx === currentSong.songIdx + 1) {
          return song;
        }
      }
    });
    setCurrentSong(next[0]);
  };

  const previous = () => {
    const previous = songs.filter((song, i) => {
      if (currentSong.songIdx === 0) {
        return song.songIdx === 21;
      } else {
        if (song.songIdx === currentSong.songIdx - 1) {
          return song;
        }
      }
    });
    setCurrentSong(previous[0]);
  };

  const PlayButton = () => {
    if (isPlaying) {
      return (
        <Button icon={<i className="bi-pause-fill icon"></i>} onClick={pause} />
      );
    } else {
      return (
        <Button icon={<i className="bi-play-fill icon"></i>} onClick={play} />
      );
    }
  };

  return (
    <div className="container center column mx my">
      <Header
        className="container center text-white"
        currentSong="Lets Play some music!"
      />
      <List className="text-white column">
        {songs.map((song, i) => (
          <li
            className="song-item"
            key={song.songIdx}
            data-attribute={song.Idx}
            onClick={() => changeSong(i)}
          >
            <div>{song.songIdx}</div>
            <span>&nbsp;</span>
            <div>{song.songName}</div>
          </li>
        ))}
      </List>
      <div className="container center column mx">
        <audio
          ref={audioEL}
          src={apiURL + currentSong.songURL}
          type="audio/mp3"
        ></audio>
      </div>
      <div className="center row mx">
        <Button
          icon={<i className="bi-skip-backward-fill icon"></i>}
          onClick={previous}
        />
        <PlayButton />
        <Button
          icon={<i className="bi-skip-forward-fill icon"></i>}
          onClick={forward}
        />
      </div>
    </div>
  );
};

export default Main;
