import React from "react";
import {useGetAllCatalogQuery, useGetAllCategoryQuery} from "../../../../6_shared/api";
import {getInitialStateGoods} from "../../../../6_shared/hooks/getInitialStateGoods.ts";

export const SortCatalog: React.FC = () => {
    const initalGoods = getInitialStateGoods()
    const {data: catalogItems, isError: errorCatalogItems} = useGetAllCatalogQuery(initalGoods)
    const {data: allItemsCategory} = useGetAllCategoryQuery(initalGoods.category)

    if (errorCatalogItems) return (
        <div className={"SortCatalog"}>
            <span>Showing 1-6 of 22 results</span>
        </div>
    )


    return (
        <div className={"SortCatalog"}>
            <span>Показано 1-{catalogItems && catalogItems.length} из {allItemsCategory ? allItemsCategory.length : 0} результатов</span>
        </div>
    )
}