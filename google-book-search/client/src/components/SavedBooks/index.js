import React, {useState, useEffect} from "react";
import BooksCard from "../BooksCard";
import API from "../../utils/API";

function SavedBooks() {
    const [books, setBooks] = useState([]);
    useEffect(()=> {
        API.getBooks().then(res => setBooks(res.data))
    },[])
  return (
    <div>
      <h1>Saved Books</h1>
     
      {books && books.length > 0
        ? books.map((book) => {
            return (
              <BooksCard
                type="saved"
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

export default SavedBooks;
