import React from "react";
import {useAppDispatch} from "../../../../6_shared/store";
import {removeItemCart} from "../../../../6_shared/store/slices/cartSlice.ts";

interface IItemForCart {
    item: {
        id: number,
        price: number,
        count: number
    }
}

export const RemoveToCart: React.FC<IItemForCart> = ({item}) => {
    const dispatch = useAppDispatch()
    const itemForCart = {id: item.id, price: item.price}

    const handleRemoveItemCart = () => {
        if(item.count <= 1 && confirm('Вы действительно хотите удалить товар из корзины?')){
            dispatch(removeItemCart(itemForCart))
        }
        if(item.count > 1){
            dispatch(removeItemCart(itemForCart))
        }
    }

    return (
        <div onClick={handleRemoveItemCart} className={"RemoveToCartFeatures"}>
            <span>-</span>
        </div>
    )
}