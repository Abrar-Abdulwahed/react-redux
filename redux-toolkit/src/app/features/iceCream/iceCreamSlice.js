import { createSlice } from "@reduxjs/toolkit";
import { order } from "../cake/cakeSlice"
const initialState = {
    numberOfIcecreams: 20,
}
const iceCreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        //directly modify the state object by using the draft parameter.
        order: (state) => {
            state.numberOfIcecreams--;
        },
        //returning a new value instead of modifying the draft state directly
        reFund: (state, action) => {
            return {
                ...state,
                numberOfIcecreams: state.numberOfIcecreams + action.payload
            };
        }
    },
    //map object notation
    // extraReducers:{
    //     "cake/reFund": (state) => 
    //     {
    //         state.numberOfIcecreams--;
    //     }
    // },

    //builder callback notation(recommended)
    extraReducers: (builder) => {
        builder.addCase(order, state => {
            state.numberOfIcecreams -= 2;
        });
    }
})

export const cakeActions = iceCreamSlice.actions
export default iceCreamSlice.reducer