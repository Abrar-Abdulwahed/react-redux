import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/iceCream/iceCreamSlice";
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: iceCreamReducer,
    }
})

export default store;