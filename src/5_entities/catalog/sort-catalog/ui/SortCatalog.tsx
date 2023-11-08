import React from "react";
import {useGetAllCatalogQuery} from "../../../../6_shared/api";
import {getInitialStateGoods} from "../../../../6_shared/hooks/getInitialStateGoods.ts";

export const SortCatalog: React.FC = () => {
    const initalGoods = getInitialStateGoods()
    const {data: catalogItems, isError: errorCatalogItems} = useGetAllCatalogQuery(initalGoods)

    if (errorCatalogItems) {
        return <h5 style={{color: 'red'}}>Error catalog</h5>
    }
    return (
        <div className={"SortCatalog"}>
            <span>Showing 1-{catalogItems && catalogItems.length} of {catalogItems && catalogItems.length} results</span>
            <select>
                <option></option>
            </select>
        </div>
    )
}