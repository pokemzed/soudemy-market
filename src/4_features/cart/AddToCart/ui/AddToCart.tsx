import React from "react";
import {useAppDispatch} from "../../../../6_shared/store";
import {addItemCart} from "../../../../6_shared/store/slices/cartSlice.ts";
import {ICartItem} from "../../../../6_shared/types/catalog/items.ts";
export const AddToCart: React.FC<{ item: ICartItem }> = ({item}) => {
    const dispatch = useAppDispatch()
    const itemForCart = {id: item.id, price: item.price}

    const handleAddItemCart = () => {
        dispatch(addItemCart(itemForCart))
    }
    return (
        <div onClick={handleAddItemCart} className={"AddToCartFeatures"}>
            <span>+</span>
        </div>
    )
}