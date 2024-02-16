import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {changeCategory, changeSearch} from "../../../../6_shared/store/slices/initialGoods.ts";
import {useAppSelector} from "../../../../6_shared/store";
import {Form} from "react-bootstrap";

export const ParamsCatalog: React.FC = () => {
    const dispatch = useDispatch()
    const categories = useAppSelector((state) => state.categories)

    const [category, setCategory] = React.useState<string>('')
    const [search, setSearch] = React.useState<string>('')

    useEffect(() => {
        dispatch(changeCategory(category))
        dispatch(changeSearch(search))
    }, [category, search])

    return (
        <div className={"ParamsCatalog"}>
            <input type="text" placeholder={'Search...'} value={search}
                   onInput={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}/>
            <div className={'params-block'}>
                <h2>Category</h2>
                <ul>
                    {
                        categories.map((categoryItem: { categoryName: string, value: string }, index: number) => {
                            return (
                                <li key={index} className={`${category === categoryItem.value ? 'active' : ''}`}
                                    onClick={() => setCategory(categoryItem.value)}>{categoryItem.categoryName}</li>
                            )
                        })
                    }
                </ul>
                <Form.Select onChange={(category) => setCategory(category.currentTarget.value)} defaultValue={0} className={"select"}>
                    {
                        categories.map((categoryItem: { categoryName: string, value: string }, index: number) => {
                            return (
                                <option value={categoryItem.value} key={index} className={`${category === categoryItem.value ? 'active' : ''}`}
                                    onClick={() => setCategory(categoryItem.value)}>{categoryItem.categoryName}</option>
                            )
                        })
                    }
                </Form.Select>
            </div>
        </div>
    )
}