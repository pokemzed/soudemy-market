import React from "react";
import {ICartItem, IItem} from "../../../../6_shared/types/catalog/items.ts";
import {Container} from "react-bootstrap";
import 'animate.css'
import {useInView} from 'react-intersection-observer'


interface IPropsItemCatalog {
    itemInfo: IItem,
    checkFavorite: boolean,
    handleFavorite: () => void,
    itemInCart: ICartItem | undefined,
    handleAddItemCart: () => any,
    handleRemoveItemCart: () => any
}

export const ItemCatalogInside: React.FC<IPropsItemCatalog> = ({itemInfo, checkFavorite, handleFavorite, itemInCart,handleAddItemCart, handleRemoveItemCart}) => {
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
                        <button onClick={itemInCart ? handleRemoveItemCart : handleAddItemCart}
                                className={`btn-add-cart ${itemInCart && 'active-cart'}`}>
                            {itemInCart ? 'Item in cart. Delete?' : 'Add to cart'}
                        </button>
                        <div onClick={handleFavorite} className={`btn-favorite ${checkFavorite && 'active-favorite'}`}>
                            <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.1864 23.75C14.1864 23.75 1.53015 16.7011 1.53015 8.24235C1.53015 -0.216404 11.3739 -0.921297 14.1864 5.69685C16.9989 -0.921297 26.8427 -0.216404 26.8427 8.24235C26.8427 16.7011 14.1864 23.75 14.1864 23.75Z" stroke="#303030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}