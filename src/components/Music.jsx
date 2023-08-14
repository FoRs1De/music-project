import { useState } from "react";
import { Spotify } from "react-spotify-embed";

const Music = () => {
  const playLists = [
    "https://open.spotify.com/intl-de/album/6cu7xYLVH8lhcQd7MPvuW7",
    "https://open.spotify.com/intl-de/album/5j0o3XQ1YciVzm7MtcFmfG",
    "https://open.spotify.com/intl-de/artist/3D1MlAIk90uuudYi2Ldip0",
    "https://open.spotify.com/intl-de/album/6G35EYutsrNSKJAJfLDPPZ",
    "https://open.spotify.com/intl-de/artist/6aV0GhDm4skw9LIM0w5I66",
  ];

  const [playList, setplayLists] = useState(
    "https://open.spotify.com/intl-de/album/6cu7xYLVH8lhcQd7MPvuW7"
  );

  function playListOne() {
    setplayLists(playLists[0]);
  }

  function playListTwo() {
    setplayLists(playLists[1]);
  }

  function playListThree() {
    setplayLists(playLists[2]);
  }

  function playListFour() {
    setplayLists(playLists[3]);
  }

  function playListFive() {
    setplayLists(playLists[4]);
  }

  return (
    <>
      <div className="song-player-container">
        <Spotify wide link={playList} className="song-player" />
        <div className="play-lists">
          <button onClick={playListOne}>Top Hits Deutschland</button>
          <button onClick={playListTwo}>Top Hits 2023</button>
          <button onClick={playListThree}>80s Super Hits</button>
          <button onClick={playListFour}>90s Party</button>
          <button onClick={playListFive}>Ultimate 2000s Hits</button>
        </div>
      </div>
    </>
  );
};

export default Music;
