import React from "react";
import {useAppDispatch, useAppSelector} from "../../../../6_shared/store";
import {useGetBlogPostQuery} from "../../../../6_shared/api";
import {changePostId} from "../../../../6_shared/store/slices/blogPost.ts";
import {useNavigate} from "react-router-dom";

export const NavigationControllersPosts: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {postId: selectedPostId} = useAppSelector(state => state.blogPost)

    const {data: previousPost} = useGetBlogPostQuery(selectedPostId - 1)
    const {data: nextPost} = useGetBlogPostQuery(selectedPostId + 1)


    const handleNavigatePost = (postId: number, title: string) => {
        dispatch(changePostId(postId))
        navigate('/blog/' + title)
    }


    return (
        <div className={"NavigationControllersPosts"}>
            {previousPost && previousPost.length !== 0 && (
                <div onClick={() => handleNavigatePost(previousPost[0].id, previousPost[0].info.title)} className={"controller"}>
                    <img className={"previous-icon"} src="/icons/icon-arrow-dark.svg" alt="Иконка следующего поста"/>
                    <span>{previousPost[0].info.title}</span>
                </div>
            )}
            {nextPost && nextPost.length !== 0 && (
                <div onClick={() => handleNavigatePost(nextPost[0].id, nextPost[0].info.title)} className={"controller"}>
                    <span>{nextPost[0].info.title}</span>
                    <img src="/icons/icon-arrow-dark.svg" alt="Иконка следующего поста"/>
                </div>
            )}
        </div>
    )
}