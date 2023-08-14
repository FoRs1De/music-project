import ReactPlayer from 'react-player';
import { useState } from 'react';
import { RadioBrowserApi } from 'radio-browser-api';

const RadioStation = ({ name, streamUrl, description, img, bitRate }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  const handleVolumeChange = (e) => {
    let value = e.target.value;
    setVolume(value);
  };

  const api = new RadioBrowserApi('My Radio App');

  return (
    <div className="radio-station">
      <h3>{name}</h3>
      <p>Country: {description}</p>
      <p>Bitrate: {bitRate}</p>
      <img src={img} width="400px" />
      <ReactPlayer
        url={streamUrl}
        playing={isPlaying}
        volume={volume}
        width="100%"
        height="20px"
      />
      <div className="controls">
        <button onClick={handlePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default RadioStation;