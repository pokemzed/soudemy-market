import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICartItem} from "../../types/catalog/items.ts";

const initialState: {cartItems: ICartItem[], total: number} = {
    cartItems: [],
    total: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemCart: (state, action: PayloadAction<{id: number, price: number}>) => {
            // Находим товар
            const itemInCart = state.cartItems.find(item => item.id === action.payload.id)
            if(itemInCart){
                itemInCart.count += 1
                state.total += itemInCart.price
                return
            }
            if(!itemInCart){
                state.cartItems = [{...action.payload, count: 1}, ...state.cartItems]
                state.total += action.payload.price
            }
        },
        removeItemCart: (state, action: PayloadAction<{id: number, price: number}>) => {
            // Находим товар
            const itemInCart = state.cartItems.find(item => item.id === action.payload.id)
            // Проверяем условия
            if(itemInCart && itemInCart.count > 1){
                itemInCart.count -= 1
                state.total -= action.payload.price
                return
            }
            if(itemInCart && itemInCart.count === 1){
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
                state.total -= action.payload.price
            }
        },
        clearItemsCart: (state) => {
            state.cartItems = []
            state.total = 0
        }
    }
})
export const {addItemCart, removeItemCart, clearItemsCart} = cartSlice.actions
export default cartSlice.reducer