import React from "react";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ELinks} from "../../../../6_shared/types/links.ts";

export const Footer: React.FC = () => {
    return (
        <div className={'Footer'}>
            <Container className={'main-block'}>
                <div className={'links-container'}>
                    <div className={'item-links'}>
                        <label>Navigation</label>
                        <Link to={ELinks.LINK_HOMEPAGE}>
                            Home
                        </Link>
                        <Link to={ELinks.LINK_CATALOGPAGE}>
                            Catalog
                        </Link>
                        <Link to={ELinks.LINK_ABOUTPAGE}>
                            About
                        </Link>
                        <Link to={ELinks.LINK_BLOGPAGE}>
                            Blog
                        </Link>
                    </div>
                    <div className={'item-links'}>
                        <label>Documentation</label>
                        <Link to={ELinks.LINK_TERMSPAGE}>
                            Terms and Conditions
                        </Link>
                        <Link to={ELinks.LINK_PRIVACYPAGE}>
                            Privacy Policy
                        </Link>
                    </div>
                    <div className={'item-links'}>
                        <label>Contacts for communication</label>
                        <div className={'links-social'}>
                            <Link to={'/'}>
                                <img src="/icons/icon-telegram.svg" alt="telegram-icon"/>
                                Telegram
                            </Link>
                            <Link to={'/'}>
                                <img src="/icons/icon-whatsapp.svg" alt="whatsapp-icon"/>
                                WhatsApp
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={'about-container'}>
                    <img src="/images/logo-light.svg" alt="logo-footer"/>
                    <p>I encourage my team to keep learning. Ideas in different topics or fields can often inspire new
                        ideas and broaden the potential solution space.</p>
                </div>
            </Container>
        </div>
    )
}