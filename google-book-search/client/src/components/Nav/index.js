import React from "react";

function Nav() {
  return (
    <header>
      <nav class="uk-navbar-container uk-margin" uk-navbar="mode: click">
        <div class="uk-navbar-left">
          <ul class="uk-navbar-nav">
            <li class="uk-active">
              <a href="/">GOOGLE BOOK SEARCH</a>
            </li>
            <li>
              <a href="/">Search</a>
            </li>
            <li>
              <a href="/saved">Saved</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;