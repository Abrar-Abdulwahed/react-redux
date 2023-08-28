const INITIAL_STATE = {
    cart: [],
    cartTotal: 0,
    products: [],
}
const rootReducer = (state = INITIAL_STATE, action) => {
  return {
    ...state,
  }
}

export default rootReducer