import React from "react";
import {useAppSelector} from "../../../../6_shared/store";
import {useUserAuth} from "../../../../6_shared/hooks/useUserAuth.ts";

export const ProfileAbout: React.FC = () => {
    const profileInfo = useAppSelector(state => state.profile)
    const {logoutUser} = useUserAuth()

    //Проверка, если нет данных о профиле
    if(!profileInfo){
        logoutUser()
    }


    return (
        <div className={"ProfileAbout"}>
            <div className={"profile-info-card"}>
                <img src={profileInfo.displayProfileImage} alt=""/>
                <div className={"about"}>
                    <div className={"title"}>
                        <h1>
                            {!profileInfo.displayName && 'Имя не установлено'}
                            {profileInfo.displayName && profileInfo.displayName}
                        </h1>
                        <span>{profileInfo.displayId}</span>
                    </div>
                    <h3>
                        {!profileInfo.displayEmail && 'E-Mail не указан'}
                        {profileInfo.displayEmail && profileInfo.displayEmail}
                    </h3>
                </div>
            </div>
        </div>
    )
}