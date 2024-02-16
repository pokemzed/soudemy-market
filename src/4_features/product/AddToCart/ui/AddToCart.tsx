import React from "react";
import {ICartItem, IItem} from "../../../../6_shared/types/catalog/items.ts";
import {useAppDispatch, useAppSelector} from "../../../../6_shared/store";
import {useParams} from "react-router-dom";
import {addItemCart, removeItemCart} from "../../../../6_shared/store/slices/cartSlice.ts";

export const AddToCart: React.FC<{ item: IItem}> = ({ item}) => {
    const dispatch = useAppDispatch()
    const itemForCart = {id: item.id, price: item.price}
    const {id: itemId} = useParams()
    // Получение товаров корзины
    const {cartItems} = useAppSelector(state => state.cart)
    // Проверка товара на нахождение в корзине
    const itemInCart = !!cartItems.find((item: ICartItem) => item.id === Number(itemId))

    // Ручки управления
    const handleRemoveItemCart = () => {
        dispatch(removeItemCart(itemForCart))
    }
    const handleAddItemCart = () => {
        dispatch(addItemCart(itemForCart))
    }

    return (
        <button onClick={itemInCart ? handleRemoveItemCart : handleAddItemCart}
                className={`AddToCartButton ${itemInCart && 'active-cart'}`}>
            {itemInCart ? 'Item in cart. Delete?' : 'Add to cart'}
        </button>
    )
}