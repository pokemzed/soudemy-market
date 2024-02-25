import React, {useState} from "react";
import {useGetAllPostsForPaginationQuery} from "../../../../6_shared/api";
import {useAppDispatch, useAppSelector} from "../../../../6_shared/store";
import {changePage} from "../../../../6_shared/store/slices/initialPosts.ts";
import Pagination from "../../../../5_entities/components/Pagination";
import LoaderPage from "../../../../6_shared/ui/LoaderPage";

export const PaginationBlog: React.FC = () => {
    const [loader, setLoader] = useState<boolean>(false)

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
    if(loader){
        return <div>
            <LoaderPage/>
        </div>
    }

    const handleChangePage = (page: number) => {
        setLoader(true)
        setTimeout(() => {
            dispatch(changePage(page))
            setLoader(false)
        }, 250)
    }

    return <Pagination initialPage={initialBlogInfo.page} changePage={handleChangePage} countItems={limitPages} />
}