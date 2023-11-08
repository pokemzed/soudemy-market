import React from "react";
import ProductWeek from "../../../../4_features/home/ProductWeek";

export const CardsProduct: React.FC = () => {
    return (
        <div className={'CardsProduct cards-container'}>
            <ProductWeek image={'/images/home/products/item-1.png'} name={'Lamp'} price={223.00} id={1}/>
            <ProductWeek image={'/images/home/products/item-2.png'} name={'Pot'} price={223.00} id={2}/>
            <ProductWeek image={'/images/home/products/item-3.png'} name={'Chaire'} price={223.00} id={3}/>
        </div>
    )
}