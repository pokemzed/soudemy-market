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
import ProfilePage from "../../2_pages/ProfilePage";
import SignInPage from "../../2_pages/SignInPage";
import SignUpPage from "../../2_pages/SignUpPage";

interface IRoute {
    path: ELinks,
    element: ReactNode,
    title: string,
    metaName: string
}

export const ROUTES_LIST: IRoute[] = [
    {
        path: ELinks.LINK_HOMEPAGE,
        element: <HomePage/>,
        title: 'Soudemy – a world where dreams come true',
        metaName: 'Online furniture store and more'
    },
    {
        path: ELinks.LINK_ABOUTPAGE,
        element: <AboutPage/>,
        title: 'Soudemy – about us',
        metaName: 'Your Furniture Hypermarket for Home Perfection'
    },
    {
        path: ELinks.LINK_CATALOGPAGE,
        element: <CatalogPage/>,
        title: 'Catalog',
        metaName: 'Large selection of products in the soudemy online store'
    },
    {
        path: ELinks.LINK_CARTPAGE,
        element: <CartPage/>,
        title: 'Cart',
        metaName: 'Your cart is the closest way to receiving'
    },
    {
        path: ELinks.LINK_BLOGPAGE,
        element: <BlogPage/>,
        title: 'Blog',
        metaName: 'Lots of interesting news and life hacks from soudemy'
    },
    {
        path: ELinks.LINK_FAVORITEPAGE,
        element: <FavoritePage/>,
        title: 'Favorite',
        metaName: 'Add your favorite products to your favorites'
    },
    {
        path: ELinks.LINK_PROFILEPAGE,
        element: <ProfilePage/>,
        title: 'Profile',
        metaName: 'Your profile - your capabilities'
    },
    {
        path: ELinks.LINK_SIGNIN,
        element: <SignInPage/>,
        title: 'SignIn',
        metaName: 'SignIn page - login in your account'
    },
    {
        path: ELinks.LINK_SIGNUP,
        element: <SignUpPage/>,
        title: 'SignUp',
        metaName: 'SignUp page - register your account'
    },
    {
        path: ELinks.LINK_ANOTHER,
        element: <NotFoundPage/>,
        title: 'Page not found',
        metaName: 'Page not found'
    },
    {
        path: ELinks.LINK_ITEMCATALOGPAGE,
        element: <CatalogItemPage/>,
        title: '',
        metaName: ''
    },
    {
        path: ELinks.LINK_PRIVACYPAGE,
        element: <PrivacyPolicyPage/>,
        title: 'Page Privacy Policy',
        metaName: 'POLICY regarding the processing and security of personal data at Home Interior LLC'
    },
    {
        path: ELinks.LINK_TERMSPAGE,
        element: <TermsAndConditionsPage/>,
        title: 'Page Terms and Conditions',
        metaName: 'Standard business terms and more'
    }
]