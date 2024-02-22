import React from "react";
import {Helmet} from "react-helmet";
import Layout from "../../../3_widgets/general/Layout";
import BlogList from "../../../3_widgets/blog/BlogList";
import {Container} from "react-bootstrap";
import ParamsBlog from "../../../4_features/blog/ParamsBlog";

export const BlogPage: React.FC = () => {
    return(
        <Layout className={"BlogPage"}>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Lots of interesting news and life hacks from soudemy"/>
                <title>Blog</title>
            </Helmet>
            <Container className={"content-container"}>
                <div className={"posts"}>
                    <BlogList/>
                </div>
                <div className={"filtration"}>
                    <ParamsBlog/>
                </div>
            </Container>
        </Layout>
    )
}