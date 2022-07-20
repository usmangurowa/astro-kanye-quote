import React from "react";
import "../style/style.css"

const QuoteGenerator = (props) => {
  const [loading, setLoading] = React.useState(false);
  const [quote, setQuote] = React.useState(
    "Click on the button below to get a kanye quote!!!"
  );

  const getQuote = async () => {
    setLoading(true);
    await fetch("https://api.kanye.rest/")
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => setQuote(data.quote))
      .catch((err) => alert("We encounter an error!!!"))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <React.Fragment>
      <div className="quote">
        {loading ? <span>Loading....</span> : <span>{quote}</span>}
      </div>
      <button className="refresh-button" onClick={getQuote}>Refresh</button>
    </React.Fragment>
  );
};

export default QuoteGenerator;
