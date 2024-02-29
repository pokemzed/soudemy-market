import React from "react";
import {useAppDispatch} from "../../../../6_shared/store";
import {logoutUser} from "../../../../6_shared/store/slices/authSlice.ts";
import {EShowSection} from "../../../../6_shared/types/profile/profile.ts";


export const SectionsTab: React.FC<{section: string, changeSection: (section: EShowSection) => void}> = ({section, changeSection}) => {
    const dispatch = useAppDispatch()
    const handleLogout = () => {
        dispatch(logoutUser())
    }
    return (
        <nav className={"SectionsTab"}>
            <button onClick={() => changeSection(EShowSection.profile)} disabled={section === EShowSection.profile}>
                {EShowSection.profile}
            </button>
            <button onClick={() => changeSection(EShowSection.history)} disabled={section === EShowSection.history}>
                {EShowSection.history}
            </button>
            <button onClick={() => changeSection(EShowSection.settings)} disabled={section === EShowSection.settings}>
                {EShowSection.settings}
            </button>
            <button onClick={handleLogout} disabled={section === EShowSection.logout}>
                {EShowSection.logout}
            </button>
        </nav>
    )
}