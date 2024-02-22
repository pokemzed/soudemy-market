import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface IInitialStatePosts{
    search: string,
    category: string,
    limitOrder: number
}
const initialState: IInitialStatePosts = {
    search: '',
    category: '',
    limitOrder: 3
}

export const initialPosts = createSlice({
    name: 'initial-posts',
    initialState,
    reducers: {
        changeCategory: (state, action: PayloadAction<string>) => {
            state.limitOrder = 3
            state.category = action.payload
        },
        changeSearch: (state, action: PayloadAction<string>) => {
            state.limitOrder = 3
            state.search = action.payload
        }
    }
})
export const {changeCategory, changeSearch} = initialPosts.actions
export default initialPosts.reducer