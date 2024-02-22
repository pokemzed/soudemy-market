import React from "react";
import {useAppDispatch, useAppSelector} from "../../../../6_shared/store";
import {useParams} from "react-router-dom";
import {
    addItemFavorite,
    removeItemFavorite
} from "../../../../6_shared/store/slices/favoriteGoods.ts";

export const AddToFavourite: React.FC = () => {
    const dispatch = useAppDispatch()
    const {id: itemId} = useParams()
    //проверка изранного
    const favoriteItems = useAppSelector(state => state.favorite.items)
    const itemInFavourite = !!favoriteItems.find((item: number) => item === Number(itemId))

    const handleFavourite = () => {
        if (itemInFavourite) {
            console.log('delete item')
            return dispatch(removeItemFavorite(Number(itemId)))
        }
        dispatch(addItemFavorite(Number(itemId)))
    }

    return (
        <div onClick={handleFavourite} className={`AddToFavouriteButton ${itemInFavourite && 'active-favorite'}`}>
            <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.1864 23.75C14.1864 23.75 1.53015 16.7011 1.53015 8.24235C1.53015 -0.216404 11.3739 -0.921297 14.1864 5.69685C16.9989 -0.921297 26.8427 -0.216404 26.8427 8.24235C26.8427 16.7011 14.1864 23.75 14.1864 23.75Z"
                    stroke="#303030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    )
}