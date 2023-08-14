import { useRef, useState, useEffect } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import '../../src/relaxation.css';

const Relaxation = () => {
  const vimeoRef = useRef(null);
  const [play, setPlay] = useState(false);

  const token = 'BQBhO-FWl9h4YIfYkWz9MptJmZTl1e7SU1pYg-dm-AEbhHAs95UXwDfupBfJ_q5cc1JmUmGYNgVAksy0cR38yWC-hzFydLe7_P5PEPrrXLW7G0-FUxLHJwkiCUIIGrqJrMLyai4VvY9i2RNqTvwHj1KDq4qS8fn_XekM64CiEHzvd-QWQo3ekWRETzgIT2kE_7GzKGCUZ3M';
  const trackUri = 'spotify:track:04boE4u1AupbrGlI62WvoO';

  useEffect(() => {
    if (vimeoRef.current && play) {
      vimeoRef.current.contentWindow.postMessage({ method: 'play' }, '*');
    } else if (vimeoRef.current && !play) {
      vimeoRef.current.contentWindow.postMessage({ method: 'pause' }, '*');
    }
  }, [play]);

  return (
    <>
      {/* Spotify Player */}
        <div className="spotify-player-container" style={{ position: 'absolute', top: 120, right: 10, zIndex: 1000 }}>
          <SpotifyPlayer
            token={token}
            uris={[trackUri]}
            styles={{
              bgColor: '#fff',
              color: '#333',
              trackNameColor: '#333',
              trackArtistColor: '#333',
              sliderColor: '#333',
              sliderHandleColor: '#333',
              sliderTrackColor: '#ccc',
            }}
            hideAttribution
            hideCoverArt
            inlineVolume
            callback={(state) => {
              if (state.isPlaying !== play) {
                setPlay(state.isPlaying);
              }
            }}
          />
        </div>

      {/* Vimeo Player */}
      <iframe
        className={['vimeo-player']}
        ref={vimeoRef}
        src="https://player.vimeo.com/video/93050095?loop=1&background=1"
        style={{ position: 'absolute', top: 35, left: 0, width: '100%', height: '100%', zIndex: 999 }}
        frameBorder="0"
        allow="autoplay; fullscreen"
      />
    </>
  );
};

export default Relaxation;