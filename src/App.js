import React, { useState } from "react";
import "./styles.css";

var marvelDB = {
  spiderman: [
    {
      id: 1,
      director: "sam raimi",
      name: "Spider-Man",
      release: "2002",
      rating: "7.3/10",
      description:
        "Spider-Man is a 2002 American superhero film based on the Marvel Comics character of the same name"
    }
  ],

  ironman: [
    {
      id: 2,
      director: "Jon Favreau",
      name: "Ironman",
      release: "2008",
      rating: "8.7/10",
      description:
        "Based on popular marvel character ironman played by robert downeyjr"
    }
  ],

  avengers: [
    {
      id: 3,
      director: "joss wheedon",
      name: "Avengers",
      release: "2018",
      rating: "8.7/10",
      description:
        "first part of avenger franchaise main marvel characters team up to form avengers team against loki "
    }
  ],

  captainamerica: [
    {
      id: 4,
      director: "joe joshton",
      name: "Captain america first avenger",
      release: "2011",
      rating: "8.6/10",
      description: "first part of captain america series"
    }
  ]
};

export default function App() {
  var [selectMovie, setSelectMovie] = useState("ironman");

  function movieClickHandler(movie) {
    setSelectMovie(movie);
  }
  return (
    <div className="App">
      <h1>Marvel-Movies-Recommender</h1>
      <h2>Watch this awesome marvel movies.</h2>
      {Object.keys(marvelDB).map((movie) => (
        <button onClick={() => movieClickHandler(movie)}>{movie}</button>
      ))}

      <ul>
        {marvelDB[selectMovie].map((category) => (
          <li key={category.id}>
            {/* <div>{category.id}</div> */}
            <div>{category.name}</div>
            <div>{category.release}</div>
            <div>{category.rating}</div>
            <div>{category.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
