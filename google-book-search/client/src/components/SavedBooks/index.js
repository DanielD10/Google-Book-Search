import React from "react";
import BooksCard from "../BooksCard";

function SavedBooks() {
  return (
    <div>
      <h1>Saved Books</h1>
     
      <BooksCard type="saved"/>
    </div>
  );
}

export default SavedBooks;
