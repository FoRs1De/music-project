import React, { useRef, useState, useEffect } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';

const Relaxation = () => {
  const vimeoRef = useRef(null);
  const [play, setPlay] = useState(false);

  const token = 'BQCPaXDipGLw_QMRrhhY7biyyqaLDW01WHYpzclnzWvsuZkqfMgtL87iKtw5Iynw1p3kujXEMl569of7zT7aaV4LAZ1LkNSFQeHOgsWusbMCsHhdfnnzy5tKTgNhXkklGdDKjiQoZxkGT_Ro9giqyxjLL4w0LcO8SzTYJVVUmMHtOMw7BN8aAcFu8SBQiMUIdeDASEn3eIQ';
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
      <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 1000 }}>
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
          callback={state => {
            if (state.isPlaying !== play) {
              setPlay(state.isPlaying);
            }
          }}
        />
      </div>

      {/* Vimeo Player */}
      <iframe
        ref={vimeoRef}
        src="https://player.vimeo.com/video/93050095?loop=1&background=1"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        frameBorder="0"
        allow="autoplay; fullscreen"
      />
    </>
  );
};

export default Relaxation;