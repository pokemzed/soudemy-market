import React from "react";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ELinks} from "../../../../6_shared/types/links.ts";
import 'animate.css'
import {useInView} from 'react-intersection-observer'

export const DeliveryBlock: React.FC = () => {
    const {ref, inView} = useInView({
        threshold: 0,
        triggerOnce: true
    })
    return (
        <div className={'DeliveryBlock'}>
            <Container className={'container-block'}>
                <h2>Order now for an express delivery in 24h !</h2>
                <Link to={ELinks.LINK_CATALOGPAGE}>
                    Read more
                </Link>
            </Container>
            <img ref={ref} className={`${inView && 'animate__animated animate__fadeInLeft'}`} src="/icons/icon-delivery.svg" alt="Car delivery"/>
        </div>
    )
}