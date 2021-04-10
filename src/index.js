import React from "react";
import ReactDOM from "react-dom";

const name = "Sly";
const luckyNumber = Math.floor(Math.random() * 21) + 1;

const paragraph = "Your Lucky number is " + luckyNumber;

//ReactDOM.render(<h1>Hello {name}!</h1>, document.getElementById("root"));

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>{paragraph}.</p>
  </div>,
  document.getElementById("root")
);
