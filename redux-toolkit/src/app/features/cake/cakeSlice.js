import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numberOfCakes: 20,
}
const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        //directly modify the state object by using the draft parameter.
        order: (state) => {
            state.numberOfCakes--;
        },
        //returning a new value instead of modifying the draft state directly
        reFund: (state, action) => {
            return {
                ...state,
                numberOfCakes: state.numberOfCakes + action.payload
            };
        }
    },
});

export const { order, reFund } = cakeSlice.actions;
export default cakeSlice.reducer