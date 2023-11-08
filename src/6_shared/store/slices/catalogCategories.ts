import {createSlice} from "@reduxjs/toolkit";

interface ICategories {
    categoryName: string,
    value: string
}

const initialState: ICategories[] = [
    {
        categoryName: 'All',
        value: ''
    },
    {
        categoryName: 'Sofa',
        value: 'sofa'
    },
    {
        categoryName: 'Table',
        value: 'table'
    },
    {
        categoryName: 'Closet',
        value: 'closet'
    },
    {
        categoryName: 'Chair',
        value: 'chair'
    },
    {
        categoryName: 'Armchair',
        value: 'armchair'
    },
]

export const catalogCategories = createSlice({
    name: 'catalogCategories',
    initialState,
    reducers: {
        createCategory: (state, action) => {
            [...state, action.payload]
        },
        deleteCategory: (state, action) => {
            state.filter((category) => category.value !== action.payload)
        }
    }
})

export const {createCategory, deleteCategory} = catalogCategories.actions
export default catalogCategories.reducer