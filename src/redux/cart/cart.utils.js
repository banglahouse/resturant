export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.itemid === cartItemToAdd.itemid
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.itemid === cartItemToAdd.itemid
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.itemid === cartItemToRemove.itemid
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.itemid !== cartItemToRemove.itemid);
  }
  return cartItems.map((cartItem) =>
    cartItem.itemid === cartItemToRemove.itemid
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
