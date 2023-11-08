import React from "react";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ELinks} from "../../../../6_shared/types/links.ts";
import HeaderMenu from "../../HeaderMenu";

interface IHeaderProps {
    headerLight?: boolean
}

export const Header: React.FC<IHeaderProps> = ({headerLight}) => {
    const [showMenu, setShowMenu] = React.useState<boolean>(false)
    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <>
            <div className={"Header"}>
                <Container className={'main-container'}>
                    <div className={"container-left"}>
                        <Link to={ELinks.LINK_HOMEPAGE}>
                            <img src={headerLight ? '/images/logo-light.svg' : '/images/logo-dark.svg'} alt="logo"/>
                        </Link>
                        <nav className={`header-navigation ${headerLight && 'header-light'}`}>
                            <Link to={ELinks.LINK_CATALOGPAGE}>
                                Catalog
                            </Link>
                            <Link to={ELinks.LINK_ABOUTPAGE}>
                                About us
                            </Link>
                            <Link to={ELinks.LINK_BLOGPAGE}>
                                Blog
                            </Link>
                        </nav>
                    </div>
                    <div className={"container-right"}>
                        <Link to={ELinks.LINK_FAVORITEPAGE}>
                            <img
                                src={`${headerLight ? '/icons/icon-favorite-light.svg' : '/icons/icon-favorite-dark.svg'}`}
                                alt='icon-favorite'
                            />
                        </Link>
                        <Link to={ELinks.LINK_CARTPAGE}>
                            <img src={`${headerLight ? '/icons/icon-cart-light.svg' : '/icons/icon-cart-dark.svg'}`}
                                 alt="icon-cart"/>
                        </Link>
                        <a className={'header-menu'} onClick={handleShowMenu}>
                            <img src={`${headerLight ? '/icons/icon-menu-light.svg' : '/icons/icon-menu-dark.svg'}`}
                                 alt="icon-menu"/>
                        </a>
                    </div>
                </Container>
            </div>
            <HeaderMenu showMenu={showMenu} setShowMenu={() => setShowMenu(false)}/>
        </>

    )
}