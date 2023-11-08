import {useSelector} from "react-redux";

export const getInitialStateGoods = () => {
    const limit = useSelector((state: any) => state.goods.limitItems)
    const categoryItems = useSelector((state: any) => state.goods.category)
    const searchName = useSelector((state: any) => state.goods.search)
    return {
        limit,
        category: categoryItems,
        search: searchName,
    }
}