import { createSlice } from "@reduxjs/toolkit";
import { order } from "../cake/cakeSlice"
const initialState = {
    numberOfIcecreams: 20,
}
const iceCreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        order: (state) => 
        {
            state.numberOfIcecreams--;
        },
        reFund: (state, action) => 
        {
            state.numberOfIcecreams += action.payload;
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