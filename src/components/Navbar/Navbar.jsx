import { Link } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  return (
    <div className="navbar-container">
      <figure className="logo-container">
        <img src="/icono-ecommerce.png" alt="/icono-ecommerce.png" />
      </figure>

      <ul className="url-container">
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
        <li>
          {" "}
          <Link to={"/productos"}>Productos</Link>
        </li>
        <li>
          <Link to={"/usuarios"}>Usuarios</Link>
        </li>
      </ul>

      <button className="singin-button">Login</button>
    </div>
  );
}

export default Navbar;
