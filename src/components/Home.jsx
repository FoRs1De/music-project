import { useRef, useEffect } from 'react';

const Home = () => {
  const vimeoRef = useRef(null);

  useEffect(() => {
    if (vimeoRef.current) {
      vimeoRef.current.contentWindow.postMessage({ method: 'play' }, '*');
    }

    return () => {
      if (vimeoRef.current) {
        vimeoRef.current.contentWindow.postMessage({ method: 'pause' }, '*');
      }
    };
  }, []);

  return (
    <>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>
        Welcome to Channel 3
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src="https://media.discordapp.net/attachments/819961405037084683/1140645309127589918/Mein_Bild.jpg?width=684&height=456"
          alt="Image 1"
          style={{ width: '300px', margin: '10px' }}
        />
        <img
          src="https://media.discordapp.net/attachments/819961405037084683/1140645374948806727/Screenshot_2023-08-14_155709.png?width=421&height=456"
          alt="Image 2"
          style={{ width: '300px', margin: '10px' }}
        />
        <img
          src="https://media.discordapp.net/attachments/819961405037084683/1140646071870181446/Screenshot_2023-08-14_at_15.59.32.png"
          alt="Image 3"
          style={{ width: '300px', margin: '10px' }}
        />
      </div>
      <center>
        {' '}
        <h2>This project done by us: Andrej, Oleksiy, Jerry</h2>
      </center>
      <center>
        <p>We are hiring</p>
      </center>
    </>
  );
};

export default Home;
