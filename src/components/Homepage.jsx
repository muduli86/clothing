import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/homepage.styles.scss";
import Directory from "./Directory";

class Homepage extends Component {
  render() {
    return (
      <div>
      <Link exact to="/hats">Hats</Link>
      <div className="homepage">
        <Directory />
      </div>
      </div>
    );
  }
}

export default Homepage;
