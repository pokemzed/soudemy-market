import React from "react";
import {Container} from "react-bootstrap";
import 'animate.css'
import {useInView} from 'react-intersection-observer'

interface IPropsCardCategory {
    image: string,
    title: string,
    text: string,
    imageLeft: boolean,
    animatedDirection?: string
}

export const CardCategory: React.FC<IPropsCardCategory> = ({image, title, text, imageLeft, animatedDirection}) => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
        triggerOnce: true
    });
    return (
        <div ref={ref} className={`CardCategory ${inView && `animate__animated ${animatedDirection ? animatedDirection : 'animate__fadeInLeft'}`}`}>
            <Container className={'container-block'}>
                <div className={'info-block'}>
                    <h4>{title}</h4>
                    <p>{text}</p>
                </div>
                <img className={`image ${imageLeft ? 'order-left' : ''}`} src={image} alt="image-category"/>
            </Container>
        </div>
    )
}