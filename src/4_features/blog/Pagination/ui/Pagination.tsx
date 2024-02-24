import React from "react";
import {useGetAllPostsForPaginationQuery} from "../../../../6_shared/api";
import {useAppDispatch, useAppSelector} from "../../../../6_shared/store";
import {changePage} from "../../../../6_shared/store/slices/initialPosts.ts";

export const Pagination: React.FC = () => {
    const dispatch = useAppDispatch()
    //Получаем товары
    const initialBlogInfo = useAppSelector(state => state.posts)
    const {data: items} = useGetAllPostsForPaginationQuery({
        category: initialBlogInfo.category,
        search: initialBlogInfo.search
    })
    const itemsCount = items && items.length || 0

    //Обрабатываем ошибку, если не смогли получить товары
    if(itemsCount === 0 || itemsCount === 1){
        return
    }
    //Находим последнюю страницу и обрабатываем ошибку, если всего одна страница
    const limitPages = Math.ceil(itemsCount / initialBlogInfo.limitOrder)
    if(limitPages === 1){
        return
    }

    const handleChangePage = (page: number) => {
        dispatch(changePage(page))
    }

    return (
        <div className={"PaginationBlog"}>
            {[...Array(limitPages)].map((_, index) => (
                <div
                    key={index}
                    className={index + 1 === initialBlogInfo.page ? 'active-page': ''}
                    onClick={() => handleChangePage(index + 1)}
                >
                    {index + 1}
                </div>
            ))}
        </div>
    )
}