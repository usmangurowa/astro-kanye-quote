import React from "react";

const Quote = ({ quote, loading }) => {
  return (
    <>
      <div className="quote">
        {loading ? <span>Loading....</span> : <span>{quote}</span>}
      </div>
      <style>{`
                .quote {
                    font-size: larger;
                    padding: 10px 0px;
                    margin: 10px;
                    text-align: center;
                }
          `}</style>
    </>
  );
};

export default Quote;
