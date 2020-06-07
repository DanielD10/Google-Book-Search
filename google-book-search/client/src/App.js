import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import BookCard from "./components/BooksCard";
import Search from "./components/Search";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Jumbotron />
        <Search/>
        <BookCard />
      </div>
    </Router>
  );
}

export default App;
