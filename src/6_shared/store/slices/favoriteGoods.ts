import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: {items: number[]} = {
    items: []
}

export const favoriteGoods = createSlice({
    name: 'favorite-goods',
    initialState,
    reducers: {
        addItemFavorite: (state, action: PayloadAction<number>) => {
            state.items.push(action.payload)
        },
        removeItemFavorite: (state, action: PayloadAction<number>) => {
            if(state.items.length === 1){
                state.items = []
                return
            }
            state.items = state.items.filter((item: number) => item === action.payload)
        }
    }
})
export const {addItemFavorite, removeItemFavorite} = favoriteGoods.actions
export default favoriteGoods.reducer