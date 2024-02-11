import {createSlice} from "@reduxjs/toolkit";
import {ICartItem} from "../../types/catalog/items.ts";

const initialState: {cartItems: ICartItem[], total: number} = {
    cartItems: [],
    total: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemCart: (state, action: {payload: {id: number, price: number}, type: string}) => {
            // Находим товар в корзине
            const itemInCart: ICartItem | undefined = state.cartItems.find((item: ICartItem) => item.id === action.payload.id)
            // Проверяем условия
            if(itemInCart){
                itemInCart.count += 1
                state.total += action.payload.price
                return
            }
            if(!itemInCart) {
                state.cartItems = [{...action.payload, count: 1}, ...state.cartItems]
                state.total += action.payload.price
                return;
            }
        },
        removeItemCart: (state, action: {payload: {id: number, price: number}, type: string}) => {
            // Находим товар в корзине
            const itemInCart: ICartItem | undefined = state.cartItems.find((item: ICartItem) => item.id === action.payload.id)
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