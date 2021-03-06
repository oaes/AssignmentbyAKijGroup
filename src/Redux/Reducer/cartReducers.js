const { ADD_TO_CART, REMOVE_FROM_CART } = require("../Action/CartAction");

const initialState = {
  cart: [],
  products: [
    {
      name: "samsung",
      id: 1,
    },
    {
      name: "samsung-s10",
      id: 2,
    },
    {
      name: "Iphone-X",
      id: 3,
    },
    {
      name: "RealMe-7",
      id: 4,
    },
    {
      name: "Infinix hot9",
      id: 5,
    },
    {
      name: "OnePlus7",
      id: 6,
    },
    {
      name: "Nokia N-70",
      id: 7,
    },
    {
      name: "Walton Primo9",
      id: 8,
    },
  ],
};
const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = {
        productId: action.id,
        name: action.name,
        cartId: state.cart.length + 1,
      };
      const newCart = [...state.cart, newItem];
      return {
        ...state,
        cart: newCart,
      };
    case REMOVE_FROM_CART:
      const id = action.id;
      const remainingCart = state.cart.filter((item) => item.cartId !== id);
      return {
        ...state,
        cart: remainingCart,
      };
    default:
      return state;
  }
};

export default cartReducers;
