import React from "react";
import ItemInfoBlock from "../../../5_entities/catalog-inside/item-info-block";
import Layout from "../../../3_widgets/general/Layout";
import OtherItems from "../../../5_entities/catalog-inside/other-items";

export const CatalogItemPage: React.FC = () => {
    return (
        <Layout className={'CatalogItemPage'} >
            <ItemInfoBlock/>
            <OtherItems/>
        </Layout>
    )
}