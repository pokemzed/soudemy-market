import {ReactNode} from "react";
import {ELinks} from "../types/links.ts";
import HomePage from "../../2_pages/HomePage";
import AboutPage from "../../2_pages/AboutPage";
import CatalogPage from "../../2_pages/CatalogPage";
import CartPage from "../../2_pages/CartPage";
import BlogPage from "../../2_pages/BlogPage";
import FavoritePage from "../../2_pages/FavoritePage";
import NotFoundPage from "../../2_pages/NotFoundPage";
import CatalogItemPage from "../../2_pages/CatalogItemPage";
import PrivacyPolicyPage from "../../2_pages/PrivacyPolicyPage";
import TermsAndConditionsPage from "../../2_pages/TermsAndConditionsPage";

interface IRoute {
    path: ELinks,
    element: ReactNode
}

export const ROUTES_LIST: IRoute[] = [
    {
        path: ELinks.LINK_HOMEPAGE,
        element: <HomePage/>
    },
    {
        path: ELinks.LINK_ABOUTPAGE,
        element: <AboutPage/>
    },
    {
        path: ELinks.LINK_CATALOGPAGE,
        element: <CatalogPage/>
    },
    {
        path: ELinks.LINK_CARTPAGE,
        element: <CartPage/>
    },
    {
        path: ELinks.LINK_BLOGPAGE,
        element: <BlogPage/>
    },
    {
        path: ELinks.LINK_FAVORITEPAGE,
        element: <FavoritePage/>
    },
    {
        path: ELinks.LINK_ANOTHER,
        element: <NotFoundPage/>
    },
    {
        path: ELinks.LINK_ITEMCATALOGPAGE,
        element: <CatalogItemPage/>
    },
    {
        path: ELinks.LINK_PRIVACYPAGE,
        element: <PrivacyPolicyPage/>
    },
    {
        path: ELinks.LINK_TERMSPAGE,
        element: <TermsAndConditionsPage/>
    }
]