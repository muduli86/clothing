import React, { Component } from "react";
import "../styles/directory.styles.scss";
// import sections from "../data/directory.data";

import MenuItem from "./MenuItem";

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          id: 1,
          linkUrl: "shop/hats"
        },
        {
          title: "jackets",
          imageUrl: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          id: 2,
          linkUrl: "shop/jackets"
        },
        {
          title: "sneakers",
          imageUrl: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          id: 3,
          linkUrl: "shop/sneakers"
        },
        {
          title: "womens",
          imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          size: "large",
          id: 4,
          linkUrl: "shop/womens"
        },
        {
          title: "mens",
          imageUrl: "https://images.unsplash.com/photo-1497361727480-725cf2c9427d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          size: "large",
          id: 5,
          linkUrl: "shop/mens"
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(section => (
          <MenuItem
            key={section.id}
            title={section.title}
            imageUrl={section.imageUrl}
            size={section.size}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
