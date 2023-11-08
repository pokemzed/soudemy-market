import React from "react";
import {Container} from "react-bootstrap";
import CardsProduct from "../../../../5_entities/home/products-week";
import 'animate.css'
import {useInView} from 'react-intersection-observer'

export const ProductsWeek: React.FC = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
    })
    return (
        <div className={"ProductsWeek"}>
            <Container ref={ref} className={`main-block ${inView && 'animate__animated animate__fadeIn'}`}>
                <div className={'info-container'}>
                    <h2>Products of the week</h2>
                    <p>We are constantly searching for the most advantageous and intriguing offers for you. Every week,
                        we highlight several items from our range, giving you the opportunity to purchase them at
                        particularly attractive prices.</p>
                </div>
                <CardsProduct/>
            </Container>
        </div>
    )
}