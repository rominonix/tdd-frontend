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
    imageSrc:any,
    description:string
}

const initialState:Product[] = [
    {
        name: "Hortensia",
        price: 123,
        id: "001",
        imageSrc: Hortensia,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum ut dignissim pellentesque ut amet. Ipsum donec enim arcu, tempus aenean non nisl. Egestas aenean sapien cum mi et at venenatis. Ac nascetur proin metus, tellus arcu mattis platea vitae. At ultricies sagittis cursus malesuada enim sed vivamus morbi id. Proin amet, amet, sed tortor."
    },
    {
        name: "Bamboo",
        price: 113,
        id: "002",
        imageSrc: bamboo,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum ut dignissim pellentesque ut amet. Ipsum donec enim arcu, tempus aenean non nisl. Egestas aenean sapien cum mi et at venenatis. Ac nascetur proin metus, tellus arcu mattis platea vitae. At ultricies sagittis cursus malesuada enim sed vivamus morbi id. Proin amet, amet, sed tortor."
    },
    {
        name: "Monstera",
        price: 103,
        id: "003",
        imageSrc: Monstera,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum ut dignissim pellentesque ut amet. Ipsum donec enim arcu, tempus aenean non nisl. Egestas aenean sapien cum mi et at venenatis. Ac nascetur proin metus, tellus arcu mattis platea vitae. At ultricies sagittis cursus malesuada enim sed vivamus morbi id. Proin amet, amet, sed tortor."
    },
    {
        name: "Orchid",
        price: 163,
        id: "004",
        imageSrc: orchid,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum ut dignissim pellentesque ut amet. Ipsum donec enim arcu, tempus aenean non nisl. Egestas aenean sapien cum mi et at venenatis. Ac nascetur proin metus, tellus arcu mattis platea vitae. At ultricies sagittis cursus malesuada enim sed vivamus morbi id. Proin amet, amet, sed tortor."
    },
    {
        name: "Snake-plant",
        price: 153,
        id: "005",
        imageSrc: snakePlant,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum ut dignissim pellentesque ut amet. Ipsum donec enim arcu, tempus aenean non nisl. Egestas aenean sapien cum mi et at venenatis. Ac nascetur proin metus, tellus arcu mattis platea vitae. At ultricies sagittis cursus malesuada enim sed vivamus morbi id. Proin amet, amet, sed tortor."
    },
    {
        name: "Yaopon",
        price: 123,
        id: "006",
        imageSrc: yaopon,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum ut dignissim pellentesque ut amet. Ipsum donec enim arcu, tempus aenean non nisl. Egestas aenean sapien cum mi et at venenatis. Ac nascetur proin metus, tellus arcu mattis platea vitae. At ultricies sagittis cursus malesuada enim sed vivamus morbi id. Proin amet, amet, sed tortor."
    },
]

const productSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        addProduct:(state,action:PayloadAction<Product>)=>{
            return [action.payload,...state]
        },
        getActiveProduct:(state,action:PayloadAction<string>)=>{
            return state.filter(product=>product.id===action.payload)
        }
    }
})


export const {addProduct}= productSlice.actions
export const getProductsSelector=(state:RootState)=>state.products
export const {getActiveProduct} =productSlice.actions

export default productSlice.reducer


