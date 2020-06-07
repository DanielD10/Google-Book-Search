import React from "react";

function BookCard(props) {
  return (
    <div>
      <div
        className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
        uk-grid
      >
          <button class="uk-button uk-button-default">Veiw</button>
          {props.type === "search" ? <button class="uk-button uk-button-default">Add</button> :
          <button  class="uk-button uk-button-default">Delete</button>}
        <div className="uk-card-media-left uk-cover-container">
          <img src="images/light.jpg" alt="" uk-cover />
          <canvas width="600" height="400"></canvas>
        </div>

        <div>
          <div className="uk-card-body">
            <h3 className="uk-card-title">Media Left</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>
      </div>

      
    </div>
  );
}
export default BookCard;
