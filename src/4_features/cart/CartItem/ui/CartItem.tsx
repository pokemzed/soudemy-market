import React from "react";
import {ICartItem} from "../../../../6_shared/types/catalog/items.ts";
import {useDispatch} from "react-redux";
import {addItemCart, removeItemCart} from "../../../../6_shared/store/slices/cartSlice.ts";

interface ICartItemProps{
    itemInfo: ICartItem
}

export const CartItem: React.FC<ICartItemProps> = ({itemInfo}) => {
    const dispatch = useDispatch()
    const handleAddItemCart = (): void => {
        dispatch(addItemCart(itemInfo))
    }
    //Удаление из корзины
    const handleRemoveItemCart = (): void => {
        if(itemInfo.count <= 1 && confirm('Вы действительно хотите удалить товар из корзины?')){
            dispatch(removeItemCart(itemInfo))
        }
        if(itemInfo.count > 1){
            dispatch(removeItemCart(itemInfo))
        }
    }
    return (
        <div className={"CartItem"}>
            <div className={"cart-item-left"}>
                <img src={itemInfo.imgMain} alt=""/>
                <div className={"cart-item-left_text"}>
                    <h1>{itemInfo.info.title}</h1>
                    <span>{itemInfo.info.title}</span>
                </div>
            </div>
            <div className={"cart-item-right"}>
                <h3>{itemInfo.price * itemInfo.count}</h3>
                <div className={"cart-item-right_counter"}>
                    <div onClick={handleRemoveItemCart} className={"counter-minus"}>
                        <span>-</span>
                    </div>
                    <span>{itemInfo.count}</span>
                    <div onClick={handleAddItemCart} className={"counter-plus"}>
                        <span>+</span>
                    </div>
                </div>
            </div>
        </div>
    )
}