import React from "react";
import {useParams} from "react-router-dom";
import {useGetItemCatalogQuery} from "../../../../6_shared/api";
import {addItemFavorite, deleteItemFavorite} from "../../../../6_shared/store/slices/favoriteGoods.ts";
import {ICartItem, IItem} from "../../../../6_shared/types/catalog/items.ts";
import ItemCatalogInside from "../../../../4_features/catalog-inside/ItemCatalog";
import {addItemCart, removeItemCart} from "../../../../6_shared/store/slices/cartSlice.ts";
import {Helmet} from "react-helmet";
import {useAppDispatch, useAppSelector} from "../../../../6_shared/store";

export const ItemInfoBlock: React.FC = () => {
    const dispatch = useAppDispatch()
    const {id: itemId} = useParams()
    //получение товаров корзины
    const {cartItems} = useAppSelector(state => state.cart)
    //проверка изранного
    const favoriteItems = useAppSelector(state => state.favorite.items)
    const inFavorite = Boolean(favoriteItems.find((item: IItem) => item.id == Number(itemId)))
    //данные товара
    const {data: itemInfo, isError: itemError} = useGetItemCatalogQuery(itemId)

    if(!itemInfo){
        return <h3>Загрузка</h3>
    }

    //логика кнопки корзины
    const itemInCart = cartItems.find((item: ICartItem) => item.id === Number(itemId))
    //Добавление в корзину
    const handleAddItemCart = (): void => {
        dispatch(addItemCart({id: itemInfo[0].id, price: itemInfo[0].price}))
    }
    //Удаление из корзины
    const handleRemoveItemCart = (): void => {
        dispatch(removeItemCart({id: itemInfo[0].id, price: itemInfo[0].price}))
    }


    //ручка удаления/добавления в избранное
    const handleFavorite = () => {
        if (inFavorite) {
            console.log('delete item')
            return dispatch(deleteItemFavorite(Number(itemId)))
        }
        dispatch(addItemFavorite(itemInfo ? itemInfo[0] : null))
    }


    //ошибка запроса
    if (itemError) {
        return <h3>Error item</h3>
    }

    return itemInfo && (
        <>
            <Helmet>
                <meta charSet="utf-8"/>
                <meta name="description" content="Standard business terms and more"/>
                <title>{itemInfo[0].info.title}</title>
            </Helmet>
            <ItemCatalogInside
                itemInfo={itemInfo[0]}
                handleFavorite={handleFavorite}
                checkFavorite={inFavorite}
                handleRemoveItemCart={handleRemoveItemCart}
                handleAddItemCart={handleAddItemCart}
                itemInCart={itemInCart}
            />
        </>
    )
}