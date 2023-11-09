import React from "react";
import {Helmet} from "react-helmet";

export const BlogPage: React.FC = () => {
    return(
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Lots of interesting news and life hacks from soudemy"/>
                <title>Blog</title>
            </Helmet>
            Blog
        </div>
    )
}