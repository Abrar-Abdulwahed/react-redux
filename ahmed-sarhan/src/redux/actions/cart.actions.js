export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
}
export const addToCartAction = (product) => {
    return { type: CART_ACTION_TYPES.ADD_TO_CART, payload: product,}
}

export const removeFromCartAction= (productName) => {
    return { type: CART_ACTION_TYPES.REMOVE_FROM_CART, payload: productName,}
}

export const incrementQuantity = (productName) => {
    return { type: CART_ACTION_TYPES.INCREMENT, payload: productName}
}

export const decrementQuantity = (productName) => {
    return { type: CART_ACTION_TYPES.DECREMENT, payload: productName}
}