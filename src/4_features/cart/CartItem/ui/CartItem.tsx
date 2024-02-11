import React from "react";
import {ICartItem} from "../../../../6_shared/types/catalog/items.ts";
import {addItemCart, removeItemCart} from "../../../../6_shared/store/slices/cartSlice.ts";
import {useAppDispatch} from "../../../../6_shared/store";
import {useGetItemCatalogQuery} from "../../../../6_shared/api";

interface ICartItemProps{
    itemInfo: ICartItem
}

export const CartItem: React.FC<ICartItemProps> = ({itemInfo}) => {
    const dispatch = useAppDispatch()
    const {data: item} = useGetItemCatalogQuery(itemInfo.id)

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

    if(!item){
        return <h4>item error</h4>
    }

    return (
        <div className={"CartItem"}>
            <div className={"cart-item-left"}>
                <img src={item[0].imgMain} alt=""/>
                <div className={"cart-item-left_text"}>
                    <h1>{item[0].info.title}</h1>
                    <span>{item[0].info.title}</span>
                </div>
            </div>
            <div className={"cart-item-right"}>
                <h3>{(item[0].price * itemInfo.count).toLocaleString()} ₽</h3>
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