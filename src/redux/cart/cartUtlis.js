export const addItemtoCart = (cartItems, carItemtoAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === carItemtoAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === carItemtoAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1
          }
        : cartItem
    );
  }

  return [...cartItems, { ...carItemtoAdd, quantity: 1 }];
};
