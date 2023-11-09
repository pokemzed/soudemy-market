import React from "react";
import Layout from "../../../3_widgets/general/Layout";
import {Container} from "react-bootstrap";
import SortCatalog from "../../../5_entities/catalog/sort-catalog";
import ItemsCatalog from "../../../5_entities/catalog/items-block";
import ParamsCatalog from "../../../5_entities/catalog/params-catalog";
import {Helmet} from "react-helmet";

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