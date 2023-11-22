import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div id="in_header">
          <Link to="/">
            <h1>Happy'Mo</h1>
          </Link>
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <h1>Home</h1>
                </Link>
              </li>
              <li>
                <Link to="/inscription">
                  <h1>Inscription</h1>
                </Link>
              </li>
              <li>
                <Link to="/connection">
                  <h1>Connection</h1>
                </Link>
              </li>
              <li>
                <Link to="/user">
                  <h1>User</h1>
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/annonce">
                  <h1>Annonce</h1>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
