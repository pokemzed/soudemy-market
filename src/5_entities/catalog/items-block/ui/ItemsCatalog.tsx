import React from "react";
import {IItem} from "../../../../6_shared/types/catalog/items.ts";
import CatalogItem from "../../../../4_features/catalog/CatalogItem";
import {getInitialStateGoods} from "../../../../6_shared/hooks/getInitialStateGoods.ts";
import {useGetAllCatalogQuery} from "../../../../6_shared/api";


export const ItemsCatalog: React.FC = () => {
    const initialStateGoods = getInitialStateGoods()
    const {data: itemsCatalog} = useGetAllCatalogQuery(initialStateGoods)

    return (
        <div className={'ItemsCatalog'}>
            {
                itemsCatalog?.map((item: IItem, index: number) => {
                    return (
                        <CatalogItem key={index} item={item}/>
                    )
                })
            }
        </div>
    )
}