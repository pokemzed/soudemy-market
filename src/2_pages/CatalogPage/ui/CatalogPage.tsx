import React from "react";
import Layout from "../../../3_widgets/general/Layout";
import {Container} from "react-bootstrap";
import SortCatalog from "../../../4_features/catalog/sort-catalog";
import ParamsCatalog from "../../../4_features/catalog/params-catalog";
import {Helmet} from "react-helmet";
import ItemsCatalog from "../../../3_widgets/catalog/ItemsCatalog";

export const CatalogPage: React.FC = () => {
    return (
        <Layout className={"CatalogPage"}>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Large selection of products in the soudemy online store"/>
                <title>Catalog</title>
            </Helmet>
            <Container className={"catalog-layout-container"}>
                <SortCatalog/>
                <ItemsCatalog/>
                <ParamsCatalog/>
            </Container>
        </Layout>
    )
}