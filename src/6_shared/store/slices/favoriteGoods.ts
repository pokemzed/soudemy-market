import {createSlice} from "@reduxjs/toolkit";

const initialState: {items: number[]} = {
    items: []
}

export const favoriteGoods = createSlice({
    name: 'favorite-goods',
    initialState,
    reducers: {
        addItemFavorite: (state, action: {payload: number}) => {
            state.items.push(action.payload)
        },
        deleteItemFavorite: (state, action: {payload: number}) => {
            state.items = state.items.filter((item: number) => item === action.payload)
        }
    }
})
export const {addItemFavorite, deleteItemFavorite} = favoriteGoods.actions
export default favoriteGoods.reducer