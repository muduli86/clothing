import React from "react";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../redux/cart/cartActions.js";
import { selectCartItemsCount} from '../redux/cart/cartSelector';

import "../styles/cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, totalItemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{totalItemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state) => ({
  totalItemCount: selectCartItemsCount(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
