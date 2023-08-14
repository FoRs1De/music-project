import { useRef, useState, useEffect } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import relaxation from '../../src/relaxation.css';

const Relaxation = () => {
  const vimeoRef = useRef(null);
  const [play, setPlay] = useState(false);

  const token = 'BQBLGNhTMfgMmSELbcw5HhsJnDzf4X6K0enQpd1pOurEfU2Zg08rfyX13p8B-YQyU9eGDBJuD-338b989mYG1qm3AVxAVllNPYYhEHPiC0rEX8_CGn2-hUIvfKSeTXco0Om-bDk_nNKL6PttRfFXC7cqtKNCBw2KBPXPfdj0jsdR5gcJwq13el9dtDd4vubUusYGPIXQKfo';
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