import { createSlice, nanoid } from "@reduxjs/toolkit";
import productData from '../../products.json';

const productsSlice = createSlice({
    name: 'product',
    initialState: {
        data: productData
    },
    reducers: {
        addProduct(state, action) {
            state.data.push({
                name: action.payload.name,
                price: action.payload.price,
                id: nanoid()
            })
        },
        removeProduct(state, action) {
            const updated = state.data.filter((product) => {
                return product.id !== action.payload
            });
            state.data = updated;
        },
        editProduct(state, action) {
            const updated = state.data.map((product) => {
                if(product.id === action.payload.id) {
                    return state.data = action.payload
                }
                return product
            })
            state.data = updated;
        }
    }
});

export const { addProduct, removeProduct, editProduct } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;