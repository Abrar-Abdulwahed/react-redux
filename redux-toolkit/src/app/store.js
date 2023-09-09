import { configureStore } from "@reduxjs/toolkit";
import cakeReducer, { order, reFund } from "./features/cake/cakeSlice";
import iceCreamReducer from "./features/iceCream/iceCreamSlice";
import userReducer, { fetchUsers } from "./features/user/userSlice";
// import logging from "redux-logger";
// const logger = logging.createLogger();
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: iceCreamReducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware.concat(logger)
})
console.log('initial state: ', store.getState());

const unsubscribe = store.subscribe(()=>{
    console.log('updated', store.getState());
});

// store.dispatch(order());
// store.dispatch(order());
// store.dispatch(reFund(3));
store.dispatch(fetchUsers());
store.dispatch(fetchUsers());
unsubscribe();
export default store;