import React, {ReactNode} from "react";
import {ICartItem} from "../../../../6_shared/types/catalog/items.ts";
import {useGetItemCatalogQuery} from "../../../../6_shared/api";
import LoaderPage from "../../../../3_widgets/general/LoaderPage";

interface ICartItemProps{
    itemInfo: ICartItem,
    addCart: ReactNode,
    removeCart: ReactNode
}

export const CartItem: React.FC<ICartItemProps> = ({itemInfo, removeCart, addCart}) => {
    const {data: item} = useGetItemCatalogQuery(itemInfo.id)

    if(!item) return (<LoaderPage/>)

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
                    {removeCart}
                    <span>{itemInfo.count}</span>
                    {addCart}
                </div>
            </div>
        </div>
    )
}