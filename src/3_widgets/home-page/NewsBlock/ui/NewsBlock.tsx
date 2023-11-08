import React from "react";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useInView} from "react-intersection-observer";
import 'animate.css'

export const NewsBlock: React.FC = () => {
    const {ref, inView} = useInView({
        threshold: 0,
        triggerOnce: true
    })
    return (
        <div className={'NewsBlock'}>
            <Container ref={ref} className={`cards-container ${inView && 'animate__animated animate__fadeIn'}`}>
                <div className={'card-item'}>
                    <img src="/images/home/news-1.png" alt="icon card"/>
                    <div className={'card-item_info-container'}>
                        <label className={'info-date'}>29 sep,2022</label>
                        <h2>Your office should have only natural materials</h2>
                    </div>
                    <Link to='/'>
                        read more
                    </Link>
                </div>
                <div className={'card-item'}>
                    <img src="/images/home/news-2.png" alt="icon card"/>
                    <div className={'card-item_info-container'}>
                        <label className={'info-date'}>29 sep,2022</label>
                        <h2>Your office should have only natural materials</h2>
                    </div>
                    <Link to='/'>
                        read more
                    </Link>
                </div>
            </Container>
        </div>
    )
}