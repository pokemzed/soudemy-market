import React from "react";
import Layout from "../../../3_widgets/general/Layout";
import FirstInfoModule from "../../../3_widgets/about-page/FirstInfoModule";
export const AboutPage: React.FC = () => {
    return (
        <Layout className={"AboutPage"} >
            <FirstInfoModule/>
        </Layout>
    )
}