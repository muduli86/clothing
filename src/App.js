import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import Shop from './components/Shop'
import Header from './components/Header';
import Contact from './components/Contact.jsx'

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
