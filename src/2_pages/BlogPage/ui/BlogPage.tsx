import React from "react";
import {Helmet} from "react-helmet";
import Layout from "../../../3_widgets/general/Layout";
import {useGetAllBlogPostsQuery} from "../../../6_shared/api";
import BlogItem from "../../../5_entities/blog/BlogItem";

export const BlogPage: React.FC = () => {
    const {data: blogPosts} = useGetAllBlogPostsQuery(null)
    return(
        <Layout className={"BlogPage"}>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Lots of interesting news and life hacks from soudemy"/>
                <title>Blog</title>
            </Helmet>

            {
                blogPosts?.map((post) => {
                    return (
                        <BlogItem postInfo={post} key={post.id}/>
                    )
                })
            }
        </Layout>
    )
}