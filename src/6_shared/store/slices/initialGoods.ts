import {createSlice} from "@reduxjs/toolkit";
import {IInitialGoods} from "../../types/catalog/items.ts";

const initialState: IInitialGoods = {
    category: '',
    search: '',
    limitItems: 10,
}

export const initialGoods = createSlice({
    name: 'initialGoods',
    initialState,
    reducers: {
        addItems: (state) => {
            state.limitItems = state.limitItems + 10
        },
        changeCategory: (state, action) => {
            state.category = action.payload
        },
        changeSearch: (state, action) => {
            state.search = action.payload
        },
    }
})

export const {addItems, changeSearch, changeCategory} = initialGoods.actions
export default initialGoods.reducer