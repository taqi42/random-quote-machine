import React, { useState, useEffect } from "react";
import "./App.scss";
import quotes from "./quotes";
import colors from "./colorsArray";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function App() {
  const [quote, setQuote] = useState("");

  const [author, setAuthor] = useState("");

  const [accentColor, setAccentColor] = useState("#ab45cd");

  const getRandomQuote = () => {
    let randomInteger;
    do {
      randomInteger = Math.floor(Math.random() * quotes.length);
    } while (randomInteger === quotes.indexOf(quote));
    setAccentColor(colors[randomInteger]);
    setQuote(quotes[randomInteger].quote);
    setAuthor(quotes[randomInteger].author);

    
  };

  useEffect(() => {
    getRandomQuote(); // Set a random quote when the component mounts
  }, []);

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
              href={`https://twitter.com/intent/tweet?text=${quote}`}
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
