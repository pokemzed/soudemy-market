import React from "react";
import {IItem} from "../../../../6_shared/types/catalog/items.ts";
import {useNavigate} from "react-router-dom";
import 'animate.css'
import {useInView} from 'react-intersection-observer'
import {changeCategory} from "../../../../6_shared/store/slices/initialGoods.ts";
import {useAppDispatch} from "../../../../6_shared/store";

interface IPropItem {
    item: IItem,
}

export const CatalogItem: React.FC<IPropItem> = ({item}) => {
    const dispatch = useAppDispatch()
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
    })
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/catalog/${item.id}`)
        dispatch(changeCategory(item.category))
    }

    return (
        <div ref={ref} className={`CatalogItem ${inView && 'animate__animated animate__fadeIn'}`} onClick={handleNavigate}>
            <img className={'image-item'} src={item.imgMain ? item.imgMain : '/images/catalog/skelet.png'}
                 alt={`image-${item.info.title.toLowerCase()}`}/>
            <div className={'catalog-item_info'}>
                <h3>{item.info.title}</h3>
                <span>$ {item.price}</span>
            </div>
        </div>
    )
}