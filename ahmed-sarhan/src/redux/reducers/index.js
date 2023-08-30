
import { combineReducers } from 'redux';
import recipesReducer from './recipes.reducer';
import menuReducer from './menu.reducer';

export const rootReducer = combineReducers({
    menu: menuReducer,
    blog: recipesReducer,
})

