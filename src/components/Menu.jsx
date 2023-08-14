import { NavLink } from 'react-router-dom';
const Menu = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Music">Music</NavLink>
        <NavLink to="/Relaxation">Relaxation</NavLink>
        <NavLink to="/Radio">Radio</NavLink>
      </nav>
    </>
  );
};

export default Menu;
