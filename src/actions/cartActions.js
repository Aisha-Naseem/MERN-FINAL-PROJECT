export const addToCart = (pizza, quantity, varient) => (dispatch, getState) => {
  var cartItems = {
    name: pizza.name,
    _id: pizza._id,
    image: pizza.image,
    varient: varient,
    quantity: quantity,
    prices: pizza.prices,
    price: pizza.prices[0][varient] * quantity,
  };

  dispatch({ type: 'ADD_TO_CART', payload: cartItems });
  localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems));
};

export const removeFromCart = (itemId) => (dispatch, getState) => {
  dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems));
};

export const increaseQuantity = (itemId) => (dispatch, getState) => {
  dispatch({ type: 'INCREASE_QUANTITY', payload: itemId });
  localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems));
};

export const decreaseQuantity = (itemId) => (dispatch, getState) => {
  dispatch({ type: 'DECREASE_QUANTITY', payload: itemId });
  localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems));
};
