import React, { Component } from "react";
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
