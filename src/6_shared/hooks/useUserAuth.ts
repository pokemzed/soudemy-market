import {useGetAuthFirebase} from "./useGetAuthFirebase.ts";
import {onAuthStateChanged} from "firebase/auth";
import {useAppDispatch, useAppSelector} from "../store";
import {loginUser, logoutUser} from "../store/slices/authSlice.ts";

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
        } else{
            dispatch(logoutUser())
        }
    })

    return {
        isAuth: userAuthData.isAuth,
        userUId: userAuthData.userUid,
        userInfo: userAuthData.userInfo,
        logoutUser: () => dispatch(logoutUser()),
        loginUser: (userInfo: {isAuth: boolean, userUId: string, userInfo: any}) => {
            dispatch(loginUser(userInfo))
        }
    }
}