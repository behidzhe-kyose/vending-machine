import { createSlice } from "@reduxjs/toolkit";

const coinsSlice = createSlice({
    name: 'coins',
    initialState: {
        total: 0
    },
    reducers: {
        addCoin(state, action) {
            state.total += action.payload
        },
        resetCoins(state, action) {
            state.total = 0
        }
    }
});

export const { addCoin, resetCoins } = coinsSlice.actions;
export const coinsReducer = coinsSlice.reducer;