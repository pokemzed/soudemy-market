import React, {FC, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../../6_shared/store";
import {useGetAuthFirebase} from "../../../../6_shared/hooks/useGetAuthFirebase.ts";
import {updateProfile} from "firebase/auth";
import {TOAST_ERROR, TOAST_SUCCESS} from "../../../../6_shared/constants/toasts.ts";
import {logoutUser} from "../../../../6_shared/store/slices/authSlice.ts";
import {changeAboutProfile} from "../../../../6_shared/store/slices/profileSlice.ts";

export const ProfileSettings: FC = () => {
    const dispatch = useAppDispatch()
    const profile = useAppSelector(state => state.profile)
    const auth = useGetAuthFirebase()
    const [profileInfo, setProfileInfo] = useState({
        name: profile.displayName ? profile.displayName : '',
        image: profile.displayProfileImage
    })

    const changeProfile = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formProps = new FormData(e.target)
        const formData = Object.fromEntries(formProps)

        //Если стух токен и мы разлогинились
        if(!auth.currentUser){
            dispatch(logoutUser())
            return TOAST_ERROR('Ошибка аунтефикации пользавтеля')
        }

        updateProfile(auth.currentUser, formData)
            .then(() => {
                dispatch(changeAboutProfile(profileInfo))
                TOAST_SUCCESS('Вы успешно изменили данные')
                setProfileInfo({name: auth.currentUser?.displayName || '', image: auth.currentUser?.photoURL || ''})
            })
            .catch(err => TOAST_ERROR(err))
    }

    return (
        <div className={"ProfileSettings"}>
            <form onSubmit={changeProfile}>
                <input
                    type="text"
                    name={"displayName"}
                    placeholder={"Введите ваше имя (имя_фамилия)"}
                    value={profileInfo.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProfileInfo({...profileInfo, name: e.target.value})}
                />
                <input
                    type="text"
                    name={"photoURL"}
                    placeholder={"Вставьте ссылку на изображение"}
                    value={profileInfo.image}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProfileInfo({...profileInfo, image: e.target.value})}
                />
                <button type={"submit"}>Сохранить</button>
            </form>
        </div>
    )
}