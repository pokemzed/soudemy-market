import {FC, useState} from "react";
import {useNavigate} from "react-router-dom";
import {TOAST_SUCCESS} from "../../../../6_shared/constants/toasts.ts";
import {Container} from "react-bootstrap";
import ProfileHistory from "../../ProfileHistory";
import ProfileSettings from "../../ProfileSettings";

const enum EShowSection {
    history = 'History orders',
    settings = 'Settings',
    logout = 'Log out'
}

export const ProfileSections: FC = () => {
    // const dispatch
    const navigate = useNavigate()
    const [section, setSection] = useState(EShowSection.history)
    const handleLogout = () => {
        // dispatch(logoutProfile)
        TOAST_SUCCESS('You have successfully logged out of your account!')
        navigate('/')
    }
    return (
        <Container className={"ProfileSections"}>
            <header className={"navigation"}>
                <button onClick={() => setSection(EShowSection.history)} disabled={section === EShowSection.history}>
                    {EShowSection.history}
                </button>
                <button onClick={() => setSection(EShowSection.settings)} disabled={section === EShowSection.settings}>
                    {EShowSection.settings}
                </button>
                <button onClick={handleLogout} disabled={section === EShowSection.logout}>
                    {EShowSection.logout}
                </button>
            </header>
            <main className={"content"}>
                {section === EShowSection.history && <ProfileHistory/>}
                {section === EShowSection.settings && <ProfileSettings/>}
            </main>
        </Container>
    )
}