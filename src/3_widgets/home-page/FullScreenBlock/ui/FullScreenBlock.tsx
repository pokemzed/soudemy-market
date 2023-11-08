import React from "react";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ELinks} from "../../../../6_shared/types/links.ts";

export const FullScreenBlock: React.FunctionComponent = () => {
    return (
        <div className={'FullScreenBlock'}>
            <Container className={'container-block'}>
                <p>
                    At Soudemy, you will find a wide range of furniture, starting from cozy sofas and living room
                    tables, and ending with elegant beds and bedroom accessories. Our team of design experts is always
                    ready to assist you in creating an interior that emphasizes your uniqueness and the comfort of your
                    home.
                </p>
                <Link to={ELinks.LINK_ABOUTPAGE}>
                    View more
                    <img src="/icons/icon-arrow-light.svg" alt="icon-btn"/>
                </Link>
            </Container>
        </div>
    )
}