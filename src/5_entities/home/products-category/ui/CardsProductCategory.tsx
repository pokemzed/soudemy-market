import React from "react";
import CardCategory from "../../../../4_features/home/ProductCategory";

export const CardsProductCategory: React.FC = () => {
    return (
        <div className={'CardsProductCategory'}>
            <CardCategory image={'/images/home/chairs.png'} title={'Stylish chairs'}
                          text={'Our chairs are designed to satisfy the most discerning tastes. They are available in various designs, from modern and minimalist to classic and retro.'}
                          imageLeft={true}/>
            <CardCategory animatedDirection={'animate__fadeInRight'} image={'/images/home/table.png'} title={'Table'}
                          text={'Our range of tables is presented in a variety of styles and sizes. From tables for cozy family dinners to spacious dining tables for guests, we have the perfect solution for every space.'}
                          imageLeft={false}/>
            <CardCategory image={'/images/home/lamps.png'} title={'Contemporary lamps'}
                          text={'Our lamps are designed to elevate your spaces at all times. They are available in various styles, from modern and minimalist to classic and vintage.'}
                          imageLeft={true}/>
        </div>
    )
}