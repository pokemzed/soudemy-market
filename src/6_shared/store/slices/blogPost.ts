import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: {postId: string} = {
    postId: ''
}

const blogPost = createSlice({
    name: 'blogPost',
    initialState,
    reducers: {
        changePostId: (state, action: PayloadAction<string>) => {
            state.postId = action.payload
        },
        resetPostId: (state) => {
            state.postId = ''
        }
    }
})
export const {changePostId, resetPostId} = blogPost.actions
export default blogPost.reducer