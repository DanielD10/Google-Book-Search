import React from "react";

function Search() {
  return (
    <header>
      <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">

        <div class="uk-navbar-item">
            <form class="uk-search uk-search-navbar">
                <span uk-search-icon></span>
                <input class="uk-search-input" type="search" placeholder="Search..."/>
            </form>
        </div>

    </div>
</nav>
    </header>
  );
}

export default Search;