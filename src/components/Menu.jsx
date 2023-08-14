import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <nav>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/music">
          Music
        </Link>
        <Link className="link" to="/relaxation">
          Relaxation
        </Link>
        <Link className="link" to="/radio">
          Radio
        </Link>
      </nav>
    </>
  );
};

export default Menu;
