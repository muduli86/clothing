import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import Shop from './components/Shop'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
