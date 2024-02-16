import React, {ReactNode} from "react";
import {IItem} from "../../../../6_shared/types/catalog/items.ts";
import {Container} from "react-bootstrap";
import 'animate.css'
import {useInView} from 'react-intersection-observer'


interface IPropsItemCatalog {
    itemInfo: IItem,
    addToCart: ReactNode,
    addToFavourite: ReactNode
}

export const ItemCatalogInside: React.FC<IPropsItemCatalog> = ({itemInfo, addToCart, addToFavourite}) => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
    })

    return (
        <div className={"ItemCatalog"}>
            <Container className={'container-item'}>
                <img ref={ref} className={`${inView && 'animate__animated animate__fadeInLeft'}`} src={itemInfo.imgMain} alt="main-image-item"/>
                <div ref={ref} className={`about-item ${inView && 'animate__animated animate__fadeInRight'}`}>
                    <div className={"info-item"}>
                        <div className={"item-text"}>
                            <h2>{itemInfo.info.title}</h2>
                            <p>{itemInfo.info.text}</p>
                        </div>
                        <span>{itemInfo.price}₽</span>
                    </div>
                    <div className={"btn-controllers"}>
                        {addToCart}
                        {addToFavourite}
                    </div>
                </div>
            </Container>
        </div>
    )
}