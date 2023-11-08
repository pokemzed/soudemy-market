import React from "react";
import Layout from "../../../3_widgets/general/Layout";
import MainScreen from "../../../3_widgets/home-page/MainScreen";
import ProductsWeek from "../../../3_widgets/home-page/ProductsWeek";
import FullScreenBlock from "../../../3_widgets/home-page/FullScreenBlock";
import CardsProductCategory from "../../../5_entities/home/products-category";
import DeliveryBlock from "../../../3_widgets/home-page/DeliveryBlock";
import NewsBlock from "../../../3_widgets/home-page/NewsBlock";
export const HomePage: React.FC = () => {
    return (
        <Layout className={"HomePage"} headerLight={true}>
            <MainScreen/>
            <ProductsWeek/>
            <FullScreenBlock/>
            <CardsProductCategory/>
            <DeliveryBlock/>
            <NewsBlock/>
        </Layout>
    )
}