import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import "./styles.css";
ReactDom.render(
  <div>
    <h1>
      <App />
    </h1>
  </div>,
  document.getElementById("root")
);
