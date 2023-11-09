import React from "react";
import Layout from "../../../3_widgets/general/Layout";
import ItemsCart from "../../../5_entities/cart/items-cart-block";
import {Helmet} from "react-helmet";

export const CartPage: React.FC = () => {
    return (
        <Layout className={"CartPage"}>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Your cart is the closest way to receiving"/>
                <title>Cart</title>
            </Helmet>
            <ItemsCart/>
        </Layout>
    )
}