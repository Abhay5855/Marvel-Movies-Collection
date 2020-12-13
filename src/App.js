import React from "react";
import "./styles.css";

const marvelDB = {
  spiderman: [
    {
      name: "Spider-Man",
      release: "2002",
      rating: "7.3/10",
      description:
        "Spider-Man is a 2002 American superhero film based on the Marvel Comics character of the same name"
    },
    {
      name: "Spider-Man2",
      release: "2004",
      rating: "7.3/10",
      description:
        "Spider-man2 is 2004 movie based on spiderman and doctor octivious"
    },

    {
      name: "Spider-Man3",
      release: "2007",
      rating: "7.3/10",
      description: "spiderman3 is 2007 movie based on spiderman and venom"
    }
  ],

  ironman: [
    {
      name: "ironman",
      release: "2008",
      rating: "8.7/10",
      description:
        "Based on popular marvel character ironman played by robert downeyjr"
    },

    {
      name: "ironman2",
      release: "2010",
      rating: "8.9/10",
      description: "second part of ironman franchaise"
    },
    {
      name: "ironman3",
      release: "2013",
      rating: "9.0/10",
      description: "last part of ironman franchaise"
    }
  ],

  avengers: [
    {
      name: "avengers",
      release: "2012",
      rating: "8.7/10",
      description:
        "first part of avenger franchaise main marvel characters team up to form avengers team against loki "
    },

    {
      name: "avengers age of ultron",
      release: "2015",
      rating: "9.2/10",
      description: "second part of avenger franchaise entry of vision wanda"
    },

    {
      name: "avengers infinity war",
      release: "2018",
      rating: "8.1/10",
      description:
        "third part of avenger franchaise everyone team up against thanos"
    }
  ],

  captainamerica: [
    {
      name: "captain america first avenger",
      release: "2011",
      rating: "8.6/10",
      description: "first part of captain america series"
    },

    {
      name: "captain america winter solidier",
      release: "2014",
      rating: "8.8/10",
      description: "second part of captain america bucky as a rival"
    },

    {
      name: "captain america civil war",
      release: "2016",
      rating: "7.4/10",
      description: "civil war rivalry between captain america and ironman"
    }
  ]
};

export default function App() {
  return (
    <div className="App">
      <h1>Marvel-Movies-Recommender</h1>
      <h2>Watch this awesome marvel movies.</h2>

      <button onClick={() => movieClickHandler()}>{}</button>
    </div>
  );
}
