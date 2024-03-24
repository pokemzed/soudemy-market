import React, {useLayoutEffect, useState} from "react";
import {Container} from "react-bootstrap";
import SectionsTab from "../../../../4_features/profile/SectionsTab";
import {EShowSection} from "../../../../6_shared/types/profile/profile.ts";
import ProfileAbout from "../../../../4_features/profile/ProfileAbout";
import {useNavigate} from "react-router-dom";
import {useUserAuth} from "../../../../6_shared/hooks/useUserAuth.ts";
import {TOAST_ERROR} from "../../../../6_shared/constants/toasts.ts";
import ProfileSettings from "../../../../4_features/profile/ProfileSettings";


export const ProfileSections: React.FC = () => {
    const {isAuth} = useUserAuth()
    const navigate = useNavigate()
    const [section, setSection] = useState(EShowSection.profile)

    useLayoutEffect(() => {
        if(!isAuth){
            navigate('/auth/login')
            TOAST_ERROR('Необходима авторизация!')
        }
    }, [isAuth, navigate])


    // TODO: доделать
    return (
        <Container className={"ProfileSections"}>
            <SectionsTab section={section} changeSection={(section) => setSection(section)}/>
            <main className={"section"}>
                {EShowSection.profile === section && <ProfileAbout/>}
                {EShowSection.settings === section && <ProfileSettings/>}
            </main>
        </Container>
    )
}