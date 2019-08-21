import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "../styles/homepage.styles.scss";
import Directory from "./Directory";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <Directory />
      </div>
    );
  }
}

export default Homepage;
