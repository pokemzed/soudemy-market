import React from "react";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ELinks} from "../../../../6_shared/types/links.ts";
import 'animate.css'

export const MainScreen: React.FC = () => {
    return (
        <div className={"MainScreen"}>
            <Container  className={"main-block animate__animated animate__fadeInDown"}>
                <div className="container-info">
                    <h1>All for your home</h1>
                    <p>
                        At Soudemy, we aim to make your home a place where every detail reflects your individuality and
                        embodies your dreams of comfort and style.</p>
                </div>
                <Link className={"animate__animated animate__fadeInDown"} to={ELinks.LINK_ABOUTPAGE}>
                    About company
                    <img src="/icons/icon-arrow-light.svg" alt="icon-btn"/>
                </Link>
            </Container>
        </div>
    )
}