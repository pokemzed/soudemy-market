import React from "react";
import {IBlogPost} from "../../../../6_shared/types/blog.ts";

interface IBlogItem {
    postInfo: IBlogPost
}

export const BlogItem: React.FC<IBlogItem> = ({postInfo}) => {
    return (
        <div className={"BlogItem"}>
            <img src={postInfo.imgCard} alt={`${postInfo.info.title}-image`}/>
            <div className={"post-statistics"}>
                <h2 className={"post-statistics__date"}>{postInfo.date}</h2>
                <h2 className={"post-statistics__tags"}>{postInfo.tags.join(', ')}</h2>
            </div>
            <div className={"post-info"}>
                <h2 className={"post-info__title"}>{postInfo.info.title}</h2>
                <p className={"post-info__text"}>{postInfo.info.text}</p>
            </div>
        </div>
    )
}