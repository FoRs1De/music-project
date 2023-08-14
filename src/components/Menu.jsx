import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <NavLink to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/music" activeClassName="active">
        Music
      </NavLink>
      <NavLink to="/relaxation" activeClassName="active">
        Relaxation
      </NavLink>
      <NavLink to="/radio" activeClassName="active">
        Radio
      </NavLink>
    </nav>
  );
};

export default Menu;
