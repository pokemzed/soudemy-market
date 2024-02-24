import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface IInitialStatePosts{
    search: string,
    category: string,
    limitOrder: number
    page: number
}
const initialState: IInitialStatePosts = {
    search: '',
    category: '',
    limitOrder: 2,
    page: 1
}

export const initialPosts = createSlice({
    name: 'initial-posts',
    initialState,
    reducers: {
        changeCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload
            state.page = 1
        },
        changeSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
            state.page = 1
        },
        changePage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        resetInitialPosts: (state) => {
            state.page = 1
            state.search = ''
            state.category = ''
        }
    }
})
export const {changeCategory, changeSearch, changePage, resetInitialPosts} = initialPosts.actions
export default initialPosts.reducer