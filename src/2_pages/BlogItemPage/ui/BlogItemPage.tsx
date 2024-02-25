import React from "react";
import Layout from "../../../3_widgets/general/Layout";
import {Container} from "react-bootstrap";
import PostInfo from "../../../3_widgets/post/PostInfo";
import NavigationControllersPosts from "../../../4_features/post/NavigationControllersPosts";

export const BlogItemPage: React.FC = () => {
    return (
        <Layout className={"BlogItemPage"}>
            <Container className={"blog-item-container"}>
                <PostInfo/>
                <NavigationControllersPosts/>
            </Container>
        </Layout>
    )
}