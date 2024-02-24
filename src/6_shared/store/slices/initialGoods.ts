import {createSlice} from "@reduxjs/toolkit";
import {IInitialGoods} from "../../types/catalog/items.ts";

const initialState: IInitialGoods = {
    category: '',
    search: '',
    limitItems: 6,
}

export const initialGoods = createSlice({
    name: 'initialGoods',
    initialState,
    reducers: {
        showMoreItems: (state) => {
            state.limitItems = state.limitItems + 3
        },
        changeCategory: (state, action) => {
            state.limitItems = 6
            state.category = action.payload
        },
        changeSearch: (state, action) => {
            state.limitItems = 6
            state.search = action.payload
        },
        resetInitialGoods: (state) => {
            state.limitItems = 6
            state.search = ''
            state.category = ''
        }
    }
})

export const {showMoreItems, changeSearch, changeCategory, resetInitialGoods} = initialGoods.actions
export default initialGoods.reducer