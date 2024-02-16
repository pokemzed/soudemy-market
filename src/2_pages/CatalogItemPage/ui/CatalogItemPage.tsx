import React from "react";
import Layout from "../../../3_widgets/general/Layout";
import ItemInfoBlock from "../../../3_widgets/product/ItemInfoBlock";
import OtherItems from "../../../3_widgets/product/OtherItems";

export const CatalogItemPage: React.FC = () => {
    return (
        <Layout className={'CatalogItemPage'} >
            <ItemInfoBlock/>
            <OtherItems/>
        </Layout>
    )
}