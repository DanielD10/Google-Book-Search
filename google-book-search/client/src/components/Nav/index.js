import React from "react";
import {Link} from "react-router-dom";

function Nav() {
  return (
    <header>
      <nav className="uk-navbar-container uk-margin" uk-navbar="mode: click">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li className="uk-active">
              <Link to="/">GOOGLE BOOK SEARCH</Link>
            </li>
            <li>
              <Link to="/">Search</Link>
            </li>
            <li>
              <Link to="/saved">Saved</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;