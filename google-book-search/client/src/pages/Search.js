import React, { useRef, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import axios from "axios";
import BooksCard from "../components/BooksCard";

function Searched() {
  const [books, setBooks] = useState([]);
  const bookRef = useRef();
  function bookSearch(e) {
    e.preventDefault();
    const book = bookRef.current.value;
    const keyBook = "AIzaSyCGSsOBj1T4vGKKrQCKtGeBtOmTLEDBATo";
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${keyBook}`
      )
      .then((response) => {
        console.log(response.data.items);
        setBooks(response.data.items);

        // const results = [];
        // for(let i = 6; i < 20; i++) {
        //     results.push(response.data.results[i])
        // }
        // setNewBooks(results)
      })
      .catch(function (e) {
        console.log(e);
      });
  }
  return (
    <div>
      <Jumbotron />
      <form className="uk-search uk-search-navbar">
        <span uk-search-icon="true"></span>
        <input
          ref={bookRef}
          className="uk-search-input"
          type="search"
          placeholder="Search..."
        />
        <button onClick={bookSearch} className="uk-button uk-button-default">
          Button
        </button>
      </form>
      {books && books.length > 0
        ? books.map((book) => {
            return (
              <BooksCard
                type="search"
                key={book.id}
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors[0]}
                description={book.volumeInfo.description}
                imageLinks={book.volumeInfo.imageLinks.smallThumbnail}
                infoLink={book.volumeInfo.infoLink}
              />
            );
          })
        : ""}
    </div>
  );
}

export default Searched;
