import React from "react";
import {Helmet} from "react-helmet";
import ItemCatalogInside from "../../../../5_entities/product/ItemCatalog";
import {useParams} from "react-router-dom";
import {useGetItemCatalogQuery} from "../../../../6_shared/api";
import LoaderPage from "../../../../6_shared/ui/LoaderPage";
import AddToFavourite from "../../../../4_features/product/AddToFavourite";
import AddToCart from "../../../../4_features/product/AddToCart";

export const ItemInfoBlock: React.FC = () => {
    const {id: itemId} = useParams()
    const {data: itemInfo, isError: itemError, isLoading} = useGetItemCatalogQuery(itemId)

    if(isLoading) return (
        <div className={"loading-product"}>
            <LoaderPage/>
        </div>
    )
    if (itemError) return <LoaderPage/>

    return itemInfo && (
        <>
        <Helmet>
                <meta charSet="utf-8"/>
                <meta name="description" content="Standard business terms and more"/>
                <title>{itemInfo[0].info.title}</title>
            </Helmet>
            <ItemCatalogInside
                itemInfo={itemInfo[0]}
                addToFavourite={<AddToFavourite/>}
                addToCart={<AddToCart item={itemInfo[0]}/>}
            />
        </>
    )
}