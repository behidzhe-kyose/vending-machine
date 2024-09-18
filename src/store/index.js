import { configureStore } from "@reduxjs/toolkit";
import { productsReducer, addProduct, removeProduct, editProduct } from "./slices/productSlice";
import { formReducer, changeName, changePrice } from "./slices/formSlice";
import { coinsReducer, addCoin, resetCoins } from "./slices/coinsSlice";

const store = configureStore({
    reducer: {
        products: productsReducer,
        form: formReducer,
        coins: coinsReducer
    }
})

export { store, addProduct, removeProduct, editProduct, changeName, changePrice, addCoin, resetCoins}