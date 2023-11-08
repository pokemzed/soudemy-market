import {createSlice} from "@reduxjs/toolkit";
import {IItem, ICartItem} from "../../types/catalog/items.ts";

const initialState: {cartItems: ICartItem[], total: number} = {
    cartItems: [],
    total: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemCart: (state, action: {payload: IItem | undefined, type: string}) => {
            const itemInCart: ICartItem | undefined = state.cartItems.find((item: ICartItem) => item.id == action.payload?.id)
            if(itemInCart && itemInCart.count >= 0){
                itemInCart.count += 1
                state.total += action.payload!.price
            } else {
                state.cartItems.push({...action.payload!, count: 1})
                state.total += action.payload!.price
            }
        },
        removeItemCart: (state, action: {payload: IItem | undefined, type: string}) => {
            const itemInCart: ICartItem | undefined = state.cartItems.find((item: ICartItem) => item.id == action.payload?.id)
            if(itemInCart && itemInCart.count > 1){
                itemInCart.count -= 1
                state.total -= action.payload!.price
            } else {
                state.cartItems = state.cartItems.filter((item: ICartItem) => item.id !== action.payload?.id)
                state.total = state.total - action.payload!.price
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