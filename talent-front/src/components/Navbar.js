import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li>
            <Link className="nav-link navbar-brand" to="/">
              Agendar
            </Link>
          </li>
          <li>
            <Link className="nav-link navbar-brand" to="/search-interviews">
              Consultar
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
