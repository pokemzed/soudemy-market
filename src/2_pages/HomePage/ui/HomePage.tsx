import React from "react";
import Layout from "../../../3_widgets/general/Layout";
import MainScreen from "../../../3_widgets/home-page/MainScreen";
import ProductsWeek from "../../../3_widgets/home-page/ProductsWeek";
import FullScreenBlock from "../../../3_widgets/home-page/FullScreenBlock";
import CardsProductCategory from "../../../5_entities/home/products-category";
import DeliveryBlock from "../../../3_widgets/home-page/DeliveryBlock";
import NewsBlock from "../../../3_widgets/home-page/NewsBlock";
import {Helmet} from "react-helmet";

export const HomePage: React.FC = () => {
    return (
        <Layout className={"HomePage"} headerLight={true}>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Online furniture store and more"/>
                <title>Soudemy – a world where dreams come true</title>
            </Helmet>

            <MainScreen/>
            <ProductsWeek/>
            <FullScreenBlock/>
            <CardsProductCategory/>
            <DeliveryBlock/>
            <NewsBlock/>
        </Layout>
    )
}