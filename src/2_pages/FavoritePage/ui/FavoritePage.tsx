import React from "react";
import Layout from "../../../3_widgets/general/Layout";
import ItemsFavorite from "../../../5_entities/favorite/items-favorite";

export const FavoritePage: React.FC = () => {
    return (
       <Layout className={"FavoritePage"} >
            <ItemsFavorite/>
       </Layout>
    )
}