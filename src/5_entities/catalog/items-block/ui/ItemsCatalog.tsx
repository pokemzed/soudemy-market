import React from "react";
import {IItem} from "../../../../6_shared/types/catalog/items.ts";
import CatalogItem from "../../../../4_features/catalog/CatalogItem";
import {getInitialStateGoods} from "../../../../6_shared/hooks/getInitialStateGoods.ts";
import {useGetAllCatalogQuery} from "../../../../6_shared/api";
import {useDispatch} from "react-redux";
import {addItems} from "../../../../6_shared/store/slices/initialGoods.ts";
import SkeletonItemCatalog from "../../../../4_features/skeleton/SkeletonItemCatalog.tsx";


export const ItemsCatalog: React.FC = () => {
    const dispatch = useDispatch()
    const initialStateGoods = getInitialStateGoods()
    const {data: itemsCatalog, isLoading} = useGetAllCatalogQuery(initialStateGoods)

    return (
        <div className={'ItemsCatalog'}>
            <div className={"items"}>
                {
                    isLoading && [...Array(6)].map((_, index) => <SkeletonItemCatalog key={index}/>)
                }
                {
                    itemsCatalog?.map((item: IItem, index: number) => {
                        return (
                            <CatalogItem key={index} item={item}/>
                        )
                    })
                }
            </div>
            {
                itemsCatalog && !(initialStateGoods.limit > itemsCatalog.length) && (
                    <button onClick={() => dispatch(addItems())}>
                        Show +3 goods
                    </button>
                )
            }
        </div>
    )
}