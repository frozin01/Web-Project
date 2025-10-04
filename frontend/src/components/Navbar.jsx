import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
    </nav>
  );
}

export default Navbar;