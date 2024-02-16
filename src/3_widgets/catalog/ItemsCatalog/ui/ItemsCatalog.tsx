import React from "react";
import {getInitialStateGoods} from "../../../../6_shared/hooks/getInitialStateGoods.ts";
import {useGetAllCatalogQuery} from "../../../../6_shared/api";
import {useAppDispatch} from "../../../../6_shared/store";
import LoaderPage from "../../../general/LoaderPage";
import {IItem} from "../../../../6_shared/types/catalog/items.ts";
import CatalogItem from "../../../../5_entities/catalog/CatalogItem";
import {showMoreItems} from "../../../../6_shared/store/slices/initialGoods.ts";

export const ItemsCatalog: React.FC = () => {
    const dispatch = useAppDispatch()
    const initialStateGoods = getInitialStateGoods()
    const {data: itemsCatalog, isLoading, isError} = useGetAllCatalogQuery(initialStateGoods)

    if(isError) return (
        <div className={'ItemsCatalog'}>
            <div className={'items_error'}>
                <span>Ошибка получения данных</span>
            </div>
        </div>
    )

    return (
        <div className={"ItemsCatalog"}>
            {isLoading && <LoaderPage/>}
            {itemsCatalog && (
                <>
                    <div className={"items"}>
                        {
                            itemsCatalog?.map((item: IItem, index: number) => {
                                return (
                                    <CatalogItem key={index} item={item}/>
                                )
                            })
                        }

                    </div>
                    {
                        !(initialStateGoods.limit > itemsCatalog.length) && (
                            <button onClick={() => dispatch(showMoreItems())}>
                                Show more goods
                            </button>
                        )
                    }
                </>
            )}
        </div>
    )
}