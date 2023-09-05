import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numberOfCakes: 5,
}
const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        order: (state) => state.numberOfCakes--,
        reFund: (state, action) => state.numberOfCakes += action.payload
    }
});

export const { order, reFund } = cakeSlice.actions;
export default cakeSlice.reducer