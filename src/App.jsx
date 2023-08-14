import './App.css';
import { Routes, Route } from 'react-router-dom';

import MainLayOut from './components/MainLayout';
import Home from './components/Home';
import Music from './components/Music';
import Relaxation from './components/Ralaxation';
import Radio from './components/Radio';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayOut />}>
          <Route index element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/relaxation" element={<Relaxation />} />
          <Route path="/radio" element={<Radio />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
