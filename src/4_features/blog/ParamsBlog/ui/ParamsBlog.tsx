import React, {useEffect, useState} from "react";
import {categoryBlogList} from "../modal/categoryList.ts";
import {useAppDispatch, useAppSelector} from "../../../../6_shared/store";
import {changeCategory, changeSearch} from "../../../../6_shared/store/slices/initialPosts.ts";

export const ParamsBlog: React.FC = () => {
    const initial = useAppSelector(state => state.posts)
    console.log(initial)

    const dispatch = useAppDispatch()
    const [search, setSearch] = useState<string>('')
    const [category, setCategory] = useState<string>('')

    useEffect(() => {
        dispatch(changeCategory(category))
        dispatch(changeSearch(search))
    }, [search, category]);

    return (
        <div className={"ParamsBlog"}>
            <input placeholder={'Введите ваш запрос'} type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}/>
            <div className={"category"}>
                <h2>Category</h2>
                <ul>
                    {
                        categoryBlogList.map((categoryItem: {category: string, value: string}, index) => {
                            return (
                                <li key={index} className={`${category === categoryItem.value ? 'active' : ''}`}
                                    onClick={() => setCategory(categoryItem.value)}>{categoryItem.category}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}