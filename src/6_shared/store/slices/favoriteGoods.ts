import {createSlice} from "@reduxjs/toolkit";
import {IItem} from "../../types/catalog/items.ts";

const initialState: {items: IItem[]} = {
    items: []
}

export const favoriteGoods = createSlice({
    name: 'favorite-goods',
    initialState,
    reducers: {
        addItemFavorite: (state, action) => {
           let inFavorite = false
           state.items.forEach(item => {
               if(item.id == action.payload.id){
                   inFavorite = true
               }
           })
            if(!inFavorite){
                state.items.push(action.payload)
            }
        },
        deleteItemFavorite: (state, action) => {
            state.items = state.items.filter((item: IItem) => item.id !== action.payload)
        }
    }
})
export const {addItemFavorite, deleteItemFavorite} = favoriteGoods.actions
export default favoriteGoods.reducer