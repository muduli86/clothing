import { actionTypes } from "../types";
import { addItemtoCart} from './cartUtlis';

const INITIAL_STATE = {
  hidden: true,
  cartItems:[]
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case actionTypes.ADD_ITEM:
        return{
            ...state,
            cartItems:addItemtoCart(state.cartItems, action.payload)
        }
    default:
      return state;
  }
};

export default cartReducer;
