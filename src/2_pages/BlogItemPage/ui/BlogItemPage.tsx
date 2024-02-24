import React from "react";
import Layout from "../../../3_widgets/general/Layout";
import {Container} from "react-bootstrap";
import PostInfo from "../../../3_widgets/post/PostInfo";

export const BlogItemPage: React.FC = () => {
    return (
        <Layout className={"BlogItemPage"}>
            <Container className={"blog-item-container"}>
                <div className={"info"}>
                    <PostInfo/>
                </div>
                <div className={"filtration"}>

                </div>
            </Container>
        </Layout>
    )
}