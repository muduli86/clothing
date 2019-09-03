import React from "react";
import { connect } from "react-redux";
import CustomButton from "./CustomButton";
import CartItem from "./CartItem";
import "../styles/cart-dropdown.styles.scss";
import { selectCartItems } from '../redux/cart/cartSelector';
import { createStructuredSelector } from "reselect";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>

    <CustomButton> GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
