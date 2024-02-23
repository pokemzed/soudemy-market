import React, {useEffect, useState} from "react";
import {categoryBlogList} from "../../../../6_shared/constants/categoryBlogList.ts";
import {useAppDispatch} from "../../../../6_shared/store";
import {changeCategory} from "../../../../6_shared/store/slices/initialPosts.ts";

export const CategoryParams: React.FC = () => {
    const dispatch = useAppDispatch()
    const [category, setCategory] = useState<string>('')

    useEffect(() => {
        dispatch(changeCategory(category))
    }, [category, dispatch]);

    return (
        <div className={"CategoryParams"}>
            <h2>Category</h2>
            <ul>
                {
                    categoryBlogList.map((categoryItem: { category: string, value: string }, index) => {
                        return (
                            <li key={index} className={`${category === categoryItem.value ? 'active' : ''}`}
                                onClick={() => setCategory(categoryItem.value)}>{categoryItem.category}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}