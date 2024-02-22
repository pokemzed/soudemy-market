import React from "react";
import {useNavigate} from "react-router-dom";
import 'animate.css'
import {useInView} from 'react-intersection-observer'
import {useGetItemCatalogQuery} from "../../../../6_shared/api";
import {useAppDispatch} from "../../../../6_shared/store";
import {removeItemFavorite} from "../../../../6_shared/store/slices/favoriteGoods.ts";

export const FavoriteItem: React.FC<{ itemId: number }> = ({itemId}) => {
    const dispatch = useAppDispatch()
    const {data: item} = useGetItemCatalogQuery(itemId)
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
    })
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/catalog/${itemId}`)
    }

    const handleRemoveItem = () => {
        dispatch(removeItemFavorite(itemId))
    }

    return item && (
        <div ref={ref} className={`FavoriteItem ${inView && 'animate__animated animate__fadeIn'}`}>
            <div className="favorite-item_main" onClick={handleNavigate}>
                <img className={'image-item'} src={item[0].imgMain ? item[0].imgMain : '/images/catalog/skelet.png'}
                     alt={`image-${item[0].info.title.toLowerCase()}`}/>
                <div className={'favorite-item_info'}>
                    <h3>{item[0].info.title}</h3>
                    <span>$ {item[0].price}</span>
                </div>
            </div>
            <div className={`add-btn active-favorite`} onClick={handleRemoveItem}>
                <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.1864 23.75C14.1864 23.75 1.53015 16.7011 1.53015 8.24235C1.53015 -0.216404 11.3739 -0.921297 14.1864 5.69685C16.9989 -0.921297 26.8427 -0.216404 26.8427 8.24235C26.8427 16.7011 14.1864 23.75 14.1864 23.75Z"
                        stroke="red" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    )
}