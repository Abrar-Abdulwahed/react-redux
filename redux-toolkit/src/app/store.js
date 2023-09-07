import { configureStore } from "@reduxjs/toolkit";
import cakeReducer, { order, reFund } from "./features/cake/cakeSlice";
import iceCreamReducer from "./features/iceCream/iceCreamSlice";
// import logging from "redux-logger";
// const logger = logging.createLogger();
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: iceCreamReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware.concat(logger)
})
console.log('initial state: ', store.getState());

const unsubscribe = store.subscribe(()=>{
    console.log('updated', store.getState());
});

store.dispatch(order());
store.dispatch(order());
store.dispatch(reFund(3));
unsubscribe();
export default store;