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
      <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>Welcome to Channel 3</h1>
    </>
  );
};

export default Home;