import { Outlet } from 'react-router-dom';
import Menu from './Menu';
const MainLayOut = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default MainLayOut;
