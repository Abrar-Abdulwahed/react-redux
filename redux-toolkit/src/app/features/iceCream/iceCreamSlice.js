import { createSlice } from "@reduxjs/toolkit";
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
    extraReducers:{
        ["cake/order"]: (state) => 
        {
            state.numberOfIcecreams--;
        }
    }
})

export const { order, reFund } = iceCreamSlice.actions
export default iceCreamSlice.reducer