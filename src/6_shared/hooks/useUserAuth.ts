import {useGetAuthFirebase} from "./useGetAuthFirebase.ts";
import {onAuthStateChanged} from "firebase/auth";
import {useAppDispatch, useAppSelector} from "../store";
import {loginUser, logoutUser} from "../store/slices/authSlice.ts";
import {setProfile} from "../store/slices/profileSlice.ts";
import {UserInfo} from "@firebase/auth-types"

export const useUserAuth = () => {
    const dispatch = useAppDispatch()
    const userAuthData = useAppSelector(state => state.auth)
    const auth = useGetAuthFirebase()

    onAuthStateChanged(auth, (user) => {
        if(user && !userAuthData.userLogout){
            dispatch(loginUser({
                    isAuth: true,
                    userUId: user.uid,
                    userInfo: user
                }))
            dispatch(setProfile({
                displayName: user.displayName,
                displayEmail: user.email,
                displayId: user.uid,
                displayProfileImage: user.photoURL ? user.photoURL : '/images/profile/profile-skeleton.png'
            }))
        } else{
            dispatch(logoutUser())
        }
    })

    return {
        isAuth: userAuthData.isAuth,
        userUId: userAuthData.userUid,
        userInfo: userAuthData.userInfo,
        logoutUser: () => dispatch(logoutUser()),
        loginUser: (userInfo: {isAuth: boolean, userUId: string, userInfo: UserInfo}) => {
            dispatch(loginUser(userInfo))
        }
    }
}