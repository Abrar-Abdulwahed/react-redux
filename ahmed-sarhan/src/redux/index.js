import { combineReducers, createStore } from "redux";
import recipesReducer from "./reducers/recipes.reducer";
import menuReducer from "./reducers/menu.reducer";

const rootReducer = combineReducers({
    menu: menuReducer,
    blog: recipesReducer,
})
export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);