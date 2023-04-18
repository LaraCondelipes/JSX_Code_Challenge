//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
ReactDOM.render(
  <div>
    <h1>My favourite food</h1>
    <ul>
      <li>arroz de pato</li>
      <li>bacalhau com grão</li>
      <li>sopas de pão</li>
    </ul>
  </div>,
  document.getElementById("root")
);
