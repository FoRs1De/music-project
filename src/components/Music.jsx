import { Spotify } from "react-spotify-embed";

const Music = () => {
  return (
    <>
      <div className="song-player-container">
        <Spotify
          wide
          link="https://open.spotify.com/intl-de/album/6cu7xYLVH8lhcQd7MPvuW7"
          className="song-player"
        />
      </div>
    </>
  );
};

export default Music;
