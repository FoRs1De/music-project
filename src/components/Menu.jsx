import { NavLink } from 'react-router-dom';
const Menu = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/music">Music</NavLink>
        <NavLink to="/relaxation">Relaxation</NavLink>
        <NavLink to="/radio">Radio</NavLink>
      </nav>
    </>
  );
};

export default Menu;
