import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { Product } from './products.slice'



const activeCardSlice = createSlice({
    name: "activeCard",
    initialState: [] as Product[],
    reducers: {
        addAvtiveCard: (state, action: PayloadAction<Product>) => {
            state.findIndex(product => product.id === action.payload.id)
            return [action.payload,...state]
        },
    },
})

export const getActiveProductSelector = (state: RootState) => state.activeCard
export const { addAvtiveCard } = activeCardSlice.actions
export default activeCardSlice.reducer