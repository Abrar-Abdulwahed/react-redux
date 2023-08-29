import { CART_ACTION_TYPES } from './../actions/cartActions';
import products from '../../data.json'
const INITIAL_STATE = {
    cart: [],
    cartTotal: 0,
    products
}
const rootReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  if(type === CART_ACTION_TYPES.ADD_TO_CART){
    // Check if the product already exists in the cart
    const existingProductIndex = state.cart.findIndex(
      (item) => item.name === payload.name
    );

    if (existingProductIndex !== -1) {
      // Product already exists in the cart
      const updatedCart = [...state.cart];
      const existingProduct = updatedCart[existingProductIndex];

      // Increase the quantity of the existing product
      existingProduct.quantity += 1;

      return {
        ...state,
        cart: updatedCart,
        cartTotal: state.cartTotal + payload.price,
      };
    } else {
      // Product is not in the cart, add it as a new item
      const newProduct = {
        ...payload,
        quantity: 1,
      };

      return {
        ...state,
        cart: state.cart.concat(newProduct),
        cartTotal: state.cartTotal + payload.price,
      };
    }
  }
  return {
    ...state,
  }
}

export default rootReducer