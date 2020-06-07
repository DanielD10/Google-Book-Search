import React, {useRef} from  "react";
import Jumbotron from "../components/Jumbotron";
import axios from "axios";
import BooksCard from "../components/BooksCard";

function Searched() {
    const bookRef = useRef();
    function bookSearch(e){
        e.preventDefault();
        const book = bookRef.current.value;
        const keyBook = "AIzaSyCGSsOBj1T4vGKKrQCKtGeBtOmTLEDBATo";
        axios 
        .get(
            `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${keyBook}`
            
        )
            .then((response) => {
                console.log(response.data.items);
               

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
        <input  ref={bookRef} className="uk-search-input" type="search" placeholder="Search..." />
        <button onClick={bookSearch} className="uk-button uk-button-default">Button</button>
      </form>
      <BooksCard type="search" />
    </div>
  );
}



export default Searched;
