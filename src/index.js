import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// react는 하나의 component만을 rendering
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
