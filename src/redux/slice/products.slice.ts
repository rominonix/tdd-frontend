import { createSlice ,PayloadAction} from "@reduxjs/toolkit";
import bamboo from '../../images/bamboo.png'
import Hortensia from '../../images/Hortensia.png'
import Monstera from '../../images/Monstera.png'
import orchid from '../../images/orchid.png'
import snakePlant from '../../images/snake-plant.png'
import yaopon from '../../images/yaopon.png'
import { RootState } from "../store";



export interface Product {
    name:string,
    price:number,
    id:string,
    imageSrc:any
}

const initialState:Product[] = [
    {
        name: "Hortensia",
        price: 123,
        id: "001",
        imageSrc: Hortensia
    },
    {
        name: "Bamboo",
        price: 113,
        id: "002",
        imageSrc: bamboo
    },
    {
        name: "Monstera",
        price: 103,
        id: "003",
        imageSrc: Monstera
    },
    {
        name: "Orchid",
        price: 163,
        id: "004",
        imageSrc: orchid
    },
    {
        name: "Snake-plant",
        price: 153,
        id: "005",
        imageSrc: snakePlant
    },
    {
        name: "Yaopon",
        price: 123,
        id: "006",
        imageSrc: yaopon
    },
]

const productSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        addProduct:(state,action:PayloadAction<Product>)=>{
            return [action.payload,...state]
        }
    }
})


export const {addProduct}= productSlice.actions
export const getProductsSelector=(state:RootState)=>state.products
export default productSlice.reducer