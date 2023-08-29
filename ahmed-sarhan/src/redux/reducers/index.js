import { CART_ACTION_TYPES } from './../actions/cartActions';
import data from '../../data.json'
const INITIAL_STATE = {
    cart: [],
    cartTotal: 0,
    products: data.menu
}
const rootReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.ADD_TO_CART:
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
    case CART_ACTION_TYPES.REMOVE_FROM_CART:
       // Find the index of the item to be deleted
      const itemIndex = state.cart.findIndex((item) => item.name === payload);
      if (itemIndex !== -1) {
        // Get the item and its price
        const deletedItem = state.cart[itemIndex];
        const deletedItemPrice = deletedItem.price * deletedItem.quantity;

        // Create a new cart array without the deleted item
        const updatedCart = state.cart.filter((_, index) => index !== itemIndex);

        return {
          ...state,
          cart: updatedCart,
          cartTotal: state.cartTotal - deletedItemPrice,
        };
      }
      return state;
    
    case CART_ACTION_TYPES.INCREMENT:
      // Find the index of the item to be incremented
      const itemIndex_inc = state.cart.findIndex(item => item.name === payload);
      if(itemIndex_inc !== -1){
        const updatedCart = [...state.cart];
        const targetItem = updatedCart[itemIndex_inc];
        targetItem.quantity += 1;
        console.log(state.cart);
        return {
          ...state,
          cart: updatedCart,
          cartTotal: state.cartTotal + targetItem.price
        };
      }
      return state;

    case CART_ACTION_TYPES.DECREMENT:
        // Find the index of the item to be incremented
        const itemIndex_dec = state.cart.findIndex(item => item.name === payload);
        if(itemIndex_dec !== -1){
          const updatedCart = [...state.cart];
          const targetItem = updatedCart[itemIndex_dec];
          if(targetItem.quantity >= 1){
            targetItem.quantity -= 1;
            return {
              ...state,
              cart: updatedCart,
              cartTotal: state.cartTotal - targetItem.price
            };
          }
        }
        return state;

    default:
      return state;
  }
}

export default rootReducer