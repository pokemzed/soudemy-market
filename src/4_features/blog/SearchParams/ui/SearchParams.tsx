import React, {useEffect, useState} from "react";
import {useAppDispatch} from "../../../../6_shared/store";
import {changeSearch} from "../../../../6_shared/store/slices/initialPosts.ts";

export const SearchParams: React.FC = () => {
    const dispatch = useAppDispatch()
    const [search, setSearch] = useState<string>('')

    useEffect(() => {
        dispatch(changeSearch(search))
    }, [search, dispatch]);

    return (
        <input
            className={"SearchParamsBlog"}
            type="text"
            placeholder={'Введите запрос'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
        />
    )
}