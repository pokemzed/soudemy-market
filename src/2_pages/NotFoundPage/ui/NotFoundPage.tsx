import React from "react";
import Layout from "../../../3_widgets/general/Layout";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

export const NotFoundPage: React.FC = () => {
    return (
        <Layout className={"NotFoundPage"}>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Page not found"/>
                <title>Page not found</title>
            </Helmet>
            <Container className={"container-page"}>
                <img src="/icons/icon-notfoundpagesvg.svg" alt="icon-not-found"/>
                <div className={"text-container"}>
                    <h1>Page not found</h1>
                    <span>Go back to the <Link to={'/'}>home page</Link>?</span>
                </div>
            </Container>
        </Layout>
    )
}