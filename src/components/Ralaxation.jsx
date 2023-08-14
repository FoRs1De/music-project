import React, { useRef, useState, useEffect } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';

const Relaxation = () => {
  const vimeoRef = useRef(null); // Reference to the Vimeo player
  const [play, setPlay] = useState(false); // State to manage the play/pause of the Vimeo player

  const token = 'BQCirpQj8r5j4hu6KielQ3IG-Sbfb5GD4CfruDKfnqfs-n_SDYLqFvIVnptdL_B1B8cQEWtel9jnU3M-WC2iJSM2s-i9FifDIMduH3O8zDAl3aqw7ZgDtntkUzKstsYh-VdZWQ68KJ6lBAQyWSrrYyJlFpa0YYNAMsxe_dHx00jjiGp38FJmIIVez3OX6MUtu4sNpJa8vZo'; // Spotify access token
  const trackUri = 'spotify:track:04boE4u1AupbrGlI62WvoO'; // Add Spotify track URL here

  useEffect(() => {
    // Control the playback of the Vimeo player based on the state of the Spotify player
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
        {/* Render the Spotify player */}
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
            // Update the state of the Vimeo player based on the Spotify player's state
            if (state.isPlaying !== play) {
              setPlay(state.isPlaying);
            }
          }}
        />
      </div>

      {/* Vimeo Player */}
      <iframe
        ref={vimeoRef}
        src="https://player.vimeo.com/video/93050095?loop=1&background=1" //Add your vimeo link here
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        frameBorder="0"
        allow="autoplay; fullscreen"
      />
    </>
  );
};

export default Relaxation;