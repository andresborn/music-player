# Music Player with React

Things we learned and practiced while building this music player:

- Working with APIs
- Asyncronous programming
- Using `fetch()`
- Referencing DOM elements in React using `ref`
- Manipulating arrays of objects
- Using state with Hooks

The player works like this:

First, we get the song data from BreatheCode's API with `fetch()` and put each song into a new array. Then, we set our state with the song array.

We have an audio tag which we reference through the `useRef` hook to whom we dinamically change the source with the `currentSong` that is selected in our state.

We change the `currentSong` with a function that passes the index of the selected song and then set the state to the new song.

For our forwards and backwards functionality we filtered through our array to find the current index and then set the `currentSong` to the next one. We made sure to add looping functionality.

You can see the live version at:
https://andresborn.github.io/music-player/
