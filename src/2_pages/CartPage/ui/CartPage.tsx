import React from "react";
import Layout from "../../../3_widgets/general/Layout";
import ItemsCart from "../../../5_entities/cart/items-cart-block";

export const CartPage: React.FC = () => {
    return (
        <Layout className={"CartPage"}>
            <ItemsCart/>
        </Layout>
    )
}