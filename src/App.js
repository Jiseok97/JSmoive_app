import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

// BrowserRouter을 HashRouter 대신 사용이 가능하나,
// github pages에 정확히 설정하기가 까다롭다

function App() {
  return (
    <HashRouter>
      <Navigation />
      {/* Navigation은 Router 안에 있어야 함 */}
      <Route path="/" exact={true} component={Home} />{" "}
      {/* excat=ture는 "/"일 때만 route 시킴*/}
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}

export default App;
