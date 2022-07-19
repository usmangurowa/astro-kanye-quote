import React from "react";
import Button from "./react/Button";
import Quote from "./react/Quote";

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
    <>
      <Quote loading={loading} quote={quote} />
      <Button onClick={getQuote}>Refresh</Button>
    </>
  );
};

export default QuoteGenerator;
