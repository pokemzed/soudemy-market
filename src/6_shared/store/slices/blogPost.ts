import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: {postId: number} = {
    postId: 0
}

const blogPost = createSlice({
    name: 'blogPost',
    initialState,
    reducers: {
        changePostId: (state, action: PayloadAction<number>) => {
            state.postId = action.payload
        },
        resetPostId: (state) => {
            state.postId = 0
        }
    }
})
export const {changePostId, resetPostId} = blogPost.actions
export default blogPost.reducer