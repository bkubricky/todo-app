import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">All Todos</Link> |<Link to="/about">About</Link> |
      <Link to="/meet-the-team">Meet the Developer</Link>
    </nav>
  );
}

export default NavBar;
