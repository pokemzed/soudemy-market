import React from "react";
import Layout from "../../../3_widgets/general/Layout";
import ItemsFavorite from "../../../5_entities/favorite/items-favorite";
import {Helmet} from "react-helmet";

export const FavoritePage: React.FC = () => {
    return (
       <Layout className={"FavoritePage"} >
           <Helmet>
               <meta charSet="utf-8" />
               <meta name="description" content="Add your favorite products to your favorites"/>
               <title>Favorite</title>
           </Helmet>
            <ItemsFavorite/>
       </Layout>
    )
}