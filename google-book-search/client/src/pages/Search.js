import React from "react";
import Jumbotron from "../components/Jumbotron";
import Search from "../components/Search";
import BooksCard from "../components/BooksCard";

function Searched() {
  return (
    <div>
      <Jumbotron />
      <Search />
      <BooksCard type="search"/>
    </div>
  );
}

export default Searched;
