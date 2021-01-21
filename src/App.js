import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
  return (
    <HashRouter>
      <Route path="/">
        <h1>Home</h1>
      </Route>
      <Route paht="/about">
        <h1>About</h1>
      </Route>
    </HashRouter>
  );
}

export default App;
