import React, { useState, useEffect } from "react";
import "./App.scss";
import colors from "./colorsArray";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState("");

  const [author, setAuthor] = useState("");

  const [accentColor, setAccentColor] = useState("#E57373");

  const [initialRender, setInitialRender] = useState(true);

  const getRandomQuote = () => {
    const API_URL = "https://api.api-ninjas.com/v1/quotes";
    axios
      .get(API_URL, {
        headers: {
          "X-Api-Key": "1Kx3zTp8mCUCex9KnScJ7A==Xh0soFuwl90Zbhms",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const randomColor = Math.floor(Math.random() * colors.length);
        const randomIndex = Math.floor(Math.random() * response.data.length);
        const randomQuote = response.data[randomIndex];

        setAccentColor(colors[randomColor]);
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
    } else {
      getRandomQuote();
    }
  }, [initialRender]);

  return (
    <div className="App">
      <header
        className="App-header"
        style={{ backgroundColor: accentColor, color: accentColor }}
      >
        <div id="quote-box">
          <div id="quote-text">
            <i id="quote-icon" className="fa fa-quote-left"></i>
            <span id="text">{quote}</span>
          </div>

          <p id="author">- {author}</p>

          <div className="button">
            <a
              id="tweet-quote"
              href={`https://twitter.com/intent/tweet?text=${quote} %23Quote`}
              style={{ backgroundColor: accentColor }}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <button
              id="new-quote"
              onClick={() => getRandomQuote()}
              style={{ backgroundColor: accentColor }}
            >
              New Quote
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
