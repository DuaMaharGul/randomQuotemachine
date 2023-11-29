function App() {
  const [quotes, setQuotes] = React.useState([]);
  const [randomQuotes, setRandomQuotes] = React.useState("");
  const [colors, setColor] = React.useState("#fff");
  //fetch quotes from api
  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes");
      //give json data
      const data = await response.json();
      //set quotes to data
      setQuotes(data);
      //random index to set to random quote
      let randomIndex = Math.floor(Math.random() * data.length);
      //set random quote to data index
      setRandomQuotes(data[randomIndex]);
    }
    //call func
    fetchData();
  }, []);
  //map or consolelog to check if working
  // {quotes.map((quotes) => (
  //     <div>{quotes.text}</div>
  // ))}
  const getNewQuote = () => {
    //add random colors
    const colors = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857",
    ];

    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomColorIndex = Math.floor(Math.random() * colors.length);
    setRandomQuotes(quotes[randomIndex]);
    setColor(colors[randomColorIndex]);
  };

  return (
    <div style={{ backgroundColor: colors, minHeight: "100vh" }} id="wrapper">
      <div className="container pt-5" id="quote-box">
        <div className="jumbotron">
          <div className="card">
            <div className="card-header">Inspirational Quotes</div>
            <div className="card-body">
              {randomQuotes ? (
                <>
                  <p className="card-text" id="text">
                    &quot;{randomQuotes.text}&quot;
                  </p>

                  <h5 className="quote-author" id="author">
                    - {randomQuotes.author || "No Author"}
                  </h5>
                </>
              ) : (
                <h2>Loading</h2>
              )}

              <div className="column">
                <a
                  href="twitter.com/intent/tweet"
                  target="_top"
                  className="btn btn-warning"
                  id="tweet-quote"
                >
                  <i className="fa fa-twitter"></i>
                </a>

                <a
                  href={
                    "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
                    encodeURIComponent(randomQuotes.author) +
                    "&content=" +
                    encodeURIComponent(randomQuotes.text) +
                    "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
                  }
                  target="_target"
                  className="btn btn-danger"
                  id="tumblr-quote"
                >
                  <i className="fa fa-tumblr"></i>
                </a>

                <button
                  onClick={getNewQuote}
                  className="btn btn-primary ml-3"
                  id="new-quote"
                >
                  New Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
