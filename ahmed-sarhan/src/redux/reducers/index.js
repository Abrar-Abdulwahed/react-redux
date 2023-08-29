import { CART_ACTION_TYPES } from './../actions/cartActions';
const INITIAL_STATE = {
    cart: [],
    cartTotal: 0,
    products: [],
}
const rootReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  if(type === CART_ACTION_TYPES.ADD_TO_CART){
    return {
      ...state,
      cart: state.cart.concat(payload),
      cartTotal: state.cartTotal + payload.price,
    }
  }
  return {
    ...state,
  }
}

export default rootReducer