import React from "react";
import {useGetAllBlogPostsQuery} from "../../../../6_shared/api";
import BlogItem from "../../../../5_entities/blog/BlogItem";
import {useAppSelector} from "../../../../6_shared/store";
import LoaderPage from "../../../../6_shared/ui/LoaderPage";

export const BlogList: React.FC = () => {
    const initial = useAppSelector(state => state.posts)
    const {data: blogList, isLoading, isError} = useGetAllBlogPostsQuery(initial)

    if(isLoading){
        return <LoaderPage/>
    }

    if(isError){
        return <span>Ошибка получения данных. Попробуйте позже.</span>
    }

    return blogList && (
        <div className={"BlogList"}>
            {!blogList.length && <div className={"empty-list"}>
                <span>По данным параметрам ничего не найдено :(</span>
            </div>}
            {blogList.map(post => <BlogItem key={post.id} item={post}/>)}
        </div>
    )
}