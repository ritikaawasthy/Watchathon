import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  Science_Fiction: [
    { name: "Interstellar", rating: "4/5" },
    { name: "The Martian", rating: "3.5/5" }
  ],

  Action: [
    {
      name: "Kill Bill",
      rating: "5/5"
    },
    {
      name: "HAvengers series",
      rating: "4.5/5"
    }
  ],
  Comedy: [
    {
      name: "The Office",
      rating: "3.5/5"
    },
    {
      name: "Friends",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Comedy");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Watchathon </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite Movies and tv shows. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li key={book.name}>
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
