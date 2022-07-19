import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style>{`
      :root {
		--astro-gradient: linear-gradient(0deg, #4f39fa, #da62c4);
	}
            button {
                background-image: var(--astro-gradient);
                color: white;
                font-weight: 800;
                font-size: large;
                padding: 15px 20px;
                cursor: pointer;
	}
            }
          `}</style>
    </>
  );
};

export default Button;
