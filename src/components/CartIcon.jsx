import React from "react";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../redux/cart/cartActions.js";

import "../styles/cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden,cartItems }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{cartItems.length}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = ({ cart: { cartItems } }) => ({  
  cartItems
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
