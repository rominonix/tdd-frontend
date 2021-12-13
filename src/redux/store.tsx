
import { configureStore } from "@reduxjs/toolkit";

import products from './slice/products.slice'
import cart from './slice/cart.slice'
import activeCard from './slice/activeProduct.slice'
const store = configureStore({
    reducer: {
        products,
        cart,
        activeCard
    }
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch


export default store