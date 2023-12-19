import React from "react";
import Layout from "../../../3_widgets/general/Layout";
import FirstInfoModule from "../../../3_widgets/about-page/FirstInfoModule";
import {Helmet} from "react-helmet";

export const AboutPage: React.FC = () => {
    return (
        <Layout className={"AboutPage"}>
            <Helmet>
                <meta charSet="utf-8"/>
                <meta name="description" content="Your Furniture Hypermarket for Home Perfection"/>
                <title>Soudemy – about us</title>
            </Helmet>
            <FirstInfoModule/>
        </Layout>
    )
}