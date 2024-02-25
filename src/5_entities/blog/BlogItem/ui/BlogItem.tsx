import React from "react";
import {IBlogPost} from "../../../../6_shared/types/blog.ts";
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../../6_shared/store";
import {changePostId} from "../../../../6_shared/store/slices/blogPost.ts";
import {useScrollTop} from "../../../../6_shared/hooks/useScrollTop.tsx";

interface IBlogItem {
    item: IBlogPost
}

export const BlogItem: React.FC<IBlogItem> = ({item}) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    //После обновления списка - скролл к верху
    useScrollTop()

    const handleNavigate = () => {
        dispatch(changePostId(item.id))
        navigate(item.info.title)
    }
    return (
        <div onClick={handleNavigate} className={'BlogItem'}>
            <img src={item.imgCard} alt={`Image: ${item.info.title}`}/>
            <div className={"stats-container"}>
                <h4>{item.date}</h4>
                <div className={'separator'}></div>
                <h4>{item.tags.join(', ')}</h4>
            </div>
            <div className={'info-container'}>
                <h2>{item.info.title}</h2>
                <p>{item.info.text}</p>
                <Link to={item.info.title.toLowerCase()}>Read more</Link>
            </div>
        </div>
    )
}