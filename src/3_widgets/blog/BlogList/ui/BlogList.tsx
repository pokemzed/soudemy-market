import React from "react";
import {useGetAllBlogPostsQuery} from "../../../../6_shared/api";
import BlogItem from "../../../../5_entities/blog/BlogItem";

export const BlogList: React.FC = () => {
    const {data: blogList} = useGetAllBlogPostsQuery('')

    if(!blogList){
        return <h3>Loading</h3>
    }

    return (
        <div className={"BlogList"}>
            {blogList.map(post => <BlogItem key={post.id} item={post}/>)}
        </div>
    )
}