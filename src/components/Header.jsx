import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsConnected(!!token);
  }, []);

  return (
    <header>
      <div id="in_header">
        <Link to="/">
          <h1 id="title_header">Happy'Mo</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/annonce">
                <h1>Nouvelle propriété</h1>
              </Link>
            </li>
            <div>
              <ul>
                {isConnected ? (
                  <li>
                    <Link to="/user">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </Link>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link to="/inscription">
                        <h1>Inscription</h1>
                      </Link>
                    </li>
                    <li>
                      <Link to="/connection">
                        <h1>Connexion</h1>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
