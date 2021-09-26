import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.scss';

let quotes = [];

const App = () => {
  console.log('App called');
  let [quote, setQuotes] = useState({
    quote: '',
    author: '',
    tweet: '#'
  });

  const fetchData = () => {
    axios.get(`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`)
      .then(res => {
        const data = res.data;
        quotes = data.quotes;
        getRandomQuote();
      });
  }

  const getRandomQuote = () => {
    const randomNum = getRandomNumber(quotes.length);
    const currentQuote = quotes[randomNum].quote;
    const currentAuthor = quotes[randomNum].author;
    setQuotes({
      quote: currentQuote,
      author: currentAuthor,
      tweet: 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
        encodeURIComponent('"' + currentQuote + '" ' + currentAuthor),
    });
  }

  const handleClick = () => {
    getRandomQuote();
  }

  const getRandomNumber = (length) => {
    return Math.floor(Math.random() * length);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="quote-box">
      <div id="text">
        {quote.quote}
      </div>
      <div id="quote-author">
        {quote.author}
      </div>

      <div className="buttons">
        <a className="button" id="tweet-quote" href={quote.tweet}>
          <i className="fa fa-twitter"></i>
        </a>
        <button id="new-quote" className="button" onClick={handleClick}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default App;
