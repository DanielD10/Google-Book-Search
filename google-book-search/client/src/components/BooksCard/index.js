import React from "react";
import API from "../../utils/API";

function BookCard(props) {
  function saveBook() {
    API.saveBook({
      title: props.title,
      authors: props.authors,
      description: props.description,
      image: props.imageLinks,
      link: props.infoLink,
    }).then(() => console.log("Book Saved!"))
    .catch(err => console.log(err));
    
  }

  function deleteBook(id) {
      API.deleteBook(id).then(() => console.log("Book Deleted!"))
      .catch(err => console.log(err));

  }

  return (
    <div>
      <div
        className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
        uk-grid="true"
      >
        <a href={props.infoLink}>
          {" "}
          <button className="uk-button uk-button-default">Veiw</button>
        </a>

        {props.type === "search" ? (
          <button onClick={saveBook} className="uk-button uk-button-default">
            Add
          </button>
        ) : (
          <button onClick={() => deleteBook( props.id)} className="uk-button uk-button-default">Delete</button>
        )}
        <div className="uk-card-media-left uk-cover-container">
          <img src={props.imageLinks} alt="" uk-cover="true" />
          <canvas width="600" height="400"></canvas>
        </div>

        <div>
          <div className="uk-card-body">
            <h1 className="uk-card-title">{props.title}</h1>
            <h3> {props.authors} </h3>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BookCard;
