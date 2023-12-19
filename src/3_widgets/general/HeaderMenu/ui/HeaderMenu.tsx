import React from "react";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ELinks} from "../../../../6_shared/types/links.ts";

interface IPropsMenu {
    showMenu: boolean,
    setShowMenu: () => void
}

export const HeaderMenu: React.FC<IPropsMenu> = ({showMenu, setShowMenu}) => {
    const handleCloseMenu = () => {
        setShowMenu()
    }
    return (
        <div className={`HeaderMenu ${showMenu && 'active'}`}>
            <Container className={'header-menu_container'}>
                <div className={'header-menu_top'}>
                    <img src="/images/logo-dark.svg" alt="logo-menu"/>
                    <img onClick={handleCloseMenu} src="/icons/icon-close-menu.svg" alt="close-menu"/>
                </div>
                <nav className={`header-navigation`}>
                    <Link className={"profile-link"} to={ELinks.LINK_PROFILEPAGE}>
                        Profile
                    </Link>
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
            </Container>
        </div>
    )
}