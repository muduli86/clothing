import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";

const Hats = () => (
  <div>
    <Link exact to="/">Home</Link>
    <h1>Hats</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
