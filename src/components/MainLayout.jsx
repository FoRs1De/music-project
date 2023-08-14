import { Outlet } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';
const MainLayOut = () => {
  return (
    <div className="main-container">
      <div className="content">
        <Menu />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayOut;
