import {FC, useEffect} from "react";
import Layout from "../../../3_widgets/general/Layout";
import {Helmet} from "react-helmet";
import {useNavigate} from "react-router-dom";
import {TOAST_ERROR} from "../../../6_shared/constants/toasts.ts";
import ProfileSections from "../../../4_features/profile/ProfileSections";

export const ProfilePage: FC = () => {

    //Check auth user
    const navigate = useNavigate()
    const isAuth = false
    useEffect(() => {
        if(!isAuth){
            navigate('/auth/login')
            TOAST_ERROR('Необходима авторизация!')
        }
    }, [])

    return (
        <Layout className={"ProfilePage"}>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Your profile - your capabilities"/>
                <title>Profile</title>
            </Helmet>
            <ProfileSections/>
        </Layout>
    )
}